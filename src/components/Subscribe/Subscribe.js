import React, { useEffect } from 'react';
import './Subscribe.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Subscribe = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-center align-items-center flex-wrap">
                <div data-aos="fade-down" className="signUp border rounded p-5 bg-light shadow">
                    <h3 className="fw-bold mb-4">Sign Up here for more information</h3>
                    <form>
                        <div className="form-group">
                            <input name="name" type="text" placeholder="Name" className="form-control mt-3 mb-3" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="email" placeholder="Email" className="form-control mb-3" required />
                        </div>
                        <div className="form-group">
                            <input type="text" name="password" placeholder="Password" className="form-control mb-3" required />
                        </div>
                        <div className="row form-group">
                            <div className="col-md-6 p-2">
                                <Link to="/login"><input type="submit" className="form-control btn btn-outline-danger" value="Sign up" /></Link>
                            </div>
                            <div className="col-md-6 p-2">
                                <input type="submit" className="form-control btn btn-outline-danger" value="Start free trial" />
                            </div>
                        </div>
                    </form>
                </div>
                <div data-aos="fade-up" className="subscribe-img">
                    <img src="https://previews.123rf.com/images/liravega258/liravega2581901/liravega258190100029/122214330-e-mail-news-subscription-promotion-flat-vector-illustration-design-online-news-news-update-informati.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Subscribe;