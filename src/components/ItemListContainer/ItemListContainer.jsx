import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc, getDocs, getFirestore, snapshotEqual } from "firebase/firestore";
import ItemList from "../ItemList/ItemList.jsx";
import "./ItemListContainer.css";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const [filteredProductList, setFilteredProductList] = useState([]);
    const [shouldFilter, setShouldFilter] = useState(false);
  
    const { categoryId } = useParams();
  
    useEffect(() => {
      
      const db = getFirestore();
  
      const itemsRef = collection(db, "items");
  
      getDocs(itemsRef).then((snapshot) => {
        if (snapshot === 0) {
          console.log("No hay resultados");
        } else {
          setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        }
      });
    }, []);
  
    useEffect(() => {
      if (categoryId) {
        const filteredProducts = items.filter(
          (item) => item.categoryId === categoryId
        );
        setFilteredProductList(filteredProducts);
        setShouldFilter(true);
      } else {
        setShouldFilter(false);
      }
    }, [categoryId]);
  
    const products = shouldFilter ? filteredProductList : items;

  return (
    <div>
      <h1>Productos destacados</h1>

      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
