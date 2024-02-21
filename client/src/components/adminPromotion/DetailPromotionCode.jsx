import React, { useState } from "react";
import { AlertModal } from "../../components/common";

import { savefileIcon } from "../../assets/icons";
import { Search, Plus ,Trash2 } from "lucide-react";

function DetailPromotionCode() {
  const initialPromotionCodes = [
    { id: 1, code: 'HOME202', type: 'Fixed', usage: '10/100', discount: '-50.00฿', startDate: '12/02/2024 10:30 PM', endDate: '12/06/2024 10:30 PM' },
    { id: 2, code: 'HOME10',  type: 'Percent', usage: '5/100', discount: '10.00%', startDate: '12/02/2024 10:30 PM', endDate: '12/06/2024 10:30 PM' },
    { id: 3, code: 'HOME203', type: 'Fixed', usage: '10/100', discount: '-50.00฿', startDate: '12/02/2024 10:30 PM', endDate: '12/06/2024 10:30 PM' },
    { id: 4, code: 'HOME204', type: 'Fixed', usage: '10/100', discount: '-50.00฿', startDate: '12/02/2024 10:30 PM', endDate: '12/06/2024 10:30 PM' },
    { id: 5, code: 'HOME205', type: 'Fixed', usage: '10/100', discount: '-50.00฿', startDate: '12/02/2024 10:30 PM', endDate: '12/06/2024 10:30 PM' },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPromoCodeId, setSelectedPromoCodeId] = useState(null);
  const [promotionCodes, setPromotionCodes] = useState(initialPromotionCodes);

  const handleDeleteClick = (promoCodeId) => {
    setSelectedPromoCodeId(promoCodeId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = () => {
    // Correctly filtering by ID now
    setPromotionCodes(currentCodes => currentCodes.filter(code => code.id !== selectedPromoCodeId));
    setIsModalOpen(false);
    setSelectedPromoCodeId(null); // Resetting the ID
  };

  return (
    <>
    <nav className="flex justify-between items-center w-full border-b p-4 bg-white font-prompt">
      <h2 className="text-xl font-medium text-gray-800">Promotion Code</h2>
      <div className="flex gap-6 leading-none">
        <div className="relative flex items-center border-2 border-gray-300 px-4 py-3 rounded-lg w-[350px] bg-white hover:border-gray-500">
          <Search className="mr-4 text-gray-300 absolute left-4" />
          <input
            type="text"
            placeholder="ค้นหา Promotion Code..."
            className="flex-grow text-mb pl-12 bg-transparent text-gray-700 outline-none focus:border-gray-600 focus:bg-gray-100 focus:ring-1"
          />
        </div>
        <button className="flex items-center gap-2 px-9 py-2 bg-blue-600 text-white rounded-lg hover:bg-white hover:border-blue-600 border hover:text-blue-600">
          เพิ่ม Promotion Code
          <Plus className="w-5 " />
        </button>
      </div>
    </nav>
    <section className="font-prompt mt-10 border-gray-200 rounded-lg border w-full">
        <div className="grid grid-cols-7 bg-gray-100 py-3 px-4 text-md text-start text-gray-700 ">
          <div>Promotion Code</div>
          <div>ประเภท</div>
          <div>โควต้าการใช้(ครั้ง)</div>
          <div>ราคาที่ลด</div>
          <div>สร้างเมื่อ</div>
          <div className="ml-8">วันหมดอายุ</div>
          <div className="text-center ml-8">Action</div>
        </div>
        <div className="divide-y divide-gray-200 ">
          {promotionCodes.map((promoCode) => (
            <div key={promoCode.id} className="grid grid-cols-7 text-start items-center py-8 px-4 bg-white hover:bg-gray-50 font-prompt">
              <div>{promoCode.code}</div>
              <div>{promoCode.type}</div>
              <div>{promoCode.usage}</div>
              <div className="text-red-600">{promoCode.discount}</div>
              <div>{promoCode.startDate}</div>
              <div className="ml-8 w-full">{promoCode.endDate}</div>
              <div className="flex justify-center gap-8 ml-8">
                <button onClick={() => handleDeleteClick(promoCode.id)}>
                  <Trash2 className="w-6 h-6 text-gray-500 hover:text-gray-950" />
                </button>
                <button >
                  <img src={savefileIcon} alt="Edit" className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AlertModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      /> 
  </>
  )
}

export default DetailPromotionCode