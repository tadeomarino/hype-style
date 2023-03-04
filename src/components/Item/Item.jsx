import React from "react";
import { NavLink } from "react-router-dom";
import "./Item.css";

const pathImgUrl = require.context("../../assets/img", true);

const Item = ({ name, price, imgUrl, category, id }) => {
  return (
    <div className="item">
      <img
        className="item-image"
        src={pathImgUrl(`./${imgUrl}`)}
        alt={Item.name}
      />
      <h3>{name}</h3>
      <p>${price}</p>
      <p>{category}</p>

      <NavLink to={`/detail/${id}`}>
        <button>Detail</button>
      </NavLink>

      {/* <ItemCount /> */}
    </div>
  );
};

export default Item;
