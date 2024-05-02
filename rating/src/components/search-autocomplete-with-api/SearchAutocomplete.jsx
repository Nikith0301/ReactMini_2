import React, { useState,useEffect } from 'react'
import Suggestions from './Suggestions '; 
export default function SearchAutocomplete() {



    const[users,setUsers]=useState([]);
    const[showDropdown,setshowDropdown]=useState(false);
    const[filteredUsers,setfilteredUsers]=useState([]);
    const[searchParam,setsearchParam]=useState("");

async function fetchListOfUsers(){

    try{
        const res=await fetch(`https://dummyjson.com/users`)
        const data=await res.json()
        if(data && data.users ){
            setUsers(data.users.map((userItem)=>userItem.firstName))
        }
        
    }
    catch(e){
        console.log(e)
    }

}



useEffect(()=>{fetchListOfUsers();} ,[])
console.log(users);
function handleChange(event){

    const query = event.target.value.toLowerCase();
    setsearchParam(query);
    if(searchParam.length>1){

      let filtered= users && users.length ? users.filter(name=>name.toLowerCase().indexOf(query)>-1)
      :[]
        setfilteredUsers(filtered)
        setshowDropdown(true);
    }
    else{
        setshowDropdown(false)
    }

}

function handleClick(event){
    setshowDropdown(false)
    setsearchParam(event.target.innerText)
    setfilteredUsers([])
}

  return (
    <>
    <div>
        <input 
        value={searchParam}
        onChange={handleChange}
        />

        { showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />}
    </div>
    
    
    </>
  )
}
