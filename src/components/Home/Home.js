import React from 'react';
import PopularBlogs from './PopularBlogs/PopularBlogs';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <>
          <PopularBlogs />
          <Reviews />
        </>
    );
};

export default Home;