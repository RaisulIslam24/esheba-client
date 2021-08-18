import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './Developers.css'

const Developers = ({ developer }) => {
    return (
        <div class="card developer m-3">
            <img src={developer.img} class="card-img-top" alt="devImage" />
            <div className="d-flex justify-content-between align-items-center mt-2">
                <h6 class="card-title fw-bold">{developer.name}</h6>
                <button className="btn btn-sm"><FontAwesomeIcon icon={faLinkedin} className="fa-2x text-primary" /></button>
            </div>
        </div>
        
    );
};

export default Developers;