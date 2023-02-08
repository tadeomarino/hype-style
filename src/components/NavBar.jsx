import React from "react";
import CartWidget from "./CartWidget";
import "../scss/NavBar.css"

const NavBar = () => {
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
    <a class="nav-link disabled">Log In</a>
  </li>
</ul>
    )
}

export default NavBar;