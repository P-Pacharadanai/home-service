import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ConfirmCancel } from "../components/common";
import SidebarNavAdmin from "../components/common/SidebarNavAdmin";
import TopbarEdit from "../components/adminEditServicePage/TopbarEdit";
import EditForm from "../components/adminEditServicePage/EditForm";
function AdminEditService() {
  const [serviceData, setServiceData] = useState({});
  const [deleteServiceId, setDeleteServiceId] = useState({ id: 0, name: "" });

  const navigate = useNavigate();
  const params = useParams();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    const inputData = { ...serviceData, [name]: value };
    setServiceData(inputData);
  };

  const handleServiceData = async () => {
    const { data } = await axios.put(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/service/${serviceData?.id}`,
      {
        name: serviceData?.name,
        category: serviceData?.category,
      }
    );

    navigate(`/admin-service/${data?.data?.id}`);
  };

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
