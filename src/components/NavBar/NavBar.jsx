import React from "react";
import CartWidget from "../CartWidget/CartWidget.jsx";
import logo from "../../assets/logo.png";
import "./NavBar.css";

function NavBar() {

  return (
    
    <div className="header-container">

      <img src={logo} alt="logo" width="150" height="150"/>

      <div className="nav-section">        
        <ul>          
          <li><a href="#">HOME</a></li>
          <li><a href="#">PRODUCTS</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </div>

        <CartWidget />
    
    </div>
  );
}

export default NavBar;
