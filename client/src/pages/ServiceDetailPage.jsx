import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contexts/authentication";
import { NavUser } from "../components/common";
import {
  HeaderDetail,
  ServiceDetailList,
  SummaryDetail,
  FooterDetail,
  ServiceDetailForm,
  StripePayment,
} from "../components/serviceDetailPage";

function ServiceDetailPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [serviceList, setServiceList] = useState([]);
  const [serviceOrder, setServiceOrder] = useState([]);
  const [fullAddress, setFullAddress] = useState({
    address: "",
    subdistrict: "",
    district: "",
    province: "",
  });
  const [bookingDate, setBookingDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [note, setNote] = useState("");
  const [confirmPayment, setConfirmPayment] = useState(false);
  const [loading, setLoading] = useState(false);

  const { serviceId } = useParams();

  const { state } = useAuth();

  const totalOrderData = {
    userId: state.user?.userId,
    serviceOrder,
    fullAddress,
    bookingDate,
    bookingTime,
    note,
  };

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
          {currentStep === 2 && (
            <ServiceDetailForm
              fullAddress={fullAddress}
              setFullAddress={setFullAddress}
              bookingDate={bookingDate}
              setBookingDate={setBookingDate}
              bookingTime={bookingTime}
              setBookingTime={setBookingTime}
              note={note}
              setNote={setNote}
            />
          )}
          {currentStep === 3 && (
            <StripePayment
              serviceOrder={serviceOrder}
              confirmPayment={confirmPayment}
              totalOrderData={totalOrderData}
              setConfirmPayment={setConfirmPayment}
              setLoading={setLoading}
            />
          )}
        </div>
        <div className="basis-[350px]">
          <SummaryDetail
            serviceOrder={serviceOrder}
            fullAddress={fullAddress}
            bookingDate={bookingDate}
            bookingTime={bookingTime}
          />
        </div>
      </div>
      <FooterDetail
        currentStep={currentStep}
        serviceOrder={serviceOrder}
        loading={loading}
        setCurrentStep={setCurrentStep}
        setConfirmPayment={setConfirmPayment}
      />
    </div>
  );
}

export default ServiceDetailPage;
