import React from "react";
import CartWidget from "./CartWidget.jsx";
import logo from "../../src/assets/logo.png"
import "./styles/NavBar.css"

function NavBar(props){
    
  return (
      
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">CATEGORIAS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">NOSOTROS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACTO</a>
        </li>

        <img src={logo} alt="logo" width="45" height="45"/>

  <CartWidget/>

</ul>
    )
}

export default NavBar;