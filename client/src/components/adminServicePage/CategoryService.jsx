import React, { useState, useEffect } from "react";
import { GripVerticalIcon, TrashIcon, PenSquareIcon } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { convertThaiDateTime } from "../common";
import AdminServiceListSkeleton from "../skeleton/AdminServiceList";
const ServiceService = (props) => {
  const [services, setServices] = useState([]);
  const { refresh, setDeleteServiceId, inputKeyword } = props;

  const navigate = useNavigate();

  const getServiceData = async () => {
    try {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_APP_HOME_SERVICE_API
        }/service?keyword=${inputKeyword}`
      );
      setServices(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateServiceData = async (newServices) => {
    const { data } = await axios.put(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/service`,
      {
        services: newServices,
      }
    );
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const sourceService = services[result.source.index];
    const destinationService = services[result.destination.index];

    if (sourceService.categories.name !== destinationService.categories.name) {
      return;
    }

    const reOrderedService = Array.from(services);
    const [reOrderedItem] = reOrderedService.splice(result.source.index, 1);
    reOrderedService.splice(result.destination.index, 0, reOrderedItem);

    const updatedService = reOrderedService.map((service, index) => ({
      ...service,
      index: index + 1,
    }));

    // updateServiceData(updatedService);

    setServices(updatedService);
  };

  const handleConfirmDelete = (id, name) => {
    setDeleteServiceId({
      id: id,
      name: "บริการ" + name,
    });
  };

  useEffect(() => {
    getServiceData();
  }, [inputKeyword, refresh]);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex mt-10 ml-10">
        <table className="w-full font-prompt rounded-lg border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="py-2.5 px-6 w-[56px]"></th>
              <th className="py-2.5 px-6 w-[58px]">ลำดับ</th>
              <th className="py-2.5 px-6 w-[262px] text-left">ชื่อบริการ</th>
              <th className="py-2.5 px-6 w-[225px] text-left">หมวดหมู่</th>
              <th className="py-2.5 px-6 w-[209px] text-left">สร้างเมื่อ</th>
              <th className="py-2.5 px-6 w-[226px] text-left">แก้ไขล่าสุด</th>
              <th className="py-2.5 px-6 w-[120px]">Action</th>
            </tr>
          </thead>
          {services.length === 0 && (
            <tbody className="bg-white">
              <AdminServiceListSkeleton itemCount={9} />
            </tbody>
          )}
          <Droppable droppableId="subServiceList">
            {(provided) => (
              <tbody
                className="bg-white"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {services.map((service, index) => {
                  const createAt = convertThaiDateTime(service.created_at);
                  const updateAt = convertThaiDateTime(service.updated_at);

                  return (
                    <Draggable
                      key={service.service_id}
                      draggableId={service.service_id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <tr
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="border-b relative bg-white hover:bg-gray-50"
                        >
                          <td className="py-2 px-4 w-[56px]">
                            <div className="flex justify-center">
                              <img
                                {...provided.dragHandleProps}
                                src={GripVerticalIcon}
                                alt="Grip Icon"
                                className="h-6 w-6 cursor-move"
                              />
                            </div>
                          </td>
                          <td className="py-8 px-6 text-center w-[58px] ">
                            {index + 1}
                          </td>
                          <td className="py-8 px-6 w-[fit] hover:cursor-pointer hover:text-gray-500 duration-200">
                            <p
                              onClick={() =>
                                navigate(`/admin-service/${service.service_id}`)
                              }
                            >
                              บริการ{service.name}
                            </p>
                          </td>

                          <td className="py-8 px-6 w-[225px]">
                            <p
                              style={{
                                backgroundColor: `${service.categories.background_color}`,
                                color: `${service.categories.text_color}`,
                              }}
                              className="py-1 px-2.5 inline-block font-normal text-xs h-[26px] rounded-lg"
                            >
                              บริการ{service.categories.name}
                            </p>
                          </td>

                          <td className="py-8 px-6 w-[209px]">{createAt}</td>
                          <td className="py-8 px-6 w-[226px]">{updateAt}</td>
                          <td className="py-8 px-6 text-center ">
                            <div className="flex justify-center">
                              <div className="flex flex-row items-center justify-center gap-7 w-[120px]">
                                <img
                                  src={TrashIcon}
                                  alt="Trash Icon"
                                  onClick={() =>
                                    handleConfirmDelete(
                                      service.service_id,
                                      service.name
                                    )
                                  }
                                  className="cursor-pointer h-4 w-4 hover:opacity-80 duration-200"
                                />
                                <img
                                  src={PenSquareIcon}
                                  alt="Edit Icon"
                                  onClick={() =>
                                    navigate(
                                      `/admin-service/edit/${service.service_id}`
                                    )
                                  }
                                  className="cursor-pointer h-4 w-4 hover:opacity-70 duration-200"
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </tbody>
            )}
          </Droppable>
        </table>
      </div>
    </DragDropContext>
  );
};

export default ServiceService;
