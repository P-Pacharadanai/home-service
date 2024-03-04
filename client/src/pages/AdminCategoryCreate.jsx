import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SidebarNavAdmin from "../components/common/SidebarNavAdmin";
import TopbarSearch from "../components/adminCategoryPage/TopbarSearch";
import MainContent from "../components/adminCategoryCreatePage/MainContent";

function AdminCategoryCreate() {
  const [categoryData, setCategoryData] = useState({
    name: "",
    bgColor: "#E6E7EB",
    textColor: "#323640",
  });

  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    const inputData = { ...categoryData, [name]: value };
    setCategoryData(inputData);
  };

  const handleCreateCategory = async () => {
    if (categoryData.name.trim() !== "") {
      const { data } = await axios.post(
        `${import.meta.env.VITE_APP_HOME_SERVICE_API}/category`,
        categoryData
      );

      navigate(`/admin-category/${data?.data?.id}`);
    }
  };

  return (
    <div className="flex h-screen font-prompt ">
      <div className="h-full">
        <SidebarNavAdmin currentPage="หมวดหมู่" />
      </div>

      <div className="flex-1 flex flex-col">
        <TopbarSearch
          title="เพิ่มหมวดหมู่"
          buttonAdd="สร้าง"
          buttonCancel="ยกเลิก"
          onAddClick={handleCreateCategory}
          onClickButtonCancel={() => navigate("/admin-category")}
        />
        <div className="flex-1 px-10 py-14 bg-base">
          <MainContent
            categoryData={categoryData}
            onChangeHandler={onChangeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default AdminCategoryCreate;
