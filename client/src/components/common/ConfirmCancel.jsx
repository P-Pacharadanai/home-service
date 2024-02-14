import { ExclamationIcon } from "../../assets/icons/index";
import { XmarkIcon } from "../../assets/icons/index";
import React, { useState, useEffect } from "react";

const ConfirmCancel = ({ onDelete }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showConfirmation && !e.target.closest("#confirm-cancel-box")) {
        setShowConfirmation(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showConfirmation]);

  const handleDelete = () => {
    onDelete();
    setShowConfirmation(false);
  };

  return (
    <div
      id="confirm-cancel-box"
      className="font-prompt bg-white rounded-2xl flex flex-col items-center justify-center leading-8 border border-red w-[360px] h-[270px]"
    >
      <div className="flex relative w-full">
        <img
          src={XmarkIcon}
          alt="cancel icon"
          className="h-6 w-6 absolute right-4 -top-4 cursor-pointer"
          onClick={() => setShowConfirmation(false)}
        />
      </div>

      <img src={ExclamationIcon} alt="exclamation icon" className="h-9 w-9" />
      <div className="text-black font-medium text-3xl mt-2">
        ยืนยันการลบรายการ ?
      </div>
      <div className="text-gray-500 font-light text-lg mt-2">
        คุณต้องการลบรายการ 'ล้างแอร์' ใช่หรือไม่
      </div>
      <div className="flex gap-4 mt-6">
        <button
          className="bg-blue-600 text-white rounded-lg px-6 py-2.5"
          onClick={handleDelete}
        >
          ลบรายการ
        </button>
        <button
          className="border border-blue-600 text-blue-600 rounded-lg px-6 py-2.5"
          onClick={() => setShowConfirmation(false)}
        >
          ยกเลิก
        </button>
      </div>
    </div>
  );
};

export default ConfirmCancel;
