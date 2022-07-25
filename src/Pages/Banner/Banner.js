import React from 'react';
import Navbar from '../Navbar/Navbar';
import ParticlesComponent from '../ParticlesComponent';
// import Particles from '../../ParticlesComponent'
const Banner = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='d-flex w-100 justify-content-center align-items-center summary-div '>
                <p className='summary fs-6  '>We are an established exporter, importer, indentor and general supplier of raw materials for Pharmaceutical, Bio-Pharmacy,  Homeopathic, Unani,  Ayurveda, Cosmetic Industry, Chemical industry, Food & Beverages Industry, Herbal medicines & products, etc.</p>
            </div>
            <ParticlesComponent id="tsparticles" />
        </div>
    );
};

export default Banner;