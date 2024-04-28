import React, { useState,useEffect } from 'react'
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import './styles.css'
export default function ImageSlider({ url, limit = 15, page = 1 }) {

const[ImageObj,setImageObj]=useState(null);
const[ImageUrl,setImageUrl]=useState('https://picsum.photos/id/0/500/333')
const[loading,setLoading]=useState(true);
const [currentSlide, setCurrentSlide] = useState(0);
const [errorMsg, setErrorMsg] = useState(null);
const[ImgArr,setImgArr]=useState([
  'https://picsum.photos/id/0/5000/3333',
  'https://picsum.photos/id/1/5000/3333',
 
]);

useEffect(() => {
  if (url !== "") fetchImages(url);
}, [url]);

async function fetchImages(getUrl)  {
  try{
    let ar=[]  

    setLoading(true);
    const response=await fetch(`${getUrl}?page=${page}&limit=${limit}`)
    const data=await response.json();

    if(data){
      setImageObj(data);
      setLoading(false);
      
      for(let k in data){
        console.log(data[k].download_url)
        ar.push(data[k].download_url)

      }
      setImgArr(ar);
    }
  }
  catch(e){
    setErrorMsg(e.message);
    setLoading(false);
  }
}

function handleLeftClick(){
 setCurrentSlide(currentSlide-1);
 console.log(currentSlide)
}
function handleRightClick(){
  setCurrentSlide(currentSlide+1);
  console.log(currentSlide);
}


  return (
    <>
    <div className='container' >

        <BsArrowLeftCircleFill
         className="arrow arrow-left" 
        onClick={()=>{handleLeftClick()}}
        size={40}/>

      

        <img
        className='current-image' 
        src={ImgArr[currentSlide]} />

        <BsArrowRightCircleFill 
        className="arrow arrow-right"
        onClick={()=>{handleRightClick()}}
        size={40}/>
        

        <span className='circle-indicators'>
      {ImgArr.map( (_,idx)=>
        <button 
        key={idx}
        className={idx===currentSlide?'current-indicator' :'current-indicator inactive-indicator'}  
        >
         


        </button>
      )
    }
    </span>

        </div>
    <button>Upload</button>
    
    </>
  )
}

