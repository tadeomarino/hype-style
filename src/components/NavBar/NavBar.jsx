import React from "react";
import CartWidget from "../CartWidget/CartWidget.jsx";
// import logo from "../../assets/logo.png";
import "./NavBar.css";

function NavBar() {

  return (
    <div className="navbar-container">
      <nav className="navbar">        

        <ul className="navbar-nav">          
          <li className="nav-item"><a className="nav-link">HOME</a></li>
          <li className="nav-item"><a className="nav-link">PRODUCTS</a></li>
          <li className="nav-item"><a className="nav-link">CONTACT</a></li>
        </ul>
      
      </nav>

      {/* <div className="logo-container">
        <img src={logo} alt="logo" className="logo"/>
      </div> */}

      <CartWidget />
    
    </div>
  );
}

export default NavBar;
