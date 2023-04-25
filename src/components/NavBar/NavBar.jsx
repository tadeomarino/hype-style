import React, { useContext} from "react";
import CartWidget from "../CartWidget/CartWidget.jsx";
import CartContext from "../../context/cartContext.js";
import logo from "../../assets/logo.png";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = ({id}) => {
  
  const { cartItems } = useContext(CartContext);
  
  return (
 <div className="main-container">
   <div className="logo-container">
   <NavLink to={"/"}>
     <img src={logo} alt="logo" className="logo-container" />
   </NavLink>
   </div>
  
   <div className="nav-container">
     <ul>
         <li>
         <NavLink to={"/"}>HOME</NavLink>
         </li>
  
       <li>
         <div className="dropdown">
           <button className="dropbtn">PRODUCTS</button>
           <div className="dropdown-content">
           <NavLink to={"/category/sneakers"}>
             <button className="dropbtn">SNEAKERS</button>
           </NavLink>
           <NavLink to={"/category/hoodies"}>
             <button className="dropbtn">HOODIES</button>
           </NavLink>
           </div>
         </div>
       </li>
  
       <li>
         <NavLink to={"/contact"}>ABOUT US</NavLink>
       </li>
     </ul>
   </div>
  
   {cartItems.length > 0 && (
     <div className="cart-container">
       <CartWidget />
     </div>
   )}
  
 </div>
    );
  }
  
  export default NavBar;