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
        <div className="blog-details-container">
            <div className="blog-content-div">
                <div
                    className="blog-details-div"
                >
                    <h3
                        data-aos="fade-down"
                        data-aos-duration="1000">
                        {clickedBlog?.blogTitle}
                    </h3>
                    <p
                        className="text-justify"
                        data-aos="fade-up"
                        data-aos-duration="1000">
                        {clickedBlog?.blogDescription}
                    </p>
                </div>
                <img
                    src={clickedBlog?.image} alt=""
                    data-aos="fade-left"
                    data-aos-duration="1000"
                />
            </div>
        </div>
    );
};

export default BlogDetails;