import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Contact.css";
import contactbanner from '../../images/105381-OMRNIP-573.jpg'
const Contact = () => {
    return (
        <div className='contact'>
            <Navbar></Navbar>
            <div className='d-flex row align-items-center mx-auto contact-us'>
                <div className='col-xl-6 col-lg-4 col-md-4 col-sm-12 col-12'>
                    <img className='w-75' src={contactbanner} alt="" />
                </div>
                <div className='col-xl-6 col-lg-4 col-md-4 col-sm-12 col-12'>
                    <p className="p-5 bg-success bg-opacity-10 rounded-3 text-start fs-4">
                        Phone : +88(0)1840401819
                        <hr />
                        Adress : (Green Way) Moghbazar, Dhaka-1217,Bangladesh
                        <hr />
                        Email : info.bkherbs@gmail.com
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;