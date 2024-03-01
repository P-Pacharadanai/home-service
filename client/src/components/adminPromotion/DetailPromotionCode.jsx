import { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import { SidebarNavAdmin, convertThaiDateTime } from "../common";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const DetailPromotionCode = () => {
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState({});
  const params = useParams();

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
  }, []);

  const handleBackClick = () => {
    navigate("/admin-promotion");
  };


  function formatDiscount(discount) {
    if (typeof discount === "number") {
      // Check if it's a percentage
      if (discount < 1) {
        // Convert decimal to percentage
        return `-${(discount * 100).toFixed(2)} %`;
      } else {
        // It's a fixed discount
        return `${discount.toFixed(2)} `;
      }
    } else {
      return "No discount";
    }
  }



  return (
    <div className="flex">
      <div className=" top-0 left-0 fixed w-64 min-h-screen">
        <SidebarNavAdmin />
      </div>

      <div className="pl-[14rem] flex-2 overflow-auto w-full bg-gray-100 h-screen">
        <nav className="flex items-center w-full border-b bg-white font-prompt h-[80px] p-10">
          <div onClick={handleBackClick}>
            <ChevronLeft className="w-12 h-12 text-gray-600 cursor-pointer ml-5" />
          </div>
          <div className="font-prompt flex flex-col items-center text-gray-700 text-start w-[200px]">
            <p className="text-xs flex pr-6 ">Promotion Code</p>
            <h2 className="text-2xl font-medium tracking-wide text-gray-950 leading-8">
              {categoryData.code}
            </h2>
          </div>
          <div className="w-full flex justify-end">
            <button
              onClick={() =>
                navigate(`/admin-promotion-edit/${categoryData.promotion_id}`)
              }
              aria-label={`Edit ${categoryData.code}`}
              className="bg-blue-600 text-white text-lg px-9 py-2 rounded-lg hover:bg-white hover:text-blue-600 hover:border-blue-600 border"
            >
              แก้ไข
            </button>
          </div>
        </nav>
        
        <div className="pl-20 pr-10">
        <div className="bg-white rounded-lg border text-start text-lg text-gray-700 py-8 px-6 font-prompt flex flex-col justify-start items-start mx-auto  max-w-full mt-10 mb-40 overflow-auto">
          <div className="grid grid-cols-2 p-6 w-[850px]">
            <p className="font-medium max-w-40">Promotion Code</p>
            <p className="flex justify-start items-start -ml-32 max-w-40 text-black">
              {categoryData.code}
            </p>
          </div>
          <div className="grid grid-cols-2 p-6 w-[850px] font-prompt">
            <p className="font-prompt font-medium max-w-40">ประเภท</p>
            <p className="flex justify-start items-start -ml-32 max-w-40 text-black">
              {categoryData.type}
            </p>
          </div>
          <div className="grid grid-cols-2 p-6 w-[850px] font-prompt">
            <p className="font-prompt font-medium max-w-40">ราคาที่ลด</p>
            <p
              className="flex justify-start items-start -ml-32"
              style={{ color: "rgba(200, 36, 56, 1)" }}
            >
              {categoryData.type === "fixed" ? `${formatDiscount(categoryData.discount)} ฿` : `${formatDiscount(categoryData.discount)} %` }
            </p>
          </div>
          <div className="grid grid-cols-2 p-6 w-[850px] font-prompt">
            <p className="font-prompt font-medium max-w-40">โควต้าการใช้</p>
            <p className="flex justify-start items-start -ml-32 max-w-40 text-black">
              {categoryData.usage_count}/{categoryData.usage_limit} ครั้ง
            </p>
          </div>
          <div className="grid grid-cols-2 p-6 w-[850px] font-prompt">
            <p className="font-prompt font-medium max-w-40">วันหมดอายุ</p>
            <p className="flex justify-start items-start -ml-32 text-black">
              {convertThaiDateTime(categoryData.end_date)}
            </p>
          </div>

          <hr className="border-t border-gray-300 w-full mb-2 mt-2" />
          <div className="grid grid-cols-2 p-6 w-[850px] font-prompt">
            <p className="font-prompt font-medium max-w-40">สร้างเมื่อ</p>
            <p className="flex justify-start items-start -ml-32 text-black">
              {convertThaiDateTime(categoryData.created_at)}
            </p>
          </div>
          <div className="grid grid-cols-2 p-6 w-[850px] font-prompt">
            <p className="font-medium font-prompt max-w-40 ">แก้ไขล่าสุด</p>
            <p className="flex justify-start items-start -ml-32 text-black">
              {convertThaiDateTime(categoryData.updated_at)}
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DetailPromotionCode;
