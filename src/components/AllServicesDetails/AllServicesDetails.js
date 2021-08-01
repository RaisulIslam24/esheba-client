import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './AllServicesDetails.css';

const AllServicesDetails = (props) => {
    const {id,name,image}=props.allService;

    return (
        <div  className="col-md-4 mt-3 services-details">
        <Link to={`/services/${id}`}>
        <div className="card  img-card my-3 mx-2">
        <img src={image} className="card-img-top " alt="..."style={{height:'24rem'}} />
            <div className="card-body body-bg">
              <h5 className="card-title">{name}</h5>
            </div>
           </div>
        </Link>
       </div>
    );
};

export default AllServicesDetails;