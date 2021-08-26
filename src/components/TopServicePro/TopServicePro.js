import React, { useEffect, useState } from 'react';
import './TopServicePro.css';
// Carousel package //
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TopProviderFakeData from '../../data/TopProviderFakeData';
import TopProvider from '../TopProvider/TopProvider';

const TopServicePro = () => {
    const [data, setData] = useState([])
    console.log(data)
    useEffect(() => {
        setData(TopProviderFakeData)
    }, [data.length])

    // Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 3500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: { items: 1 },
            600: { items: 3 },
            1000: { items: 3 }
        }
    };
    return (
        <>
            <section className="testimonial-section">
                <div className="container testimonial-container">
                    <h5 data-aos="fade-up" class="title">Top <span className="">Service Provider</span></h5>

                    <p className="top-description mt-2" data-aos="fade-down">As E-Sheba is a service based web application so our main priority is to provide the service with the best quality professional with a reasonable price, that’s where the E-Sheba service section comes .</p>
                    <div className="row">
                        {
                            data.length ?
                                <div className="col-md-12">
                                    <OwlCarousel id="customer-testimonial" className=" owl-slide" {...options}>
                                        {data?.map((provider) => <TopProvider provider={provider} key={provider.service} />)}
                                    </OwlCarousel>
                                </div>
                                :
                                <div className="col-md-12">
                                    <h1>Loading...</h1>
                                </div>
                        }
                    </div>
                    {/* owl-carousel */}
                </div>
            </section>

        </>
    );
};

export default TopServicePro;