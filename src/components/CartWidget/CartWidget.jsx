import React from "react";
import bag from "../../assets/bag.svg";
import "./CartWidget.css"

const CartWidget = () => {
    return(
        <div className="cart-widget">
        <img src={bag} alt="bag"/>
        <div className="qty-display">7</div>
        </div>
        )
}

export default CartWidget;