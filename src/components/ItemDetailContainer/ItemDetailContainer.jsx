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



// const ItemDetailContainer = () => {

//   const { productId } = useParams();

//   const [item, setItem] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Buscando el producto por su ID en el archivo JSON
//     const foundItem = productsData.find(product => product.id === productId);

//     if (foundItem) {
//       setItem(foundItem);
//       setLoading(false);
//     } else {
//       console.error(`Product with id ${productId} not found`);
//     }
//   }, [productId]);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ItemDetail item={item} />
//       )}
//     </div>
//   );
// };

// export default ItemDetailContainer;