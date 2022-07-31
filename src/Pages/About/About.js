import React from 'react';
import Navbar from '../Navbar/Navbar';
import './About.css'
import aboutbanner from '../../images/2672292.jpg'
import companyLogo from '../../images/logo.png'
const About = () => {
    return (
        <div className='about'>
            <Navbar></Navbar>
            <section>
                <div>
                    <img className='w-100' src={aboutbanner} alt="" />
                </div>
                <div className='d-flex row m-2 p-5 justify-content-center '>
                    <span className='col-xl-5 col-md-12 col-sm-12 col-12 justify-content-evenly align-items-center  w-25  companyLogo '>

                        <img className='w-100 my-2' src={companyLogo} alt="" />

                    </span>
                    <p className='col-xl-5 col-md-12 col-sm-12 col-12 '>
                        We are an established exporter, importer, indentor and general supplier of raw materials for Pharmaceutical, Bio-Pharmacy,  Homeopathic, Unani,  Ayurveda, Cosmetic Industry, Chemical industry, Food & Beverages Industry, Herbal medicines & products, etc.

                        We have almost all kinds of Genuine/Original Herbs & Raw materials from:-  Botanical, Crude Drugs, Culinary Herbs, Marine Products, Medicinal Plants, Rare Herbs, Seeds, Sea Weeds, Resins, Herbs Extracts, Animal products, Food Ingredients,  Active Pharmaceutical Ingredients (API), Intermediate, Excipient,  Fine chemicals, Basic Chemicals,   Industrial chemicals,  Cosmetic Active Ingredient & Functional Extracts,     Essential Oil, Natural Oil, Aromatic Oil, Drink Concentrate, Food Flavor, Natural Food color, Raw Spices (Organic), Snakes & Animals Venom etc.

                        We are very much interested to grow up a strong, reliable & long lasting business relation with your estimated company as a vendor/supplier. We are supplying various herbs and other item to Germany, France, Italy, Australia, Canada, USA, China, UK, Turkey, Belgium and many more countries. For our basic herbs raw product list please visits www.bkherbs.info, this is only herbs list (Without list we also can do), for other items please feel free to inform us your inquiry.

                        Your heartfelt kind co-operation and early response will be highly appreciated.
                    </p>


                </div>
            </section>
        </div>
    );
};

export default About;