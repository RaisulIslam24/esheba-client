import React from 'react';
import './GoogleMap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
const GoogleMap = () => {
    return (
        <section className="map-container w-100 mb-5 mt-5 container">
            <div className="row">
                <div className="col-md-6 left-side rounded">
                    <h2 className="title text-center">Our Office and address</h2>
                    <p className="description text-center">Our company provides the best services as you need.</p>
                    <p className="contact text-center">Contact to our office</p>
                    <div className="left-side-text">
                        <div className="row row-cols-2">
                            <div className="col">
                                <span className="icon-text"><FontAwesomeIcon className="icon" icon={faClock} />Working hours</span><br /> <hr />
                                <span className="icon-description">Mon - Sat 8:00am - 8:00pm</span><br />
                                <span className="icon-description">Sunday Closed</span>
                            </div>
                            <div className="col">
                                <span className="icon-text"><FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />Locations</span><br /> <hr />
                                <span className="icon-description">Dhaka, Badda</span><br />
                                <span className="icon-description">Dhaka, Bangladesh</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 ">
                    <iframe className="rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29207.256526814854!2d90.41200259136359!3d23.786323482954455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b71894d7cb%3A0x725a1e9ba77a8744!2sBadda%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1627836020236!5m2!1sen!2sbd" width="560" height="315" allowfullscreen=""></iframe>
                </div>
            </div>
        </section>
    );
};

export default GoogleMap;