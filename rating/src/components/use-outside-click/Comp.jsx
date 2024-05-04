import React, { useState ,useRef} from "react";
import Outside from "./Outside";

export default function Comp() {
  const [showContent, setshowContent] = useState(1);

const ref=useRef();

Outside(ref,()=>setshowContent(false))

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>Random content</h1>
          <p>Click outside this to close</p>
        </div>
      ) : (
        (
            <button onClick={() => setshowContent(true)}>Show Content</button>
          )
      )}
    </div>
  );
}
