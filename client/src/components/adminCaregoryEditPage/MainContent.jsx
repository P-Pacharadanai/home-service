function MainContent(props) {
  const { categoryData, onChangeHandler } = props;
  return (
    <div className="flex flex-col gap-6 w-full bg-white border border-gray-200 rounded-lg py-10 px-6">
      <div className="flex items-center">
        <label
          htmlFor="name"
          className="basis-[230px] text-[1rem] font-medium text-gray-700"
        >
          ชื่อหมวดหมู่<span className="text-red">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="off"
          className="basis-[435px] text-[1rem] text-gray-700 py-2.5 px-4 outline-none border border-gray-300 rounded-lg"
          onChange={onChangeHandler}
          value={categoryData?.name}
        />
      </div>
      <div className="flex items-center">
        <label
          htmlFor="bgColor"
          className="basis-[230px] text-[1rem] font-medium text-gray-700"
        >
          สีพื้นหลัง
        </label>
        <input
          id="bgColor"
          name="background_color"
          type="color"
          className="basis-[50px] h-9 bg-transparent hover:cursor-pointer"
          onChange={onChangeHandler}
          value={categoryData?.background_color}
        />
      </div>
      <div className="flex items-center">
        <label
          htmlFor="textColor"
          className="basis-[230px] text-[1rem] font-medium text-gray-700"
        >
          สีตัวอักษร
        </label>
        <input
          id="textColor"
          name="text_color"
          type="color"
          className="basis-[50px] h-9 bg-transparent hover:cursor-pointer"
          onChange={onChangeHandler}
          value={categoryData?.text_color}
        />
      </div>
      {categoryData?.name !== "" && (
        <div className="flex items-center">
          <div className="basis-[230px] text-[1rem] font-medium text-gray-700">
            ตัวอย่าง
          </div>
          <div
            className="w-fit px-2.5 py-1 rounded-lg"
            style={{
              backgroundColor: `${categoryData?.background_color}`,
              color: `${categoryData?.text_color}`,
            }}
          >
            บริการ{categoryData?.name}
          </div>
        </div>
      )}
    </div>
  );
}

export default MainContent;
