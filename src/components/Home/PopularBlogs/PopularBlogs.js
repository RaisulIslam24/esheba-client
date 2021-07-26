import React, { useState, useEffect } from 'react';
import Blog from './Blog/Blog';
import fakeBlogData from '../../../data/fakeBlogData.json';
import { useHistory } from 'react-router-dom';

const PopularBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const history = useHistory();
    useEffect(() => {
        setBlogs(fakeBlogData)
    }, [])
    return (
        <div>
            <h2 className="text-center mt-5" style={{ paddingBottom: "20px" }}>Popular Blogs</h2>
            <div className="d-flex justify-content-center align-items-center flex-wrap">
                {blogs?.slice(0, 3).map((blog) =>
                    <Blog key={blog.id} blog={blog} />
                )}
            </div>
            <div className="d-flex justify-content-center align-items-center pt-3">
                <button onClick={() => history.push('/blogs')} className="btn btn-danger">All Blogs</button>
            </div>
        </div>
    );
};

export default PopularBlogs;