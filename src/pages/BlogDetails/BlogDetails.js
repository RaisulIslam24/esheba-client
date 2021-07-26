import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeBlogData from '../../data/fakeBlogData.json';
import './BlogDetails.css';


const BlogDetails = () => {
    const [blogs, setBlogs] = useState([]);
    const { blogId } = useParams();
    useEffect(() => {
        setBlogs(fakeBlogData)
    }, []);

    const clickedBlog = blogs?.find(({ id }) => id === Number(blogId));

    return (
        <div className="blogDetailsContainer">
            <div className="blogContentDiv">
                <div className="blogDetailsDiv">
                    <h3>{clickedBlog?.blogTitle}</h3>
                    <p className="text-justify ">{clickedBlog?.blogDescription}</p>
                </div>
                <img src={clickedBlog?.image} alt="" />
            </div>
        </div>
    );
};

export default BlogDetails;