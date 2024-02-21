import { houseXs } from "../../assets/icons";
import { ButtonUser, ButtonAdmin } from "../../components/common";
import { useAuth } from "../../contexts/authentication";
import { Link } from "react-router-dom";

const NavUser = () => {
  const { isAuthenticated } = useAuth();
  return (
    <section className="leading-none padding-x relative z-10 w-full px-16 py-2 bg-white shadow-md">
      <nav className="relative flex flex-wrap max-container justify-between items-center font-prompt px-28">
        <Link
          to="/"
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
        </Link>

        <div className="flex justify-start items-start absolute left-64 max-lg:hidden">
          <Link to="/service-list" className="mt-3 ml-24 font-medium">
            บริการของเรา
          </Link>
        </div>

        <div className="flex flex-wrap p-2 leading-none justify-end max-lg:hidden">
          {isAuthenticated.role === "authenticated_admin" ? (
            <ButtonAdmin />
          ) : (
            <ButtonUser />
          )}
        </div>
      </nav>
    </section>
  );
};

export default NavUser;
