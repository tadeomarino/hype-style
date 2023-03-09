import React, { useState } from "react";
import "./ItemCount.css"

function ItemCount({ initial, stock, onAdd }) {
  const [count, setCount] = useState(initial);

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
      onAdd(count);
    }
  };

  return (
    <div class="container">

      <div class="flex-container">
        <button class="increment-button" onClick={handleIncrement}>
          +
        </button>
        <p class="count">Tienes {count} ítems</p>
        <button class="decrement-button" onClick={handleDecrement}>
          -
        </button>
      </div>
      <div class="button-container">
        <button class="add-to-cart-button" onClick={handleAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
