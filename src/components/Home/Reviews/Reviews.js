
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import fakeReviewsData from '../../../data/fakeReviewsData.json';
import Review from './Review/Review';
import './Reviews.css';

const Reviews = () => {
    //Owl Carousel Settings

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
        <section id="testimonial" className="testimonials pt-5 pb-5">
            <div className="container mt-4">
                <h4 className="text-center">"TESTIMONIALS"</h4>
                <h3 className="text-center">What our clients are Saying</h3>
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