import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SidebarNavAdmin from "../components/common/SidebarNavAdmin";
import {
  HeaderSection,
  MainContent,
} from "../components/adminCategoryDetailPage";

function AdminCategoryDetail() {
  const [categoryData, setCategoryData] = useState({});

  const params = useParams();

  const getCategoryData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/category/${
        params.categoryId
      }`
    );
    setCategoryData(data.data);
  };

  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <div className="flex h-screen font-prompt ">
      <div className="h-full">
        <SidebarNavAdmin currentPage="หมวดหมู่" />
      </div>

      <div className="flex-1 flex flex-col">
        <HeaderSection categoryData={categoryData} />
        <div className="flex-1 px-10 py-14 bg-base">
          <MainContent categoryData={categoryData} />
        </div>
      </div>
    </div>
  );
}

export default AdminCategoryDetail;
