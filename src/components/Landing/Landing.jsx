import React from 'react'
import ItemListContainer from "../ItemListContainer/ItemListContainer"
import NavBar from '../NavBar/NavBar'
import "./Landing.css"

const Landing = () => {
  return (
    <>
    
    <NavBar/>
    <ItemListContainer greeting="Bienvenidos!"/>
    
    </>
  )
}

export default Landing