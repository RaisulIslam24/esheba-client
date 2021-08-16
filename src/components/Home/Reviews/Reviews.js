import React, { useEffect, useState } from 'react';
import Review from './Review/Review';
import './Reviews.css';

// Carousel package //
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([])

    // load reviews from database
    useEffect(() => {
        fetch('https://e-sheba.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
console.log(reviews)
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
                            {reviews?.map((review) => <Review review={review} key={review._id} />)}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reviews;