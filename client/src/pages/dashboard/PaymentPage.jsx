import React from "react";

import { loadStripe } from "@stripe/stripe-js";

const PaymentPage = () => {
  const stripePromise = loadStripe();
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentPage;
