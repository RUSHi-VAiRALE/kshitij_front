import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contacts from "./products";
import Card from "./components/Card"
import ProductList from "./components/ProductList"
import Product  from "./pages/Products";
import SingleProduct from "./pages/Single-product"
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import QuantityComp from "./components/quantityComp";
import {
    Route,
    Routes
} from "react-router-dom";

const App = () => {
    return (
        <Routes>
            <Route path="/" element = {<Home />}/>
            <Route path="/register" element = {<Register />}/>
            <Route path="/login" element = {<Login />}/>
            <Route path="/products" element = {<Product />}/>
            <Route path="/sproduct" element = {<SingleProduct />}/>
            <Route path="/cart" element = {<Cart />}/>
        </Routes>
    );
};

export default App;
