import { Magnifying } from "../../assets/icons";
const Topbar = () => {
  return (
    <div className="font-prompt flex flex-row items-center justify-between h-[80px] p-4 bg-white">
      <div className="font-medium text-xl">หมวดหมู่</div>
      <div id="right-content" className=" flex flex-row">
        <div className="relative">
          <img
            src={Magnifying}
            alt="magnifying glass icon"
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="ค้นหาหมวดหมู่..."
            className="focus:outline-none border border-gray-400 p-2 pl-10 rounded-lg "
          />
        </div>

        <button className="bg-blue-600 text-white rounded-lg px-6 py-2.5 ml-3">
          เพิ่มหมวดหมู่ +
        </button>
      </div>
    </div>
  );
};

export default Topbar;
