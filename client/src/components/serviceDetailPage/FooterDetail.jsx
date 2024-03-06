import { Spinner } from "@chakra-ui/react";

function FooterDetail(props) {
  const {
    currentStep,
    setCurrentStep,
    serviceOrder,
    setConfirmPayment,
    loading,
  } = props;

  const isNextAvailable = () => {
    if (currentStep === 1 && serviceOrder.length > 0) {
      return true;
    }
    if (currentStep === 2) {
      return true;
    }
    if (currentStep === 3) {
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
        setConfirmPayment(true);
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
              ? loading
                ? "bg-blue-400 text-white hover:cursor-default"
                : "bg-blue-600 text-white"
              : "bg-gray-300 text-gray-100 hover:cursor-default"
          }`}
          onClick={nextStep}
        >
          {currentStep === 3 ? (
            loading ? (
              <div className="flex items-center justify-center gap-2">
                <Spinner size="sm" />
                <p>กำลังดำเนินการ</p>
              </div>
            ) : (
              "ยืนยันการชำระเงิน >"
            )
          ) : (
            "ดำเนินการ >"
          )}
        </button>
      </div>
    </div>
  );
}

export default FooterDetail;
