import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Select } from "@chakra-ui/react";
import axios from "axios";
import { GripVerticalIcon } from "../../assets/icons/index";
import { TrashIcon } from "../../assets/icons/index";
import ConvertThaiDateTime from "../common/ConverThaiDateTime";

const EditForm = (props) => {
  const {
    serviceData,
    setServiceData,
    categoryData,
    setCategoryData,
    setUploadImage,
    subService,
    setSubService,
  } = props.serviceEditState;

  const navigate = useNavigate();
  const params = useParams();

  const getServiceList = async () => {
    const serviceUrl = `${import.meta.env.VITE_APP_HOME_SERVICE_API}/service/${
      params.serviceId
    }`;
    const { data } = await axios.get(serviceUrl);
    setServiceData(data.data);
    setSubService(data.data.service_list);
  };

  const getCategory = async () => {
    const categoryUrl = `${import.meta.env.VITE_APP_HOME_SERVICE_API}/category`;
    const { data } = await axios.get(categoryUrl);
    setCategoryData(data.data);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    const inputData = { ...serviceData, [name]: value };
    setServiceData(inputData);
  };

  const onChangeSubService = (event, index) => {
    const { name, value } = event.target;
    const inputData = [...subService];
    inputData[index][name] = value;
    setSubService(inputData);
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

  // const handleConfirmDelete = () => {
  //   setDeleteServiceId({
  //     id: serviceData.id,
  //     name: "บริการ" + serviceData.name,
  //   });
  // };

  const removeService = async (id) => {
    await axios.delete(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/service/${
        serviceData.service_id
      }`
    );
    navigate("/admin-service");
  };

  const removeSubService = async (id, index) => {
    if (subService.length !== 1) {
      if (id) {
        await axios.delete(
          `${import.meta.env.VITE_APP_HOME_SERVICE_API}/service/list/${id}`
        );
        setSubService(subService.filter((item) => item.service_list_id !== id));
        console.log("it's working");
        return;
      }

      setSubService(subService.filter((item, i) => i !== index));
    }
  };

  const handleUploadImageChange = async (e) => {
    const file = e.target.files[0];
    setUploadImage(file);
    const imageUrl = URL.createObjectURL(file);
    const inputData = { ...serviceData, image: imageUrl };
    setServiceData(inputData);
  };

  useEffect(() => {
    getServiceList();
    getCategory();
  }, []);
  return (
    <div className=" mt-10 mx-10 flex flex-col font-prompt ">
      <div className=" w-full rounded-lg border border-gray-200 bg-white">
        <div className="ml-6 mt-8">
          <label className="flex text-gray-900 ">
            <p className="basis-28">
              ชื่อบริการ <span className="text-red ml-1">*</span>
            </p>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="off"
              className="border border-gray-300 focus:outline-none rounded-lg  w-[435px] h-11 px-4"
              onChange={onChangeHandler}
              value={serviceData?.name}
            />
          </label>
        </div>

        <div className="ml-6 mt-8 flex">
          <p className="basis-28 text-gray-900 ">
            หมวดหมู่
            <span className="text-red ml-1">*</span>
          </p>
          <div className="w-[435px]  h-11 ">
            <Select
              onChange={onChangeHandler}
              variant="outline"
              className="font-normal text-left"
              name="category_id"
              fontSize="16px"
              value={serviceData.category_id}
            >
              {categoryData.map((item, index) => {
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
        </div>

        <div className="ml-6 mt-8">
          <div className="text-gray-900 flex align-text-bottom ">
            <p className="basis-28">
              รูปภาพ<span className="text-red ml-1">*</span>
            </p>

            <div>
              <div className="border border-gray-300 rounded-lg w-[27rem]  h-[12.5rem] ">
                <img
                  src={serviceData.image}
                  alt="service image"
                  className="h-full w-full object-contain "
                />
              </div>

              <div className="flex flex-row justify-between mt-1">
                <span className="text-xs text-gray-700 ">
                  ขนาดภาพที่แแนะนำ 1440 x 225 Px
                </span>
                <label
                  htmlFor="fileInput"
                  className="text-blue-600 text-sm font-semibold underline cursor-pointer hover:text-blue-400 duration-200"
                >
                  เปลี่ยนรูปภาพ
                  <input
                    type="file"
                    id="fileInput"
                    onChange={handleUploadImageChange}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="my-8">
          <hr className=" border border-gray-300  px-3" />
        </div>

        <div className="ml-6 my-8">
          <div className="text-sm text-gray-700 font-semibold mb-8">
            รายการบริการย่อย
          </div>
          {subService.map((item, index) => {
            return (
              <div key={index} className="flex flex-row items-center ">
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
                      name="title"
                      className="border border-gray-300 focus:outline-none rounded-lg w-[422px] h-[42px] p-4"
                      onChange={(event) => onChangeSubService(event, index)}
                      value={item.title}
                    />
                  </div>

                  <div className="mb-8">
                    <label className="block mb-1">
                      หน่วยการบริการ
                      {index === 0 && <span className="text-red ml-1">*</span>}
                    </label>
                    <input
                      type="text"
                      name="unit"
                      className="border border-gray-300 focus:outline-none rounded-lg w-[240px] h-[42px] p-4"
                      onChange={(event) => onChangeSubService(event, index)}
                      value={item.unit}
                    />
                  </div>

                  <div>
                    <label className="block mb-1">
                      ค่าบริการ / 1 หน่วย
                      {index === 0 && <span className="text-red ml-1">*</span>}
                    </label>
                    <input
                      type="number"
                      name="price"
                      className="border border-gray-300 focus:outline-none rounded-lg w-[240px] h-[42px] p-4"
                      onChange={(event) => onChangeSubService(event, index)}
                      value={item.price}
                    />
                  </div>
                </div>

                <span
                  className="text-blue-600 text-sm font-semibold underline cursor-pointer hover:text-blue-400 duration-200"
                  onClick={() => removeSubService(item.service_list_id, index)}
                >
                  ลบรายการ
                </span>
              </div>
            );
          })}
        </div>

        <button
          className="border border-blue-600 text-blue-600 rounded-lg px-6 py-2.5 mt-6 ml-6 hover:border-blue-400 hover:text-blue-400 duration-200"
          onClick={addSubService}
        >
          เพิ่มรายการ +
        </button>
        <div className="my-8">
          <hr className=" border border-gray-300  px-3" />
        </div>

        <div className="ml-6 ">
          <div className="w-[387px] h-[44px] flex">
            <div className="text-gray-700 font-normal text-sm w-[12.5rem]">
              สร้างเมื่อ
            </div>
            <div className="text-gray-900">
              {ConvertThaiDateTime(serviceData.created_at)}
            </div>
          </div>

          <div className="w-[387px] h-[44px] flex">
            <div className="text-gray-700 font-normal text-sm w-[12.5rem]">
              แก้ไขล่าสุด
            </div>
            <div className="text-gray-900">
              {ConvertThaiDateTime(serviceData.updated_at)}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div
          onClick={removeService}
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
