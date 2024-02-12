import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAcct, UserInfor } from "../../constants";

const UserAccount = () => {
  const [activeItem, setActiveItem] = useState({ text: "", path: "" }); // Default active item

  const handleClick = (text, path) => {
    setActiveItem({
      text,
      path,
    });
  };

  return (
    <div className="h-[200px] bg-white rounded-lg border border-gray-300 w-[250px] dark:bg-white font-prompt">
      <div className="px-5 py-4 text-sm dark:text-white">
        <p className="text-gray-700 text-lg justify-start flex">บัญชีผู้ใช้</p>
        <hr className="border-gray-300 mt-4" />
      </div>
      <ul className="text-sm text-gray-300 dark:text-gray-950">
        {UserInfor.map((item, index) => (
          <li key={index}>
            <Link 
              to={{ pathname: item.path, state: item.text }}
              onClick={() => handleClick(item.text, item.path)}
              className={`flex items-center gap-4 ${item.path === activeItem.path && item.text === activeItem.text ? 'active' : ''}`}>
              <img 
                 src={item.text === activeItem.text ? UserInfor.find(user => user.text === item.text)?.icon : UserAcct.find(user => user.text === item.text)?.icon}
                alt="icon"
                className={`ml-5 w-[22px] h-[24px] me-1 p-1  ${item.text === activeItem.text ? 'bg-gray-100' : 'dark:hover:text-gray-500'}`}
              />
              <span className={`block py-2 hover:bg-gray-100 dark:hover:bg-base ${item.text === activeItem.text ? 'text-blue-700' : 'dark:hover:text-gray-500'}`} >
                {item.text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAccount
