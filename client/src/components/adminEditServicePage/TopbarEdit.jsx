import { lessthanIcon } from "../../assets/icons/index";
import { useNavigate } from "react-router-dom";

const TopbarEdit = (props) => {
  const { serviceData } = props.serviceState;

  // const {
  //   serviceData,
  //   setServiceData,
  //   categoryData,
  //   setCategoryData,
  //   setUploadImage,
  //   subService,
  //   setSubService,
  // } = props.serviceEditState;

  const navigate = useNavigate();

  return (
    <div className="font-prompt flex flex-row items-center justify-between h-[80px] p-4 bg-white">
      <div className="flex flex-row ml-3">
        <div className="h-10 w-10" onClick={() => navigate("/admin-service")}>
          <img
            src={lessthanIcon}
            alt="lessthan icon"
            className="h-10 w-6 cursor-pointer"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-xs text-gray-700 font-normal">บริการ</div>
          <div className="font-medium text-xl text-gray-950">
            {serviceData.name}
          </div>
        </div>
      </div>

      <div id="right-content" className=" flex flex-row">
        <button
          className="border border-blue-600 text-blue-600 rounded-lg px-6 py-2.5"
          onClick={() => navigate("/admin-service")}
        >
          ยกเลิก
        </button>
        <button
          className="bg-blue-600 text-white rounded-lg px-6 py-2.5 ml-3"
          onClick={props.handleEditService}
        >
          ยืนยัน
        </button>
      </div>
    </div>
  );
};

export default TopbarEdit;
