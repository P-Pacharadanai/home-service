import { GripVerticalIcon, TrashIcon, PenSquareIcon } from "../../assets/icons";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import React, { useState } from "react";

const CategoryTable = () => {
  // const [draggedIndex, setDraggedIndex] = useState(null);
  const [categories, setCategories] = useState([
    {
      order: 1,
      name: "บริการทั่วไป",
      created: "12/02/2022 10:30PM",
      updated: "12/02/2022 10:30PM",
    },
    {
      order: 2,
      name: "บริการห้องครัว",
      created: "12/02/2022 10:30PM",
      updated: "12/02/2022 10:30PM",
    },
    {
      order: 3,
      name: "บริการห้องน้ำ",
      created: "12/02/2022 10:30PM",
      updated: "12/02/2022 10:30PM",
    },
  ]);

  // const moveCategory = (dragIndex, hoverIndex) => {
  //   const draggedCategory = categories[dragIndex];
  //   const updatedCategories = [...categories];
  //   updatedCategories.splice(dragIndex, 1);
  //   updatedCategories.splice(hoverIndex, 0, draggedCategory);
  //   setCategories(updatedCategories);
  // };

  // const [, drag] = useDrag({
  //   type: "ROW",
  //   item: { index: draggedIndex },
  // });

  // const [, drop] = useDrop({
  //   accept: "ROW",
  //   hover: (item) => {
  //     const dragIndex = item.index;
  //     const hoverIndex = categories.findIndex(
  //       (category, index) =>
  //         index !== draggedIndex && isOverCategory(item, category, index)
  //     );

  //     if (dragIndex === hoverIndex) return;

  //     setDraggedIndex(dragIndex);
  //     moveCategory(dragIndex, hoverIndex);
  //     item.index = hoverIndex;
  //   },
  // });

  // const isOverCategory = (item, category, index) => {
  //   const rect = category.getBoundingClientRect();
  //   const centerY = rect.top + rect.height / 2;
  //   const mouseY = item.clientY;
  //   return index < draggedIndex ? mouseY < centerY : mouseY > centerY;
  // };

  return (
    // <DndProvider backend={HTML5Backend}>
    <div className="flex mt-10 ml-10">
      <table className="w-[1120px] font-prompt rounded-lg border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-sm">
            <th className="py-2.5 px-6 w-[56px]"> </th>{" "}
            <th className="py-2.5 px-6 w-[80px] ">ลำดับ</th>
            <th className="py-2.5 px-6 w-[262px] text-left">ชื่อหมวดหมู่</th>
            <th className="py-2.5 px-6 w-[245px] text-left">สร้างเมื่อ</th>
            <th className="py-2.5 px-6 w-[357px] text-left">แก้ไขล่าสุด</th>
            <th className="py-2.5 px-6 w-[120px]">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {categories.map((category, index) => (
            <tr
              // key={index}
              // ref={(node) => drag(drop(node))}
              className="border-b"
            >
              <td className="py-2 px-4 ">
                <img
                  src={GripVerticalIcon}
                  alt="Grip Icon"
                  className="h-6 w-6 cursor-move"
                />
              </td>
              <td className="py-8 px-6 text-center ">{category.order}</td>
              <td className="py-8 px-6 ">{category.name}</td>
              <td className="py-8 px-6 ">{category.created}</td>
              <td className="py-8 px-6 ">{category.updated}</td>
              <td className="py-8 px-6 text-center">
                <div className="flex flex-row items-center justify-center gap-7">
                  <img
                    src={TrashIcon}
                    alt="Trash Icon"
                    className="cursor-pointer h-4 w-4"
                  />
                  <img
                    src={PenSquareIcon}
                    alt="Edit Icon"
                    className="cursor-pointer h-4 w-4"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    // </DndProvider>
  );
};

export default CategoryTable;
