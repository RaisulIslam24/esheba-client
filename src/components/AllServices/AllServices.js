import React, { useState } from 'react';
import { useEffect } from 'react';
import featuresData from'../../data/data.json'

import AllServicesDetails from '../AllServicesDetails/AllServicesDetails';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import './AllServices.css';


const AllServices = () => {
    const [allServices,setAllServices]= useState([]); 
    useEffect(() =>{
        setAllServices(featuresData);
        console.log(featuresData);
    },[])
    return (
        <div  className="row mx-3 all-services"  >
             <h1 style={{textAlign:'center'}}>All Services</h1>
          {
            allServices.map( allService => <AllServicesDetails allService={allService}></AllServicesDetails> ) 
         }
        </div>
    );
};

export default AllServices;