import SidebarNavAdmin from "../components/common/SidebarNavAdmin";
import TopbarEdit from "../components/adminEditServicePage/TopbarEdit";
import EditForm from "../components/adminEditServicePage/EditForm";
function AdminEditService() {
  return (
    <div className="flex h-screen ">
      <div className="h-full">
        <SidebarNavAdmin />
      </div>

      <div className="flex-1 flex flex-col">
        <TopbarEdit />
        <div className="flex-1 p-4 overflow-y-auto bg-base">
          <EditForm />
        </div>
      </div>
    </div>
  );
}

export default AdminEditService;
