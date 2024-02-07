import React from "react";
import { GeneralBtn } from "../../components/common";
import { plumber } from "../../assets/images";

const Home = () => {
  return (
    <section className="w-full z-0 relative flex flex-col xl:flex-row justify-start h-[540px] gap-6 max-container bg-blue-100 ">
      <div className="relative xl:w-3/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-10 left-20 px-9">
        <h1 className=" -mt-16 justify-center items-center text-blue-600 font-prompt text-6xl font-bold max-sm:text-[30px] max-sm:leading-[140px] ">
          เรื่องบ้าน...ให้เราช่วยดูแลคุณ
        </h1>
        <h3 className="mt-6 text-4xl font-prompt font-semibold max-sm:text-[18px]">
          “สะดวก ราคาคุ้มค่า เชื่อถือได้“
        </h3>
        <p className=" font-prompt text-gray-700 text-lg leading-8 mt-6 mb-10 max-sm:text-[11.7px] ">
          ซ่อมเครื่องใช้ไฟฟ้า ซ่อมแอร์ ทำความสะอาดบ้าน
          <br />
          โดยพนักงานแม่บ้าน และช่างมืออาชีพ
        </p>

        <GeneralBtn label="เช็คราคาบริการ" />
      </div>
      <div className="relative h-[540px] flex-1 flex justify-center items-center max-xl:py-20 right-24 max-xl:hidden">
        <img
          src={plumber}
          alt="man"
          width={520}
          height={722}
          className="object-contain z-10 -mt-26 -mb-10 "
        />
      </div>
    </section>
  );
};

export default Home;
