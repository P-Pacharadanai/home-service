import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const navigate = useNavigate();

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

    console.log("category_Id: ", Number(serviceData.category_id));

    const { data } = await axios.put(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/service/update`,
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    console.log(data.data);
    navigate("/admin-service");
  };

  return (
    <div className="flex h-screen ">
      <div className="h-full">
        <SidebarNavAdmin />
      </div>

      <div className="flex-1 flex flex-col">
        <TopbarEdit
          handleEditService={handleEdit}
          serviceState={{
            serviceData,
            categoryData,
            uploadImage,
            subService,
          }}
        />
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
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AdminEditService;
