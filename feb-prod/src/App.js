import React from "react";
import "./App.css";
import { ProductProvider } from "./ProductContext";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className='App'>
      <ProductProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product-entry' element={<Form />} />
          <Route path='/product-list' element={<ProductList />} />
        </Routes>
      </ProductProvider>
    </div>
  );
}

export default App;
