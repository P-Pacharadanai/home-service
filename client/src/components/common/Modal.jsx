import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { popupdetails } from "../../constants";

const Modal = ({ onClose, orderId }) => {
  const modalRef = useRef();
  const [serviceListData, setServiceListData] = useState([]);

  console.log("serviceListData: ", serviceListData);
  const getServiceList = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/order/${orderId}/list`
    );
    setServiceListData(data.data);
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  useEffect(() => {
    getServiceList();
  }, []);

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-70"
    >
      <div className="mt-16 flex flex-col text-gray-900 relative">
        <button
          onClick={onClose}
          className="place-self-end hover:text-gray-300 text-3xl text-white absolute right-8 top-3"
        >
          x
        </button>
        <div className="flex flex-col pb-8 w-[500px] bg-blue-500 rounded-lg">
          <div className="flex items-center justify-center text-white text-2xl p-4 font-medium tracking-wide">
            <h2 className="text-white">รายการซ่อมรหัส: {orderId}</h2>
          </div>
          <div className="flex-1 flex flex-col px-8 gap-2 w-[500px]">
            {serviceListData.map((list, index) => {
              const serviceList = list.service_list;
              const totalPriceStr = (
                serviceList.price * list.quantity
              ).toLocaleString("th-TH");

              const priceStr = serviceList.price.toLocaleString("th-TH");
              return (
                <ul
                  key={index}
                  className="text-md gap-2 py-3 px-4 flex flex-col text-zinc-600 bg-white shadow-md rounded hover:bg-gray-100"
                >
                  <li className="font-semibold flex flex-wrap justify-between ">
                    {index + 1}. {serviceList.title}
                    <p className="font-semibold">ราคารวม : {totalPriceStr} ฿</p>
                  </li>
                  <li>{`จำนวน : ${list.quantity}`}</li>
                  <li className="font-medium flex flex-wrap gap-2">
                    <span className="font-normal">ราคา/{serviceList.unit}</span>{" "}
                    {priceStr} ฿
                    <p className="text-gray-400 font-light">
                      ( ราคายังไม่รวมโปรโมชั่น )
                    </p>
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
