import React, { useState, useEffect } from 'react';
import Blog from './Blog/Blog';
import fakeBlogData from '../../../data/fakeBlogData.json';
import { useHistory } from 'react-router-dom';
import './PopularBlogs.css';

const PopularBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const history = useHistory();
    useEffect(() => {
        setBlogs(fakeBlogData)
    }, [])
    return (
        <div className="popular-blog">
            <h2 data-aos="fade-right">Popular Blogs</h2>
            <div className="blog-container">
                {blogs?.slice(0, 3).map((blog) =>
                    <Blog key={blog.id} blog={blog} />
                )}
            </div>
            <div className="blogs-button">
                <button data-aos="fade-right" onClick={() => history.push('/blogs')} className="btn btn-danger">All Blogs</button>
            </div>
        </div>
    );
};

export default PopularBlogs;