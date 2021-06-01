import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const promise = loadStripe("pk_test_bIVegNr7PNOmkoc79fY3gvAW00uUsVA0Rs");

export default function App() {
  return (
    <Elements stripe={promise}>
      <CheckoutForm />
    </Elements>
  );
}
