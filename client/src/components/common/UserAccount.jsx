import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAcct, UserIconChange } from "../../constants";

const UserAccount = () => {
  const [activeItem, setActiveItem] = useState({ text: "", path: "" }); // Default active item

  const handleClick = (text, path) => {
    setActiveItem({ text: text, path: path }); // Update active item state with clicked item
  };

  return (
    <div className="h-[200px] bg-white rounded-lg border border-gray-300 w-52 dark:bg-white font-prompt">
      <div className="px-5 py-4 text-sm dark:text-white">
        <p className="text-gray-700 text-lg justify-start flex">บัญชีผู้ใช้</p>
        <hr className="border-gray-300 mt-4" />
      </div>
      <ul className="text-sm text-gray-300 dark:text-gray-950">
        {UserIconChange.map((UserInfor, index) => (
          <li key={index} >
            <Link
              to={{ pathname: UserInfor.path, state: UserInfor.text }}
              onClick={() => handleClick(UserInfor.text, UserInfor.path)}
              className={`flex items-center gap-4 ${UserInfor.path === activeItem.path ? 'active' : ''}`}>
              <img 
                src={UserInfor.text === activeItem.text ? UserInfor.icon : UserAcct.find(item => item.text === UserInfor.text)?.icon}
                alt="icon"
                className={`ml-5 w-[22px] h-[24px] me-1 p-1  ${UserInfor.text === activeItem.text ? 'bg-gray-100' : 'dark:hover:text-gray-500'}`}
              />
              <span
                className={`block py-2 hover:bg-gray-100 dark:hover:bg-base ${UserInfor.text === activeItem.text ? 'text-blue-700' : 'dark:hover:text-gray-500'}`}
              >
                {UserInfor.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAccount
