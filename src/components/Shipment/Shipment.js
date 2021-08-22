import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { userContext } from '../../App';
import Footer from '../Footer/Footer';
import NavBar from '../Home/NavBar/NavBar';
import ProcessPayment from '../Payment/ProcessPayment';
import './Shipment.css';

const Shipment = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const { id } = useParams();
  const [service, setService] = useState({});
  const { serviceName, price, serviceDetails, image, serviceProviderEmail } = service;
  const [shippingData, setShippingData] = useState(null);
  const [status, setStaus] = useState('pending');

  const onSubmit = data => {
    setShippingData(data);
  }

  const handlePaymentSuccess = paymentId => {
    const orderDetails = {
      ...loggedInUser,
      serviceName,
      price,
      serviceDetails,
      image,
      serviceProviderEmail,
      paymentId,
      shipment: shippingData,
      status,
      orderTime: new Date()
    };

    fetch('http://localhost:5000/addOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('Your order placed successfully')
        }
      })
  }

  useEffect(() => {
    fetch('http://localhost:5000/serviceDetails/' + id)
      .then(res => res.json())
      .then(data => setService(data));
  }, [id])

  return (
    <>
      <NavBar />
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            < form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
              < input name="name" defaultValue={loggedInUser.name} {...register('name', { required: true })} placeholder="Your Name" />
              {errors.name && <span className="error">Name is required</span>}

              < input name="email" defaultValue={loggedInUser.email} {...register('email', { required: true })} placeholder="Your Email" />
              {errors.email && <span className="error">Email is required</span>}

              < input name="address" {...register('address', { required: true })} placeholder="Your Address" />
              {errors.address && <span className="error">Address is required</span>}

              < input name="phone" type="tel" pattern="[0-9]{11}" {...register('phone', { required: true })} placeholder="Your Phone" />
              {errors.phone && <span className="error">Phone is required</span>}

              <input className="btn btn-success" type="submit" />
            </form >
          </div>
          <div className="col-md-6 mt-3">
            <h2>Payment Method</h2>
            <br />
            <input type="radio" id="stripe" name="payment" value="stripe" checked />
            <label for="stripe">Stripe</label>
            <br />
            <input type="radio" id="bkash" name="payment" value="bkash" />
            <label for="bkash">bKash</label>
            <br />
            <input type="radio" id="creditCard" name="payment" value="creditCard" />
            <label for="creditCard">Credit Card</label>
            <br />
            <br />
            <ProcessPayment shippingData={shippingData} handlePayment={handlePaymentSuccess}></ProcessPayment>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shipment;