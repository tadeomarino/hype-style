import React from 'react'
import ItemListContainer from './ItemListContainer'
import NavBar from './NavBar'
import "./styles/Landing.css"

const Landing = () => {
  return (
    <>
    
    <NavBar/>
    <ItemListContainer greeting="Bienvenidos!"/>
    
    </>
  )
}

export default Landing