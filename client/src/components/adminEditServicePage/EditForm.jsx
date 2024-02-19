import { GripVerticalIcon } from "../../assets/icons/index";

const EditForm = () => {
  return (
    <div className="flex mt-10 ml-10 ">
      <div className="w-[1120px] font-prompt rounded-lg border border-gray-200 bg-white">
        <div className="ml-6 mt-8">
          <label className="text-gray-900 ">
            ชื่อบริการ
            <span className="text-red ml-1">*</span>
            <input
              type="text"
              className="border border-gray-300 focus:outline-none rounded-lg ml-16 w-[435px] h-11"
            />
          </label>
        </div>

        <div className="ml-6 mt-8">
          <label className="text-gray-900 ">
            หมวดหมู่
            <span className="text-red ml-1">*</span>
            <input
              type="text"
              className="border border-gray-300 focus:outline-none rounded-lg ml-16 w-[435px] h-11"
            />
          </label>
        </div>

        <div className="ml-6 mt-8">
          <label className="text-gray-900 inline-block align-text-bottom ">
            รูปภาพ
            <span className="text-red ml-1">*</span>
            <input
              type="text"
              className="border border-gray-300 focus:outline-none rounded-lg ml-16 w-[435px]  h-[200px] relative"
            />
          </label>

          <div className="flex flex-row justify-between w-[420px] absolute -right-[25px]">
            <span className="text-xs text-gray-700">
              ขนาดภาพที่แแนะนำ 1440 x 225 Px
            </span>
            <span className="text-blue-600 text-sm font-semibold underline cursor-pointer ">
              ลบรูปภาพ
            </span>
          </div>
        </div>
        <div className="my-8">
          <hr className=" border border-gray-300  px-3" />
        </div>

        <div className="text-sm text-gray-700 font-semibold">
          รายการบริการย่อย
        </div>

        <div className="flex flex-row items-center">
          <img
            src={GripVerticalIcon}
            alt="GripVertial icon click for drag and drop"
            className="h-5 w-5"
          />

          <div className="w-[926px] flex flex-row gap-2">
            <div className="mb-8">
              <label className="block mb-1">
                ชื่อบริการ
                <span className="text-red ml-1">*</span>
              </label>
              <input
                type="text"
                className="border border-gray-300 focus:outline-none rounded-lg w-[422px] h-[42px]"
              />
            </div>

            <div className="mb-8">
              <label className="block mb-1">
                หน่วยการบริการ
                <span className="text-red ml-1">*</span>
              </label>
              <input
                type="text"
                className="border border-gray-300 focus:outline-none rounded-lg w-[240px] h-[42px]"
              />
            </div>

            <div>
              <label className="block mb-1">
                ค่าบริการ / 1 หน่วย
                <span className="text-red ml-1">*</span>
              </label>
              <input
                type="text"
                className="border border-gray-300 focus:outline-none rounded-lg w-[240px] h-[42px]"
              />
            </div>
          </div>

          <span className="text-blue-600 text-sm font-semibold underline cursor-pointer ">
            ลบรายการ
          </span>
        </div>

        <div className="flex flex-row items-center">
          <img
            src={GripVerticalIcon}
            alt="GripVertial icon click for drag and drop"
            className="h-5 w-5"
          />

          <div className="w-[926px] flex flex-row gap-2">
            <div className="mb-8">
              <label className="block mb-1">ชื่อบริการ</label>
              <input
                type="text"
                className="border border-gray-300 focus:outline-none rounded-lg w-[422px] h-[42px]"
              />
            </div>

            <div className="mb-8">
              <label className="block mb-1">หน่วยการบริการ</label>
              <input
                type="text"
                className="border border-gray-300 focus:outline-none rounded-lg w-[240px] h-[42px]"
              />
            </div>

            <div>
              <label className="block mb-1">ค่าบริการ / 1 หน่วย</label>
              <input
                type="text"
                className="border border-gray-300 focus:outline-none rounded-lg w-[240px] h-[42px]"
              />
            </div>
          </div>

          <span className="text-blue-600 text-sm font-semibold underline cursor-pointer ">
            ลบรายการ
          </span>
        </div>

        <button className="border border-blue-600 text-blue-600 rounded-lg px-6 py-2.5 mt-6">
          เพิ่มรายการ +
        </button>
        <div className="my-8">
          <hr className=" border border-gray-300  px-3" />
        </div>

        <div className="w-[387px] h-[44px] flex flex-row justify-between">
          <div className="text-gray-700 font-normal text-sm">สร้างเมื่อ</div>
          <div className="text-gray-900">12/02/2022 10:30PM</div>
        </div>

        <div className="w-[387px] h-[44px] flex flex-row justify-between">
          <div className="text-gray-700 font-normal text-sm">แก้ไขล่าสุด</div>
          <div className="text-gray-900">12/02/2022 10:30PM</div>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
