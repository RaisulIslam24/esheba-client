import React from 'react';
import './Review.css';

const Review = ({ review: { image, userName, address, reviewText } }) => {
    return (
        <div className="item">
            <div className="shadow-effect">
                <img className="img-circle" src={image} />
                <p>{reviewText}</p>
            </div>
            <div className="testimonial-name">
                <h5>{userName}</h5>
                <small>from {address}</small>
            </div>
        </div>

    );
};

export default Review;