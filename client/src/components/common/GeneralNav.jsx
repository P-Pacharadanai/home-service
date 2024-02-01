import { GeneralBtn } from "../../components/common";
import { houseXs } from "../../assets/icons";

const GeneralNav = () => {
  return (
    <section className="leading-none padding-x absolute z-10 w-full px-20 py-2 bg-white ">
      <nav className=" flex flex-wrap max-container justify-between items-center font-prompt font-medium ">
        <a href="/" className="mt-3 flex gap-1 text-blue-600">
          <img src={houseXs} alt="Logo" width={20} height={10} className="-mt-1" />
          HomeServices
        </a>

        <div className="flex justify-start items-start absolute left-60 max-lg:hidden">
          <a href="/" className="mt-3 ml-12">บริการของเรา</a>
        </div>

        <div className="flex flex-wrap p-2 leading-none  justify-end max-lg:hidden">
          <GeneralBtn label="เข้าสู่ระบบ" backgroundColor="bg-white" borderColor="border-blue-600" textColor="text-blue-900 " />
        </div>
      </nav>
    </section>  
  )
}

export default GeneralNav
