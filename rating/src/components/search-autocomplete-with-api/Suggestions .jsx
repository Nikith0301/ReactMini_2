import React from 'react'

export default function Suggestions ({data,handleClick}) {
  return (
    <ul>
        {data && data.map((itm,idx)=>
            <li key={idx} onClick={handleClick}>{itm}</li>
         ) }
      
         </ul>
         
  )
     {/* Very Important that you dont Keep
    {data && data.map((itm,idx)=> ( <li key={idx} onClick={handleClick}>{itm}</li>)) } */}
}
