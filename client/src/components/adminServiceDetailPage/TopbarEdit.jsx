import { useNavigate } from "react-router-dom";

function TopbarEdit(props) {
  const { serviceData } = props;

  const navigate = useNavigate();

  return (
    <nav className="font-prompt flex flex-row items-center justify-between h-[80px] p-10 bg-white">
      <div className="flex justify-center items-center gap-7">
        <div
          onClick={() => navigate("/admin-service")}
          className="text-5xl font-light text-gray-700 hover:cursor-pointer"
        >
          &lt;
        </div>
        <div>
          <div className="text-xs text-gray-700">บริการ</div>
          <div className="font-medium text-xl text-gray-950">
            {serviceData.name}
          </div>
        </div>
      </div>

      <div id="right-content" className="flex-1 flex flex-row justify-end">
        <button
          onClick={() =>
            navigate(`/admin-service/edit/${serviceData.service_id}`)
          }
          className="min-w-28 bg-blue-600 text-[1rem] text-white rounded-lg px-6 py-2 ml-6 hover:bg-blue-500 duration-200"
        >
          แก้ไข
        </button>
      </div>
    </nav>
  );
}

export default TopbarEdit;
