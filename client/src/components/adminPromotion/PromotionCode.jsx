import React, { useState, useEffect } from "react";
import { AlertModal, SidebarNavAdmin } from "../../components/common";
import { savefileIcon } from "../../assets/icons";
import { Search, Plus ,Trash2 } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useAuth } from "../../contexts/authentication";

const PromotionCode  = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPromoCodeId, setSelectedPromoCodeId] = useState(null);
  const { state } = useAuth();
  const [codePromo, setCodePromo] = useState([]);

  const getcodePromo = async () => {
    try {
      const apiUrl = `${import.meta.env.VITE_APP_HOME_SERVICE_API}`;
      const { data } = await axios.get(apiUrl);
      setCodePromo(data);

    } catch (error) {
      if (error.response) {
        console.error("Resource not found: ");
      } else {
        console.error("Error fetching data: ");
      }
    } 
  };

  useEffect(() => {
    if (state.user?.userId) {
      getcodePromo();
    }
  }, [state.user?.userId]);

  const navigate = useNavigate();

  const handleDeleteClick = (promoCodeId) => {
    setSelectedPromoCodeId(promoCodeId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = () => {
    // Correctly filtering by ID 
    setCodePromo(currentCodes => currentCodes.filter(code => code.id !== selectedPromoCodeId));
    setIsModalOpen(false);
    setSelectedPromoCodeId(null); // Resetting the ID
  };

  const handleNavigation = () => {
    navigate('/admin-promotion-add');
  };

  return (
    <div className="flex">
      <div className=" top-0 left-0 fixed w-64 min-h-screen">
        <SidebarNavAdmin currentPage={"Promotion Code"}/> 
      </div>
     <div className="pl-[15rem] flex-2 overflow-auto w-full bg-gray-100 h-screen" >

      <nav className="flex justify-between items-center w-full border-b bg-white font-prompt h-[80px] p-10">
      <h2 className="text-xl font-medium text-gray-800">Promotion Code</h2>
      <div className="flex gap-6 leading-none ">
        <div className="relative flex items-center bg-white hover:border-gray-500">
          <Search className="text-gray-300 absolute left-4" />
          <input
            type="text"
            placeholder="ค้นหา Promotion Code..."
            className="flex-grow text-mb bg-transparent text-gray-700 w-full text-[1rem] focus:outline-none border border-gray-400 p-2 pl-16 pr-16 rounded-lg outline-none focus:border-gray-600 focus:bg-gray-100 focus:ring-1"
          />
        </div>
        <button onClick={handleNavigation} className="flex items-center gap-2 px-9 py-2 bg-blue-600 text-white rounded-lg hover:bg-white hover:border-blue-600 border hover:text-blue-600">
          เพิ่ม Promotion Code
          <Plus className="w-5 "/>
        </button>
      </div>
      </nav>

      <section className="font-prompt mt-10 border-gray-300 rounded-lg border w-[1110px] ml-10 bg-white">
        <div className="grid grid-cols-7 bg-gray-100 py-3 px-6 stext-md text-start text-gray-700 border-gray-100 rounded-t-lg border">
          <div>Promotion Code</div>
          <div>ประเภท</div>
          <div>โควต้าการใช้</div>
          <div>ราคาที่ลด</div>
          <div>สร้างเมื่อ</div>
          <div className="ml-8">วันหมดอายุ</div>
          <div className="text-center ml-20">Action</div>
        </div>
        <div className="divide-y divide-gray-200 py-2">
          {codePromo.map((promoCode) => (
            <div key={promoCode.id} className="grid grid-cols-7 text-start items-center py-8 px-8 bg-white hover:bg-gray-50 font-prompt">
              <div>{promoCode.code}</div>
              <div>{promoCode.type}</div>
              <div>{promoCode.usage}</div>
              <div style={{color: 'rgba(200, 36, 56, 1)'}}>{promoCode.discount}</div>
              <div>{new Date(promoCode.startDate).toLocaleDateString()}</div>
              <div className="ml-8 w-full">{new Date(promoCode.endDate).toLocaleDateString()}</div>
              <div className="flex justify-center gap-6 ml-20">
                <button onClick={() => handleDeleteClick(promoCode.id)} aria-label={`Delete ${promoCode.code}`}>
                  <Trash2 className="w-4 h-4 text-gray-500 hover:text-gray-950" />
                </button>
                <Link to={`/admin-promotion-details/${promoCode.id}`} aria-label={`Edit ${promoCode.code}`} >
                  <img src={savefileIcon} alt="Edit" className="w-4 h-4"/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <AlertModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      /> 
    </div>
    </div>
  )
}

export default PromotionCode 