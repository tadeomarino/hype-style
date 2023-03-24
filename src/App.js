import React from "react";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import CartDetail from "./components/CartDetail/CartDetail";
import OrderForm from "./components/OrderForm/OrderForm.jsx";
import OrderDetail from "./components/OrderDetail/OrderDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cartContext";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider value={0}>
        <NavBar className="app-container" />

        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartDetail />} />
          <Route path="/order-form" element={<OrderForm />} />
          <Route path="/order-detail" element={<OrderDetail />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
