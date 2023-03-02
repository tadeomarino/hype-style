import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList.jsx";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import productsData from "../../database/productsData.json";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData);
      }, 2000);
    });

    if (categoryId) {
      getData.then((res) => {
        setProducts(res.filter((products) => products.category === categoryId));
      });
    } else
      getData.then((res) => {
        setProducts(res);
      });
  }, [categoryId]);

  return (
    <div>
      <h1 className="title">Productos destacados</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
