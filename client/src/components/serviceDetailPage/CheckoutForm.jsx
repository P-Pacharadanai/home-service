import { useState, useEffect } from "react";
import {
  PaymentElement,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    try {
      const { paymentIntent } = await stripe.retrievePaymentIntent(
        clientSecret
      );

      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    } catch (error) {
      console.error("Error retrieving Payment Intent:", error);
      setMessage("Something went wrong.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:5173/payment-success",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
      console.log(error);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    // layout: "tabs",
    layout: {
      type: "tabs",
      defaultCollapsed: false,
    },
  };
  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="max-w-[735px] px-6 pt-8 pb-14 bg-white border border-gray-300  rounded-lg"
    >
      <h3 className="text-xl text-gray-700 mb-8">ชำระเงิน</h3>
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      {message && (
        <div id="payment-message" className="text-red mt-1">
          {message}
        </div>
      )}

      <div>
        <hr className="mt-8 mb-8 border-1 border-gray-300" />
        <div className="flex items-end gap-7">
          <div className="flex-1">
            <label
              htmlFor="promotion"
              className="block font-medium text-gray-900"
            >
              Promotion Code
            </label>
            <input
              id="promotion"
              name="promotion"
              type="text"
              className="w-full h-11 px-4 py-2 mt-1 text-gray-700 outline outline-1 outline-gray-300 rounded-lg"
              placeholder="กรุณากรอกโค้ดส่วนลด (ถ้ามี)"
            />
          </div>
          <div className="flex-1 flex justify-between">
            <button className="px-6 py-2.5 rounded-md font-medium bg-blue-600 text-white ">
              ใช้โค้ด
            </button>
            <button
              className="ml-10 px-6 py-2.5 rounded-md font-medium bg-blue-600 text-white"
              disabled={isLoading || !stripe || !elements}
              id="submit"
            >
              <span id="button-text">
                {isLoading ? (
                  <div className="spinner" id="spinner"></div>
                ) : (
                  "Pay now"
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default CheckoutForm;
