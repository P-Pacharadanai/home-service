// import SidebarNavAdmin from "../components/common/SidebarNavAdmin";
// import { Select } from "@chakra-ui/react";
// import { useState, useEffect } from "react";

// function AdminAddServicePage() {
//   const [subService, setSubService] = useState([]);

//   const addSubService = () => {
//     setSubService([...subService, { id: Date.now() }]);
//   };

//   const removeSubService = (id) => {
//     setSubService(subService.filter((item) => item.id !== id));
//   };

//   useEffect(() => {
//     addSubService();
//   }, []);
//   return (
//     <div className="flex h-screen font-prompt">
//       <div className="h-full">
//         <SidebarNavAdmin />
//       </div>{" "}
//       <div className="w-full">
//         <section className="w-full flex flex-row item-center justify-s h-[80px] p-4 bg-white">
//           <div className="w-1/2 font-medium text-xl">เพิ่มบริการ</div>
//           <div id="right-content" className="w-1/2 flex flex-row justify-end">
//             <button className="bg-blue-600 text-white rounded-lg px-6 py-2.5 ml-3">
//               ยกเลิก
//             </button>
//             <button className="bg-blue-600 text-white rounded-lg px-6 py-2.5 ml-3">
//               สร้าง
//             </button>
//           </div>
//         </section>
//         <section className="h-screen w-full bg-gray-100 p-10">
//           <div>
//             <div className="flex flex-col gap-10 w-full h-full bg-white px-8 py-10 ">
//               <div className="flex flex-row">
//                 <p className="w-[200px]">ชื่อบริการ</p>
//                 <input
//                   type="text"
//                   placeholder="Enter service name"
//                   className="border "
//                 />
//               </div>
//               <div className="flex flex-row w-[400px]">
//                 <p className="w-[200px]">หมวดหมู่</p>
//                 <Select
//                   //   onChange={handleCategoryChange}
//                   variant="unstyled"
//                   placeholder="บริการทั้งหมด"
//                   className="text-center "
//                 >
//                   <option value="ทั่วไป">บริการทั่วไป</option>
//                   <option value="ห้องครัว">บริการห้องครัว</option>
//                   <option value="ห้องน้ำ">บริการห้องน้ำ</option>
//                 </Select>
//               </div>
//               <div className="flex flex-row">
//                 <p>รูปภาพ</p>
//                 <input></input>
//               </div>
//               <div className="flex flex-col gap-10">
//                 <p>รายการบริการย่อย</p>
//                 {subService.map((item, index) => (
//                   <div key={item.id} className="flex flex-row gap-5">
//                     <div className="flex flex-row gap-5">
//                       <div>{index + 1}</div>
//                       <div>
//                         <p>ชื่อรายการ</p>
//                         <input
//                           type="text"
//                           placeholder="Enter service name"
//                           className="border w-[400px]"
//                         />
//                       </div>
//                       <div>
//                         <p>ค่าบริการ / 1 หน่วย</p>
//                         <input
//                           type="text"
//                           placeholder="฿"
//                           className="text-right border "
//                         />
//                       </div>
//                       <div>
//                         <p>หน่วยการบิการ</p>
//                         <input
//                           type="text"
//                           placeholder="AAAAAAAAA"
//                           className="border "
//                         />
//                       </div>
//                     </div>
//                     <a onClick={() => removeSubService(item.id)}>ลบรายการ</a>
//                   </div>
//                 ))}
//                 <div>
//                   <button
//                     onClick={addSubService}
//                     className="bg-blue-600 text-white rounded-lg px-6 py-2.5 ml-3"
//                   >
//                     เพิ่มรายการ
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

import SidebarNavAdmin from "../components/common/SidebarNavAdmin";
import { Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function AdminAddServicePage() {
  const [subService, setSubService] = useState([]);

  const addSubService = () => {
    setSubService([...subService, { id: Date.now() }]);
  };

  const removeSubService = (id) => {
    setSubService(subService.filter((item) => item.id !== id));
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedSubService = Array.from(subService);
    const [reorderedItem] = reorderedSubService.splice(result.source.index, 1);
    reorderedSubService.splice(result.destination.index, 0, reorderedItem);

    setSubService(reorderedSubService);
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
            {/* ... (remaining code unchanged) */}
          </section>
          <section className="h-screen w-full bg-gray-100 p-10">
            {/* ... (remaining code unchanged) */}
            <div className="flex flex-col gap-10">
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
                            className="flex flex-row gap-5"
                          >
                            {/* ... (remaining code unchanged) */}
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
                  เพิ่มรายการ
                </button>
              </div>
            </div>
          </section>
        </DragDropContext>
      </div>
    </div>
  );
}

export default AdminAddServicePage;
