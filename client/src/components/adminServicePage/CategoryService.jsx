import { GripVerticalIcon, TrashIcon, PenSquareIcon } from "../../assets/icons";

const CategoryService = () => {
  const services = [
    {
      order: 1,
      name: "ล้างแอร์",
      category: "บริการทั่วไป",
      created: "12/02/2022 10:30PM",
      updated: "12/02/2022 10:30PM",
    },
    {
      order: 2,
      name: "ติดตั้งแอร์",
      category: "บริการทั่วไป",
      created: "12/02/2022 10:30PM",
      updated: "12/02/2022 10:30PM",
    },
    {
      order: 3,
      name: "ทำความสะอาดทั่วไป",
      category: "บริการทั่วไป",
      created: "12/02/2022 10:30PM",
      updated: "12/02/2022 10:30PM",
    },
    {
      order: 4,
      name: "ซ่อมแอร์",
      category: "บริการทั่วไป",
      created: "12/02/2022 10:30PM",
      updated: "12/02/2022 10:30PM",
    },
    {
      order: 5,
      name: "ซ่อมเครื่องซักผ้า",
      category: "บริการทั่วไป",
      created: "12/02/2022 10:30PM",
      updated: "12/02/2022 10:30PM",
    },

    {
      order: 6,
      name: "ติดตั้งเตาแก๊ส",
      category: "บริการห้องครัว",
      created: "12/02/2022 10:30PM",
      updated: "12/02/2022 10:30PM",
    },
    {
      order: 7,
      name: "ติดตั้งเครื่องดูดควัน",
      category: "บริการห้องครัว",
      created: "12/02/2022 10:30PM",
      updated: "12/02/2022 10:30PM",
    },
    {
      order: 8,
      name: "ติดตั้งชักโครก",
      category: "บริการห้องน้ำ",
      created: "12/02/2022 10:30PM",
      updated: "12/02/2022 10:30PM",
    },
    {
      order: 9,
      name: "ติดตั้งเครื่องทำน้ำอุ่น",
      category: "บริการห้องน้ำ",
      created: "12/02/2022 10:30PM",
      updated: "12/02/2022 10:30PM",
    },
  ];

  const categoryColorMap = {
    บริการทั่วไป: "py-1 px2.5 text-blue-800 bg-blue-100",
    บริการห้องครัว: "py-1 px2.5 text-purple-900 bg-purple-100",
    บริการห้องน้ำ: "py-1 px2.5 text-green-900 bg-green-100",
  };

  return (
    <div className="flex mt-10 ml-10">
      <table className="w-[1120px] font-prompt rounded-lg border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-sm">
            <th className="py-2.5 px-6 w-[56px]"> </th>{" "}
            <th className="py-2.5 px-6 w-[58px]">ลำดับ</th>
            <th className="py-2.5 px-6 w-[262px] text-left">ชื่อบริการ</th>
            <th className="py-2.5 px-6 w-[225px] text-left">หมวดหมู่</th>
            <th className="py-2.5 px-6 w-[209px] text-left">สร้างเมื่อ</th>
            <th className="py-2.5 px-6 w-[226px] text-left">แก้ไขล่าสุด</th>
            <th className="py-2.5 px-6 w-[120px]">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {services.map((service, index) => (
            <tr key={index} className="border-b">
              <td className="py-2 px-4 ">
                <img
                  src={GripVerticalIcon}
                  alt="Grip Icon"
                  className="h-6 w-6 cursor-move"
                />
              </td>
              <td className="py-8 px-6 text-center ">{service.order}</td>
              <td className="py-8 px-6 ">{service.name}</td>
              <td className="py-8 px-6">
                <div
                  className={`inline-block ${
                    categoryColorMap[service.category]
                  } font-normal text-xs h-[26px] rounded-lg py-1 px-2.5`}
                >
                  {service.category}
                </div>
              </td>
              <td className="py-8 px-6 ">{service.created}</td>
              <td className="py-8 px-6 ">{service.updated}</td>
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

export default CategoryService;
