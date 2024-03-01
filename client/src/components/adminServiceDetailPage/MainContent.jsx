import { convertThaiDateTime } from "../common";
import { useState, useEffect } from "react";
import axios from "axios";
function MainContent(props) {
  const { categoryData, setDeleteCategoryId, params } = props;

  const [serviceData, setServiceData] = useState({});
  // console.log(params.serviceId);

  const getServiceList = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/service/${params.serviceId}`
    );
    setServiceData(data.data);
    console.log("it's working");
    console.log(data.data);
  };

  useEffect(() => {
    getServiceList();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 w-full bg-white border border-gray-200 rounded-lg py-10 px-6">
        <div className="flex items-center">
          <p className="basis-[230px] text-[1rem] font-medium text-gray-700">
            ชื่อบริการ
          </p>
          <p className="text-[1rem]">{serviceData?.name}</p>
        </div>
        <div className="flex items-center">
          <p className="basis-[230px] text-[1rem] font-medium text-gray-700">
            หมวดหมู่
          </p>
          <p className="text-[1rem]">{serviceData?.categories?.name}</p>
        </div>
        <div className="flex">
          <p className="basis-[230px] text-[1rem] font-medium text-gray-700">
            รูปภาพ
          </p>
          <div className="w-[27rem]  h-[12.5rem] ">
            <img
              src={serviceData?.image}
              alt="service image"
              className="h-full object-contain rounded-lg"
            />
          </div>
        </div>
        <hr className="my-6 border-1 border-gray-300" />
        <div className="flex items-center">
          <p className="basis-[230px] text-[1rem] font-medium text-gray-700">
            รายการบริการย่อย
          </p>
        </div>
        {serviceData.service_list &&
          serviceData?.service_list.map((list) => {
            return (
              <div className="flex flex-row w-[67rem]">
                <div className="mr-6 w-[30rem]">
                  <p className="text-sm font-normal text-gray-700 ">
                    ชื่อรายการ
                  </p>
                  <p className="text-black text-[1rem]">{list?.title}</p>
                </div>
                <div className="mr-6 w-[15rem]">
                  <p className="text-sm font-normal text-gray-700 ">
                    หน่วยการบริการ
                  </p>
                  <p>{list?.unit}</p>
                </div>
                <div className="">
                  <p className="text-sm font-normal text-gray-700 ">
                    ค่าบริการ/1หน่วย
                  </p>
                  <p>{list?.price}</p>
                </div>
              </div>
            );
          })}

        <hr className="my-6 border-1 border-gray-300" />
        <div className="flex items-center">
          <p className="basis-[230px] text-[1rem] font-medium text-gray-700">
            สร้างเมื่อ
          </p>
          <p className="text-[1rem]">
            {convertThaiDateTime(serviceData?.created_at)}
          </p>
        </div>
        <div className="flex items-center">
          <p className="basis-[230px] text-[1rem] font-medium text-gray-700">
            แก้ไขล่าสุด
          </p>
          <p className="text-[1rem]">
            {convertThaiDateTime(serviceData?.updated_at)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
