import React, { useState, useEffect } from 'react';
import Blog from './Blog/Blog';
import fakeBlogData from '../../../data/fakeBlogData.json';
import { useHistory } from 'react-router-dom';
import './PopularBlogs.css';
import BlogSkeleton from '../../../Skeleton/BlogSkeleton/BlogSkeleton';

const PopularBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [skeletonTimer, setSkeletonTimer] = useState(true);
    const history = useHistory();

    useEffect(() => {
        setTimeout(() => {
            setSkeletonTimer(false);
        }, 8000);
    }, []);

    useEffect(() => {
        setBlogs(fakeBlogData)
    }, [])
    return (((skeletonTimer) ?

        <div className="row mx-3  mt-5">
            {[1, 2, 3].map((loading) => (
                <div className="col-md-4 mt-3">
                    <BlogSkeleton />
                </div>
            ))}
        </div>
        :
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
    ));
};

export default PopularBlogs;