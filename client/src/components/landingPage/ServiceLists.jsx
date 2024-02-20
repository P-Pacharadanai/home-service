import { useState, useEffect } from "react";
import axios from "axios";
import { iconTag, iconTagCircle } from "../../assets/icons";
import { useAuth } from "../../contexts/authentication";
import { useNavigate } from "react-router-dom";

function ServiceLists() {
  const [serviceList, setServiceList] = useState([]);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const getServiceList = async () => {
    const apiUrl = `${
      import.meta.env.VITE_APP_HOME_SERVICE_API
    }/service?min=0&max=3000&keyword=${""}&category=${""}&sortBy=${""}`;
    const result = await axios.get(apiUrl);
    let serviceListData = result.data.data.slice(0, 3);
    setServiceList(serviceListData);
  };

  const handleChooseService = (service_id) => {
    isAuthenticated.status
      ? navigate(`/service-detail/${service_id}`)
      : navigate("/login");
  };

  useEffect(() => {
    getServiceList();
  }, []);

  return (
    <>
      <div className="flex flex-wrap flex-1 justify-center gap-8 sm:w-[349px] sm:min-w-[340px] w-full rounded-[8px] font-prompt">
        {serviceList.map((service, index) => (
          <div
            key={index}
            className="flex flex-col mt-4 w-[349px]"
            style={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              borderRadius: "8px",
              border: "1px solid rgba(204, 208, 215, 1)",
            }}
          >
            <img
              src={service.image}
              className="w-full h-[180px] rounded-tl-lg rounded-tr-lg"
            />
            <div className="mt-4 flex gap-2.5 pl-4">
              <p className="text-md text-blue-800 p-2.5 rounded-xl leading-none bg-blue-100">
                บริการ{service.category}
              </p>
            </div>
            <h3 className="mt-2 text-xl leading-normal font-semibold pl-4 text-gray-950">
              {service.name}
            </h3>
            <div className="flex items-start gap-2.5 pl-4 mt-1">
              <img src={iconTag} width={16} height={6} className="relative" />
              <img
                src={iconTagCircle}
                width={4}
                height={4}
                className="absolute -mb-3 mt-1 ml-1"
              />
              <p className="text-gray-700">ค่าบริการประมาณ {service.price} ฿</p>
              <p className="leading-normal text-gray-700 tracking-wide text-sm">
                {service.type}
              </p>
            </div>
            <a
              onClick={() => {
                handleChooseService(service.service_id);
              }}
              className="text-blue-600 font-semibold leading-6 underline mt-4 mb-4 pl-4"
            >
              เลือกบริการ
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default ServiceLists;
