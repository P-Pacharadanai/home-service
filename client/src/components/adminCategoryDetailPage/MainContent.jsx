import { convertThaiDateTime } from "../common";
import { TrashIcon } from "../../assets/icons";

function MainContent(props) {
  const { categoryData, setDeleteCategoryId } = props;

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
          <p className="basis-[230px] text-[1rem] font-medium text-gray-700">
            ชื่อหมวดหมู่
          </p>
          <p className="text-[1rem]">บริการ{categoryData?.name}</p>
        </div>
        <div className="flex items-center">
          <p className="basis-[230px] text-[1rem] font-medium text-gray-700">
            สีพื้นหลัง
          </p>
          <div
            className={`w-12 h-8 border border-gray-200 `}
            style={{
              backgroundColor: `${categoryData?.background_color ?? "white"}`,
            }}
          ></div>
        </div>
        <div className="flex items-center">
          <p className="basis-[230px] text-[1rem] font-medium text-gray-700">
            สีตัวอักษร
          </p>
          <div
            className={`w-12 h-8 border border-gray-200`}
            style={{
              backgroundColor: `${categoryData?.text_color ?? "white"}`,
            }}
          ></div>
        </div>
        <hr className="my-6 border-1 border-gray-300" />
        <div className="flex items-center">
          <p className="basis-[230px] text-[1rem] font-medium text-gray-700">
            สร้างเมื่อ
          </p>
          <p className="text-[1rem]">
            {convertThaiDateTime(categoryData?.created_at)}
          </p>
        </div>
        <div className="flex items-center">
          <p className="basis-[230px] text-[1rem] font-medium text-gray-700">
            แก้ไขล่าสุด
          </p>
          <p className="text-[1rem]">
            {convertThaiDateTime(categoryData?.updated_at)}
          </p>
        </div>
      </div>
      <div
        onClick={handleConfirmDelete}
        className="flex items-center justify-end gap-3 mt-6 cursor-pointer"
      >
        <img src={TrashIcon} alt="Trash Icon" className="w-4 h-auto" />
        <p className="text-[1rem] text-gray-600 font-semibold underline ">
          ลบหมวดหมู่
        </p>
      </div>
    </div>
  );
}

export default MainContent;
