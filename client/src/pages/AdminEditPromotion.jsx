import { useNavigate } from "react-router-dom";
import { SidebarNavAdmin } from "../components/common/";
import { EditPromotionNav } from "../components/adminPromotion";
import { AddPromotionDetail } from "../components/adminAddPromotion";

const AdminEditPromotion = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen ">
      <div className="h-full">
        <SidebarNavAdmin currentPage={"Promotion Code"} />
      </div>

      <div className="flex-1 flex flex-col">
        <EditPromotionNav
          buttonAdd="แก้ไข"
          buttonCancel="ยกเลิก"
          //handleEditPromotion={handleEditPromotion}
          onClickButtonCancel={() => navigate("/admin-promotion")}
        />

        <div className="flex-1 p-8  overflow-y-auto bg-base relative">
          <AddPromotionDetail />
        </div>
      </div>
    </div>
  );
};

export default AdminEditPromotion;
