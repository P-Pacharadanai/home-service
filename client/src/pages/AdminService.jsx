import SidebarNavAdmin from "../components/common/SidebarNavAdmin";
import CategoryService from "../components/adminServicePage/CategoryService";
import TopbarSearch from "../components/adminCategoryPage/TopbarSearch";

function AdminService() {
  return (
    <div className="flex h-screen ">
      <div className="h-full">
        <SidebarNavAdmin />
      </div>

      <div className="flex-1 flex flex-col">
        <TopbarSearch
          title="บริการ"
          searchText="ค้นหาบริการ..."
          buttonAdd="เพิ่มบริการ +"
        />

        <div className="flex-1 p-4 overflow-y-auto bg-base">
          <CategoryService />
        </div>
      </div>
    </div>
  );
}

export default AdminService;
