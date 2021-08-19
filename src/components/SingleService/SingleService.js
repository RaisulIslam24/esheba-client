import React from 'react';
import { Link } from "react-router-dom";
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
          </div>
        </div>
      </Link>
    </div>

  );
};

export default SingleService;