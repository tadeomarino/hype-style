import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./components/Landing/Landing";


function App() {
  return (
    <BrowserRouter>
      
      <NavBar className='app-container'/>

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        {/* <Route exact path="/" element={<ItemDetail />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
