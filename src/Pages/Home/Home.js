import React from 'react';
import Banner from '../Banner/Banner';
import Slider from "../Home/Slider"
import "./Home.css"
const Home = () => {
    return (
        <div className='home'>
            <Banner></Banner>
            {/* <Slider></Slider> */}
        </div>
    );
};

export default Home;