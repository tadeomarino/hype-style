import React from "react";
import bag from '../bag.svg';
import "./styles/CartWidget.css"

const CartWidget = () => {
    return(
        <div className="cart-widget">
        <img src={bag} alt="bag" />
        <div className="qty-display">0</div>
        </div>
        )
}

export default CartWidget;