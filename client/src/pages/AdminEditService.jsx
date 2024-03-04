import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ConfirmCancel } from "../components/common";
import SidebarNavAdmin from "../components/common/SidebarNavAdmin";
import TopbarEdit from "../components/adminEditServicePage/TopbarEdit";
import EditForm from "../components/adminEditServicePage/EditForm";

function AdminEditService() {
  const [subService, setSubService] = useState([]);
  const [serviceData, setServiceData] = useState({});
  const [categoryData, setCategoryData] = useState([]);
  const [uploadImage, setUploadImage] = useState();
  const [deleteServiceId, setDeleteServiceId] = useState({ id: 0, name: "" });

  const navigate = useNavigate();
  const params = useParams();

  const getServiceList = async () => {
    const serviceUrl = `${import.meta.env.VITE_APP_HOME_SERVICE_API}/service/${
      params.serviceId
    }`;
    const { data } = await axios.get(serviceUrl);
    setServiceData(data.data);
    setSubService(data.data.service_list);
  };

  useEffect(() => {
    getServiceList();
  }, []);

  const handleDelete = async () => {
    await axios.delete(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/service/${params.serviceId}`
    );

    setDeleteServiceId({ id: 0, name: "" });
    navigate("/admin-service");
  };

  const handleEdit = async () => {
    if (
      !serviceData.name ||
      !serviceData.category_id ||
      subService.some((item) => !item.title || !item.price || !item.unit)
    ) {
      alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }

    const formData = new FormData();
    const newSubService = subService.map(({ id, ...rest }) => rest);

    formData.append("serviceId", serviceData.service_id);
    formData.append("name", serviceData.name);
    formData.append("category_Id", Number(serviceData.category_id));
    formData.append("subService", JSON.stringify(newSubService));
    formData.append("image", uploadImage);

    const { data } = await axios.put(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/service/update`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    navigate(`/admin-service/${serviceData.service_id}`);
  };

  return (
    <div className="flex h-screen ">
      <div className="h-full">
        <SidebarNavAdmin currentPage="บริการ" />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="px-10">
          <TopbarEdit
            handleEditService={handleEdit}
            serviceState={{
              serviceData,
            }}
          />
        </div>

        <div className="flex-1 p-4 overflow-y-auto bg-base">
          <EditForm
            serviceEditState={{
              serviceData,
              setServiceData,
              categoryData,
              setCategoryData,
              uploadImage,
              setUploadImage,
              subService,
              setSubService,
              setDeleteServiceId,
            }}
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

export default AdminEditService;
