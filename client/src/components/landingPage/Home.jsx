import React from 'react';
import { GeneralBtn } from "../../components/common";
import { plumber } from '../../assets/images';

const Home = () => {
  return (
    <section className="w-full flex flex-col xl:flex-row justify-start min-h-screen gap-10 max-container bg-blue-100 ">
    <div className="relative xl:w-3/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 left-20">
      <h1 className="-mt-9 justify-center items-center text-blue-600 font-prompt text-6xl font-bold max-sm:text-[30px] max-sm:leading-[82px] ">
        เรื่องบ้าน...ให้เราช่วยดูแลคุณ
      </h1>
      <h3 className="mt-10 text-4xl font-prompt font-bold max-sm:text-[18px]" >“สะดวก ราคาคุ้มค่า เชื่อถือได้“</h3>
      <p className=" font-prompt text-lg leading-8 mt-6 mb-14 max-sm:text-[11.7px] ">
        ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ ทำความสะอาดบ้าน 
        โดยพนักงานแม่บ้าน และช่างมืออาชีพ
      </p>

       <GeneralBtn label="เช็คราคาบริการ"  />

    </div>
    <div className="relative flex-7 flex justify-center items-center xl:min-h-screen max-xl:py-20 right-32 ">
      <img src={plumber} alt="man" width={610} height={500} className="object-contain relative z-10 mt-40 "/>
    </div>
    
  </section>
  )
}

export default Home
