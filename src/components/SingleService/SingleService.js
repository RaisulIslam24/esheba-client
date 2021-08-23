import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './SingleService.css';
import spFive from '../../img/spFive.png';
const SingleService = (props) => {
  const { _id, serviceName, image, price } = props.feature;

  return (
    <div className="col-md-4 mt-3 container">
      <Link to={`/services/${_id}`} style={{ textDecoration: 'none' }}>
        <div className="card img-card">
          <img src={image} className="card-img-top" alt="..." style={{ height: '14rem', width: '100%' }} />
          <div className="card-header d-flex rounded">
            <img src={spFive} className="header-image" alt="providers" />
            <h5 className="header-title"> Kazi Rahat </h5>
          </div>
          <div className="card-body text-center text-dark">
            <h3 className="service-title" style={{ fontWeight: '600' }}>{serviceName}</h3>
            <h4 className="service-price" style={{ fontWeight: '600' }}>Price: ${price}</h4>
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