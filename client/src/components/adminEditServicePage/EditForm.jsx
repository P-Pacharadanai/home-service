import { useState, useEffect } from "react";
import { Select } from "@chakra-ui/react";
import { GripVerticalIcon } from "../../assets/icons/index";
import { TrashIcon } from "../../assets/icons/index";

const EditForm = (props) => {
  const { serviceData, serverList, onChangeHandler, setDeleteServiceId } =
    props;
  const [subService, setSubService] = useState([1, 2, 3]);
  const [categoryId, setCategoryId] = useState();
  const [categoryData, setCategoryData] = useState([]);

  const getCategory = async () => {
    const categoryUrl = `${import.meta.env.VITE_APP_HOME_SERVICE_API}/category`;
    const { data } = await axios.get(categoryUrl);
    setCategoryData(data.data);
  };

  const handleConfirmDelete = () => {
    setDeleteServiceId({
      id: serviceData.id,
      name: "บริการ" + serviceData.name,
    });
  };
  const addSubService = () => {
    const newSubServiceItem = {
      id: Date.now(),
      title: "",
      price: "",
      unit: "",
    };

    setSubService([...subService, newSubServiceItem]);
  };

  console.log(subService);

  useEffect(() => {
    getCategory();
  }, []);
  return (
    <div className=" mt-10 ml-10 flex flex-col font-prompt ">
      <div className=" w-[1120px] rounded-lg border border-gray-200 bg-white">
        <div className="ml-6 mt-8">
          <label className="text-gray-900 ">
            ชื่อบริการ
            <span className="text-red ml-1">*</span>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="off"
              className="border border-gray-300 focus:outline-none rounded-lg ml-16 w-[435px] h-11"
              onChange={onChangeHandler}
              value={serviceData?.name}
            />
          </label>
        </div>

        <div className="ml-6 mt-8">
          <p className="text-gray-900 ">
            หมวดหมู่
            <span className="text-red ml-1">*</span>
          </p>
          <Select
            onChange={(e) => {
              setCategoryId(e.target.value);
            }}
            variant="outline"
            className="font-normal text-center ml-16 w-[435px] h-11"
          >
            {categoryData.map((item) => {
              return (
                <option
                  key={item.id}
                  value={item.id}
                  isdisabled={(item.id === undefined).toString()}
                >
                  บริการ{item.name}
                </option>
              );
            })}
          </Select>
        </div>

        <div className="ml-6 mt-8">
          <label className="text-gray-900 inline-block align-text-bottom ">
            รูปภาพ
            <span className="text-red ml-1">*</span>
            <div className=" ml-16 ">
              <div className="border border-gray-300 rounded-lg w-[27rem]  h-[12.5rem] relative d-flex align-items-center justify-content-center">
                <img src="" alt="service image" className="h-full p-[6.8rem]" />
              </div>

              <div className="flex flex-row justify-between">
                <span className="text-xs text-gray-700 mt-1">
                  ขนาดภาพที่แแนะนำ 1440 x 225 Px
                </span>
                <span className="text-blue-600 text-sm font-semibold underline cursor-pointer ">
                  ลบรูปภาพ
                </span>
              </div>
            </div>
          </label>
        </div>
        <div className="my-8">
          <hr className=" border border-gray-300  px-3" />
        </div>

        <div className="ml-6 my-8">
          <div className="text-sm text-gray-700 font-semibold mb-8">
            รายการบริการย่อย
          </div>
          {/* service_list line1 w/t *red */}

          {subService.map((item, index) => {
            return (
              <div className="flex flex-row items-center ">
                <img
                  src={GripVerticalIcon}
                  alt="GripVertial icon click for drag and drop"
                  className="h-5 w-5 mr-1"
                />

                <div className="w-[926px] flex flex-row gap-2">
                  <div className="mb-8">
                    <label className="block mb-1">
                      ชื่อบริการ
                      {index === 0 && <span className="text-red ml-1">*</span>}
                    </label>
                    <input
                      type="text"
                      className="border border-gray-300 focus:outline-none rounded-lg w-[422px] h-[42px]"
                    />
                  </div>

                  <div className="mb-8">
                    <label className="block mb-1">
                      หน่วยการบริการ
                      {index === 0 && <span className="text-red ml-1">*</span>}
                    </label>
                    <input
                      type="text"
                      className="border border-gray-300 focus:outline-none rounded-lg w-[240px] h-[42px]"
                    />
                  </div>

                  <div>
                    <label className="block mb-1">
                      ค่าบริการ / 1 หน่วย
                      {index === 0 && <span className="text-red ml-1">*</span>}
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
            );
          })}

          {/* service_list line2 without *red

          <div className="flex flex-row items-center">
            <img
              src={GripVerticalIcon}
              alt="GripVertial icon click for drag and drop"
              className="h-5 w-5 mr-1"
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
          </div>*/}
        </div>

        <button
          className="border border-blue-600 text-blue-600 rounded-lg px-6 py-2.5 mt-6 ml-6"
          onClick={addSubService}
        >
          เพิ่มรายการ +
        </button>
        <div className="my-8">
          <hr className=" border border-gray-300  px-3" />
        </div>

        <div className="w-[387px] h-[44px] flex flex-row justify-between ml-6">
          <div className="text-gray-700 font-normal text-sm">สร้างเมื่อ</div>
          <div className="text-gray-900">12/02/2022 10:30PM</div>
        </div>

        <div className="w-[387px] h-[44px] flex flex-row justify-between ml-6">
          <div className="text-gray-700 font-normal text-sm">แก้ไขล่าสุด</div>
          <div className="text-gray-900">12/02/2022 10:30PM</div>
        </div>
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
            ลบบริการ
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
