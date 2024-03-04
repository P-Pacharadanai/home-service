import SidebarNavAdmin from "../components/common/SidebarNavAdmin";
import CategoryService from "../components/adminServicePage/CategoryService";
import TopbarSearch from "../components/adminCategoryPage/TopbarSearch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConfirmCancel } from "../components/common";
import axios from "axios";

function AdminService() {
  const [inputKeyword, setInputKeyword] = useState("");
  const [deleteServiceId, setDeleteServiceId] = useState({ id: 0, name: "" });
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    await axios.delete(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/service/${
        deleteServiceId.id
      }`
    );

    setDeleteServiceId({ id: 0, name: "" });
    setRefresh(!refresh);
  };
  return (
    <div className="flex h-screen ">
      <div className="h-full">
        <SidebarNavAdmin currentPage="บริการ" />
      </div>

      <div className="flex-1 flex flex-col">
        <TopbarSearch
          title="บริการ"
          searchText="ค้นหาบริการ..."
          buttonAdd="เพิ่มบริการ +"
          onAddClick={() => navigate("/admin-add-service")}
          inputKeyword={inputKeyword}
          setInputKeyword={setInputKeyword}
        />

        <div className="flex-1 pl-4 pr-6 pb-16 overflow-y-auto bg-base">
          <CategoryService
            inputKeyword={inputKeyword}
            setDeleteServiceId={setDeleteServiceId}
            refresh={refresh}
          />
          {deleteServiceId.id !== 0 && (
            <ConfirmCancel
              itemName={deleteServiceId.name}
              onDelete={handleDelete}
              onClose={() => setDeleteServiceId({ id: 0, name: "" })}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminService;
