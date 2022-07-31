import React from 'react';
import Navbar from '../Navbar/Navbar';
// import ParticlesComponent from '../ParticlesComponent';
// import Particles from '../../ParticlesComponent'
import logoimg from '../../images/plant (2).png'
import './Banner.css'
import catalouge from "../../images/Herbs & other items list..pdf"
const Banner = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className='d-flex flex-column w-100 justify-content-center align-items-center summary-div '>
                <a class="navbar-brand fs-2 mb-3" href="#">&nbsp;BK<span>
                    <img className='pb-2 logoimg' src={logoimg} alt="" />Herbs
                </span>
                </a>
                <p className='summary fs-6 mx-2 '>We are an established exporter, importer, indentor and general supplier of raw materials for Pharmaceutical, Bio-Pharmacy,  Homeopathic, Unani,  Ayurveda, Cosmetic Industry, Chemical industry, Food & Beverages Industry, Herbal medicines & products, etc. <br />
                    <button className='catalogue'><a className='text-white text-decoration-none' href={catalouge} download >See Our Catalogue </a></button>
                </p>
            </div>
            {/* <ParticlesComponent id="tsparticles" /> */}
        </div>
    );
};

export default Banner;