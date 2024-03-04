import { useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function HeaderSection(props) {
  const { categoryData } = props;

  const navigate = useNavigate();

  return (
    <nav className="font-prompt flex flex-row items-center justify-between h-[80px] p-10 bg-white">
      <div className="flex justify-center items-center gap-7">
        <div
          onClick={() => navigate("/admin-category")}
          className="text-5xl font-light text-gray-700 hover:text-gray-500 duration-200 hover:cursor-pointer"
        >
          &lt;
        </div>
        <div>
          <div className="text-xs text-gray-700">หมวดหมู่</div>
          <div className="font-medium text-xl text-gray-950">
            {categoryData.name ? (
              <p>บริการ{categoryData?.name}</p>
            ) : (
              <Skeleton width={100} />
            )}
          </div>
        </div>
      </div>

      <div id="right-content" className="flex-1 flex flex-row justify-end">
        <button
          onClick={() => navigate(`/admin-category/edit/${categoryData.id}`)}
          className="min-w-28 bg-blue-600 hover:bg-blue-500 duration-200 text-[1rem] text-white rounded-lg px-6 py-2 ml-6"
        >
          แก้ไข
        </button>
      </div>
    </nav>
  );
}

export default HeaderSection;
