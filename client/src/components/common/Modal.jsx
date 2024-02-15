import React, { useRef } from "react";
import { Minimize2 } from "lucide-react";
import { popupdetails } from "../../constants";

const Modal = ({ onClose }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 flex justify-center items-center bg-gray-100 bg-opacity-30 backdrop-blur-sm"
    >
      <div className="mt-16 flex flex-col text-gray-900">
        <button onClick={onClose} className="place-self-end hover:text-gray-300">
          <Minimize2 size={25} />
        </button>
        <div className="flex flex-col pb-14 w-[600px] bg-blue-500 rounded-lg">
          <div className="flex items-center justify-center text-white text-2xl px-14 py-6 font-medium tracking-wide">
            <h2 className="text-gray-200">รายการ</h2>
          </div>
          <div className="flex flex-col justify-between px-20 gap-2 w-[600px]">
            {popupdetails.map((service, index) => (
              <ul
                key={index}
                className="text-md gap-2 py-2 px-4 flex flex-col text-zinc-600 bg-gray-200 shadow-md rounded hover:bg-gray-100"
              >
                <li className="font-medium flex flex-wrap justify-between ">
                  {service.title}
                  <p>{service.price}</p>
                </li>
                <li>{service.description}</li>
                <li>{`จำนวน : ${service.quantity}`}</li>
                <li className="font-medium flex flex-wrap gap-2">
                  <span className="font-normal">ราคารวม :</span> {service.totalPrice}
                  <p className="text-zinc-300 font-light">(tax included)</p>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal
