import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SingleProduct from "../components/SingleProduct";
import Single from "../newSingle"
import ProductList from "../components/ProductList";


const createSingleproduct = (single) => {
    return (
        <SingleProduct 
            name = {single.name}
            imgURL = {single.imgURL}
            email = {single.email}
            discription = {single.discription}
            img1 = {single.img1URL}
            img2 = {single.img2URL}
            img3 = {single.img3URL}
            img4 = {single.img4URL}
            img5 = {single.img5URL}
        />
    );
}   

const SingleProductpage = () => {
    return (<div>
    <Navbar />
    <div className="scontainer">
        {Single.map(createSingleproduct)}
    </div>
    <ProductList />
    <Footer />
    </div>
        
    );
}
export default SingleProductpage;

