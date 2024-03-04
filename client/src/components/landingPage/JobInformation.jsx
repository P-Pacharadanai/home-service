import { partMaleConstructor, houseLarge } from "../../assets/images";

const JobInformation = () => {
  return (
    <section className="bg-blue-600">
      <div className="flex justify-wrap items-center max-xl:flex-col-reverse max-container font-prompt">
        <div className=" max-xl:hidden">
          <img src={partMaleConstructor} className="object-contain h-[391px]" />
        </div>
        <div className="relative flex flex-1 flex-col bg-blue-600 p-20 px-28 leading-18 ">
          <h2 className="text-4xl lg:max-w-lg font-semibold text-white">
            มาร่วมเป็นพนักงานซ่อม <br /> กับ HomeServices
          </h2>
          <p className="mt-6 lg:max-w-lg text-xl text-white ">
            เข้ารับการฝึกอบรมที่ได้มาตรฐาน ฟรี! <br />
            และยังได้รับค่าตอบแทนที่มากขึ้นกว่าเดิม
          </p>
          <h3 className="mt-6 lg:max-w-xl text-[31px] font-medium font-prompt text-white">
            ติดต่อมาที่อีเมล: job@homeservices.co
          </h3>
          <img
            src={houseLarge}
            width={340}
            className="absolute transform translate-x-40 p-2 -mt-16"
            style={{ right: 155 }}
          />
        </div>
      </div>
    </section>
  );
};

export default JobInformation;
