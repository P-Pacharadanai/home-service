function FooterDetail(props) {
  const { currentStep, setCurrentStep } = props;

  return (
    <div className="w-full h-24 bg-white fixed bottom-0 border-t border-gray-300">
      <div className="max-w-[1440px] h-full mx-auto px-28 flex justify-between items-center">
        <button
          className={`px-11 py-2.5 rounded-md bg-white font-medium border ${
            currentStep === 1
              ? "text-gray-300 border-gray-300 hover:cursor-default"
              : "text-blue-600 border-blue-600"
          }`}
          onClick={() => currentStep > 1 && setCurrentStep(currentStep - 1)}
        >
          &lt; ย้อนกลับ
        </button>
        <button
          className={`px-11 py-2.5 rounded-md font-medium ${
            currentStep === 4
              ? "bg-gray-300 text-gray-100 hover:cursor-default"
              : "bg-blue-600 text-white"
          }`}
          onClick={() =>
            currentStep < 3
              ? setCurrentStep(currentStep + 1)
              : setCurrentStep(currentStep - 1)
          }
        >
          {currentStep === 3 ? "ยืนยันการชำระเงิน >" : "ดำเนินการ >"}
        </button>
      </div>
    </div>
  );
}

export default FooterDetail;
