import SidebarNavAdmin from "../components/common/SidebarNavAdmin";
import { Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { GripVerticalIcon, imageIcon } from "../assets/icons/index.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminAddServicePage() {
  const [serviceName, setServiceName] = useState("");
  const [subService, setSubService] = useState([]);
  const [uploadImage, setUploadImage] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [categoryId, setCategoryId] = useState();
  const [categoryData, setCategoryData] = useState([]);

  const navigate = useNavigate();

  const getCategory = async () => {
    const categoryUrl = `${import.meta.env.VITE_APP_HOME_SERVICE_API}/category`;
    const { data } = await axios.get(categoryUrl);
    setCategoryData(data.data);
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

  const removeSubService = (id) => {
    if (subService.length !== 1) {
      setSubService(subService.filter((item) => item.id !== id));
    }
  };

  const handleSubServiceChange = (index, field, value) => {
    const updatedSubService = [...subService];
    updatedSubService[index] = {
      ...updatedSubService[index],
      [field]: value,
    };
    setSubService(updatedSubService);
  };

  const handleUploadImageChange = async (e) => {
    const file = e.target.files[0];
    setUploadImage(file);
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };

  const handleCreate = async () => {
    if (
      !serviceName ||
      !categoryId ||
      !uploadImage ||
      subService.some((item) => !item.title || !item.price || !item.unit) ||
      !subService
    ) {
      alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }

    const formData = new FormData();
    const newSubService = subService.map(({ id, ...rest }) => rest);

    formData.append("name", serviceName);
    formData.append("category_id", categoryId);
    formData.append("subService", JSON.stringify(newSubService));
    formData.append("image", uploadImage);

    const { data } = await axios.post(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/service`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    navigate("/admin-service");
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reOrderedSubService = Array.from(subService);
    const [reOrderedItem] = reOrderedSubService.splice(result.source.index, 1);
    reOrderedSubService.splice(result.destination.index, 0, reOrderedItem);

    setSubService(reOrderedSubService);
  };

  useEffect(() => {
    addSubService();
    getCategory();
  }, []);

  return (
    <div className="flex h-screen font-prompt">
      <div className="h-screen">
        <SidebarNavAdmin currentPage="บริการ" />
      </div>
      <div className="flex flex-col w-full overflow-y-auto ">
        <DragDropContext onDragEnd={handleDragEnd}>
          <section className="w-full flex flex-row items-center  h-[80px] px-14 bg-white">
            <div className="w-1/2 font-medium text-xl">เพิ่มบริการ</div>
            <div id="right-content" className="w-1/2 flex flex-row justify-end">
              <button
                className="border border-blue-600 text-blue-600 hover:border-blue-400 duration-200 hover:text-blue-400 rounded-lg px-6 py-2.5 ml-3"
                onClick={() => {
                  navigate("/admin-service");
                }}
              >
                ยกเลิก
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-500 duration-200 text-white rounded-lg px-6 py-2.5 ml-3"
                onClick={handleCreate}
              >
                สร้าง
              </button>
            </div>
          </section>
          <section className="h-full w-full bg-base p-10  overflow-y-auto">
            <div className="flex flex-col gap-10 w-full h-fit bg-white px-8 py-10 ">
              <div className="flex flex-row">
                <p className="basis-28">
                  ชื่อบริการ<span className="text-red">*</span>
                </p>
                <input
                  type="text"
                  className="px-4 border border-gray-300 focus:outline-none rounded-lg w-[435px] h-[42px] "
                  onChange={(e) => {
                    setServiceName(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-row">
                <p className="basis-28">
                  หมวดหมู่<span className="text-red">*</span>
                </p>
                <div className="w-[435px] h-11">
                  <Select
                    onChange={(e) => {
                      setCategoryId(e.target.value);
                    }}
                    variant="outline"
                    placeholder="เลือกหมวดหมู่"
                    className="text-left text-gray-700"
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
              </div>

              <div className="flex flex-row">
                <p className="basis-28">
                  รูปภาพ<span className="text-red">*</span>
                </p>
                <div className="flex flex-col">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg w-[27rem] h-[12.5rem] flex justify-center">
                    <div className="flex flex-col items-center justify-center">
                      {!imageUrl && (
                        <>
                          <img
                            src={imageIcon}
                            alt="image icon"
                            className="w-[2.25rem] h-[2.25rem]"
                          />
                          <label
                            htmlFor="fileInput"
                            className="text-blue-600 text-sm font-normal cursor-pointer"
                          >
                            อัพโหลดรูปภาพ
                            <input
                              type="file"
                              id="fileInput"
                              onChange={handleUploadImageChange}
                              className="hidden"
                            />
                          </label>
                          <p className="font-normal text-gray-700 text-sm">
                            PNG, JPG ขนาดไม่เกิน 5MB
                          </p>
                        </>
                      )}
                    </div>
                    {imageUrl && (
                      <img
                        className="max-h-[12.5rem] object-cover"
                        src={imageUrl}
                        alt="Uploaded Image"
                      />
                    )}
                  </div>
                  <div className="flex flex-row justify-between mt-1">
                    <span className="text-xs text-gray-700 ">
                      ขนาดภาพที่แแนะนำ 1440 x 225 Px
                    </span>
                    {imageUrl && (
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
                    )}
                  </div>
                </div>
              </div>
              <hr className=" border border-gray-300  px-3" />
              <div className="flex flex-col">
                <p className="text-sm text-gray-700 font-semibold mb-8">
                  รายการบริการย่อย
                </p>
                <Droppable droppableId="subServiceList">
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                      {subService.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="flex flex-row gap-10 "
                            >
                              <div className="flex flex-row gap-2 items-center">
                                <img
                                  src={GripVerticalIcon}
                                  alt="GripVertial icon click for drag and drop"
                                  className="h-5 w-5 mr-1"
                                />

                                <div className="mb-8">
                                  <label className="block mb-1 text-gray-700 text-sm">
                                    ชื่อรายการ
                                  </label>
                                  <input
                                    type="text"
                                    className="px-4 border border-gray-300 focus:outline-none rounded-lg w-[422px] h-[42px] "
                                    onChange={(e) =>
                                      handleSubServiceChange(
                                        index,
                                        "title",
                                        e.target.value
                                      )
                                    }
                                  />
                                </div>
                                <div className="mb-8">
                                  <label className="block mb-1 text-gray-700 text-sm">
                                    ค่าบริการ / 1 หน่วย
                                  </label>
                                  <div className="relative">
                                    <input
                                      type="number"
                                      className="px-4 flex justify-end items-center border border-gray-300 focus:outline-none rounded-lg w-[240px] h-[44px] "
                                      onChange={(e) =>
                                        handleSubServiceChange(
                                          index,
                                          "price",
                                          e.target.value
                                        )
                                      }
                                    />
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 text-base font-normal">
                                      ฿
                                    </span>
                                  </div>
                                </div>

                                <div className="mb-8">
                                  <label className="block mb-1 text-gray-700 text-sm">
                                    หน่วยการบริการ
                                  </label>
                                  <input
                                    type="text"
                                    className="px-4 border border-gray-300 focus:outline-none rounded-lg w-[240px] h-[42px] "
                                    onChange={(e) =>
                                      handleSubServiceChange(
                                        index,
                                        "unit",
                                        e.target.value
                                      )
                                    }
                                  />
                                </div>
                                <span
                                  className="flex items-center text-gray-400 hover:text-blue-400 duration-200 text-sm font-semibold underline cursor-pointer "
                                  onClick={() => removeSubService(item.id)}
                                >
                                  ลบรายการ
                                </span>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
                <div>
                  <button
                    onClick={addSubService}
                    className="border  border-blue-600 hover:border-blue-400 hover:text-blue-400 duration-200 text-blue-600 rounded-lg px-6 py-2.5 ml-3"
                  >
                    เพิ่มรายการ +
                  </button>
                </div>
              </div>
            </div>
          </section>
        </DragDropContext>
      </div>
    </div>
  );
}

export default AdminAddServicePage;
