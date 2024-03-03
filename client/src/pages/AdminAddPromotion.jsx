import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { SidebarNavAdmin } from "../components/common/";
import {
  AddPromotionDetail,
  AddPromotionNav,
} from "../components/adminAddPromotion";

const AdminAddPromotion = () => {
  const [promotionData, setPromotionData] = useState({
    code: null,
    type: "fixed",
    discount: "0",
    usage_limit: null,
    expiration_date: null,
  });
  const [expirationDate, setExpirationDate] = useState(null);
  const [expirationTime, setExpirationTime] = useState(null);

  const navigate = useNavigate();

  const handleCreatePromotion = async () => {
    const errorMessage = validatePromotionData();
    if (Object.keys(errorMessage).length !== 0) {
      if (Object.keys(errorMessage).length > 1) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
      }

      alert(Object.values(errorMessage).join("\n"));
      return;
    }

    const expirationDateTime = new Date(
      dayjs(`${expirationDate} ${expirationTime}`, "DD/MM/YYYY HH:mm").valueOf()
    );

    const newPromotionData = {
      ...promotionData,
      expiration_date: expirationDateTime,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_APP_HOME_SERVICE_API}/promotion`,
        { promotionData: newPromotionData }
      );
      console.log(data);
      navigate(`/admin-promotion-details/${data?.data?.promotion_id}`);
    } catch (error) {
      console.error("Failed to create promotion:", error);
    }
  };

  const validatePromotionData = () => {
    const errors = {};

    if (!promotionData.code) {
      errors.code = "กรุณาระบุรหัสโปรโมชัน";
    }

    if (promotionData.discount === "0" || promotionData.discount === "") {
      errors.discount = "กรุณาระบุส่วนลด";
    }

    if (!promotionData.usage_limit) {
      errors.usage_limit = "กรุณาระบุจำนวนครั้งที่สามารถใช้ได้";
    }

    if (!expirationDate) {
      errors.expiration_date = "กรุณาระบุวันหมดอายุ";
    }

    if (!expirationTime) {
      errors.expiration_date = "กรุณาระบุเวลาหมดอายุ";
    }

    return errors;
  };

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
            promotionData={promotionData}
            setPromotionData={setPromotionData}
            setExpirationDate={setExpirationDate}
            setExpirationTime={setExpirationTime}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminAddPromotion;
