import SidebarNavAdmin from "../components/common/SidebarNavAdmin";
import TopbarSearch from "../components/adminCategoryPage/TopbarSearch";
import CategoryTable from "../components/adminCategoryPage/CategoryTable";
import { ConfirmCancel } from "../components/common";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminCategory() {
  const [inputKeyword, setInputKeyword] = useState("");
  const [deleteCategoryId, setDeleteCategoryId] = useState({ id: 0, name: "" });
  const [refresh, setRefresh] = useState(false);

  const handleDelete = async () => {
    await axios.delete(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/category/${
        deleteCategoryId.id
      }`
    );

    setDeleteCategoryId({ id: 0, name: "" });
    setRefresh(!refresh);
  };
  console.log(refresh);

  const navigate = useNavigate();
  return (
    <div className="flex h-screen">
      <SidebarNavAdmin currentPage="หมวดหมู่" />

      <div className="flex-1 flex flex-col">
        <TopbarSearch
          title="หมวดหมู่"
          searchText="ค้นหาหมวดหมู่..."
          buttonAdd="เพิ่มหมวดหมู่ +"
          onAddClick={() => navigate("/admin-category/create")}
          inputKeyword={inputKeyword}
          setInputKeyword={setInputKeyword}
        />

        <div className="flex-1 p-4 overflow-y-auto bg-base relative ">
          <CategoryTable
            inputKeyword={inputKeyword}
            setDeleteCategoryId={setDeleteCategoryId}
            refresh={refresh}
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

export default AdminCategory;
