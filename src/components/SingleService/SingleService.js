import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './SingleService.css';

const SingleService = (props) => {
  const { _id, serviceName, image, price } = props.feature;

  return (
    <div className="col-md-4 mt-3">
      <Link to={`/services/${_id}`} style={{ textDecoration: 'none' }}>
        <div className="card img-card">
          <img src={image} className="card-img-top" alt="..." style={{ height: '18rem', width: '100%' }} />
          <div className="card-body text-center text-dark">
            <h3 className="card-title" style={{ fontWeight: '600' }}>{serviceName}</h3>
            <h4 className="card-title" style={{ fontWeight: '600' }}>Price: ${price}</h4>
            <div className="fa-icon d-flex justify-content-center">
              <FontAwesomeIcon className="fas" icon={faStar} /> <br />
              <FontAwesomeIcon className="fas" icon={faStar} /> <br />
              <FontAwesomeIcon className="fas" icon={faStar} /> <br />
              <FontAwesomeIcon className="fas" icon={faStar} /> <br />
              <FontAwesomeIcon className="fas Fa" icon={faStar} /> <br />
              <span className="text-center feedback">(1242 Feedback)</span>
            </div>
            <small className="mb-3 courtesy">Courtesy - <span className="sheba">E-Sheba</span></small>
          </div>
        </div>
      </Link>
    </div>

  );
};

export default SingleService;