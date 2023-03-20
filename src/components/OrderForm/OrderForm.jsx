import React, { useContext, useState } from "react";
import CartContext from "../../context/cartContext";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import "./OrderForm.css";

const pathImgUrl = require.context("../../assets/img/items", true);

const OrderForm = () => {
  
  const { cartItems } = useContext(CartContext);

  const products = cartItems.map((item) => item.title);
  
  const productList = products.map((product, index) => (
    <li key={index}>{product}</li>
  ))

     // Definimos variables que son estados para guardar información sobre el comprador, los productos  seleccionados y el total de la compra.
  const [buyerName, setBuyerName] = useState('');
  const [buyerPhone, setBuyerPhone] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [total, setTotal] = useState(0);


  // Instancia de firestore
  const db = getFirestore();

  // // Referencia a la colección ordes para acceder a dicha colección.
  const ordersCollection = collection(db, 'orders');

  // // Función para manejar el submit del form
  const handleSubmit = (e) => {
  
       e.preventDefault(); // Evitamos que el formulario se envié por si mismo.
       
   // Objeto ‘order’ con la información del comprador, los ítems y su total.
          const order = {
              buyer: {
                  name: buyerName,
                  phone: buyerPhone,
                  email: buyerEmail
                },
                items: cartItems,
                total: total
              };
           
  // Método ‘addDoc’ para agregar un nuevo documento con los datos de la orden. 
      addDoc(ordersCollection, order)
        .then((docRef) => {
          console.log('Documento enviado. ID:', docRef.id);
          alert('¡Compra realizada con éxito!');
          // resetForm();
        })
        .catch((e) => {
          console.log('Error al agregar el documento', e);
        });
  };

  return (
    <div className="form-container">
      <h2>Check Out</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" value={buyerName} onChange={(e) => setBuyerName(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="text" value={buyerPhone} onChange={(e) => setBuyerPhone(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="text" value={buyerEmail} onChange={(e) => setBuyerEmail(e.target.value)} />
        </div>
        {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="form-group">
  <label>Products:</label>
  <table>
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
    </thead>
    <tbody>
      {cartItems.map((item) => (
        <tr key={item.id}>
          <td>
            <img src={pathImgUrl(`./${item.imageId}`)} alt={item.title} />
          </td>
          <td>{item.title}</td>
          <td>${item.price.toFixed(2)}</td>
          <td>{item.quantity}</td>
        </tr>
      ))}
    </tbody>
  </table>
  <h3>Total: ${total}</h3>
  <button type="submit">Send</button>
        </div>
)}
      </form>
      
    </div>
  );
};

export default OrderForm;
