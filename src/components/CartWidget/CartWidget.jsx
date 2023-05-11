import React, { useContext } from "react";
import CartContext from "../../context/cartContext.js";
import bag from "../../assets/bag.svg";
import { NavLink } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = (item) => {
  const { getTotalQuantity } = useContext(CartContext);

  return (
    <NavLink to={"/cart"}>
      <div className="cart-widget">
        <img src={bag} alt="bag" />
        <div className="qty-display">{getTotalQuantity()}</div>
      </div>
    </NavLink>
  );
};

export default CartWidget;
