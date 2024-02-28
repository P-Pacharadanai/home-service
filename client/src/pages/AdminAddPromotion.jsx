import { useNavigate } from "react-router-dom";
import { SidebarNavAdmin } from "../components/common/";
import {
  AddPromotionDetail,
  AddPromotionNav,
} from "../components/adminAddPromotion";
import { useState } from "react";
import axios from "axios";

const AdminAddPromotion = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen ">
      <div className="h-full">
        <SidebarNavAdmin currentPage={"Promotion Code"} />
      </div>

      <div className="flex-1 flex flex-col">
        <AddPromotionNav
          buttonAdd="สร้าง"
          buttonCancel="ยกเลิก"
          handleCreatePromotion={handleCreatePromotion}
          onClickButtonCancel={() => navigate("/admin-promotion")}
        />

        <div className="flex-1 p-8  overflow-y-auto bg-base relative">
          <AddPromotionDetail />
        </div>
      </div>
    </div>
  );
};

export default AdminAddPromotion;
