import React from 'react';
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

const competencies = [
    {
        name: "Home Cleaning",
        icon: <FontAwesomeIcon icon={faHome} className="fa-2x text-success" />,
        description: "Lorem ipsum dolor sit amet"
    },
    {
        name: "Car Wash",
        icon: <FontAwesomeIcon icon={faCar} className="fa-2x text-success" />,
        description: "Lorem ipsum dolor sit amet"
    },
    {
        name: "Painting service",
        icon: <FontAwesomeIcon icon={faPaintRoller} className="fa-2x text-success" />,
        description: "Lorem ipsum dolor sit amet"
    },
    {
        name: "Electrical Service",
        icon: <FontAwesomeIcon icon={faBolt} className="fa-2x text-success" />,
        description: "Lorem ipsum dolor sit amet"
    },
    {
        name: "Carpentry service",
        icon: <FontAwesomeIcon icon={faHammer} className="fa-2x text-success" />,
        description: "Lorem ipsum dolor sit amet"
    },
    {
        name: "Furniture service",
        icon: <FontAwesomeIcon icon={faChair} className="fa-2x text-success" />,
        description: "Lorem ipsum dolor sit amet"
    }
]

const AboutUs = () => {
    return (
        <section className="container">
            <div>
                <h2 className="mt-5 mb-4 fw-bold text-success">COMPANY BACKGROUND</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, fugiat. Labore explicabo laboriosam animi incidunt impedit ab, sapiente aspernatur reprehenderit voluptatibus voluptate distinctio commodi eligendi totam officia alias ad repellat iste laborum aliquam necessitatibus. Saepe ex quas nobis in quia, pariatur molestias minima, quaerat dolor, unde temporibus! Aspernatur reiciendis laudantium amet neque minima ipsa quis assumenda non distinctio recusandae aliquam nam natus, veniam repellat omnis eveniet accusantium ex adipisci. Quis odio sequi fuga temporibus dignissimos illo cupiditate ex maiores nemo consectetur, laborum recusandae ab reprehenderit quae voluptatum placeat tenetur cumque repudiandae atque corrupti nostrum, itaque nobis animi expedita. Dicta, minus.</p>
            </div>
            <div>
                <h2 className="mt-5 mb-4 fw-bold text-success">CORE COMPETENCIES</h2>
                <p>We offer full spectrum of services to help organizations function more effectively. Some of our services are highlighted below:</p>
            </div>
            <div className="row">
                <div className="row row-cols-2 row-cols-md-6 mt-3">
                    {competencies.map(competence => <Competencies competence={competence}></Competencies>)}
                </div>
            </div>
            <div>
                <h2 className="mt-5 mb-4 fw-bold text-success">OUR EXPERTISE</h2>
                <p>We are a team of experts, coming together from diverse background and skill sets are shown below:</p>
            </div>
            <div className="d-flex flex-wrap justify-content-between mt-5">
                <img src={react} alt="" />
                <img src={javascript} alt="" />
                <img src={nodejs} alt="" />
                <img src={uxui} alt="" />
                <img src={it_support} alt="" />
                <img src={android} alt="" />
            </div>
        </section >
    );
};

export default AboutUs;