import React, { useState } from 'react';
import { useEffect } from 'react';
import featuresData from '../../data/data.json'
import FeaturesDetails from '../FeaturesDetails/FeaturesDetails';
import './Features.css';
import { Link } from "react-router-dom";
import ServiceSkeleton from '../../Skeleton/ServiceSkeleton/ServiceSkeleton';



const Features = () => {
  const [features, setFeatures] = useState([]);
  const [timer, setTimer] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTimer(false);
    }, 8000);
  }, []);

  useEffect(() => {
    setFeatures(featuresData);
    console.log(featuresData);
  }, [])
  return (
    (( timer) ?

      <div className="row mx-3">
        {[1, 2, 3].map((loading) => (
          <div className="col-md-4 mt-3">
            <ServiceSkeleton />
          </div>
        ))}
      </div>
      :
      <div className="row mx-3 all-services" >
        <h1 style={{ textAlign: 'center' }}>Our Top Services</h1>

        {
          features?.slice(0, 3).map(feature => <FeaturesDetails feature={feature}></FeaturesDetails>)
        }
        <Link to="/services">
          <div class="d-grid gap-2 col-4 my-5 mx-auto">
            <button class="btn btn-primary " type="button">Explore Services</button>

          </div>
        </Link>
      </div>
    ));
};

export default Features;