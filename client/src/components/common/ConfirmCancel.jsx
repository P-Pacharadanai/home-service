import { ExclamationIcon } from "../../assets/icons/index";
import { XmarkIcon } from "../../assets/icons/index";

const ConfirmCancel = ({ onDelete, onClose, itemName }) => {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-70">
      <div
        id="confirm-cancel-box"
        className="font-prompt bg-white rounded-2xl flex flex-col items-center justify-center leading-8 min-w-[360px] h-[270px] drop-shadow-2xl "
      >
        <div className="flex relative w-full">
          <img
            src={XmarkIcon}
            alt="cancel icon"
            className="h-5 w-5 absolute right-5 -top-6 cursor-pointer hover:opacity-70 duration-200"
            onClick={onClose}
          />
        </div>
        <img src={ExclamationIcon} alt="exclamation icon" className="h-7 w-7" />
        <div className="text-gray-950 font-medium text-xl mt-2">
          ยืนยันการลบรายการ?
        </div>
        <div className="text-gray-700 text-center font-light text-[1rem] mt-2 leading-normal">
          <p>คุณต้องการลบรายการ '{itemName}'</p>
          <p>ใช่หรือไม่</p>
        </div>
        <div className="flex gap-4 mt-5">
          <button
            className="bg-blue-600 hover:bg-blue-500 text-white text-[1rem] rounded-lg px-6 h-11 flex justify-center items-center duration-200"
            onClick={onDelete}
          >
            ลบรายการ
          </button>
          <button
            className="border border-blue-600 text-blue-600 hover:border-blue-400 hover:text-blue-400 text-[1rem] rounded-lg px-6 h-11 flex justify-center items-center duration-200"
            onClick={onClose}
          >
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCancel;
