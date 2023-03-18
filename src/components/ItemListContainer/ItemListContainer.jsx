import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import "./ItemListContainer.css";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  snapshotEqual,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

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
    }, [categoryId, items]);
  
    const products = shouldFilter ? filteredProductList : items;

  return (
    <div>
      <h1>Productos destacados</h1>

      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;

// const [products, setProducts] = useState([]);

// const { categoryId } = useParams();

// useEffect(() => {
//   const getData = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(productsData);
//     }, 1000);
//   });

//   if (categoryId) {
//     getData.then((res) => {
//       setProducts(res.filter((products) => products.category === categoryId));
//     });
//   } else
//     getData.then((res) => {
//       setProducts(res);
//     });
// }, [categoryId]);
