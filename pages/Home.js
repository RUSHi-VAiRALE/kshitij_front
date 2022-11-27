import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Separator from "../components/Separator";
const Home = () => {
    return <div>
        <Navbar />
        <Separator />
        <ProductList />
        <Footer />
    </div>
}

export default Home;