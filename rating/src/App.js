import { useState } from "react";
import StarRating from "./components/StarRating";

import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMore from "./components/load-more/LoadMore.js";
import TreeView from "./components/tree-view/TreeView.js";

import menus from "./components/tree-view/data";
export default function App() {
 
  

  return (
  
   <> 
   {/* <StarRating  stars={7}/> */}
   {/* <ImageSlider url={"https://picsum.photos/v2/list"}   /> */}
   {/* <LoadMore/> */}
   <TreeView menus={menus}/>
   </>);
}