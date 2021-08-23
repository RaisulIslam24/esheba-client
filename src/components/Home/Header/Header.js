import React, { useState } from 'react';
import { Carousel, Col, Image, Row } from 'react-bootstrap';
import headerImage1 from '../../../images/chat.png';

const Header = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} prevLabel="" nextLabel="" style={{ backgroundColor: '#292b2c' }}>
            <Carousel.Item>
                <div className="w-100 bg-dark text-white text-center" style={{ height: 600 }}>
                    <Row className="justify-content-center align-items-center">
                        <Col md={6}>
                            <h1 style={{ fontSize: "44pt" }}><span style={{ color: 'cyan' }}>Strike</span> up a <br />conversation on <br />live <span style={{ color: 'goldenrod' }}>chat</span></h1>
                        </Col>

                        <Col md={6}>
                            <Image src={headerImage1} alt="" className="w-75" />
                        </Col>
                    </Row>
                </div>
                <Carousel.Caption>
                    <p>Our Specialists are now available to chat online!</p>
                    <button className="btn btn-outline-light">Chat with us</button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="w-100 bg-dark text-white text-center" style={{ height: 600 }}>
                    <Row className="justify-content-center align-items-center">
                        <Col md={6}>
                            <h1 style={{ fontSize: "44pt" }}><span style={{ color: 'cyan' }}>Strike</span> up a <br />conversation on <br />live <span style={{ color: 'goldenrod' }}>chat</span></h1>
                        </Col>

                        <Col md={6}>
                            <Image src={headerImage1} alt="" className="w-75" />
                        </Col>
                    </Row>
                </div>
                <Carousel.Caption>
                    <p>Our Specialists are now available to chat online!</p>
                    <button className="btn btn-outline-light">Chat with us</button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Header;