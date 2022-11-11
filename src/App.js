import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import AddProduct from "./Components/Products/AddProduct";
import ListProducts from "./Components/Products/ListProducts";
import ProductDisplay from "./Components/Products/ProductDisplay";
import Products from "./Components/Products/Products";
import Search from "./Components/Products/Search";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="products" element={<Products />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<ListProducts />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id" element={<ProductDisplay />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
