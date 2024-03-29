import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import SidebarNavAdmin from "../components/common/SidebarNavAdmin";
import { ConfirmCancel } from "../components/common";
import {
  HeaderSection,
  MainContent,
} from "../components/adminCaregoryEditPage";

function AdminCategoryEdit() {
  const [categoryData, setCategoryData] = useState({});
  const [deleteCategoryId, setDeleteCategoryId] = useState({ id: 0, name: "" });

  const navigate = useNavigate();
  const params = useParams();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    const inputData = { ...categoryData, [name]: value };
    setCategoryData(inputData);
  };

  const handleEditCategory = async () => {
    const { data } = await axios.put(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/category/${
        categoryData?.id
      }`,
      {
        name: categoryData?.name,
        bgColor: categoryData?.background_color,
        textColor: categoryData?.text_color,
      }
    );

    navigate(`/admin-category/${data?.data?.id}`);
  };

  const getCategoryData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/category/${
        params.categoryId
      }`
    );
    setCategoryData(data.data);
  };

  const handleDelete = async () => {
    await axios.delete(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/category/${
        deleteCategoryId.id
      }`
    );

    setDeleteCategoryId({ id: 0, name: "" });
    navigate("/admin-category");
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
        <HeaderSection
          categoryData={categoryData}
          handleEditCategory={handleEditCategory}
        />
        <div className="flex-1 px-10 py-14 bg-base">
          <MainContent
            categoryData={categoryData}
            onChangeHandler={onChangeHandler}
            setDeleteCategoryId={setDeleteCategoryId}
          />
          {deleteCategoryId.id !== 0 && (
            <ConfirmCancel
              itemName={deleteCategoryId.name}
              onDelete={handleDelete}
              onClose={() => setDeleteCategoryId({ id: 0, name: "" })}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminCategoryEdit;
