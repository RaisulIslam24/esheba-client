import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './TopProvider.css';
import { Link } from 'react-router-dom';
const TopProvider = (props) => {
    const { image, location, providers, profile, service } = props.provider;

    return (
        <div className="item">
            <div className="shadow-effect">
                <div className="">
                    <img className="img-fluid" src={image} alt="cover" />
                </div>
                <div className="d-flex justify-content-start">
                    <img className="top-circle" src={profile} alt="reviewer" />
                    <p className="fw-bold providers">{providers}</p>
                </div>
                <div className="d-flex justify-content-start">
                    <button className="sp-btn top-btn-one">Featured</button>
                    <button className="sp-btn top-btn-two">verified</button>
                </div>
                <small className="top-text">IT-services</small>
                <div className="">
                    <Link to="" className="text-decoration-none"><h6>{service}</h6></Link>
                    <div className="fa-icon d-flex">
                        <FontAwesomeIcon className="fas" icon={faStar} /> <br />
                        <FontAwesomeIcon className="fas" icon={faStar} /> <br />
                        <FontAwesomeIcon className="fas" icon={faStar} /> <br />
                        <FontAwesomeIcon className="fas" icon={faStar} /> <br />
                        <FontAwesomeIcon className="fas Fa" icon={faStar} /> <br />
                        <span className="text-center feedback">(1242 Feedback)</span>
                    </div>
                    <small className="mb-3 courtesy">Courtesy - <span className="sheba">E-Sheba</span></small>
                    <hr/>
                    <small className="location">{location}</small>
                </div>
            </div>
        </div>
    );
};

export default TopProvider;