import React from "react";
import CartWidget from "../CartWidget/CartWidget.jsx";
// import logo from "../../assets/logo.png";
import "./NavBar.css";
import { NavLink } from 'react-router-dom'

function NavBar() {

  return (
    <div className="navbar-container">
      <nav className="navbar">        

        <ul className="navbar-nav">          
        
        <NavLink to={'/'}>
          <li className="nav-item"><a className="nav-link">HOME</a></li>
        </NavLink>
        
        <li className="nav-item dropdown">
            
            <button className="nav-link dropbtn">PRODUCTS ▼</button>
            
            {/* <ul className="dropdown-content"> */}
              
              <NavLink to={'/category/Zapatillas'}>
                <li className="nav-item"><a className="nav-link">Zapatillas</a></li>
              </NavLink>
              
              <NavLink to={'/category/Hoddies'}>
                <li className="nav-item"><a className="nav-link">Hoddies</a></li>
              </NavLink>
              
              {/* </ul> */}
          </li>
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
