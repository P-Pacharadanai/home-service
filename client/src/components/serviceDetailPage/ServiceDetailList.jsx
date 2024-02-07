import { useState, useEffect } from "react";
import axios from "axios";

function ServiceDetailList(props) {
  const [serviceList, serServiceList] = useState([]);
  const { serviceId } = props;

  const getServiceList = () => {};

  useEffect(() => {
    getServiceList();
  }, []);

  const arrTest = [1, 2, 3, 4];
  return (
    <div className="max-w-[735px] px-6 pt-8 pb-14 bg-white border border-gray-300 rounded-lg">
      <h3 className="text-xl text-gray-700">เลือกรายการบริการล้างแอร์</h3>
      <div className="mt-11">
        {arrTest.map((service, index) => {
          return (
            <div key={index}>
              <div className="flex justify-between">
                <div>
                  <h4 className="text-lg font-medium">
                    9,000 - 18,000 BTU, แบบติดผนัง
                  </h4>
                  <div className="flex gap-3 mt-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="w-3 fill-gray-300"
                    >
                      <path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                    </svg>
                    <p className="text-sm text-gray-700">800.00 ฿ / เครื่อง</p>
                  </div>
                </div>
                <div className="basis-36 flex  justify-between items-center gap-5">
                  <button className="w-11 h-11 text-3xl text-blue-600 border border-blue-600 rounded-lg">
                    -
                  </button>
                  <p className="text-gray-800 font-medium">0</p>
                  <button className="w-11 h-11 text-3xl text-blue-600 border border-blue-600 rounded-lg">
                    +
                  </button>
                </div>
              </div>
              {index !== arrTest.length - 1 && (
                <hr className="my-6 border-1 border-gray-300" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ServiceDetailList;
