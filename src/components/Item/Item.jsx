import React from "react";
import "./Item.css"

const pathImgUrl = require.context("../../assets/img", true)

const Item = ({ name, price, imgUrl, category }) => {
  
  return (
    
    <div className="item">
      <img className="item-image" src={pathImgUrl(`./${imgUrl}`)} alt={Item.name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <p>{category}</p>


      <button>Detail</button>
      
      {/* <ItemCount /> */}
    
    </div>
  );
};

export default Item;