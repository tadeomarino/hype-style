import React from "react";
import Item from "../Item/Item.jsx";
import "./ItemList.css";

// Se encarga de hacer el map con los productos

const ItemList = ({ items }) => {
   return (
     <div className="item-list-container">
       <div className="item-list">
         {items && items.map((item) => (
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
 
 // const ItemList = ({items}) => {
   //   return(
     //     <div>
     //         {items && items.map((item) => (
 //             <div key={item.id}>
 //                 <h1>{item.title}</h1>
 //                 <h2>{item.id}</h2>
 //                 <h3>{item.categoryId}</h3>
 //             </div>
 //         ))}
 //     </div>
 // )}