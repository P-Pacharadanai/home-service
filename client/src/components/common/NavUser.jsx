import { houseXs } from "../../assets/icons"
import { Button } from "../../components/common";

const NavUser = () => {
  return (
    <section className="leading-none padding-x py-2 absolute z-10 w-full px-2 bg-white ">
      <nav className=" flex flex-wrap max-container">
        <a href="/" className="mt-4 flex gap-2 text-blue-600">
          <img src={houseXs} alt="Logo" width={30} height={10} />
          HomeServices
        </a>
        <a href="/" className="flex justify-start items-start font-prompt gap-20 mt-4">บริการของเรา</a>
        <div className="flex  max-lg:hidden">
        <Button label="เข้าสู่ระบบ" backgroundColor="bg-white" borderColor="border-blue-600" textColor="text-blue-700" />
        </div>
      </nav>
  </section>
  )
}

export default NavUser
