import React from 'react'
import "./Landing.css"
import NavBar from '../NavBar/NavBar'
import ItemListContainer from "../ItemListContainer/ItemListContainer"
// import ItemCount from '../ItemCount/ItemCount'

const pathImgUrl = require.context("../../assets/img", true);

const Landing = () => {
  
  return (
    <>
    <div className='app-container'>
      
      <NavBar/>
      
      <div>
        <img className="page-header" src={pathImgUrl("./Nike-header.jpg")} alt="" />
      </div>
      
      <ItemListContainer greeting="ItemListContainer"/>
      {/* <ItemCount initial={1} stock={10} onAdd={handleAddToCart}/> */}
    
    </div>
    </>
  )
}

export default Landing