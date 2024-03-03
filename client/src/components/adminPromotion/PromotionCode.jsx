import React, { useState, useEffect } from "react";
import {
  AlertModal,
  SidebarNavAdmin,
  convertThaiDateTime,
} from "../../components/common";
import { savefileIcon } from "../../assets/icons";
import { Search, Plus, Trash2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../contexts/authentication";

const PromotionCode = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPromoCode, setSelectedPromoCode] = useState("");
  const { state } = useAuth();
  const navigate = useNavigate();
  const [promoCodeData, setPromoCodeData] = useState([]);

  const [inputKeyword, setInputKeyword] = useState("");

  const getPromoCodeData = async () => {
    const { data } = await axios.get(
      `${
        import.meta.env.VITE_APP_HOME_SERVICE_API
      }/promotion?keyword=${inputKeyword}`
    );
    setPromoCodeData(data.data);
  };

  const handleConfirmDelete = async (promocode) => {
    await axios.delete(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/promotion/${
        promocode.promotion_id
      }`
    );
    setPromoCodeData(
      promoCodeData.filter(
        (code) => code.promotion_id !== promocode.promotion_id
      )
    );

    //setDeleteCodePromoId({ id: 0, name: "" });
    setIsModalOpen(false);
    //navigate("/admin-promotion");
  };

  const handleDeleteClick = (promoCode) => {
    setSelectedPromoCode(promoCode);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDeleteCodePromoId({ id: 0, name: "" });
  };

  const handleNavigation = () => {
    navigate("/admin-promotion-add");
  };

  useEffect(() => {
    if (state.user?.userId) {
      getPromoCodeData();
    }
  }, [state.user?.userId, inputKeyword]);

  function formatDiscount(discount) {
    if (typeof discount === "string" && discount.includes("%")) {
      return `${discount}`;
    } else if (typeof discount === "number") {
      if (discount === 10) {
        return `-${discount.toFixed(2)}%`;
      } else {
        return `-${discount.toFixed(2)}฿`;
      }
    } else {
      return discount || "No discount";
    }
  }

  function formatDiscount(discount, isPercentage) {
    if (typeof discount !== "number") {
      return "Invalid discount value";
    }

    if (isPercentage) {
      // It's a percentage discount
      if (discount < 1) {
        // Convert decimal to percentage if not already in percentage form
        discount = discount * 100;
      }
      return `-${discount.toFixed(2)}%`;
    } else {
      // It's a fixed discount
      return `-${discount.toFixed(2)}`;
    }
  }

  return (
    <div className="flex ">
      <div className=" top-0 left-0 fixed w-64 min-h-screen">
        <SidebarNavAdmin currentPage={"Promotion Code"} />
      </div>
      <div className="pl-[15rem] flex-2 overflow-auto w-full bg-gray-100 h-screen">
        <nav className="flex justify-between items-center w-full border-b bg-white font-prompt h-[80px] p-10">
          <h2 className="text-xl font-medium text-gray-800">Promotion Code</h2>
          <div className="flex gap-6 leading-none ">
            <div className="relative flex items-center bg-white hover:border-gray-500">
              <Search className="text-gray-300 absolute left-4" />
              <input
                type="text"
                value={inputKeyword}
                placeholder="ค้นหา Promotion Code..."
                className="flex-grow text-mb bg-transparent text-gray-700 w-full text-[1rem] focus:outline-none border border-gray-400 p-2 pl-16 pr-16 rounded-lg outline-none focus:border-gray-600 focus:bg-gray-100 focus:ring-1"
                onChange={(event) => setInputKeyword(event.target.value)}
              />
            </div>
            <button
              onClick={handleNavigation}
              className="flex items-center gap-2 px-9 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 duration:200"
            >
              เพิ่ม Promotion Code
              <Plus className="w-5 " />
            </button>
          </div>
        </nav>

        <div className="pr-10">
          <section className="font-prompt mt-10 border-gray-300 rounded-lg border max-w-full ml-10 mb-40 bg-white">
            <div className="grid grid-cols-7 bg-gray-200 py-3 px-6 stext-md text-start text-gray-700 border-gray-100 rounded-t-lg border">
              <div>Promotion Code</div>
              <div>ประเภท</div>
              <div>โควต้าการใช้</div>
              <div>ราคาที่ลด</div>
              <div>สร้างเมื่อ</div>
              <div className="ml-8">วันหมดอายุ</div>
              <div className="text-center ml-20">Action</div>
            </div>
            <div className="divide-y divide-gray-200 py-2">
              {promoCodeData.map((promoCode) => (
                <div
                  key={promoCode.promotion_id}
                  className="grid grid-cols-7 text-start items-center py-8 px-8 bg-white hover:bg-gray-50 font-prompt"
                >
                  <Link
                    to={`/admin-promotion-details/${promoCode.promotion_id}`}
                  >
                    {promoCode.code}
                  </Link>
                  <div>{promoCode.type}</div>
                  <div>
                    {promoCode.usage_count}/{promoCode.usage_limit}
                  </div>
                  <div style={{ color: "rgba(200, 36, 56, 1)" }}>
                    {promoCode.type === "fixed"
                      ? `${formatDiscount(promoCode.discount)} ฿`
                      : `${formatDiscount(promoCode.discount)} %`}
                  </div>
                  <div>{convertThaiDateTime(promoCode.created_at)}</div>
                  <div className="ml-8 w-full">
                    {convertThaiDateTime(promoCode.expiration_date)}
                  </div>
                  <div className="flex justify-center gap-6 ml-24">
                    <button onClick={() => handleDeleteClick(promoCode)}>
                      <Trash2 className="w-6 h-6 text-gray-500 hover:text-gray-950" />
                    </button>
                    <button
                      onClick={() =>
                        navigate(
                          `/admin-promotion-edit/${promoCode.promotion_id}`
                        )
                      }
                      aria-label={`Edit ${promoCode.code}`}
                    >
                      <img src={savefileIcon} alt="Edit" className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <AlertModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onConfirm={() => handleConfirmDelete(selectedPromoCode)}
            promoCode={selectedPromoCode}
          />
        </div>
      </div>
    </div>
  );
};

export default PromotionCode;
