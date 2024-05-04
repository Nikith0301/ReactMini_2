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
import SearchAutocomplete from "./components/search-autocomplete-with-api/SearchAutocomplete.jsx";
import TicTacToe from "./components/tic-tac-toe/TicTacToe.jsx";
import FeatureFlagGlobalState from "./components/feature-flags/context/index.js";
import FeatureFlags from "./components/feature-flags/FeatureFlags.jsx";
import UseFetchHookTest from "./components/use-fetch/test.js";
import Comp from "./components/use-outside-click/Comp.jsx";
import ResizeComp from "./components/use-window-resize/ResizeComp.jsx";

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
   {/* <GitProfile/> */}
   {/* <SearchAutocomplete/> */}
   {/* <TicTacToe/> */}
    {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

{/* <UseFetchHookTest/> */}

{/* <Comp/> */}
<ResizeComp/>

   </>);
}