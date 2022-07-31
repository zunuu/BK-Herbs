import React from 'react';
import banner1 from '../../images/Rare Herbs.jpg'
import banner2 from '../../images/Raw Spices (Organic).jpg'
import banner3 from '../../images/Bio-Pharmacy.jpg'
import banner4 from '../../images/Aromatic Oil.jpg'
import banner5 from '../../images/Ayurveda.jpg'
import banner6 from '../../images/Culinary Herbs.jpg'
import banner7 from '../../images/Herbal medicines.jpg'
import { Carousel } from 'react-bootstrap';
const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Rare Herbs</h3>
                    <p>We are providing the best quality Rare Herbs of the Botanical World</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Raw Spices (Organic)</h3>
                    <p>Raw Spices for Culinary arts and Homeopathic medicines are the most Premium products of our company</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Bio-Pharmacy</h3>
                    <p>We are serving the best quality Bio-Pharmacy raw materials</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={banner4}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Aromatic Oil</h3>
                    <p>Aromatic Oil is one of the premium products section in our company</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={banner5}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Ayurveda</h3>
                    <p>We have the unique stocks of Raw materials, organic & dried herbs of the Ayurveda sector</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={banner6}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Culinary Herbs</h3>
                    <p>Fresh and authentic Culinary Herbs are the highest sold products of us</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={banner6}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Herbal medicines</h3>
                    <p>We believe in quality, so Herbal medicines are. Dried and organic raw materials are the crucial part for the production of the Herbal Medicines</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
};

export default Banner;