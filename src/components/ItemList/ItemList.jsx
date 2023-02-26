import React, { useState, useEffect } from "react";
import Item from "../Item/Item.jsx";
import "./ItemList.css"
import productsData from "../../database/productsData.json"

const ItemList = () => {
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    
    // Simulamos un retraso de red con setTimeout
    setTimeout(() => {
      
      // Creamos algunos productos de ejemplo
      setItems(productsData);

    }, 2000);
  }, []);

  return (
    
    <div className="item-list-container">
      <div className="item-list">
        {items.map((item) => (
          <Item key={item.id} name={item.name} description={item.description} price={item.price} imgUrl={item.imgUrl} />
        ))}
      </div>
    </div>
  
  );
};

export default ItemList;
