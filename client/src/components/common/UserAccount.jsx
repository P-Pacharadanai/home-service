import { useState } from "react";
import { Link } from "react-router-dom";
import { UserAcct } from "../../constants";

const UserAccount = ({ currentPage }) => {
  return (
    <div className="h-[250px] bg-white rounded-lg border border-gray-300 w-[250px] dark:bg-white font-prompt sticky top-28">
      <div className="px-4 py-4 text-sm dark:text-white">
        <p className="text-gray-700 text-lg justify-start flex m-auto mt-3">
          บัญชีผู้ใช้
        </p>
        <hr className="border-gray-300 mt-4" />
      </div>
      <ul className="text-sm text-gray-950 ">
        {UserAcct.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`flex items-center gap-4 ${
                currentPage === item.text ? "text-blue-700" : ""
              }`}
            >
              <img
                src={item.icon}
                alt="icon"
                className={`ml-5 ${
                  item.text === "ประวัติการซ่อม"
                    ? "w-[26px]"
                    : item.text === "ข้อมูลผู้ใช้งาน"
                    ? "w-[22px]"
                    : "w-[24px]"
                } h-auto me-1 p-1`}
                style={{
                  filter:
                    currentPage === item.text
                      ? "brightness(0) saturate(100%) invert(13%) sepia(100%) saturate(4738%) hue-rotate(239deg) brightness(92%) contrast(104%)"
                      : "none",
                }}
              />
              <span className="block py-3">{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAccount;
