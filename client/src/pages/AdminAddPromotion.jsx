import React from "react";
import { AlertModal, SidebarNavAdmin } from "../components/common/";
import AddPromotionNav from "../components/adminAddPromotion/AddPromotionNav";
import AddPromotionSection from "../components/adminAddPromotion/AddPromotionSection";
const AdminAddPromotion = () => {
  return (
    <div className="flex">
      <div className=" top-0 left-0 fixed w-64 min-h-screen">
        <SidebarNavAdmin currentPage={"Promotion Code"} />
      </div>
      <AddPromotionNav />
    </div>
  );
};

export default AdminAddPromotion;
