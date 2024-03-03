import React, { useState } from "react";
import { Link } from "react-router-dom";

import { iconrBell, userIcon, vectorLogout } from "../../assets/icons";
import { arrowRight } from "../../assets/icons/index.js";
import { menuItemsAdmin } from "../../constants";
import { useAuth } from "../../contexts/authentication";

const ButtonAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { logout, state } = useAuth();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative">
        <div
          id="dropdownAvatarNameButton"
          className="flex items-center text-sm pe-1 text-gray-900 p-2 rounded-lg whitespace-nowrap px-6 pb-2 pt-2.5 leading-normal"
          type="button"
        >
          {state.user?.firstName} {state.user?.lastName}
          <img
            className="ml-3 w-8 h-8 me-1 rounded-full cursor-pointer"
            src={userIcon}
            alt="user photo"
            onClick={toggleDropdown}
          />
          <img
            className="ml-2 w-8 h-8 p-2 bg-slate-300 me-6 rounded-full cursor-pointer"
            src={iconrBell}
            alt="user photo"
          />
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <div
            id="dropdownAvatarName"
            className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-md shadow w-52 dark:bg-white dark:divide-gray-300"
          >
            {/*}
            <div className="px-4 py-3 text-sm text-gray-950 drak:text-white">
              <div className="font-medium">Loki User</div>
              <div className="truncate">git@commit.com</div>
            </div>
            */}
            <ul
              className="pt-4 text-sm text-gray-300 dark:text-gray-800"
              aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
            >
              {menuItemsAdmin.map((menuItem, index) => (
                <li key={index} className="group flex items-center">
                  <div className="py-[0.65rem] group-hover:bg-gray-100">
                    <img
                      src={menuItem.icon}
                      alt="icon"
                      className="ml-3 w-[12px] object-cover h-full me-1 opacity-50 group-hover:opacity-100"
                    />
                  </div>

                  <Link
                    to={menuItem.path || "#"}
                    className="block w-full px-6 py-2 group-hover:bg-gray-100 text-gray-800 group-hover:text-gray-950 dark:hover:bg-base dark:hover:text-gray-500"
                  >
                    {menuItem.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="py-2 flex items-center group">
              <div className="py-3 group-hover:bg-gray-100 ">
                <img
                  src={arrowRight}
                  alt="icon"
                  className="ml-3 w-[12px] object-cover h-full me-1 opacity-50 group-hover:opacity-100"
                />
              </div>

              <span
                onClick={() => logout()}
                href="#"
                className="w-full block px-6 py-2 text-sm text-gray-800 group-hover:bg-gray-100 dark:hover:bg-gray-100 dark:text-gray-800 dark:hover:text-gray-500 cursor-pointer"
              >
                ออกจากระบบ
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ButtonAdmin;
