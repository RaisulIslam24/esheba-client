import React, { useState } from 'react';
import { useEffect } from 'react';
import featuresData from '../../data/data.json'
import FeaturesDetails from '../FeaturesDetails/FeaturesDetails';
import './Features.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



const Features = () => {
    const [features, setFeatures] = useState([]);
    useEffect(() => {
        setFeatures(featuresData);
        console.log(featuresData);
    }, [])
    return (
<<<<<<< HEAD
        <div className="container-fluid">
            <div className="row mt-5" >
                <h1 style={{ textAlign: 'center' }}>Services</h1>
                {
                    features.map(feature => <FeaturesDetails feature={feature}></FeaturesDetails>)
                }
            </div>
=======
        <div className="row mx-3 all-services" >
            <h1 style={{textAlign:'center'}}>Services</h1>
             
         {
            features?.slice(0,3).map(feature => <FeaturesDetails feature={feature}></FeaturesDetails>) 
         }
       <Link to="/services">
       <div class="d-grid gap-2 col-4 my-5 mx-auto">
  <button class="btn btn-primary " type="button">Explore Services</button>
   
</div>
       </Link>
>>>>>>> faisal-tonoy
        </div>
    );
};

export default Features;