import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SidebarNavAdmin } from "../components/common/";
import { EditPromotionNav } from "../components/adminPromotion";
import EditPromotionDetail from "../components/adminEditPromotion/EditPromotionDetail";

const AdminEditPromotion = () => {
  const [promotionCode, setPromotionCode] = useState(""); // State for promotion code
  const [promotionType, setPromotionType] = useState(""); // State for promotion type
  const [fixedDiscount, setFixedDiscount] = useState("");
  const [percentDiscount, setPercentDiscount] = useState("");
  const [discount, setDiscount] = useState("");
  const [usageLimit, setUsageLimit] = useState(""); // State for usage limit
  const [expirationDate, setExpirationDate] = useState(null); // State for expiration date
  const [expirationTime, setExpirationTime] = useState(null); // State for expiration time

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
          <EditPromotionDetail
            promotionCode={promotionCode}
            setPromotionCode={setPromotionCode}
            promotionType={promotionType}
            setPromotionType={setPromotionType}
            fixedDiscount={fixedDiscount}
            setFixedDiscount={setFixedDiscount}
            percentDiscount={percentDiscount}
            setPercentDiscount={setPercentDiscount}
            discount={discount}
            setDiscount={setDiscount}
            usageLimit={usageLimit}
            setUsageLimit={setUsageLimit}
            expirationDate={expirationDate}
            expirationTime={expirationTime}
            setExpirationDate={setExpirationDate}
            setExpirationTime={setExpirationTime}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminEditPromotion;
