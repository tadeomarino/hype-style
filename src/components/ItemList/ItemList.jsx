import React, { useState, useEffect } from "react";
import Item from "../Item/Item.jsx";
import "./ItemList.css"
import productsData from "../../database/productsData.json"


// Se encarga de hacer el map con los productos
const ItemList = ({products}) => {

  return (
    
    <div className="item-list-container">
      
      <div className="item-list">
        {products.map((product) => (
          <Item key={product.id} name={product.name} description={product.description} price={product.price} imgUrl={product.imgUrl} category={product.category} />
        ))}
      </div>
    
    </div>
  
  );
};

export default ItemList;
