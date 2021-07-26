import React, { useEffect, useState } from 'react';
import Blog from '../../components/Home/PopularBlogs/Blog/Blog';
import fakeBlogData from '../../data/fakeBlogData.json';
import './AllBlogs.css';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        setBlogs(fakeBlogData)
    }, [])
    return (
            <div className="d-flex justify-content-center align-items-center flex-wrap pt-5">
                {blogs?.map((blog) =>
                    <Blog key={blog.id} blog={blog} />
                )}
            </div>
    );
};

export default AllBlogs;