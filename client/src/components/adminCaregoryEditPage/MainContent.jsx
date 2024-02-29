import { TrashIcon } from "../../assets/icons";

function MainContent(props) {
  const { categoryData, onChangeHandler, setDeleteCategoryId } = props;

  const handleConfirmDelete = () => {
    setDeleteCategoryId({
      id: categoryData.id,
      name: "บริการ" + categoryData.name,
    });
  };

  return (
    <div>
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
      <div className="w-full flex justify-end">
        <div
          onClick={handleConfirmDelete}
          className="group flex items-center justify-end gap-3 mt-6 cursor-pointer"
        >
          <img
            src={TrashIcon}
            alt="Trash Icon"
            className="w-4 h-auto group-hover:opacity-80 duration-200"
          />
          <p className="text-[1rem] text-gray-600 group-hover:text-gray-500 duration-200 font-semibold underline ">
            ลบหมวดหมู่
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
