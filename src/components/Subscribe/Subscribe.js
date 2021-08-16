import React, { useEffect } from 'react';
import './Subscribe.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Subscribe = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <div className="container mt-5">
            <div className="row">
                <div data-aos="fade-down" className="col-md-6 col-10 signUp border rounded p-3 bg-light shadow">
                    <h3 className="mb-2">Sign Up here for more information</h3>
                    <form>
                        <div className="form-group">
                            <input name="name" type="text" placeholder="Name" className="form-control mt-3 mb-3" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="email" placeholder="Email" className="form-control mb-3" required />
                        </div>
                        <div className="form-group">
                            <input type="password" name="password" placeholder="Password" className="form-control mb-3" required />
                        </div>
                        <div className="row form-group">
                            <div className="col-md-6">
                                <input type="submit" className="form-control btn btn-outline-danger" value="Sign up" />
                            </div>
                            <div className="col-md-6">
                                <input type="submit" className="form-control btn btn-outline-danger" value="Start free trial" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <img src="https://previews.123rf.com/images/liravega258/liravega2581901/liravega258190100029/122214330-e-mail-news-subscription-promotion-flat-vector-illustration-design-online-news-news-update-informati.jpg" alt="" className="w-75" />
                </div>
            </div>
        </div>
    );
};

export default Subscribe;