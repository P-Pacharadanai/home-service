import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authentication";

import {
  houseXs,
  ExitIcon,
  CopyIcon,
  ListIcon,
  TicketIcon,
} from "../../assets/icons/index";

export const SidebarNavAdmin = ({ currentPage }) => {
  const { logout } = useAuth();

  const items = [
    { icon: ListIcon, text: "หมวดหมู่", path: "/admin-category" },
    { icon: CopyIcon, text: "บริการ", path: "/admin-service" },
    { icon: TicketIcon, text: "Promotion Code", path: "/admin-promotion" },
  ];
  return (
    <div className="font-prompt flex flex-col bg-blue-950 w-[240px]  h-screen">
      <div className="flex justify-center py-8">
        <div className="items-center px-3 py-3  bg-blue-200 rounded-xl">
          <Link
            to="/"
            className="flex flex-row gap-2 text-xl text-blue-600 font-medium hover:cursor-pointer"
          >
            <img src={houseXs} alt="house icon" className="w-7" />
            HomeServices
          </Link>
        </div>
      </div>

      {/* MENU LIST */}
      <div className="flex-1 flex">
        <div className="flex-1 flex flex-col justify-between">
          <div>
            {items.map((item, index) => (
              <li key={index} className="flex relative text-white">
                <Link
                  to={item.path}
                  className={`h-[54px] flex items-center gap-4 w-full pl-8 text-[1rem] font-medium rounded hover:bg-blue-900 hover:text-white focus:outline-none  focus:bg-blue-900 ${
                    currentPage === item.text && "bg-blue-900"
                  }`}
                >
                  <img src={item.icon} alt="menu icon" className="w-4 h-4" />
                  <p>{item.text}</p>
                </Link>
              </li>
            ))}
          </div>
          <div className="mb-16">
            <li
              onClick={logout}
              className="h-[54px] flex gap-2 items-center text-white pl-8 hover:bg-blue-900 hover:cursor-pointer"
            >
              <div className="pointer-events-none">
                <img src={ExitIcon} alt="exit icon" className="w-4 h-4" />
              </div>
              <div className="text-[1rem] rounded hover:text-white focus:outline-none  focus:bg-blue-900">
                ออกจากระบบ
              </div>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarNavAdmin;
