import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Developers = ({ developer }) => {
    return (
        <div class="card m-3" style={{ boxShadow: '8px 8px #3CB371' }}>
            <img src={developer.img} class="card-img-top"/>
            <div className="d-flex justify-content-between align-items-center mt-2">
                <h6 class="card-title fw-bold">{developer.name}</h6>
                <button className="btn btn-sm"><FontAwesomeIcon icon={faLinkedin} className="fa-2x text-success" /></button>
            </div>
        </div>
        
    );
};

export default Developers;