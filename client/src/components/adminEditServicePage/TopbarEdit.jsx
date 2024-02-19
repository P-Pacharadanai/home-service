import { lessthanIcon } from "../../assets/icons";

const TopbarEdit = () => {
  return (
    <div className="font-prompt flex flex-row items-center justify-between h-[80px] p-4 bg-white">
      <div className="flex flex-row ml-3">
        <div className="h-10 w-10">
          <img src={lessthanIcon} alt="lessthan icon" className="h-10 w-6" />
        </div>
        <div className="flex flex-col">
          <div className="text-xs text-gray-700 font-normal">บริการ</div>
          <div className="font-medium text-xl text-gray-950">ล้างแอร์</div>
        </div>
      </div>

      <div id="right-content" className=" flex flex-row">
        <button className="border border-blue-600 text-blue-600 rounded-lg px-6 py-2.5">
          ยกเลิก
        </button>
        <button className="bg-blue-600 text-white rounded-lg px-6 py-2.5 ml-3">
          ยืนยัน
        </button>
      </div>
    </div>
  );
};

export default TopbarEdit;
