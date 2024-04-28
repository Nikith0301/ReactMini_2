import React from 'react'
import MenuList from"./menu-list"
import "./TreeView.css"
export default function TreeView({menus}) {
  return (
    <>
    <div className='tree-view-container'>
    <MenuList list={menus}/>
    </div>
    
    </>
  )
}
