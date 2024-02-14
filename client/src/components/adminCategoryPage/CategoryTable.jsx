import { GripVerticalIcon, TrashIcon, PenSquareIcon } from "../../assets/icons";

const CategoryTable = () => {
  const categories = [
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
  ];

  return (
    <div className="flex mt-10 ml-10">
      <table className="w-[1120px] font-prompt rounded-lg border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-sm">
            <th className="py-2.5 px-6 w-[56px]"> </th>{" "}
            <th className="py-2.5 px-6 w-[80px]">ลำดับ</th>
            <th className="py-2.5 px-6 w-[262px] text-left">ชื่อหมวดหมู่</th>
            <th className="py-2.5 px-6 w-[245px] text-left">สร้างเมื่อ</th>
            <th className="py-2.5 px-6 w-[357px] text-left">แก้ไขล่าสุด</th>
            <th className="py-2.5 px-6 w-[120px]">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {categories.map((category, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4 ">
                <img
                  src={GripVerticalIcon}
                  alt="Grip Icon"
                  className="h-6 w-6 cursor-pointer"
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
  );
};

export default CategoryTable;
