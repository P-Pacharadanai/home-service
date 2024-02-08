import { useState, useEffect } from "react";
import axios from "axios";
import { iconTag, iconTagCircle } from "../../assets/icons";

function ServiceLists(props) {
  const { min, max, keyword, category, sortBy } = props;

  const [serviceList, setServiceList] = useState([]);

  const getServiceList = async () => {
    const apiUrl = `http://localhost:4000/service?min=${min}&max=${max}&keyword=${keyword}&category=${category}&sortBy=${sortBy}`;
    const result = await axios.get(apiUrl);
    let serviceListData = result.data.data;
    setServiceList(serviceListData);
    console.log(`run`);
  };

  useEffect(() => {
    getServiceList();
  }, [min, max, keyword, category, sortBy]);

  console.log(keyword);
  return (
    <>
      <section className="max-container flex justify-center flex-wrap py-20">
        <div className=" max-container gap-4 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-9">
          {serviceList.map((service) => (
            <div
              key={service.service_id}
              className="flex-1 sm:w-[300px] sm:min-w-[340px] w-full rounded-[8px] border-solid border-2 border-gray-300  pb-4 bg-white font-prompt"
            >
              <div className=" justify-center items-center rounded-full">
                <img src={service.image} className="w-full h-[180px] " />
                <div className="mt-4 flex gap-2.5 pl-4">
                  <p className="text-md text-blue-800 p-2.5 rounded-xl leading-none bg-blue-100">
                    บริการ{service.category}
                  </p>
                </div>
                <h3 className="mt-2 text-xl leading-normal font-semibold pl-4 text-gray-950">
                  {service.name}
                </h3>
                <div className="flex items-start gap-2.5 pl-4 mt-1">
                  <img
                    src={iconTag}
                    width={16}
                    height={6}
                    className="relative "
                  />
                  {service.price}
                  <img
                    src={iconTagCircle}
                    width={4}
                    height={4}
                    className="absolute -mb-3 mt-1 ml-1"
                  />
                  <p className="leading-normal text-gray-700 tracking-wide text-sm pb-6">
                    {service.type}
                  </p>
                </div>
                <a
                  href="/"
                  className="text-blue-600 font-semibold leading-6 underline mt-6 mb-2 pl-4"
                >
                  เลือกบริการ
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ServiceLists;