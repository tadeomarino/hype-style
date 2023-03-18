import React, { useContext} from "react";
import CartWidget from "../CartWidget/CartWidget.jsx";
import CartContext from "../../context/cartContext.js";
import logo from "../../assets/logo.png";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const NavBar = ({id}) => {
  
  const { cartItems, getTotalQuantity } = useContext(CartContext);
  
  return (
 <div className="main-container">
   <div className="logo-container">
   <NavLink to={"/"}>
     <img src={logo} alt="logo" className="logo-container" />
   </NavLink>
   </div>
  
   <div className="nav-container">
     <ul>
       <NavLink to={"/"}>
         <li>
           <a>HOME</a>
         </li>
       </NavLink>
  
       <li>
         <div className="dropdown">
           <button className="dropbtn">CATEGORIES</button>
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
         <a>CONTACT</a>
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
  
  

//     <nav class="navbar">
//   <div class="navbar-logo">
//     <a href="#">
//     <NavLink to={"/"}>
//      <img src={logo} alt="logo" className="logo-container" />
//    </NavLink>
//     </a>
//   </div>
//   <ul class="navbar-menu">
//     <li><a href="#">Home</a></li>
//     <li class="navbar-dropdown">
//       <a href="#">Products <i class="fa fa-angle-down"></i></a>
//       <ul class="dropdown-menu">
//         <li><a href="#">Sneakers</a></li>
//         <ul>
//           <li><a href="#">Men's</a></li>
//           <li><a href="#">Women's</a></li>
//         </ul>
//         <li><a href="#">Hoodies</a></li>
//         <ul>
//           <li><a href="#">Men's</a></li>
//           <li><a href="#">Women's</a></li>
//         </ul>
//       </ul>
//     </li>
//     <li><a href="#">About</a></li>
//   </ul>
//   <div class="navbar-cart">
//     <a href="#">
//       <i class="fa fa-shopping-cart"></i>
//       <span class="cart-number">5</span>
//     </a>
//     <a href="#">
//       <i class="fa fa-user"></i>
//     </a>
//   </div>
// </nav>