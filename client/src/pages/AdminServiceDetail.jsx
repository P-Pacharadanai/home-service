import SidebarNavAdmin from "../components/common/SidebarNavAdmin";
import MainContent from "../components/adminServiceDetailPage/MainContent";
import TopbarEdit from "../components/adminServiceDetailPage/TopbarEdit";
import { useParams } from "react-router-dom";
function AdminServiceDetail() {
  const params = useParams();

  return (
    <div className="flex h-screen font-prompt ">
      <div className="h-full">
        <SidebarNavAdmin currentPage="หมวดหมู่" />
      </div>
      <div className="flex-1 flex flex-col">
        <TopbarEdit />

        <div className="flex-1 px-10 py-14 bg-base">
          <MainContent params={params} />
        </div>
      </div>
    </div>
  );
}

export default AdminServiceDetail;
