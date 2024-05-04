import React, { useEffect, useState } from 'react'

export default function UseFetch(url,options={}) { // This is not props DON'T keep url in {} like {url,oprions={}}
  
  const[data,setData]=useState(null);
  const[pending,setPending]=useState(false)
  const[error,setError]=useState(null)

 async function fetchData(){
    setPending(true)
    try{
        // console.log(url,)
      const response=  await fetch(url, { ...options })
      if(!response.ok) throw new Error(response.statusText);

      const result=await response.json()
      setData(result)
      setPending(false)
      setError(null)
console.log(result)
    }
    catch(e){
        setError(`${e}. Some Error Occured`);
        setPending(false);
    }
   

 }


useEffect(()=>{
fetchData();
},[url])

    return {data,pending,error}
}
