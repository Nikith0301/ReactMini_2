import { useState } from "react";
import StarRating from "./components/StarRating";

import ImageSlider from "./components/image-slider/ImageSlider";

export default function App() {
 
  

  return (
  
   <> 
   {/* <StarRating  stars={7}/> */}
   <ImageSlider url={"https://picsum.photos/v2/list"}  page={"1"} limit={'10'} />
   </>);
}