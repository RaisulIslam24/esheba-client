import React, { useState, useEffect } from 'react';
import './TopServices.css';
import { Link } from "react-router-dom";
import ServiceSkeleton from '../../Skeleton/ServiceSkeleton/ServiceSkeleton';
import SingleService from '../SingleService/SingleService';
import axios from 'axios';


const TopServices = () => {
  const [features, setFeatures] = useState([]);
  const [skeletonTimer, setSkeletonTimer] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSkeletonTimer(false);
    }, 5000);
  }, []);

  const getAllServices = () => {
    axios.get('https://e-sheba.herokuapp.com/services')
      .then((response) => {
        if (response.status === 200) {
          setFeatures(response.data);
        }
      })
  }

  useEffect(() => {
    getAllServices();
  }, [])
  return (
    (((skeletonTimer && features) || (skeletonTimer === features)) ?
      <div className="row m-3">
        {[1, 2, 3].map((loading) => (
          <div className="col-md-4 mt-3">
            <ServiceSkeleton />
          </div>
        ))}
      </div>
      :
      <div className="row mx-3 mt-5">
        <h1 style={{ textAlign: 'center' }}>Our Top Services</h1>

        {
          features?.slice(0, 3).map(feature => <SingleService feature={feature}></SingleService>)
        }
        <Link to="/services" >
          <div class="d-grid gap-2 col-4 my-5 mx-auto">
            <button class="btn btn-primary " type="button">Explore Services</button>

          </div>
        </Link>
      </div>
    ));
};

export default TopServices;