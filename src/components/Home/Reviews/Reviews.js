import React from 'react';
import fakeReviewsData from '../../../data/fakeReviewsData.json';
import Review from './Review/Review';
import './Reviews.css';

// Carousel package //
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Reviews = () => {

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
        <section className="testimonial-section">
            <div className="container testimonial-container">
                <h4 data-aos="fade-right">"TESTIMONIALS"</h4>
                <h3 data-aos="fade-left">What our clients are Saying</h3>
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel id="customer-testimonial" className="owl-carousel owl-theme" {...options}>
                            {fakeReviewsData.map((review, index) => <Review review={review} key={index} />)}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;