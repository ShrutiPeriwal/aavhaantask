import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Hero from "./Home/Hero";
import Product from "./Component/Product";
import Customer from "./Component/Customer";
import Order from "./Component/Order";

const App = () => {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/product" element={<Product />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </>
  );
};

export default App;
