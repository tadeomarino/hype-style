import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const pathImgUrl = require.context("../../assets/img/items", true);

const ItemDetail = ({ item }) => {
  
  const handleOnAdd = (value) => {
    console.log(`se agrego ${value}`);
  };

  return (
    <div className="item-container">
      <div>
        {item.imageId && (
          <img src={pathImgUrl(`./${item.imageId}`)} alt={item.title} />
        )}
        <h1>{item.title}</h1>
        {/* <p>Category: {item.categoryId}</p> */}
        <p>{item.description}</p>
        <p>$ {item.price}</p>
        <p>Stock: {item.stock}</p>
      </div>
      <ItemCount
        onAdd={handleOnAdd}
        stock={item.stock}
        initial={1}
        item={item}
      />
    </div>
  );
};

export default ItemDetail;
