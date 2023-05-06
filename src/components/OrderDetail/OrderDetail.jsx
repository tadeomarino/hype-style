import React, { useContext } from "react";
import CartContext from "../../context/cartContext";
import "./OrderDetail.css";

const pathImgUrl = require.context("../../assets/img/items", true);

const OrderDetail = () => {
  const { cartItems } = useContext(CartContext);

  const getTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
      console.log(totalPrice);
    });
    return totalPrice;
  };

  return (
    <div className="purchase-detail">
      <h2 className="purchase-detail__title">Purchase Detail</h2>
      <table className="purchase-detail__table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img alt={item.title} src={pathImgUrl(`./${item.imageId}`) } />
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="3">Total:</td>
            <td>${getTotalPrice().toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
      <button>Home</button>
    </div>
  );
};

export default OrderDetail;
