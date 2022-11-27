import React from "react";
import Cartcomp from "../components/Cartcomp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartData from "../newCartdata";

const Cart = (single) => {
    return (
        <Cartcomp
            imgURL = {single.imgURL}
            name = {single.name}
            discription = {single.discription}
            price = {single.email}
        />
    );
}

const singleCart = () => {
    return (<div>
        <Navbar />
        {CartData.map(Cart)}
        <Footer />
    </div>
    );
}

export default singleCart;