import React, { useLayoutEffect, useState } from 'react'

export default function Resize() {

    const [windowSize,setwindowSize]=useState({
        width:0,
        height:0
})


useLayoutEffect(()=>{
    handleResize();

    window.addEventListener("resize",handleResize)

    return ()=> {window.removeEventListener("resize",handleResize)}
    
},[])
   

function handleResize(){
    setwindowSize(
        {width:window.innerWidth,
        height:window.innerHeight}
)

 
}


return windowSize
}
