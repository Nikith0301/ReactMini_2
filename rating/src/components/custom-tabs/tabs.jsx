import React, { useState } from "react";
import './tabs.css';

export default function Tabs({ tabsContent,onChange }) {

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(getCurrentIndex) {
      setCurrentTabIndex(getCurrentIndex);
    //   onChange(getCurrentIndex);
    }


  return (
    <>
      <div className="wrapper">
        <div className="heading">
          {tabsContent.map((tab, index) => (
            <div
              className={`tab-item ${
                currentTabIndex === index ? "active" : ""
              }`}
              onClick={() => handleOnClick(index)}
              key={tab.label}
            >
              {" "}
              {tab.label}
            </div>
          ))}
        </div>

        <div className="content" style={{ color: "red" }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
      </div>
    </>
  );
}
