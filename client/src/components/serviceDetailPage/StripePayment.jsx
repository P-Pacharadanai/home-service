import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_PUBLIC_KEY);

function StripePayment(props) {
  const {
    serviceOrder,
    confirmPayment,
    setConfirmPayment,
    setLoading,
    totalOrderData,
  } = props;

  const totalOrderPrice = serviceOrder.reduce(
    (acc, curr) => (acc += curr.price * curr.quantity),
    0
  );

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
    mode: "payment",
    amount: totalOrderPrice * 100,
    currency: "thb",
    payment_method_types: ["promptpay", "card"],
    appearance,
  };

  return (
    <Elements options={options} stripe={stripePromise}>
      <CheckoutForm
        totalOrderPrice={totalOrderPrice}
        confirmPayment={confirmPayment}
        setConfirmPayment={setConfirmPayment}
        setLoading={setLoading}
        totalOrderData={totalOrderData}
      />
    </Elements>
  );
}

export default StripePayment;
