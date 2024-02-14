import { GeneralBtn } from "../../components/common";
import { houseXs } from "../../assets/icons";
import { useNavigate } from "react-router-dom";

const GeneralNav = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <section className="leading-none padding-x z-10 w-full px-16 py-2 bg-white">
      <nav className="relative flex flex-wrap max-container justify-between items-center font-prompt px-28">
        <a
          href="/"
          className="mt-3 flex text-lg font-medium gap-1 text-blue-600"
        >
          <img
            src={houseXs}
            alt="Logo"
            width={32}
            height={32}
            className="-mt-1"
          />
          HomeServices
        </a>

        <div className="flex justify-start items-start absolute left-64 max-lg:hidden">
          <a href="/" className="mt-3 ml-24 font-medium">
            บริการของเรา
          </a>
        </div>

        <div className="flex flex-wrap p-2 leading-none mr-10 justify-end max-lg:hidden">
          <GeneralBtn onClick={handleLoginClick}
            label="เข้าสู่ระบบ"
            backgroundColor="bg-white"
            borderColor="border-blue-600"
            textColor="text-blue-600 "
          />
        </div>
      </nav>
    </section>
  );
};

export default GeneralNav;
