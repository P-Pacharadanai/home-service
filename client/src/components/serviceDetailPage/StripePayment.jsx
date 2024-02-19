import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_PUBLIC_KEY);

function StripePayment(props) {
  const {
    confirmPayment,
    setConfirmPayment,
    setLoading,
    totalOrderData,
    promotionCode,
    setPromotionCode,
    totalOrderPrice,
    discount,
  } = props;

  const amount = totalOrderPrice - discount;

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
    amount: amount * 100,
    currency: "thb",
    payment_method_types: ["promptpay", "card"],
    appearance,
  };

  return (
    <Elements options={options} stripe={stripePromise}>
      <CheckoutForm
        amount={amount}
        confirmPayment={confirmPayment}
        setConfirmPayment={setConfirmPayment}
        setLoading={setLoading}
        totalOrderData={totalOrderData}
        promotionCode={promotionCode}
        setPromotionCode={setPromotionCode}
      />
    </Elements>
  );
}

export default StripePayment;
