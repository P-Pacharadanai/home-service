import { ChevronLeft } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const EditPromotionNav = (props) => {
  const [categoryData, setCategoryData] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  const getCategoryData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_APP_HOME_SERVICE_API}/promotion/${
          params.promotionId
        }`
      );
      setCategoryData(data.data);
      //console.log(data.data);
    } catch (error) {
      console.error("Failed to fetch category data:", error);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, [params.promotionId]);

  const handleBackClick = () => {
    navigate("/admin-promotion");
  };

  return (
    <nav className="flex items-center w-full border-b p-4 bg-white font-prompt">
      <div>
        <ChevronLeft
          className="w-12 h-12 text-gray-600 cursor-pointer ml-5"
          onClick={handleBackClick}
        />
      </div>
      <div className="font-prompt flex flex-col items-center text-gray-700 text-start w-[200px]">
        <p className="text-xs flex pr-6 ">Promotion Code</p>
        <h2 className="text-2xl font-medium tracking-wide text-gray-950 leading-8">
          {categoryData.code}
        </h2>
      </div>
      <div className="w-full flex justify-end px-12 gap-4 ">
        <button
          className="bg-white text-blue-600 text-lg px-9 py-2 rounded-lg border-blue-600 border"
          onClick={props.onClickButtonCancel}
        >
          {props.buttonCancel}
        </button>
        <button
          className="bg-blue-600 text-white text-lg px-9 py-2 rounded-lg"
          onClick={props.handleEditPromotion}
        >
          {props.buttonAdd}
        </button>
      </div>
    </nav>
  );
};

export default EditPromotionNav;
