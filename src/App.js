import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import CartDetail from "./components/CartDetail/CartDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing/Landing";


function App() {
  return (
    <BrowserRouter>
      
      <NavBar className="app-container"/>

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<CartDetail/>}/>
        {/* <Route exact path="/" element={<ItemDetail />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
