import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SidebarNavAdmin } from "../components/common/";
import { EditPromotionNav } from "../components/adminPromotion";
import EditPromotionDetail from "../components/adminEditPromotion/EditPromotionDetail";
import axios from "axios";
import dayjs from "dayjs";

const AdminEditPromotion = () => {
  /* const [promotionCode, setPromotionCode] = useState(""); // State for promotion code
  const [promotionType, setPromotionType] = useState(""); // State for promotion type
  const [fixedDiscount, setFixedDiscount] = useState("");
  const [percentDiscount, setPercentDiscount] = useState("");
  const [discount, setDiscount] = useState("");
  const [usageLimit, setUsageLimit] = useState(""); // State for usage limit
  */
  const [expirationDate, setExpirationDate] = useState(null); // State for expiration date
  const [expirationTime, setExpirationTime] = useState(null); // State for expiration time

  const [promotionData, setPromotionData] = useState({});

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
      //console.log(data.data);
    } catch (error) {
      console.error("Failed to fetch category data:", error);
    }
  };

  const updatePromotionData = async () => {
    let date = null;
    if (expirationDate && expirationTime) {
      const timestamp = dayjs(
        `${expirationDate} ${expirationTime}`,
        "DD/MM/YYYY HH:mm"
      ).valueOf();

      date = new Date(timestamp);
    } else if (expirationDate) {
      date = new Date(promotionData.expiration_date);

      const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };

      const time = date.toLocaleDateString("en-EN", options).slice(-5);

      const timestamp = dayjs(
        `${expirationDate} ${time}`,
        "DD/MM/YYYY HH:mm"
      ).valueOf();

      date = new Date(timestamp);

      date.setHours(date.getHours() + 7);
    } else if (expirationTime) {
      date = new Date(promotionData.expiration_date);

      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      };

      const dateStr = date.toLocaleDateString("en-EN", options);

      const timestamp = dayjs(
        `${dateStr} ${expirationTime}`,
        "DD/MM/YYYY HH:mm"
      ).valueOf();

      date = new Date(timestamp);
      console.log(date);
    }

    let newPromotionData;
    if (date) {
      newPromotionData = {
        ...promotionData,
        expiration_date: date,
        updated_at: new Date(),
      };
    } else {
      newPromotionData = {
        ...promotionData,
        updated_at: new Date(),
      };
    }

    console.log(newPromotionData);

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_APP_HOME_SERVICE_API}/promotion`,
        { promotionData: newPromotionData }
      );
      console.log(data.data);
    } catch (error) {
      console.error("Failed to fetch category data:", error);
    }
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
          //handleEditPromotion={handleEditPromotion}
          handleEditPromotion={updatePromotionData}
          onClickButtonCancel={() => navigate("/admin-promotion")}
        />

        <div className="flex-1 p-8  overflow-y-auto bg-base relative">
          <EditPromotionDetail
            promotionData={promotionData}
            setPromotionData={setPromotionData}
            /*    promotionCode={promotionCode}
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
            */
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
