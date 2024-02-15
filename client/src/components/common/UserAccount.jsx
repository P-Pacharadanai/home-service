{/*
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAcct } from "../../constants";

const UserAccount = () => {

  const [activeItem, setActiveItem] = useState(null);

const handleClick = (path) => {
  setActiveItem({ text, icon , path});
};

return (
  <div className="h-[250px] bg-white rounded-lg border border-gray-300 w-[250px] dark:bg-white font-prompt">
    <div className="px-4 py-4 text-sm dark:text-white">
      <p className="text-gray-700 text-lg justify-start flex m-auto mt-3">บัญชีผู้ใช้</p>
      <hr className="border-gray-300 mt-4" />
    </div>
    <ul className="text-sm text-gray-950 ">
      {UserAcct.map((item, index) => (
        <li key={index}>
          <Link 
            to={item.path}
            onClick={() => handleClick()}
            className="flex items-center gap-4 "
          >
            <img src={item.icon} alt="icon" className="ml-5 w-[22px] h-[26px] me-1 p-1" />
            <span className="block py-3">
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

*/}


import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserAcct } from "../../constants";

const UserAccount = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (path) => {
    setActiveItem(path);
  };

  return (
    <div className="h-[250px] bg-white rounded-lg border border-gray-300 w-[250px] dark:bg-white font-prompt">
      <div className="px-4 py-4 text-sm dark:text-white">
        <p className="text-gray-700 text-lg justify-start flex m-auto mt-3">บัญชีผู้ใช้</p>
        <hr className="border-gray-300 mt-4" />
      </div>
      <ul className="text-sm text-gray-950 ">
        {UserAcct.map((item, index) => (
          <li key={index}>
            <Link 
              to={item.path}
              onClick={() => handleClick(item.path)}
              className={`flex items-center gap-4 ${activeItem === item.path ? 'text-blue-700' : ''}`}
            >
              <img src={item.icon} alt="icon" className="ml-5 w-[22px] h-[26px] me-1 p-1" style={{ filter: activeItem === item.path ? 'brightness(0) saturate(100%) invert(13%) sepia(100%) saturate(4738%) hue-rotate(239deg) brightness(92%) contrast(104%)' : 'none' }} />
              <span className="block py-3">
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


