import React from 'react'
import "./Landing.css"
import NavBar from '../NavBar/NavBar'
import ItemListContainer from "../ItemListContainer/ItemListContainer"
// import ItemCount from '../ItemCount/ItemCount'


const Landing = () => {
  
  return (
    <>
    <div className='app-container'>
      
      <NavBar/>
      <ItemListContainer greeting="ItemListContainer"/>
      {/* <ItemCount initial={1} stock={10} onAdd={handleAddToCart}/> */}
    
    </div>
    </>
  )
}

export default Landing