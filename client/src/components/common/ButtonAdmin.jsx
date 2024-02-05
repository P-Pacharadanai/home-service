import React, { useState } from "react";
import { bellHuman, iconrBell, vectorLogout } from "../../assets/icons";
import { menuItemsAdmin } from "../../constants";
import { useAuth } from "../../contexts/authentication";

const ButtonAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { logout } = useAuth();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative">
        <button
          id="dropdownAvatarNameButton"
          onClick={toggleDropdown}
          className="flex items-center text-sm pe-1 text-gray-900 p-2 rounded-lg whitespace-nowrap px-6 pb-2 pt-2.5 leading-normal"
          type="button"
        >
          <span className="sr-only">เข้าสู่ระบบ</span>
          สมศรี จันทร์อังคารพุธ
          <img
            className="ml-3 w-8 h-8 me-1 rounded-full"
            src={bellHuman}
            alt="user photo"
          />
          <img
            className="ml-2 w-8 h-8 p-2 bg-slate-300 me-6 rounded-full"
            src={iconrBell}
            alt="user photo"
          />
        </button>

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
              className="py-4 text-sm text-gray-300 dark:text-gray-800"
              aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
            >
              {menuItemsAdmin.map((menuItem, index) => (
                <li key={index} className="flex items-center">
                  <img
                    src={menuItem.icon}
                    alt="icon"
                    className="ml-3 w-[9px] h-[12px] me-1 rounded-full"
                  />
                  <a
                    href="#"
                    className="block px-6 py-2 hover:bg-gray-100 dark:hover:bg-base dark:hover:text-gray-500"
                  >
                    {menuItem.text}
                  </a>
                </li>
              ))}
            </ul>
            <div className="py-2 flex items-center">
              <img
                src={vectorLogout}
                alt="icon"
                className="ml-3 w-[9px] h-[12px] me-1 rounded-full"
              />
              <span
                onClick={() => logout()}
                href="#"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-100 dark:text-gray-800 dark:hover:text-gray-500 hover:cursor-pointer"
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
