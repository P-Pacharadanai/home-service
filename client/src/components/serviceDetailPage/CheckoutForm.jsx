import { useState, useEffect } from "react";
import axios from "axios";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();

  const {
    confirmPayment,
    setConfirmPayment,
    amount,
    setLoading,
    totalOrderData,
    promotionCode,
    setPromotionCode,
  } = props;

  const [errorMessage, setErrorMessage] = useState();

  const handlePromotion = (event) => {
    const promotionInput = event.target.value;
    setPromotionCode({ ...promotionCode, code: promotionInput.toUpperCase() });
  };

  const handleError = (error) => {
    setLoading(false);
    setErrorMessage(error.message);
  };

  const handleSubmit = async () => {
    setConfirmPayment(false);

    try {
      if (!stripe) {
        return;
      }

      setLoading(true);

      // Trigger form validation and wallet collection
      const { error: submitError } = await elements.submit();
      if (submitError) {
        handleError(submitError);
        return;
      }

      const result = await axios.post(
        `${import.meta.env.VITE_APP_HOME_SERVICE_API}/payment/create`,
        {
          amount,
        }
      );

      const clientSecret = result.data.clientSecret;

      const { data } = await axios.post(
        `${import.meta.env.VITE_APP_HOME_SERVICE_API}/order`,
        totalOrderData
      );

      // Confirm the PaymentIntent using the details collected by the Payment Element
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/payment-success/${data.data.order_id}`,
        },
      });

      if (error) {
        handleError(error);
      }

      setLoading(false);
    } catch (error) {
      return console.error(error);
    }
  };

  const usePromotionCode = async (event) => {
    event.preventDefault();
    const { data } = await axios.get(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/promotion?code=${
        promotionCode.code
      }`
    );

    if (data.message) {
      setPromotionCode({ ...promotionCode, errorMessage: data.message });
      return;
    }

    setPromotionCode({
      ...promotionCode,
      promotion: data.data[0],
      errorMessage: "",
    });
  };

  useEffect(() => {
    if (confirmPayment) {
      handleSubmit();
    }
  }, [confirmPayment]);

  const paymentElementOptions = {
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
      {errorMessage && (
        <div id="payment-message" className="text-[#df1b41] mt-1">
          {errorMessage}
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
              value={promotionCode.code}
              onChange={handlePromotion}
            />
          </div>
          <div className="flex-1 flex justify-between">
            <button
              onClick={usePromotionCode}
              className="px-6 py-2.5 rounded-md font-medium bg-blue-600 text-white "
            >
              ใช้โค้ด
            </button>
          </div>
        </div>
        <div id="payment-message" className="text-[#df1b41] mt-1">
          {promotionCode.errorMessage}
        </div>
      </div>
    </form>
  );
}

export default CheckoutForm;
