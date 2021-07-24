import React from 'react';
import Blog from './Blog/Blog';

const PopularBlogs = () => {
    return (
        <div>
            <h2 className="text-center" style={{ padding: "0px 0px 20px 0px" }}>Popular Blogs</h2>
            <Blog />
            <div className="d-flex justify-content-center align-items-center pt-3">
                <button className="btn btn-danger">All Blogs</button>
            </div>
        </div>
    );
};

export default PopularBlogs;