import { SidebarNavAdmin } from "../../components/common";
import { ChevronLeft } from "lucide-react";

const CodePromoNav = () => {
  return (
    <div className="flex">
      <div className=" top-0 left-0 fixed w-64 min-h-screen">
        <SidebarNavAdmin />
      </div>

      <div className="pl-[16rem] flex-2 overflow-auto w-full">
        <nav className="flex items-center w-full border-b p-4 bg-white font-prompt">
          <div>
            <ChevronLeft className="w-12 h-12 text-gray-600 cursor-pointer ml-5" />
          </div>
          <div className="font-prompt flex flex-col items-center text-gray-700 text-start w-[200px]">
            <p className="text-xs flex pr-6 ">Promotion Code</p>
            <h2 className="text-2xl font-medium tracking-wide text-gray-950 leading-8">
              HOME202
            </h2>
          </div>
          <div className="w-full flex justify-end px-12 gap-4 ">
            <button className="bg-white text-blue-600 text-lg px-9 py-2 rounded-lg border-blue-600 border">
              ยกเลิก
            </button>
            <button className="bg-blue-600 text-white text-lg px-9 py-2 rounded-lg">
              แก้ไข
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default CodePromoNav;
