import { useNavigate } from "react-router-dom";
import { SidebarNavAdmin } from "../components/common/";
import {
  AddPromotionDetail,
  AddPromotionNav,
} from "../components/adminAddPromotion";
import { useState } from "react";
import axios from "axios";

const AdminAddPromotion = () => {
  const [promotionData, setPromotionData] = useState({});
  const handleCreatePromotion = async () => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/promotion`,
      promotionData
    );
    console.log(promotionData);
    navigate(`/admin-promotion/${data?.data?.id}`);
  };

  const [promotionCode, setPromotionCode] = useState(""); // State for promotion code
  const [promotionType, setPromotionType] = useState(""); // State for promotion type
  const [fixedDiscount, setFixedDiscount] = useState("");
  const [percentDiscount, setPercentDiscount] = useState("");
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
        <AddPromotionNav
          buttonAdd="สร้าง"
          buttonCancel="ยกเลิก"
          handleCreatePromotion={handleCreatePromotion}
          onClickButtonCancel={() => navigate("/admin-promotion")}
        />

        <div className="flex-1 p-8  overflow-y-auto bg-base relative">
          <AddPromotionDetail
            promotionCode={promotionCode}
            setPromotionCode={setPromotionCode}
            promotionType={promotionType}
            setPromotionType={setPromotionType}
            fixedDiscount={fixedDiscount}
            setFixedDiscount={setFixedDiscount}
            percentDiscount={percentDiscount}
            setPercentDiscount={setPercentDiscount}
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

export default AdminAddPromotion;
