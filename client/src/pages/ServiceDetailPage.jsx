import { NavUser } from "../components/common";
import {
  HeaderDetail,
  ServiceDetailList,
  SummaryDetail,
  FooterDetail,
  PaymentDetail,
} from "../components/serviceDetailPage";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ServiceDetailPage() {
  const [currentStep, setCurrentStep] = useState(3);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");

  const params = useParams();

  return (
    <div className="min-h-screen bg-base font-prompt">
      <NavUser />
      <HeaderDetail currentStep={currentStep} />
      <div className="max-w-[1440px] mx-auto mt-28 px-28 flex justify-between gap-9 ">
        <div className="basis-[735px] mb-44">
          {currentStep === 1 && (
            <ServiceDetailList serviceId={params.serviceId} />
          )}
          {currentStep === 2 && (
            /*change Informantion Component here!!*/ <ServiceDetailList />
          )}
          {currentStep === 3 && (
            /*change Payment Component here!!*/ <PaymentDetail />
          )}
        </div>
        <div className="basis-[350px]">
          <SummaryDetail />
        </div>
      </div>
      <FooterDetail currentStep={currentStep} setCurrentStep={setCurrentStep} />
    </div>
  );
}

export default ServiceDetailPage;
