import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
 
 
 
 
import ProcessPayment from '../Payment/ProcessPayment';
 
 
 

const Shipment = () => {
  const { register, handleSubmit, errors } = useForm();
  
  const {_id} =useParams(); 
  const [book,setBook] = useState({});
  const {name,price,description,imageURL}= book;
  const [shippingData,setShippingData] =useState(null);
 const onSubmit= data =>{
   setShippingData(data);
 }
  
  
  
  const handlePaymentSuccess =paymentId =>{
    const newOrder ={...name,
      
      price,
      description
      ,imageURL,
      paymentId,shipment:shippingData}
    
  
}
 
  return (
    
  
      
    <section class=" d-flex" style={{ padding: "30px 0 30px 50px" }}>
    <div class="col-md-2">
      <img
        style={{ height: "40px", marginBottom: "40px" }}
      
        alt=""
      />
 
    </div>
    <div class="col-md-10">
      <div class="d-flex" style={{backgroundImage: 'linear-gradient(to right, #4776E6, #8E54E9)'}}>
        <div class="col-md-11">
         
        </div>
        <div class="col-md-1">
          <h5 style={{ marginBottom: "20px", textTransform: "uppercase" }}>
            {name}
          </h5>
        </div>
      </div>
      <div
        style={{
          backgroundColor: '#FFFFF',
          height: "500px",
          padding: " 45px 0px 20px 30px",
        }}
        class="d-flex"
      >
         <form style={{
            padding: "30px",
            width: "909px",
            height: "300px",
            background: "#FFFFFF",
            borderRadius: " 20px",display:shippingData? 'none':'block'}} onSubmit={handleSubmit(onSubmit)} >
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"  className="form-control"/>
                {<span className="text-danger"><small>Email cannot be empty</small></span>}
                <label htmlFor="name">Name</label>
                <input type="name" id="email" name="name"   className="form-control"/>
                { <span className="text-danger"><small>Email cannot be empty</small></span>}
                <br/>
                Service Name: {name} 
                <br/>
                Price: {price}  
                <br></br>
                <input type="submit" className="btn btn-primary"value="Checkout"/>
                </form>
                <h1 style={{width:"250px",display:shippingData? 'block':'none'}}><ProcessPayment  handlePayment={handlePaymentSuccess}></ProcessPayment> </h1> 
       
       
 
        
   
    
 
    

   

   
 
    

         
       
      </div>
    </div>
  </section>
  
      
  );
};
 
export default Shipment;