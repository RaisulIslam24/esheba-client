import React, { useState } from 'react';
import { useEffect } from 'react';
import featuresData from'../../data/data.json'
import AllServicesDetails from '../AllServicesDetails/AllServicesDetails';
import './AllServices.css';


const AllServices = () => {
    const [allServices,setAllServices]= useState([]); 
    useEffect(() =>{
        setAllServices(featuresData);
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