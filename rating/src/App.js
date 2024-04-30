import { useState } from "react";
import StarRating from "./components/StarRating";

import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMore from "./components/load-more/LoadMore.js";
import TreeView from "./components/tree-view/TreeView.js";

import menus from "./components/tree-view/data";
import QrCode from "./components/qr-code-gen/QrCode.js";
import ScrollIndicator from "./components/scroll-indicator/index.js";
import TabTest from "./components/custom-tabs/tab-test.jsx";
import GitProfile from "./components/github-profile-finder/GitProfile.jsx";

export default function App() {
 
  

  return (
  
   <> 
   {/* <StarRating  stars={7}/> */}
   {/* <ImageSlider url={"https://picsum.photos/v2/list"}   /> */}
   {/* <LoadMore/> */}
   {/* <TreeView menus={menus}/> */}
   {/* <QrCode/> */}
   {/* <ScrollIndicator  url={"https://dummyjson.com/products?limit=50"} /> */}
   {/* <TabTest/> */}
   <GitProfile/>
   </>);
}