import { houseXs } from "../../assets/icons";
import { ButtonUser, ButtonAdmin } from "../../components/common";
import { useAuth } from "../../contexts/authentication";
import { Link } from "react-router-dom";

const NavUser = () => {
  const { isAuthenticated } = useAuth();
  return (
    <section className="leading-none padding-x relative z-10 w-full px-16 py-2 bg-white shadow-md">
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
