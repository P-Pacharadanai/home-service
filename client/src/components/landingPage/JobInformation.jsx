import { partMaleConstructor, houseLarge } from "../../assets/images"

const JobInformation = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse max-container font-prompt"> 
    <div className=" max-xl:hidden">
      <img src={partMaleConstructor} className="object-contain h-[391px] " />
    </div>
    <div className="relative flex flex-1 flex-col bg-blue-600 p-20 px-24 text-white leading-18">
      <h2 className="text-4xl lg:max-w-lg font-semibold">
        มาร่วมเป็นพนักงานซ่อม <br/> กับ HomeServices
      </h2>
      <p className="mt-6 lg:max-w-lg text-xl">
        เข้ารับการฝึกอบรมที่ได้มาตรฐาน ฟรี! <br/>
        และยังได้รับค่าตอบแทนที่มากขึ้นกว่าเดิม
      </p>
      <h3 className="mt-6 lg:max-w-xl text-[32px] font-medium font-prompt">
        ติดต่อมาที่อีเมล: job@homeservices.co
      </h3>
      <div className="absolute inset-y-0 right-40">
        <img src={houseLarge} width={350} className="transform -translate-y-9 translate-x-40" />
      </div>
    </div>
  </section>
  )
}

export default JobInformation
