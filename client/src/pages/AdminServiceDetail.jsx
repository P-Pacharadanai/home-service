import SidebarNavAdmin from "../components/common/SidebarNavAdmin";
import MainContent from "../components/adminServiceDetailPage/MainContent";
import TopbarEdit from "../components/adminServiceDetailPage/TopbarEdit";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function AdminServiceDetail() {
  const [serviceData, setServiceData] = useState({});

  const params = useParams();

  const getServiceList = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/service/${params.serviceId}`
    );
    setServiceData(data.data);
  };

  useEffect(() => {
    getServiceList();
  }, []);

  return (
    <div className="flex h-screen font-prompt ">
      <div className="h-full">
        <SidebarNavAdmin currentPage="บริการ" />
      </div>
      <div className="flex-1 flex flex-col">
        <TopbarEdit serviceData={serviceData} />

        <div className="flex-1 px-10 py-14 bg-base overflow-y-auto">
          <MainContent serviceData={serviceData} />
        </div>
      </div>
    </div>
  );
}

export default AdminServiceDetail;
