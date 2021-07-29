import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './FeaturesDetails.css';

const FeaturesDetails = (props) => {
  
    const {id,name,image}=props.feature;
    return (
        <div className="col-md-4 mt-3">
    <Link to={`/services/${id}`}>
    <div className="card img-card mx-2">
       <img src={image} className="card-img-top" alt="..."style={{height:'24rem'}} />
        <div className="card-body body-bg">
          <h4 className="card-title" style={{fontWeight:'600'}}>{name}</h4>
        </div>
       </div>
    </Link>
   </div>
     
  
    );
};

export default FeaturesDetails;