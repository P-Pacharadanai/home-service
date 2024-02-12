import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NavUser } from "../components/common";
import {
  HeaderDetail,
  ServiceDetailList,
  SummaryDetail,
  FooterDetail,
  PaymentDetail,
  ServiceDetailForm,
} from "../components/serviceDetailPage";

function ServiceDetailPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [serviceList, setServiceList] = useState([]);
  const [serviceOrder, setServiceOrder] = useState([]);
  const [creditCard, setCreditCard] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  const [errors, setErrors] = useState({});

  const { serviceId } = useParams();

  const getServiceList = async () => {
    const { data } = await axios.get(
      `http://localhost:4000/service/${serviceId}/list`
    );
    setServiceList(data.data);
  };

  useEffect(() => {
    getServiceList();
  }, []);

  return (
    <div className="min-h-screen bg-base font-prompt">
      <NavUser />
      <HeaderDetail
        currentStep={currentStep}
        serviceName={serviceList[0]?.services.name}
        serviceImageUrl={serviceList[0]?.services.image}
      />
      <div className="max-w-[1440px] mx-auto mt-28 px-28 flex justify-between gap-9 ">
        <div className="basis-[735px] mb-44">
          {currentStep === 1 && (
            <ServiceDetailList
              serviceList={serviceList}
              serviceOrder={serviceOrder}
              setServiceOrder={setServiceOrder}
            />
          )}
          {currentStep === 2 && <ServiceDetailForm />}
          {currentStep === 3 && (
            <PaymentDetail
              creditCard={creditCard}
              setCreditCard={setCreditCard}
              errors={errors}
            />
          )}
        </div>
        <div className="basis-[350px]">
          <SummaryDetail serviceOrder={serviceOrder} />
        </div>
      </div>
      <FooterDetail
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        serviceOrder={serviceOrder}
        creditCard={creditCard}
        setErrors={setErrors}
      />
    </div>
  );
}

export default ServiceDetailPage;
