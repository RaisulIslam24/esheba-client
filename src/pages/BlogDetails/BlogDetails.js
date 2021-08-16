import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/Home/NavBar/NavBar';
import fakeBlogData from '../../data/fakeBlogData.json';
import DetailsSkeleton from '../../Skeleton/DetailsSkeleton/DetailsSkeleton';
import './BlogDetails.css';


const BlogDetails = () => {
    const [blogs, setBlogs] = useState([]);
    const [skeletonTimer, setSkeletonTimer] = useState(true)
    const { blogId } = useParams();

    useEffect(() => {
        setTimeout(() => {
            setSkeletonTimer(false);
        }, 4000);
    }, []);

    useEffect(() => {
        setBlogs(fakeBlogData)
    }, []);

    const clickedBlog = blogs?.find(({ id }) => id === Number(blogId));

    return (
        <>
        <NavBar />
            {skeletonTimer ?
                <DetailsSkeleton />
                :
                <div className="blog-details-container">
                    <div className="blog-content-div">
                        <img
                            src={clickedBlog?.image} alt=""
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        />
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
                    </div>
                </div>
            }
            <Footer />
        </>
    );
};

export default BlogDetails;