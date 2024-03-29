import { footerContacts } from "../../constants";
import { houseXs } from "../../assets/icons";

const Footer = () => {
  return (
    <footer>
      <div className="max-container flex justify-between items-center gap-20 flex-wrap max-lg:flex-col px-20 mt-2">
        <div className="flex flex-wrap gap-2 items-center justify-center ml-22 px-16 ">
          <img
            src={houseXs}
            width={40}
            height={40}
            className="flex justify-between items-start"
          />
          <h4 className="text-blue-500 font-medium font-prompt text-3xl">
            HomeServices
          </h4>
        </div>
        <div className="flex flex-col items-start flex-1 -ml-14 px-16 font-prompt">
          <h4 className="text-gray-950 text-lg">บริษัท โฮมเซอร์วิสเซส จำกัด</h4>
          <p className="text-sm text-gray-800 whitespace-nowrap leading-6 sm:max-w-sm">
            452 ซอยสุขุมวิท 79 แขวงพระโขนงเหนือ เขตวัฒนา กรุงเทพมหานคร 10260
          </p>
        </div>
        <div className="flex flex-col mt-3 items-start gap-4">
          {footerContacts.map((contact, index) => (
            <a
              key={index}
              href={"/"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <img
                src={contact.iconContact}
                width={18}
                height={18}
                className="object-contain m-0"
              />
              <p className="text-[1rem] text-gray-800">{contact.link}</p>
            </a>
          ))}
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="max-container bg-gray-100 flex font-prompt justify-between px-28 py-2 text-gray-400 mt-10 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2  ml-8 cursor-pointer">
            <p>
              Copyright &copy;{new Date().getFullYear()} HomeServices.com All
              rights reserved
            </p>
          </div>
          <div className="gap-7 flex flex-row text-gray-700 cursor-pointer ">
            <p>เงื่อนไขและข้อตกลงการใช้งานเว็บไซต์</p>
            <p>นโยบายความเป็นส่วนตัว</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
