import '../styles/globals.scss'
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import React from "react";

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');


function MyApp({ Component, pageProps }) {
  return  <Elements stripe={stripePromise}>
            <Component {...pageProps} />
          </Elements>

}

export default MyApp
