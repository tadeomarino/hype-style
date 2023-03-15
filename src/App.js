import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import CartDetail from "./components/CartDetail/CartDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing/Landing";
import { CartProvider } from "./context/cartContext";


function App() {
  return (
    <BrowserRouter>
      
      <CartProvider value={0}>
      <NavBar className="app-container"/>


      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        <Route path='/products' element={<ItemListContainer/>}/>
        <Route path="/cart" element={<CartDetail/>}/>
      </Routes>

      </CartProvider>

    </BrowserRouter>
  );
}

export default App;
