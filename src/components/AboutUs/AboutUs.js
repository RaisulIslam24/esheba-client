import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCar, faPaintRoller, faBolt, faHammer, faChair } from '@fortawesome/free-solid-svg-icons';
import './AboutUs.css';
import Competencies from './Competencies/Competencies';
import react from '../../images/react.png';
import javascript from '../../images/javascript.png';
import nodejs from '../../images/nodejs.png';
import uxui from '../../images/uxui.jpg';
import it_support from '../../images/it_support.jpg';
import android from '../../images/android.png';
import CountUp from 'react-countup';
import Developers from './Developers/Developers';
import Rahat from '../../images/Rahat.png';
import Faisal from '../../images/Faisal.png';
import Shahinur from '../../images/Shahinur.jpg'
import Raisul from '../../images/Raisul.jpg';
import Rifat from '../../images/Rifat.jpg';
import Award1 from '../../images/a1.jpg';
import Award2 from '../../images/a2.jpg';
import Award3 from '../../images/a3.jpg';
import Award4 from '../../images/a4.jpg';

const competencies = [
    {
        name: "Home Cleaning",
        icon: <FontAwesomeIcon icon={faHome} className="fa-3x text-success" />
    },
    {
        name: "Car Wash",
        icon: <FontAwesomeIcon icon={faCar} className="fa-3x text-success" />
    },
    {
        name: "Painting service",
        icon: <FontAwesomeIcon icon={faPaintRoller} className="fa-3x text-success" />
    },
    {
        name: "Electrical Service",
        icon: <FontAwesomeIcon icon={faBolt} className="fa-3x text-success" />
    },
    {
        name: "Carpentry service",
        icon: <FontAwesomeIcon icon={faHammer} className="fa-3x text-success" />
    },
    {
        name: "Furniture service",
        icon: <FontAwesomeIcon icon={faChair} className="fa-3x text-success" />
    }
]

const developers = [
    {
        name: 'Kazi Md. Bokhtiar Uddin Rahat',
        img: Rahat
    },
    {
        name: 'Faisal Ahmed Tonoy',
        img: Faisal
    },
    {
        name: 'Shahinur Alam Bhuiyan',
        img: Shahinur
    },
    {
        name: 'Md. Raisul Islam',
        img: Raisul
    },
    {
        name: 'Mohammed Rifat',
        img: Rifat
    }
]

const AboutUs = () => {
    return (
        <section>
            <main className="header-container d-flex flex-column justify-content-around">
                <div>
                    <h1>WELCOME TO E-SHEBA</h1>
                    <h1>THE <span className="fw-bold">BEST</span > SERVICE <span className="fw-bold">EXPERTS</span> AND</h1>
                    <h1><span className="fw-bold">QUALIFIED</span> STAFF</h1>
                </div>
                <div>
                    <h3 className="text-white pt-5 pb-2">E-Sheba is a new on-demand service platform <br /> that connects households and businesses with <br /> the best service providers, comes in.</h3>
                    <button className="btn btn-danger">CONTACT NOW</button>
                </div>
            </main>
            <div className="container">
                <h3 className="mt-5 mb-4 fw-bold">CORE COMPETENCIES</h3>
                <p>We offer full spectrum of services to help organizations function more effectively. Some of our services are highlighted below:</p>
                <div className="row row-cols-2 row-cols-md-6 mt-3">
                    {competencies.map(competence => <Competencies competence={competence}></Competencies>)}
                </div>
            </div>
            <div className="container">
                <h3 className="mt-5 mb-4 fw-bold">KEY FACTS AND FIGURES</h3>
                <p>Discover the key facts and figures behind E-Sheba:</p>
                <div className="d-flex justify-content-around flex-wrap">
                    <div className="item">
                        <h1 className="fw-lg"><CountUp start={700} end={800} suffix="+" duration={3} /></h1>
                        <h6>Services Provided</h6>
                    </div>
                    <div className="item">
                        <h1 className="fw-lg"><CountUp start={350} end={450} suffix="+" duration={3} /></h1>
                        <h6>Clients Visits Each Month</h6>
                    </div>
                    <div className="item">
                        <h1 className="fw-lg"><CountUp start={600} end={700} suffix="+" duration={3} /></h1>
                        <h6>Happy Clients</h6>
                    </div>
                    <div className="item">
                        <h1 className="fw-lg"><CountUp start={60} end={99} suffix="%" duration={3} /></h1>
                        <h6>Our Client Satisfaction Rate</h6>
                    </div>
                </div>
            </div>
            <div className="container">
                <h3 className="mt-5 mb-4 fw-bold">OUR TEAM</h3>
                <p>We are Proud to have a Team of Dedicated Developers with varying interests and background. Please read through their profiles to learn more.</p>
                <div className="row row-cols-1 row-cols-md-6 p-3">
                    {developers.map(developer => <Developers developer={developer}></Developers>)}
                </div>
            </div>
            <div className="container">
                <h3 className="mt-5 mb-4 fw-bold">Recognition And Awards</h3>
                <p>We’re honored to be recognized for quality of service, safety and security. Some of the awards we’ve received include:</p>
                <div className="row row-cols-1 row-cols-md-4 text-center pt-4">
                    <div class="card awards">
                        <img src={Award1} class="card-img-top" />
                        <p class="card-body">Excellence In Customer Service</p>
                    </div>
                    <div class="card awards">
                        <img src={Award2} class="card-img-top" />
                        <p class="card-body">Best Use Of Technology In Services</p>
                    </div>
                    <div class="card awards">
                        <img src={Award3} class="card-img-top" />
                        <p class="card-body">International Organization Of The Year</p>
                    </div>
                    <div class="card awards">
                        <img src={Award4} class="card-img-top" />
                        <p class="card-body">Service And Security: Cluster Of The Year</p>
                    </div>
                </div>
            </div>
            <div className="container mb-5">
                <h3 className="mt-5 mb-4 fw-bold">OUR EXPERTISE</h3>
                <p>We are a team of experts, coming together from diverse background and skill sets are shown below:</p>
                <div className="d-flex flex-wrap justify-content-between mt-5 mb-5">
                    <img className="tech" src={react} alt="" />
                    <img className="tech" src={javascript} alt="" />
                    <img className="tech" src={nodejs} alt="" />
                    <img className="tech" src={uxui} alt="" />
                    <img className="tech" src={it_support} alt="" />
                    <img className="tech" src={android} alt="" />
                </div>
            </div>
        </section >
    );
};

export default AboutUs;