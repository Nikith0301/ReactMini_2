import React, { useState ,useEffect} from "react";
import "./LoadMore.css";
export default function LoadMore() {
  const [imgArr, setImgArr] = useState([
    "https://picsum.photos/id/0/5000/3333",
    "https://picsum.photos/id/1/5000/3333",
    "https://picsum.photos/id/2/5000/3333",
    "https://picsum.photos/id/3/5000/3333",
    "https://picsum.photos/id/4/5000/3333",
    "https://picsum.photos/id/10/2500/1667",
    "https://picsum.photos/id/11/2500/1667",
    "https://picsum.photos/id/12/2500/1667",
    "https://picsum.photos/id/13/2500/1667",
    "https://picsum.photos/id/14/2500/1667",
  ]);

  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
const[products,setProducts]=useState([]);
const[able,setdisable]=useState(false);



  useEffect(() => {
    if (products && products.length > 50) setdisable(true);
  }, [products]);


  async function handleClick() {
try{
    setLoading(true);
    let response = await fetch(
      `https://dummyjson.com/products?limit=20&skip=${
        count === 0 ? 0 : count * 20
      }`
    );
    const result = await response.json();


result.products.map( (p)=>(
    setImgArr((imgArr)=> [...imgArr,p.thumbnail])
   
) )

if (result && result.products && result.products.length) {
    setProducts((prevData) => [...prevData, ...result.products]);
    setLoading(false);
    setCount(count+1)
  }

  console.log(imgArr);

}
  
catch(e){
    console.log(e);
    setLoading(false);
}

  }
  return (
    <>
      <div className="load-more-container">
        <div className="product-container">
          {imgArr.map((i, idx) => (
            <div className="product">
              <img src={i} />
            </div>
          ))}

        </div>
        <button disabled={able} onClick={handleClick}>Load More</button>
        {able ? <p>You have reached to 100 products</p> : null}
      </div>
    </>
  );
}
