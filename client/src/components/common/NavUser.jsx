import { houseXs } from "../../assets/icons";
import { ButtonUser } from "../../components/common";

const NavUser = () => {
  return (
    <section className="leading-none padding-x relative z-10 w-full px-20 py-2 bg-white ">
      <nav className="relative flex flex-wrap max-container justify-between items-center font-prompt px-28">
        <a href="/" className="mt-3 flex text-lg font-medium gap-1 text-blue-600">
          <img src={houseXs} alt="Logo" width={32} height={32} className="-mt-1" />
          HomeServices
        </a>

        <div className="flex justify-start items-start absolute left-64 max-lg:hidden">
          <a href="/" className="mt-3 ml-24 font-medium">บริการของเรา</a>
        </div>

        <div className="flex flex-wrap p-2 leading-none mr-10 justify-end max-lg:hidden">
          <ButtonUser />
        </div>
      </nav>
    </section>  
  )
}

export default NavUser
