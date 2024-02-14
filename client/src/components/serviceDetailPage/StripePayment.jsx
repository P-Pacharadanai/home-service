import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import axios from "axios";

const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_PUBLIC_KEY);

function StripePayment() {
  const [clientSecret, setClientSecret] = useState();

  const createPayment = async () => {
    const requestData = { item: [{ id: "xl-tshirt" }] };

    try {
      const result = await axios.post(
        "http://localhost:4000/payment/create",
        requestData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      setClientSecret(result.data.clientSecret);
    } catch (error) {
      console.error("Error creating payment:", error);
    }
  };

  useEffect(() => {
    createPayment();
  }, []);

  const appearance = {
    theme: "stripe",
    variables: {
      borderRadius: "8px",
      colorText: "#323640",
    },
    rules: {
      ".Tab--selected": {
        backgroundColor: "#E7EEFF",
      },
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default StripePayment;
