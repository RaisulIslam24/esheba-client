import React from 'react';
import Carousel from "react-elastic-carousel";
import Review from './Review/Review';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
]

const Reviews = () => {
    return (
        <div className="p-4 mt-5">
            <h2 className="text-center">Customer Reviews</h2>
            <div className="mt-4">
                <Carousel breakPoints={breakPoints}>
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                </Carousel>
            </div>
        </div>
    );
};

export default Reviews;