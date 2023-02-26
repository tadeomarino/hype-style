import React from "react";
import ItemList from "../ItemList/ItemList.jsx"
import "./ItemListContainer.css"


const ItemListContainer = () => {
  return (
    <div>
      <h1 className="title">Productos destacados</h1>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;