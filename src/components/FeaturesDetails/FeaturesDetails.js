import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './FeaturesDetails.css';

const FeaturesDetails = (props) => {
<<<<<<< HEAD
  const { id, name, image } = props.feature;
  return (
    <div className="col-md-4 mt-3">
      <div className="card mx-2">
        <img src={image} className="card-img-top" alt="..." style={{ height: '18rem' }} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </div>
  );
=======
  
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
>>>>>>> faisal-tonoy
};

export default FeaturesDetails;