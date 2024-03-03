import { useNavigate } from "react-router-dom";
import ServiceList from "./ServiceLists";

import { GeneralBtn } from "../../components/common";

const Services = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/service-list"); // Navigate to wherever you want
  };

  return (
    <section className="bg-gray-100">
      <div className="max-container flex justify-center flex-wrap bg-gray-100">
        <div className="container flex flex-col justify-start gap-5">
          <h3 className="font-prompt font-semibold text-2xl flex justify-center  mt-20 mb-9">
            บริการยอดฮิตของเรา
          </h3>
        </div>

        <ServiceList />

        <div className="container flex justify-center items-center -mt-6 py-20 pb-40">
          <GeneralBtn onClick={handleLoginClick} label="ดูบริการท้ังหมด" />
        </div>
      </div>
    </section>
  );
};

export default Services;
