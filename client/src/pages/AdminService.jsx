import SidebarNavAdmin from "../components/common/SidebarNavAdmin";
import CategoryService from "../components/adminServicePage/CategoryService";
import TopbarSearch from "../components/adminCategoryPage/TopbarSearch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AdminService() {
  const [inputKeyword, setInputKeyword] = useState("");
  const navigate = useNavigate();
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
          <CategoryService inputKeyword={inputKeyword} />
        </div>
      </div>
    </div>
  );
}

export default AdminService;
