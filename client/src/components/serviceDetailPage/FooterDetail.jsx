import { validateCreditCard } from "./CreditCardUtils";
import { useNavigate } from "react-router-dom";

function FooterDetail(props) {
  const { currentStep, setCurrentStep, serviceOrder, creditCard, setErrors } =
    props;

  const formErrors = validateCreditCard(creditCard);
  const navigate = useNavigate();

  const isNextAvailable = () => {
    if (currentStep === 1 && serviceOrder.length > 0) {
      return true;
    }
    if (currentStep === 2) {
      return true;
    }
    if (
      currentStep === 3 &&
      Object.values(creditCard).every((value) => value !== "")
    ) {
      return true;
    }

    return false;
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const nextStep = () => {
    if (isNextAvailable()) {
      if (currentStep === 3) {
        if (Object.keys(formErrors).length === 0) {
          alert("ชำระเงินสำเร็จ");
          // navigate("/");
          // window.scrollTo(0, 0);
        } else {
          setErrors(formErrors);
        }
      } else {
        setCurrentStep(currentStep + 1);
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <div className="w-full h-24 bg-white fixed bottom-0 border-t border-gray-300">
      <div className="max-w-[1440px] h-full mx-auto px-28 flex justify-between items-center">
        <button
          className={`px-11 py-2.5 rounded-md bg-white font-medium border ${
            currentStep === 1
              ? "text-gray-300 border-gray-300 hover:cursor-default"
              : "text-blue-600 border-blue-600"
          }`}
          onClick={previousStep}
        >
          &lt; ย้อนกลับ
        </button>
        <button
          className={`px-11 py-2.5 rounded-md font-medium ${
            isNextAvailable()
              ? "bg-blue-600 text-white"
              : "bg-gray-300 text-gray-100 hover:cursor-default"
          }`}
          onClick={nextStep}
        >
          {currentStep === 3 ? "ยืนยันการชำระเงิน >" : "ดำเนินการ >"}
        </button>
      </div>
    </div>
  );
}

export default FooterDetail;
