const AddPromotionNav = () => {
  return (
    <div className="pl-[16rem] flex-2 overflow-auto w-full">
      <nav className="flex items-center w-full border-b p-4 bg-white font-prompt">
        <div className="font-prompt flex flex-col items-center text-gray-700 text-start w-[300px]">
          <h2 className="text-lg font-medium tracking-wide text-gray-950 leading-8">
            เพิ่ม Promotion Code
          </h2>
        </div>
        <div className="w-full flex justify-end px-12 gap-4">
          <button className="bg-white text-blue-600 text-lg px-9 py-2 rounded-lg border-blue-600 border">
            ยกเลิก
          </button>
          <button className="bg-blue-600 text-white text-lg px-9 py-2 rounded-lg">
            สร้าง
          </button>
        </div>
      </nav>
    </div>
  );
};

export default AddPromotionNav;
