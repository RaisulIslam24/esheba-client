import React, { useState, useEffect } from 'react';
import featuresData from'../../data/data.json'
import { useParams } from 'react-router-dom';
import './Services.css';
 

const Services = () => {
    const {id} =  useParams(); 
    const [services,setServices]= useState([]); 
    const  service= services.find(pd => pd.id == id);
    console.log(service)
  
    useEffect(() =>{
        setServices(featuresData);
      
    },[])
    

   
        
    return (
//         <div class="container">
//   <div class="row">
//     <div class="col">
//      <img src={service?.image} alt="" />
//     </div>
//     <div class="col">
//     <h2>
//           
           
//     </h2>
//     <button class="btn btn-primary"> Order</button>
//     </div>
//   </div>
   
// </div>
<header class="services-bg py-5">
<div class="container px-5">
    <div class="row gx-5 align-items-center justify-content-center">
    <div class="col-xl-5 col-xxl-6  d-xl-block text-center"><img class="img-fluid rounded-3 my-5" src={service?.image} alt="..." /></div>
        <div class="col-lg-8 col-xl-7 col-xxl-6">
            <div class="my-5 text-center text-xl-start">
                <h1 class="display-5 fw-bolder text-white mb-2"> {service?.name}</h1>
                <p class="lead fw-normal text-white-50 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                    <h1 class="btn btn-primary btn-lg px-4 me-sm-3">Get Started</h1>
              
                </div>
            </div>
        </div>
        
    </div>
</div>
</header>
        
     
    );
};

export default Services;