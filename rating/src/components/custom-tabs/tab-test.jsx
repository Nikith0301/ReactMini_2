import React from 'react'
import Tabs from './tabs'
import './tabs.css'

function RandomComp(){
    return(
        <h1>Some random thing</h1>
    )
}

export default function TabTest() {

    const tabs=[
        {
            label: "Tab 1",
            content:'This is content for tab 1'
        },
        {
            label: "Tab 2",
            content:'This is content for tab 2'
        },
        {
            label: "Tab 3",
            content:<RandomComp onChange={handleChange}/>
        }
    ]

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex);
      }
  return (
    <>
    <Tabs tabsContent={tabs} />
    
    </>
  )
}
