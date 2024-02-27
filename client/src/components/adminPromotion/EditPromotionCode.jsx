import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { SidebarNavAdmin } from '../../components/common';

const EditPromotionCode = () => {
  const handleBackClick = () => {
    console.log('Back');
  };

  return (
    <div className="flex">
      <div className=" top-0 left-0 fixed w-64 min-h-screen">
        <SidebarNavAdmin /> 
      </div>

      <div className="pl-[15rem] flex-2 overflow-auto w-full bg-gray-100 h-screen" >

      <nav className="flex items-center w-full border-b bg-white font-prompt h-[80px] p-10">
        <div>
          <ChevronLeft className="w-12 h-12 text-gray-600 cursor-pointer ml-5" onClick={handleBackClick} />
        </div>
        <div className="font-prompt flex flex-col items-center text-gray-700 text-start w-[200px]">
          <p className="text-xs flex pr-6 ">Promotion Code</p>
          <h2 className="text-2xl font-medium tracking-wide text-gray-950 leading-8">HOME202</h2>
        </div>  
        <div className="w-full flex justify-end">
          <button className="bg-blue-600 text-white text-lg px-9 py-2 rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-600 border">
            แก้ไข
          </button>
        </div>  
      </nav>

      <div className="bg-white rounded-lg border text-start text-lg text-gray-700 py-8 px-6 font-prompt flex flex-col justify-start items-start mx-auto max-w-[1370px] w-full mt-10 overflow-auto">
        <div className="grid grid-cols-2 p-6 w-[1000px] font-prompt">
          <p className="font-medium max-w-40">Promotion Code</p>
          <p className="flex justify-start items-start -ml-32 max-w-40">HOME202</p>
        </div>
        <div className="grid grid-cols-2 p-6 w-[1000px] font-prompt">
          <p className="font-prompt font-medium max-w-40">ประเภท</p>
          <p className="flex justify-start items-start -ml-32 max-w-40">Fixed</p>
        </div>
        <div className="grid grid-cols-2 p-6 w-[1000px] font-prompt">
          <p className="font-prompt font-medium max-w-40">ราคาที่ลด</p>
          <p className="flex justify-start items-start -ml-32" style={{color: 'rgba(200, 36, 56, 1)'}}>-50.00฿</p>
        </div>
        <div className="grid grid-cols-2 p-6 w-[1000px] font-prompt">
          <p className="font-prompt font-medium max-w-40">โควต้าการใช้(ครั้ง)</p>
          <p className="flex justify-start items-start -ml-32 max-w-40">10/100 ครั้ง</p>
        </div>
        <div className="grid grid-cols-2 p-6 w-[1000px] font-prompt">
          <p className="font-prompt font-medium max-w-40">วันหมดอายุ</p>
          <p className="flex justify-start items-start -ml-32">12/06/2024 10:30 PM</p>
        </div>
        
        <hr className="border-t border-gray-300 w-full mb-2 mt-2" /> 
        <div className="grid grid-cols-2 p-6 w-[1000px] font-prompt">
          <p className="font-prompt font-medium max-w-40">สร้างเมื่อ</p>
          <p className="flex justify-start items-start -ml-32">12/02/2024 10:30 PM</p>
        </div>
        <div className="grid grid-cols-2 p-6 w-[1000px] font-prompt">
          <p className="font-medium font-prompt max-w-40 ">แก้ไขล่าสุด</p>
          <p className="flex justify-start items-start -ml-32">12/02/2024 10:30 PM</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default EditPromotionCode