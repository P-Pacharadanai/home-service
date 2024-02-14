import {
  houseXs,
  ExitIcon,
  CopyIcon,
  ListIcon,
  TicketIcon,
} from "../../assets/icons/index";

export const SidebarNavAdmin = () => {
  const items = [
    { icon: ListIcon, text: "หมวดหมู่" },
    { icon: CopyIcon, text: "บริการ" },
    { icon: TicketIcon, text: "Promotion Code" },
  ];
  return (
    <div className="flex font-prompt">
      <div className="bg-blue-950 h-screen w-[240px]">
        <div className="flex justify-center h-[106px] p-6">
          <div className="flex flex-row items-center py-2 px-3 bg-blue-200 rounded-lg gap-2">
            <img src={houseXs} alt="house icon" />
            <button className=" text-blue-600 font-medium">HomeServices</button>
          </div>
        </div>

        {/* MENU LIST */}
        <div className="h-[760px]">
          <div className="ml-0">
            <ul className="pl-6">
              {items.map((item, index) => (
                <li key={index} className="flex relative text-white">
                  <div className="absolute inset-y-0 left-0 -top-2 flex items-center pl-2 pointer-events-none">
                    <img src={item.icon} alt="menu icon" className="w4 h-4" />
                  </div>
                  <a
                    href="#"
                    className="h-[54px] inline-block w-full ml-2 py-2 pl-8 pr-4 text-lg rounded hover:bg-blue-900 hover:text-white focus:outline-none  focus:bg-blue-900"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
              <div className="mt-[500px]">
                <li className="flex relative text-white">
                  <div className="absolute inset-y-0 left-0 -top-2 flex items-center pl-2 pointer-events-none">
                    <img src={ExitIcon} alt="exit icon" className="w4 h-4" />
                  </div>
                  <a
                    href="#"
                    className="h-[54px] inline-block w-full ml-2 py-2 pl-8 pr-4 text-lg rounded hover:bg-blue-900 hover:text-white focus:outline-none  focus:bg-blue-900"
                  >
                    ออกจากระบบ
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarNavAdmin;
