import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { SidebarNavAdmin } from '../../components/common';

const EditPromotionCode = () => {
  return (
    <div className="flex">
      <div className=" top-0 left-0 fixed w-64 min-h-screen">
        <SidebarNavAdmin /> 
      </div>

      <div className="pl-[16rem] flex-2 overflow-auto w-full" >
      <nav className="flex items-center w-full border-b p-4 bg-white font-prompt">
        <div>
          <ChevronLeft className="w-12 h-12 text-gray-600 cursor-pointer ml-5" onClick={() => console.log('Back')} />
        </div>
        <div className="font-prompt flex flex-col items-center text-gray-700 text-start w-[200px]">
          <p className="text-xs flex pr-6 ">Promotion Code</p>
          <h2 className="text-2xl font-medium tracking-wide text-gray-950 leading-8">HOME202</h2>
        </div>  
        <div className="w-full flex justify-end px-12">
          <button className="bg-blue-600 text-white text-lg px-9 py-2 rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-600 border">
            แก้ไข
          </button>
        </div>  
      </nav>

      <div className="bg-white rounded-lg border text-start text-lg text-gray-700 py-8 px-2 font-prompt flex flex-col justify-center items-center max-w-[1110px] mx-auto w-full mt-10 overflow-auto">
        <div className="grid grid-cols-2 gap-8 p-6 w-[1000px] font-prompt">
          <p className="font-medium">Promotion Code</p>
          <p>HOME202</p>
        </div>
        <div className="grid grid-cols-2 gap-8 p-6 w-[1000px] font-prompt">
          <p className="font-prompt font-medium">ประเภท</p>
          <p>Fixed</p>
        </div>
        <div className="grid grid-cols-2 gap-8 p-6 w-[1000px] font-prompt">
          <p className="font-prompt font-medium">ราคาที่ลด</p>
          <p className="text-red-500">-50.00฿</p>
        </div>
        <div className="grid grid-cols-2 gap-8 p-6 w-[1000px] font-prompt">
          <p className="font-prompt font-medium">โควต้าการใช้(ครั้ง)</p>
          <p>10/100 ครั้ง</p>
        </div>
        <div className="grid grid-cols-2 gap-8 p-6 w-[1000px] font-prompt">
          <p className="font-prompt font-medium">วันหมดอายุ</p>
          <p>12/06/2024 10:30 PM</p>
        </div>
        
        <hr className="border-t border-gray-300 w-full" /> 
        <div className="grid grid-cols-2 gap-8 p-6 mt-4 w-[1000px] font-prompt">
          <p className="font-prompt font-medium">สร้างเมื่อ</p>
          <p>12/02/2024 10:30 PM</p>
        </div>
        <div className="grid grid-cols-2 gap-8 p-6 w-[1000px] font-prompt">
          <p className="font-medium font-prompt">แก้ไขล่าสุด</p>
          <p>12/02/2024 10:30 PM</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default EditPromotionCode