import React, { useContext } from "react";
import CartContext from "../../context/cartContext.js";
import { NavLink } from "react-router-dom";
import "./CartDetail.css";

const pathImgUrl = require.context("../../assets/img/items", true);

function CartDetail() {
  
  const { cartItems, addProduct, removeProduct, clearCart, getTotalQuantity } =
    useContext(CartContext);

  // Agregamos de a 1 item.
  const handleAdd = (item) => {
    addProduct(item, 1);
  };

  // Eliminamos de a 1 item.
  const handleRemove = (item) => {
    removeProduct(item.id, 1);
  };

  const handleClear = () => {
    clearCart();
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  return (
    <div className="cart-detail">
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Image</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>
                  <img src={pathImgUrl(`./${item.imageId}`)} alt={item.title} />
                </td>
                <td>
                  <button onClick={() => handleRemove(item)}>-</button>
                  {item.quantity}
                  <button onClick={() => handleAdd(item)}>+</button>
                </td>
                <td>${item.price.toFixed(2)}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button onClick={() => handleRemove(item)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // muestra el mensaje "No hay items en el carrito"
        <div>No hay items en el carrito</div>
      )}

      <div className="cart-total">Total: ${getTotalPrice().toFixed(2)}</div>
      <button onClick={() => clearCart()}>Clear Cart</button>
      <NavLink to={"/products"}>
        <button>Continue Shopping</button>
      </NavLink>
    </div>
  );
}

export default CartDetail;
