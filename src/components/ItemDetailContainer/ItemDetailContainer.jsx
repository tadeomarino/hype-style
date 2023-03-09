import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";
import productsData from "../../database/productsData.json";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
  const [product, setProducts] = useState({});

  const { productId } = useParams();
  console.log(productId);
  // Usamos un efecto para cargar los datos del Json de cursos al montar el componente.

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData);
      }, 1000);
    });

    getData.then((res) => {
      setProducts(res.find((product) => product.id === parseInt(productId)));
    });
  }, [productId]);


  return (
    <>
      <div className="container">
        {product ? <ItemDetail item={product} /> : <p>Loading...</p>}
      </div>
    </>
  );
};
export default ItemDetailContainer;