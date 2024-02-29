import { convertThaiDateTime } from "../common";

function MainContent(props) {
  const { categoryData, setDeleteCategoryId } = props;

  return (
    <div>
      <div className="flex flex-col gap-6 w-full bg-white border border-gray-200 rounded-lg py-10 px-6">
        <div className="flex items-center">
          <p className="basis-[230px] text-[1rem] font-medium text-gray-700">
            ชื่อบริการ
          </p>
          <p className="text-[1rem]">ล้างแอร์</p>
        </div>
        <div className="flex items-center">
          <p className="basis-[230px] text-[1rem] font-medium text-gray-700">
            หมวดหมู่
          </p>
          <p className="text-[1rem]">บริการทั่วไป</p>
        </div>
        <div className="flex items-center">
          <p className="basis-[230px] text-[1rem] font-medium text-gray-700">
            รูปภาพ
          </p>
          <img src="" alt="service-image" />
        </div>
        <hr className="my-6 border-1 border-gray-300" />
        <div className="flex items-center">
          <p className="basis-[230px] text-[1rem] font-medium text-gray-700">
            รายการบริการย่อย
          </p>
        </div>
        <div className="flex flex-row w-[67rem]">
          <div className="mr-6 w-[30rem]">
            <p className="text-sm font-normal text-gray-700 ">ชื่อรายการ</p>
            <p className="text-black text-[1rem]">9,000-18,000BTU,แบบติดผนัง</p>
          </div>
          <div className="mr-6 w-[15rem]">
            <p className="text-sm font-normal text-gray-700 ">หน่วยการบริการ</p>
            <p>เครื่อง</p>
          </div>
          <div className="">
            <p className="text-sm font-normal text-gray-700 ">
              ค่าบริการ/1หน่วย
            </p>
            <p>800.00</p>
          </div>
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
    </div>
  );
}

export default MainContent;
