import SidebarNavAdmin from "../components/common/SidebarNavAdmin";
import { Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import supabase from "../utils/supabaseClient.js";
import { GripVerticalIcon } from "../assets/icons/index.js";

function AdminAddServicePage() {
  const [serviceName, setServiceName] = useState("");
  const [subService, setSubService] = useState([]);
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");

  const addSubService = () => {
    const newSubServiceItem = {
      id: Date.now(),
      serviceName: "",
      serviceCost: "",
      serviceUnit: "",
    };

    setSubService([...subService, newSubServiceItem]);
  };

  const removeSubService = (id) => {
    setSubService(subService.filter((item) => item.id !== id));
  };

  const handleServiceNameChange = (e) => {
    setServiceName(e.target.value);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reOrderedSubService = Array.from(subService);
    const [reOrderedItem] = reOrderedSubService.splice(result.source.index, 1);
    reOrderedSubService.splice(result.destination.index, 0, reOrderedItem);

    setSubService(reOrderedSubService);
  };

  const handleSubServiceChange = (index, field, value) => {
    const updatedSubService = [...subService];
    updatedSubService[index] = {
      ...updatedSubService[index],
      [field]: value,
    };
    setSubService(updatedSubService);
  };

  const uploadImage = async () => {
    try {
      const { data, error } = await supabase.storage
        .from("image")
        .upload(`services-image/${image.name}`, image, {
          cacheControl: "3600", // ตั้งค่า cache control ตามที่ต้องการ
        });

      if (error) {
        console.error("Error uploading image:", error.message);
      } else {
        console.log("Image uploaded successfully:", data);
        // ทำอย่างอื่นต่อไปที่คุณต้องการ
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleCreate = async () => {
    if (image) {
      await uploadImage();
    }
  };

  useEffect(() => {
    addSubService();
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
                    handleServiceNameChange(e);
                  }}
                />
              </div>
              <div className="flex flex-row w-[400px]">
                <p className="w-[200px]">
                  หมวดหมู่<span className="text-red">*</span>
                </p>
                <Select
                  variant="unstyled"
                  placeholder="เลือกหมวดหมู่"
                  className="text-center "
                >
                  <option value="ทั่วไป">บริการทั่วไป</option>
                  <option value="ห้องครัว">บริการห้องครัว</option>
                  <option value="ห้องน้ำ">บริการห้องน้ำ</option>
                </Select>
              </div>
              <div className="flex flex-row">
                <p className="w-[200px]">
                  รูปภาพ<span className="text-red">*</span>
                </p>
                <input type="file" onChange={handleImageChange}></input>
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
                                      "serviceName",
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
                                      "serviceCost",
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
                                      "serviceUnit",
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
