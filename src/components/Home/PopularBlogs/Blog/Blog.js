import React from 'react';
import { useHistory } from 'react-router-dom';

const cardStyle= {
    width: '350px',
    marginLeft: '30px',
    marginBottom: '25px'
}

const cardText = {
    height: "180px",
    fontSize: "15px",
    fontWeight: "400",
    color: "gray",
}

const readMore = {
    color: '#5653f1', 
    cursor: 'pointer', 
    fontWeight: '600'
}

const Blog = ({ blog: { id, image, blogTitle, blogDescription } }) => {
    const history = useHistory();
    const truncate = (text, n) => {
        return text?.length > n ? text.substr(0, n - 1) + " ..." : text;
    }

    console.log(id * 1000)

    return (
        <div className="card" style={cardStyle} data-aos="zoom-in" data-aos-duration={500 * `${id}`}>
            <img src={image} className="card-img-top" alt={id} />
            <div className="card-body">
                <h5 className="card-title">{blogTitle}</h5>
                <p className="card-text text-justify " style={cardText}>
                    {truncate(blogDescription, 315)}
                    <span style={readMore} onClick={() => history.push(`/blogDetails/${id}`)}>read more</span>
                </p>
            </div>
        </div>
    );
};

export default Blog;