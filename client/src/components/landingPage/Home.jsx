import React from "react";
import { GeneralBtn } from "../../components/common";
import { plumber } from "../../assets/images";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/service-list");
  };

  return (
    <section className="bg-blue-100">
      <div className="w-full z-0 relative flex flex-col xl:flex-row justify-start h-[540px] px-12 gap-6 max-container bg-blue-100">
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

          <GeneralBtn onClick={handleLoginClick} label="เช็คราคาบริการ" />
        </div>
        <div className="relative h-[520px] top-full -translate-y-full right-28 max-xl:hidden">
          <img
            src={plumber}
            alt="man"
            className="w-full h-full object-cover z-10 border border-red"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
