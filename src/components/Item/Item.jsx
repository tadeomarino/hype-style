import React from "react";
import { NavLink } from "react-router-dom";
import "./Item.css";

const pathImgUrl = require.context("../../assets/img/items", true);

const Item = ({
  key,
  title,
  description,
  price,
  imageId,
  stock,
  categoryId,
  id,
}) => {
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

      {/* <ItemCount /> */}
    </div>
  );
};

export default Item;
