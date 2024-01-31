import { footerContacts } from "../../constants";
import { houseXs } from "../../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-center gap-20 mt-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-wrap gap-2 items-start">
          <img src={houseXs}  width={20} height={20} className="flex justify-between items-start"  />
          <h4 className="text-blue-500 font-semibold font-prompt text-xl" >HomeServices</h4>
        </div>
        <div className="flex flex-col items-start">
          <h4>บริษัท โฮมเซอร์วิสเซส จำกัด</h4>
          <p className="mt-6 text-black leading-7 sm:max-w-sm">
            452 ซอยสุขุมวิท 79 แขวงพระโขนงเหนือ เขตวัฒนา กรุงเทพมหานคร 10260
          </p>
        </div>
        <div className="flex flex-col mt-3 items-start gap-4">
          {footerContacts.map((contact, index) => (
            <a key={index} href={"/"} target="_blank" rel="noopener noreferrer"className="flex items-center gap-2">
              <img src={contact.iconContact} width={18} height={18} className="object-contain m-0" />
              <p className="text-xl font-montserrat text-slate-gray">{contact.link}</p> 
            </a>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 flex font-prompt justify-between px-8 py-4 text-gray-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer">
          <p>Copyright &copy;{ new Date().getFullYear() }HomeServices.com All rights reserved</p>
        </div>
        <div className="gap-5 flex flex-row">
          <p className="cursor-pointer">เงื่อนไขและข้อตกลงการใช้งานเว็บไซต์</p>
          <p className="cursor-pointer">นโยบายความเป็นส่วนตัว</p>
        </div> 
      </div>
    </footer>
  );
};

export default Footer
