import SidebarNavAdmin from "../components/common/SidebarNavAdmin";
import CategoryService from "../components/adminServicePage/CategoryService";
import TopbarSearch from "../components/adminCategoryPage/TopbarSearch";
import { useNavigate } from "react-router-dom";

function AdminService() {
  const navigate = useNavigate();
  const handleAdd = () => {
    navigate("/admin-add-service");
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
          onAddClick={handleAdd}
        />

        <div className="flex-1 p-4 overflow-y-auto bg-base">
          <CategoryService />
        </div>
      </div>
    </div>
  );
}

export default AdminService;
