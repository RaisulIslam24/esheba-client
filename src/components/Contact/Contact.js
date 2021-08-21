import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';
import cream from '../../img/cream.png';
import cover from '../../img/E-Sheba-logo/cover.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
    return (
        <section className="contact-container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div class="navbar-nav text-center ">
                            <Link class="nav-link" aria-current="page" to="/">Home</Link>
                            <Link class="nav-link" to="/">Services</Link>
                            <Link class="nav-link" to="/">About Us</Link>
                            <Link class="nav-link" to="/">FAQ's</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="text-center container">
                <h5 data-aos="fade-up" class="support-title">Contact<span className=""> Us</span></h5>
                <div className="row mt-5 mb-5">
                    <div className="col-md-6">
                        <img className="contact-img" src={cream} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="contact-title text-start">
                            <h2 className="text-start h2"> Get in touch</h2>
                            <p className="p">We'd Love to Hear From You, Lets Get In Touch!</p>
                        </div>
                        <div className="row">
                            <div className="col-6 text-start col-left">
                                <h6 className="fw-bold"> Address</h6>
                                <p className="p">4005 Silver business point India</p>
                                <h6 className="fw-bold"> Email</h6>
                                <p className="p">EShebaSupport@gmail.com</p>
                            </div>
                            <div className="col-6 text-start col-right">
                                <h6 className="fw-bold"> Phone</h6>
                                <p className="p">0211455452</p>
                                <h6 className="fw-bold"> Additional Information</h6>
                                <p className="p">We are open: Monday - Saturday, 10AM - 5PM and closed on sunday sorry for that.</p>
                            </div>
                        </div>

                        <div className="text-start">
                            <h6 className="social-text">Social</h6>
                            <div className="d-flex social-icon">
                                <FontAwesomeIcon className="contact-icon" icon={faFacebookSquare} />
                                <FontAwesomeIcon className="contact-icon" icon={faTwitterSquare} />
                                <FontAwesomeIcon className="contact-icon" icon={faYoutubeSquare} />
                                <FontAwesomeIcon className="contact-icon" icon={faInstagramSquare} />
                            </div>
                        </div>
                        <div className="contact-line text-start mt-3">
                            <span class="contact-1"></span> <br />
                            <span class="contact-2"></span> <br />
                            <span class="contact-3"></span>
                        </div>
                    </div>
                </div>
                
                <div className="contact">
                    <div className="contact-title-two">
                        <h3>LEAVE US A MESSAGE</h3>
                        <p>-Good For Nature, Good For You-</p>
                    </div>
                    <div className="">
                        <form>
                            <div className="d-flex justify-content-between">
                                <input type="text" name="Name" placeholder="Email"/>
                                <input type="text" name="email*" placeholder="Email"/>
                                <input type="text" name="Phone number" placeholder="Email"/>
                            </div>
                            <textarea type="text" name="message" placeholder="your message"/>
                        </form>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Contact;