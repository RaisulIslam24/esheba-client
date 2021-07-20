import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Header = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} prevLabel="" nextLabel="">
            <Carousel.Item>
                <div className="w-100 bg-dark text-white text-center" style={{ height: 600 }}>
                    <h1>Slide One</h1>
                </div>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="w-100 bg-dark text-center text-white" style={{ height: 600 }}>
                    <h1>Slide Two</h1>
                </div>

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="w-100 bg-dark text-center text-white" style={{ height: 600 }}>
                    <h1>Slide Three</h1>
                </div>

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Header;