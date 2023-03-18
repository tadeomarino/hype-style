import React from "react";
import Item from "../Item/Item.jsx";
import "./ItemList.css";

// Se encarga de hacer el map con los productos

const ItemList = ({ products }) => {
   return (
     <div className="item-list-container">
       <div className="item-list">
         {products && products.map((item) => (
           <Item
             key={item.id}
             title={item.title}
             description={item.description}
             price={item.price}
             imageId={item.imageId}
             stock={item.stock}
             categoryId={item.categoryId}
             id={item.id}
           />
         ))}
       </div>
     </div>
   );
 };
 
 export default ItemList;
