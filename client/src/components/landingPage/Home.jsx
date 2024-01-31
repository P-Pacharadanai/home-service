import React from 'react';
import { Button } from "../../components/common";
import { plumber } from '../../assets/images';

const Home = () => {
  return (
    <section className="flex flex-col xl:flex-row justify-center min-h-screen gap-10 max-container bg-blue-100 ">
    <div className="relative xl:w-3/5 flex flex-col justify-center items-center w-full max-xl:padding-x pt-28 ">
      <h1 className="mt-10 justify-center items-center text-blue-600 font-prompt text-6xl max-sm:text-[40px] max-sm:leading-[82px] font-bold">
        เรื่องบ้าน...ให้เราช่วยดูแลคุณ
      </h1>
      <h3 className="text-4xl font-prompt font-bold p-4 " >“สะดวก ราคาคุ้มค่า เชื่อถือได้“</h3>
      <p className=" font-prompt text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
        ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ ทำความสะอาดบ้าน 
        โดยพนักงานแม่บ้าน และช่างมืออาชีพ
      </p>

       <Button label="เช็คราคาบริการ"  />

    </div>
    <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-20 ">
      <img src={plumber} alt="man" width={610} height={500} className="object-contain relative z-10 right-40 "/>
    </div>
    
  </section>
  )
}

export default Home
