// import axios from 'axios';
import React from 'react';
import { Link } from "react-router-dom";
import './SingleService.css';

const SingleService = (props) => {

  const { _id, serviceName, image, price } = props.feature;

  return (
    <div className="row">
      <div className="col-md-4">
        <div class="card">
          <img class="card-img-top service-img" src={image} alt="" />
          <div className="card-header d-flex justify-content-around">
            <img src=" " alt="" />
            <h6> Provider Name</h6>
          </div>
          <div class="card-body">
            <h5 class="card-title">{price}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link href="#" class="btn btn-primary">Book Now</Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SingleService;