import React from 'react';
import './Footer.css'
import companyLogo from '../../images/logo.png'
const Footer = () => {
    return (
        <div className='align-items-center d-flex bg-dark text-white row justify-content-center mx-auto pt-4 pb-4'>
            <div>
                <h4>LET'S STAY IN TOUCH</h4>
                <p className=''>

                    <small>Send your email to get weekly Newsletter</small>



                </p>

                <form className='mb-4' action="">
                    <input className='formInput' type="email" name="" id="" />
                    <button className='formBtn' type="submit">Submit</button>
                </form>
            </div>
            <div className='col-xl-8'>
                <div className='d-flex bg-dark text-white row justify-content-center mx-auto text-start'>
                    <div className='col-xl-4 col-lg-6 col-sm-12 col-12 mx-auto justify-content-center my-3'>
                        <h5 className=''>Company</h5>
                        <li>Bk-Herbs</li>
                        <li>Career</li>
                        <li>About</li>
                    </div>
                    <div className='col-xl-4 col-lg-6 col-sm-12 col-12   justify-content-center  my-3'>
                        <h5>Get Help</h5>
                        <li>Help Center</li>
                        <li>FAQ</li>

                        <li>General Information</li>
                    </div>
                    <div className='col-xl-4 col-lg-6 col-sm-12 col-12   justify-content-center  my-3'>
                        <h5>Blogs</h5>
                        <li>Botanical Earth</li>
                        <li>Life of the Herbs</li>

                        <li>ICBN</li>
                    </div>



                </div>
            </div>
            <div className=' col-xl-3 brandNameFooter justify-content-center align-items-center'>

                <h2 className='brandName fs-1'>
                    BK<span className='fs-3'>🌱</span>Herbs
                </h2>
            </div>
            <hr className='w-100 text-white' />



            <small className='text-muted'>&copy;2022 Copyright Bk-Herbs</small>

        </div>
    );
};

export default Footer;