import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Products.css";
import catalouge from "../../images/Herbs & other items list..pdf"
const Products = () => {
    return (
        <div className='products'>
            <Navbar></Navbar>
            <div className='productslist d-flex  justify-content-center align-items-center'>
                <div className='allproducts d-flex  justify-content-center align-items-center'>
                    <button className='catalogue justify-content-center align-items-center'><a className='text-white text-decoration-none' href={catalouge} download >See All Products </a></button>
                </div>
            </div>
        </div>
    );
};

export default Products;