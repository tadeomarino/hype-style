import React from "react";
import bag from "../../assets/bag.svg";
import { NavLink } from "react-router-dom";
import "./CartWidget.css"

const CartWidget = (item) => {
    return(
        <NavLink to={"/cart"}>
        <div className="cart-widget">
        <img src={bag} alt="bag"/>
        <div className="qty-display">{}</div>
        </div>
        </NavLink>
        )
}

export default CartWidget;