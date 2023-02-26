import React from "react";
import "./Item.css"

const pathImgUrl = require.context("../../assets/img", true)

const Item = ({ name, description, price, imgUrl }) => {
  
  return (
    
    <div className="item">
      <img className="item-image" src={pathImgUrl(`./${imgUrl}`)} alt={Item.name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      
      {/* <ItemCount /> */}
    
    </div>
  );
};

export default Item;