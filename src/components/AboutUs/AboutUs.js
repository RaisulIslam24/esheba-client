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
import Aos from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';

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

const AboutUs = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <section className="container">
            <div data-aos="fade-right">
                <h2 className="mt-5 mb-4 fw-bold text-success">COMPANY BACKGROUND</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, fugiat. Labore explicabo laboriosam animi incidunt impedit ab, sapiente aspernatur reprehenderit voluptatibus voluptate distinctio commodi eligendi totam officia alias ad repellat iste laborum aliquam necessitatibus. Saepe ex quas nobis in quia, pariatur molestias minima, quaerat dolor, unde temporibus! Aspernatur reiciendis laudantium amet neque minima ipsa quis assumenda non distinctio recusandae aliquam nam natus, veniam repellat omnis eveniet accusantium ex adipisci. Quis odio sequi fuga temporibus dignissimos illo cupiditate ex maiores nemo consectetur, laborum recusandae ab reprehenderit quae voluptatum placeat tenetur cumque repudiandae atque corrupti nostrum, itaque nobis animi expedita. Dicta, minus.</p>
            </div>
            <div data-aos="fade-left">
                <h2 className="mt-5 mb-4 fw-bold text-success">CORE COMPETENCIES</h2>
                <p>We offer full spectrum of services to help organizations function more effectively. Some of our services are highlighted below:</p>
                <div className="row row-cols-2 row-cols-md-6 mt-3">
                    {competencies.map(competence => <Competencies competence={competence}></Competencies>)}
                </div>
            </div>
            <div className="fade-down">
                <h2 className="mt-5 mb-4 fw-bold text-success">KEY FACTS AND FIGURES</h2>
                <p>Discover the key facts and figures behind E-Sheba:</p>
                <div className="d-flex justify-content-around flex-wrap">
                    <div className="item">
                        <h1 className="fw-lg"><CountUp start={600} end={800} suffix="+" duration={3} /></h1>
                        <h6>Services Provided</h6>
                    </div>
                    <div className="item">
                        <h1 className="fw-lg"><CountUp end={450} suffix="+" duration={3} /></h1>
                        <h6>Clients Visits Each Month</h6>
                    </div>
                    <div className="item">
                        <h1 className="fw-lg"><CountUp end={200} suffix="%" duration={3} /></h1>
                        <h6>Our Client Satisfaction Rate</h6>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up">
                <h2 className="mt-5 mb-4 fw-bold text-success">OUR EXPERTISE</h2>
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