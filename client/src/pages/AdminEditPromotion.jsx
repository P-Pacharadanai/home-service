import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import dayjs from "dayjs";
import { SidebarNavAdmin } from "../components/common/";
import { EditPromotionNav } from "../components/adminPromotion";
import EditPromotionDetail from "../components/adminEditPromotion/EditPromotionDetail";
import { ConfirmCancel } from "../components/common/";
const AdminEditPromotion = () => {
  const [expirationDate, setExpirationDate] = useState(null);
  const [expirationTime, setExpirationTime] = useState(null);
  const [promotionData, setPromotionData] = useState({});
  const [deletePromotionId, setDeletePromotionId] = useState({
    id: 0,
    name: "",
  });

  const navigate = useNavigate();
  const params = useParams();

  const getPromotionData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_APP_HOME_SERVICE_API}/promotion/${
          params.promotionId
        }`
      );
      setPromotionData(data.data);
    } catch (error) {
      console.error("Failed to fetch category data:", error);
    }
  };

  const updatePromotionData = async () => {
    const errorMessage = validatePromotionData();
    if (Object.keys(errorMessage).length !== 0) {
      if (Object.keys(errorMessage).length > 1) {
        alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        return;
      }

      alert(Object.values(errorMessage).join("\n"));
      return;
    }

    let date = getUpdatedExpirationDate();

    const newPromotionData = date
      ? { ...promotionData, expiration_date: date, updated_at: new Date() }
      : { ...promotionData, updated_at: new Date() };

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_APP_HOME_SERVICE_API}/promotion`,
        { promotionData: newPromotionData }
      );

      navigate(`/admin-promotion-details/${params.promotionId}`);
    } catch (error) {
      console.error("Failed to fetch category data:", error);
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

    if (expirationDate === "") {
      errors.expiration_date = "กรุณาระบุวันหมดอายุ";
    }

    if (expirationTime === "") {
      errors.expiration_date = "กรุณาระบุเวลาหมดอายุ";
    }

    return errors;
  };

  const getUpdatedExpirationDate = () => {
    const formatTime = (date) =>
      new Date(date)
        .toLocaleDateString("en-EN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
        .slice(-5);
    const formatDate = (date) =>
      new Date(date).toLocaleDateString("en-EN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

    if (expirationDate && expirationTime) {
      return new Date(
        dayjs(
          `${expirationDate} ${expirationTime}`,
          "DD/MM/YYYY HH:mm"
        ).valueOf()
      );
    } else if (expirationDate) {
      const formattedTime = formatTime(promotionData.expiration_date);
      const newDate = new Date(
        dayjs(
          `${expirationDate} ${formattedTime}`,
          "DD/MM/YYYY HH:mm"
        ).valueOf()
      );
      newDate.setHours(newDate.getHours() + 7);

      return newDate;
    } else if (expirationTime) {
      const formattedDate = formatDate(promotionData.expiration_date);
      return new Date(
        dayjs(
          `${formattedDate} ${expirationTime}`,
          "DD/MM/YYYY HH:mm"
        ).valueOf()
      );
    } else {
      return null;
    }
  };

  const handleDelete = async () => {
    await axios.delete(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/promotion/${
        deletePromotionId.id
      }`
    );

    setDeletePromotionId({ id: 0, name: "" });
    navigate("/admin-promotion");
  };

  useEffect(() => {
    getPromotionData();
  }, []);

  return (
    <div className="flex h-screen ">
      <div className="h-full">
        <SidebarNavAdmin currentPage={"Promotion Code"} />
      </div>
      <div className="flex-1 flex flex-col">
        <EditPromotionNav
          buttonAdd="บันทึก"
          buttonCancel="ยกเลิก"
          handleEditPromotion={updatePromotionData}
          onClickButtonCancel={() => navigate("/admin-promotion")}
        />
        <div className="flex-1 p-8  overflow-y-auto bg-base relative">
          <EditPromotionDetail
            promotionData={promotionData}
            setPromotionData={setPromotionData}
            setExpirationDate={setExpirationDate}
            setExpirationTime={setExpirationTime}
            setDeletePromotionId={setDeletePromotionId}
          />
          {deletePromotionId.id !== 0 && (
            <ConfirmCancel
              itemName={deletePromotionId.name}
              onDelete={handleDelete}
              onClose={() => setDeletePromotionId({ id: 0, name: "" })}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminEditPromotion;
