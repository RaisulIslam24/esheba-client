import React from 'react';

const Review = ({ review: { image, userName, address, reviewText } }) => {
    return (
        <div class="item">
            <div class="shadow-effect">
                <img class="img-circle" src={image} />
                <p>{reviewText}</p>
            </div>
            <div class="testimonial-name">
                <h5>{userName}</h5>
                <small>from {address}</small>
            </div>
        </div>

    );
};

export default Review;