import React, { useEffect } from 'react'

export default function Outside(ref,handler) {


    useEffect(()=>{
        function listener(event){
// if click occured outside
            if (!ref.current || ref.current.contains(event.target)){
                return;
            }
            handler()
            // handler is ()=>setshowContent(false)

        }
        document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
        
},[handler,ref])

 
}
