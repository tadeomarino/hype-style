import React, { useState, useContext} from "react";
import { NavLink } from "react-router-dom";
import "./Item.css";
import CartContext from "../../context/cartContext.js";

const pathImgUrl = require.context("../../assets/img/items", true);

const Item = ({ key, title, price, imageId, stock, categoryId, id, item }) => {
  
  const [count, setCount] = useState([]);
  
  const { addProduct } = useContext(CartContext);

  const handleAdd = () => {
    if (id) {
      console.log(id);
      addProduct(item, count,);}}
  
  return (
    <div className="item">
      <img
        className="item-image"
        src={pathImgUrl(`./${imageId}`)}
        alt={title}
      />
      <h3>{title}</h3>
      <p>${price}</p>
      <p>{categoryId}</p>
      <p>{stock}</p>
      <p>{key}</p>

      <NavLink to={`/detail/${id}`}>
        <button>Detail</button>
      </NavLink>      
    </div>
  );
};

export default Item;
