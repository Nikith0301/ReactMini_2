import React,{useState} from 'react'


import QRCode from "react-qr-code";
export default function QrCode() {

const[input,setInput]=useState('')
const[qrVal,setqrVal]=useState('');

function handleClick(){
    setqrVal(input)
    console.log(qrVal)
}
//   return (
//     <>
    
//     <input 
//     type='text' 
//     onChange={(e)=>setInput(e.target.value)}
//     value={input}
//     name='qr-code'
//     placeholder='Enter your text' />

//     <span>
//         <button onClick={handleClick}>Generate</button>
//     </span>

//     <div style={{ height: "auto", margin: "0 auto", maxWidth: 640, maxHeight:500 ,width: "100%" }}>
//     <QRCode
//     size={20}
//     bgColor="#fff" 
//     style={{ height: "auto", maxWidth: "100%", width: "100%" }}
//     value={qrVal}
//     viewBox={`0 0 256 256`}
//     />
// </div>
    
//     </>
//   )


return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            name="qr-code"
            placeholder="Enter your text"
            style={{ fontSize: 20, padding: 10, width: '300px' }} // Increased font size, padding, and width
          />
          <span style={{ marginLeft: 10 }}>
            <button onClick={handleClick} style={{ fontSize: 20, padding: 10 }}>Generate</button>
          </span>
        </div>
        <div style={{ height: "auto", margin: "0 auto", maxWidth: 640, maxHeight: 500, width: "100%" }}>
          <QRCode
            size={20}
            bgColor="#fff"
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            viewBox={`0 0 256 256`}
            value={qrVal}
          />
        </div>
      </div>
    </>
  );
  
}
