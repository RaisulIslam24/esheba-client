import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardFrom';
const stripePromise = loadStripe('pk_test_51IeQZ4FLVmPgCwyDqf6ZOxe5BwD1hsHJkEvdFLYnTrElSVbiV5WbBrkPKZBdChLfRXN8DKjqqIvwKr1tzhWjrzSr00SL9dVzP3');


const ProcessPayment = ({ handlePayment, shippingData }) => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm shippingData={shippingData} handlePayment={handlePayment}></SimpleCardForm>
    </Elements>
  );
};


export default ProcessPayment;