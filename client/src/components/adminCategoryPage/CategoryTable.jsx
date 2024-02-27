import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";
import { convertThaiDateTime } from "../common";
import { GripVerticalIcon, TrashIcon, PenSquareIcon } from "../../assets/icons";

const CategoryTable = (props) => {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const getCategoryData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/category?keyword=${
        props.inputKeyword
      }`
    );
    setCategories(data.data);
  };

  const handleConfirmDelete = (id, name) => {
    props.setDeleteCategoryId({
      id: id,
      name: "บริการ" + name,
    });
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reOrderedCategory = Array.from(categories);
    const [reOrderedItem] = reOrderedCategory.splice(result.source.index, 1);
    reOrderedCategory.splice(result.destination.index, 0, reOrderedItem);

    setCategories(reOrderedCategory);
  };

  useEffect(() => {
    getCategoryData();
  }, [props.inputKeyword, props.refresh]);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex mt-10 ml-10">
        <table className="w-[1120px] font-prompt rounded-lg border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="py-2.5 px-6 w-[56px]"></th>
              <th className="py-2.5 px-6 w-[80px]">ลำดับ</th>
              <th className="py-2.5 px-6 w-[262px] text-left">ชื่อหมวดหมู่</th>
              <th className="py-2.5 px-6 w-[245px] text-left">สร้างเมื่อ</th>
              <th className="py-2.5 px-6 w-[357px] text-left">แก้ไขล่าสุด</th>
              <th className="py-2.5 px-6 w-[120px]">Action</th>
            </tr>
          </thead>
          <Droppable droppableId="subServiceList">
            {(provided) => (
              <tbody
                className="bg-white"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {categories.map((category, index) => {
                  const creatAt = convertThaiDateTime(category.created_at);
                  const updateAt = convertThaiDateTime(category.updated_at);

                  return (
                    <Draggable
                      key={category.id}
                      draggableId={category.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <tr
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="border-b relative bg-white "
                        >
                          <td
                            className="w-[56px] py-2 px-4"
                            {...provided.dragHandleProps}
                          >
                            <img
                              src={GripVerticalIcon}
                              alt="Grip Icon"
                              className="h-6 w-6 cursor-move"
                            />
                          </td>
                          <td className="w-[80px] py-8 px-6 text-center ">
                            {index + 1}
                          </td>
                          <td className="w-[262px] py-8 px-6">
                            <p
                              onClick={() =>
                                navigate(`/admin-category/${category.id}`)
                              }
                              className="w-fit hover:cursor-pointer"
                            >
                              บริการ{category.name}
                            </p>
                          </td>
                          <td className="w-[245px] py-8 px-6 ">{creatAt}</td>
                          <td className="w-[357px] py-8 px-6 ">{updateAt}</td>
                          <td className="w-[120px] py-8 px-6 text-center">
                            <div className="flex flex-row items-center justify-center gap-7">
                              <img
                                src={TrashIcon}
                                alt="Trash Icon"
                                className="cursor-pointer h-4 w-4"
                                onClick={() =>
                                  handleConfirmDelete(
                                    category.id,
                                    category.name
                                  )
                                }
                              />
                              <img
                                src={PenSquareIcon}
                                alt="Edit Icon"
                                onClick={() =>
                                  navigate(
                                    `/admin-category/edit/${category.id}`
                                  )
                                }
                                className="cursor-pointer h-4 w-4"
                              />
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

export default CategoryTable;
