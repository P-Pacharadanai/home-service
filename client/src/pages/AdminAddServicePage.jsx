import SidebarNavAdmin from "../components/common/SidebarNavAdmin";
import { Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { GripVerticalIcon } from "../assets/icons/index.js";
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
    setSubService(subService.filter((item) => item.id !== id));
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
      subService.some((item) => !item.title || !item.price || !item.unit)
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
      <div className="h-full">
        <SidebarNavAdmin />
      </div>
      <div className="w-full">
        <DragDropContext onDragEnd={handleDragEnd}>
          <section className="w-full flex flex-row item-center justify-s h-[80px] p-4 bg-white">
            <div className="w-1/2 font-medium text-xl">เพิ่มบริการ</div>
            <div id="right-content" className="w-1/2 flex flex-row justify-end">
              <button className="bg-blue-600 text-white rounded-lg px-6 py-2.5 ml-3">
                ยกเลิก
              </button>
              <button
                className="bg-blue-600 text-white rounded-lg px-6 py-2.5 ml-3"
                onClick={handleCreate}
              >
                สร้าง
              </button>
            </div>
          </section>
          <section className="h-screen w-full bg-gray-100 p-10">
            <div className="flex flex-col gap-10 w-full h-full bg-white px-8 py-10 ">
              <div className="flex flex-row">
                <p className="w-[200px]">
                  ชื่อบริการ<span className="text-red">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Enter service name"
                  className="border border-gray-300 focus:outline-none rounded-lg w-[422px] h-[42px] "
                  onChange={(e) => {
                    setServiceName(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-row w-[400px]">
                <p className="w-[400px]">
                  หมวดหมู่<span className="text-red">*</span>
                </p>
                <Select
                  onChange={(e) => {
                    setCategoryId(e.target.value);
                  }}
                  variant="outline"
                  placeholder="เลือกหมวดหมู่"
                  className="font-semibold text-center"
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
              <div className="flex flex-row">
                <p className="w-[200px]">
                  รูปภาพ<span className="text-red">*</span>
                </p>

                <input type="file" onChange={handleUploadImageChange}></input>
                <img className=" w-[300px] h-[300px]" src={imageUrl} />
              </div>
              <div className="flex flex-col gap-5">
                <p>รายการบริการย่อย</p>
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
                              className="flex flex-row gap-10 my-5"
                            >
                              <div className="flex justify-center items-center w-[20px]">
                                <img
                                  src={GripVerticalIcon}
                                  className="w-[10px] h-full"
                                />
                              </div>

                              <div>
                                <p>ชื่อรายการ</p>
                                <input
                                  type="text"
                                  placeholder="Enter service name"
                                  className="border border-gray-300 focus:outline-none rounded-lg w-[422px] h-[42px] "
                                  onChange={(e) =>
                                    handleSubServiceChange(
                                      index,
                                      "title",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                              <div>
                                <p>ค่าบริการ / 1 หน่วย</p>
                                <input
                                  type="text"
                                  placeholder="฿"
                                  className="border border-gray-300 focus:outline-none rounded-lg w-[240px] h-[44px] "
                                  onChange={(e) =>
                                    handleSubServiceChange(
                                      index,
                                      "price",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                              <div>
                                <p>หน่วยการบริการ</p>
                                <input
                                  type="text"
                                  className="border border-gray-300 focus:outline-none rounded-lg w-[240px] h-[42px] "
                                  onChange={(e) =>
                                    handleSubServiceChange(
                                      index,
                                      "unit",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                              <a
                                className="flex items-center "
                                onClick={() => removeSubService(item.id)}
                              >
                                ลบรายการ
                              </a>
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
                    className="bg-blue-600 text-white rounded-lg px-6 py-2.5 ml-3"
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
