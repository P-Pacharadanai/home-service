import { GeneralBtn } from "../../components/common";
import { houseXs } from "../../assets/icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const GeneralNav = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <section className="leading-none padding-x z-50 w-full px-18 py-2 bg-white shadow-md">
      <nav className="relative flex flex-wrap max-container justify-between items-center font-prompt px-28">
        <div className="flex justify-center items-center gap-20 ml-12">
          <Link to="/" className="flex gap-2 justify-center items-center">
            <img
              src={houseXs}
              alt="Logo"
              width={32}
              height={32}
              className="-mt-1"
            />
            <h2 className="font-medium text-2xl text-blue-600">HomeServices</h2>
          </Link>
          <Link to="/service-list" className="font-medium text-[1rem]">
            บริการของเรา
          </Link>
        </div>

        <div className="flex flex-wrap p-2 leading-none mr-10 justify-end max-lg:hidden">
          <GeneralBtn
            onClick={handleLoginClick}
            label="เข้าสู่ระบบ"
            backgroundColor="bg-white"
            borderColor="border-blue-600"
            textColor="text-blue-600 "
          />
        </div>
      </nav>
    </section>
    // <section className="leading-none padding-x z-50 w-full px-18 py-2 bg-white shadow-md">
    //   <nav className="relative flex flex-wrap max-container justify-between items-center font-prompt px-28">
    //     <Link
    //       to="/"
    //       className="mt-3 ml-12 flex text-lg font-medium gap-1 text-blue-600"
    //     >
    //       <img
    //         src={houseXs}
    //         alt="Logo"
    //         width={32}
    //         height={32}
    //         className="-mt-1"
    //       />
    //       HomeServices
    //     </Link>

    //     <div className="flex justify-start items-start absolute left-64 max-lg:hidden">
    //       <Link to="/service-list" className="mt-3 ml-40 font-medium">
    //         บริการของเรา
    //       </Link>
    //     </div>

    //     <div className="flex flex-wrap p-2 leading-none mr-10 justify-end max-lg:hidden">
    //       <GeneralBtn
    //         onClick={handleLoginClick}
    //         label="เข้าสู่ระบบ"
    //         backgroundColor="bg-white"
    //         borderColor="border-blue-600"
    //         textColor="text-blue-600 "
    //       />
    //     </div>
    //   </nav>
    // </section>
  );
};

export default GeneralNav;
