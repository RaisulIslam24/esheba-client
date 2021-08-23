import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimpleCardForm = ({ handlePayment, shippingData }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const [processing, setProcessing] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message)
      setPaymentSuccess(null);
      console.log(error);
    } else {
      setPaymentSuccess(paymentMethod.id)
      setPaymentError(null);
      handlePayment(paymentMethod.id)
      setProcessing(false);
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <CardElement />
        <br />
        {shippingData ?
          <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
            <span>{processing ? <p>Processing...</p> : "Pay"}</span>
          </button>
          :
          <button type="button" class="btn btn-primary" disabled>Pay</button>}
      </form >
      {
        paymentError && <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'red' }}>{paymentError}</p>
      }
      {
        paymentSuccess && <p style={{ fontSize: '20px', fontWeight: 'bold', color: 'green' }}>Your Payment is successful</p>
      }
    </div>
  );
};
export default SimpleCardForm;