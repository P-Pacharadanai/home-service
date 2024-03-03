import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";
import { convertThaiDateTime } from "../common";
import { GripVerticalIcon, TrashIcon, PenSquareIcon } from "../../assets/icons";
import CategoryListSkeleton from "../skeleton/CategoryList";

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

  const updateCategoryData = async (newCategories) => {
    const { data } = await axios.put(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/category`,
      {
        categories: newCategories,
      }
    );
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

    const updatedCategory = reOrderedCategory.map((category, index) => ({
      ...category,
      index: index + 1,
    }));

    updateCategoryData(updatedCategory);

    setCategories(updatedCategory);
  };

  useEffect(() => {
    getCategoryData();
  }, [props.inputKeyword, props.refresh]);

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="flex mt-10 ml-10">
        <table className="w-full font-prompt rounded-lg border border-gray-200 mr-6">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-sm">
              <th className="py-2.5 px-6 w-[5%]"></th>
              <th className="py-2.5 px-6 w-[7%]">ลำดับ</th>
              <th className="py-2.5 px-6 w-[23%] text-left">ชื่อหมวดหมู่</th>
              <th className="py-2.5 px-6 w-[22%] text-left">สร้างเมื่อ</th>
              <th className="py-2.5 px-6 w-[32%] text-left">แก้ไขล่าสุด</th>
              <th className="py-2.5 px-6 w-[11%]">Action</th>
            </tr>
          </thead>
          {categories.length === 0 && (
            <tbody className="bg-white">
              <CategoryListSkeleton itemCount={5} />
            </tbody>
          )}
          <Droppable droppableId="subServiceList">
            {(provided) => (
              <tbody
                className="bg-white w-full"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {categories.map((category, index) => {
                  const createAt = convertThaiDateTime(category.created_at);
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
                          className="border-b relative bg-white w-full"
                        >
                          <td className="w-[5%] py-2 px-4">
                            <div className=" flex justify-center">
                              <img
                                src={GripVerticalIcon}
                                alt="Grip Icon"
                                className="h-6 w-6 cursor-move"
                                {...provided.dragHandleProps}
                              />
                            </div>
                          </td>
                          <td className="w-[7%] py-8 px-6 text-center">
                            {index + 1}
                          </td>
                          <td className="w-[23%] py-8 px-6">
                            <p
                              onClick={() =>
                                navigate(`/admin-category/${category.id}`)
                              }
                              className="w-fit hover:cursor-pointer hover:text-gray-500 duration-200"
                            >
                              บริการ{category.name}
                            </p>
                          </td>
                          <td className="w-[22%] py-8 px-6">{createAt}</td>
                          <td className="w-[32%] py-8 px-6">{updateAt}</td>
                          <td className="w-[11%] py-8 px-6 text-center">
                            <div className="flex flex-row items-center justify-center gap-7">
                              <img
                                src={TrashIcon}
                                alt="Trash Icon"
                                className="cursor-pointer h-4 w-4 hover:opacity-80 duration-200"
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
                                className="cursor-pointer h-4 w-4 hover:opacity-70 duration-200"
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
