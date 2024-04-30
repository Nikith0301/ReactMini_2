import React,{useState} from 'react'
import './style.css'
import User from './User'
export default function GitProfile() {

const[userName,setuserName]=useState('sangammukherjee')
const[userData,setuserData]=useState(null)

 async function handleClick(){

   const response= await fetch(`https://api.github.com/users/${userName}`)
   const data=await response.json()
  if(data ){
    setuserData(data)
  }
   console.log(data)
}

function handleChange(e){
  setuserName(e.target.value)
}

  return (
    <>
   <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setuserName(event.target.value)}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
    
    
    </>
  )
}
