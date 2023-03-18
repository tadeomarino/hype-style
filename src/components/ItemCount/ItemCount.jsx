import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/cartContext.js";
import AddToCart from "../AddToCart/AddtoCart.jsx";
import "./ItemCount.css";

function ItemCount({ initial, stock, item }) {
  
  const [count, setCount] = useState(initial);
  
  const { addProduct } = useContext(CartContext);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAdd = () => {
    if (count) {
      addProduct(item, count);
      alert(`Se agregó ${count} ${item.title} al carrito.`);
    }
  };

  return (
    <div className="container">
      <div className="flex-container">
        <button className="decrement-button" onClick={handleDecrement}>
          -
        </button>
        <p className="count">Tienes {count} ítems</p>
        <button className="increment-button" onClick={handleIncrement}>
          +
        </button>
      </div>
      <div className="button-container">
        <AddToCart handleAdd={handleAdd} />
      </div>
    </div>
  );
}

export default ItemCount;
