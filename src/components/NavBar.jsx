import React from "react";
import CartWidget from "./CartWidget.jsx";
import "./styles/NavBar.css"

function NavBar(props){
    return (
        <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">About</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Products</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Log In</a>
  </li>

  <CartWidget/>

</ul>
    )
}

export default NavBar;