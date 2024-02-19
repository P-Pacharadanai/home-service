import SidebarNavAdmin from "../components/common/SidebarNavAdmin";
import TopbarSearch from "../components/adminCategoryPage/TopbarSearch";
import CategoryTable from "../components/adminCategoryPage/CategoryTable";
function AdminCategory() {
  return (
    <div className="flex h-screen ">
      <div className="h-full">
        <SidebarNavAdmin />
      </div>

      <div className="flex-1 flex flex-col">
        <TopbarSearch
          title="หมวดหมู่"
          searchText="ค้นหาหมวดหมู่..."
          buttonAdd="เพิ่มหมวดหมู่ +"
        />

        <div className="flex-1 p-4 overflow-y-auto bg-base">
          <CategoryTable />
        </div>
      </div>
    </div>
  );
}

export default AdminCategory;
