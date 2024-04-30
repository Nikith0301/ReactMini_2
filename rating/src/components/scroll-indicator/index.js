import React, { useState, useEffect } from "react";
import './styles.css'
export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchData(getUrl) {
    try {
      setLoading(true);
      let response = await fetch(getUrl);
      let data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
        console.log(data.products);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const [scrollPercentage, setScrollPercentage] = useState();

  // document.documentElement.scrollHeight: This property represents the entire height of the web page content, including the part that is hidden outside the viewport (the visible area of the browser window). It essentially reflects the total height of the document if you could stretch it vertically to show everything at once.

  // document.documentElement.scrollTop: This property indicates how many pixels the content has been scrolled vertically. A value of 0 means no scrolling has occurred, and the top of the content is visible. Positive values represent scrolling downwards, revealing content that was previously hidden above the viewport.

  // document.documentElement.clientHeight: This property represents the viewport height,  the height of the visible area of the browser window excluding the scrollbars. It essentially reflects how much content can be seen on the screen without scrolling.
  // *********************************
  // Here's an analogy: Imagine a long document printed on a roll of paper. The scrollHeight would be the entire length of the paper, while the clientHeight would be the height of the window you're using to view the paper. The scrollTop would be how much paper you've rolled upwards, revealing more content at the top

  function handleScrollPercentage() {
    console.log(
      // document.body.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.scrollTop,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    fetchData(url);
    console.log("fetching");
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data-container">
        {data && data.length > 0 ? data.map((itm) => <p>{itm.title}</p>) : null}
   
      </div>
    </>
  );
}
