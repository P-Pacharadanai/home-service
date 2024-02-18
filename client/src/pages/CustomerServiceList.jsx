import React, { useState, useEffect  } from 'react';
import { NavUser, Footer, UserAccount , GeneralBtn ,Modal} from "../components/common";
import { calenderIcon, frameIcon } from "../assets/icons";
import axios from 'axios';
import { useAuth } from "../contexts/authentication";

const CustomerServiceList = () => {
  const { isAuthenticated, state } = useAuth(); 
  console.log('state:', state);

  const [processItem] = useState("กำลังดำเนินการ");
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const getOrders = async () => {
      try {
        const apiUrl = `http://localhost:4000/order?user_id=${state.user?.user_id}`;
        const result = await axios.get(apiUrl);
        const filteredOrders = result.data.data.filter(order => order.status === "รอดำเนินการ" || order.status === "กำลังดำเนินการ");
        setOrders(filteredOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
  
    getOrders();
  }, [state]);

  const handleChooseService = (service_id) => {
    isAuthenticated.status
      ? navigate(`/service-detail/${service_id}`)
      : navigate("/login");
  };
    
  return (
    <section className="font-prompt max-container mb-20">
      < NavUser />

      <div className="bg-blue-600 flex py-6 justify-center text-white text-2xl font-medium">รายการคำสั่งซ่อม</div>
      <div className="flex gap-9 justify-center py-8 bg-gray-100 w-full">
        <UserAccount/>

        <div className="flex flex-col gap-4 w-[831px]">
          {orders.map((order, index) => (
            <div key={index} className="pb-8 p-6 rounded-lg border border-gray-300 bg-white">
              <div className="flex justify-between mb-4">
                <h4 className="font-medium">คำสั่งการซ่อมรหัส : {order.service_information_id}</h4>
                <div className="flex gap-2">
                  <p className="text-gray-700">สถานะ:</p>
                  <p className={`bg-gray-200 rounded-full text-gray-950 leading-1 px-2 py-1 text-sm ${order.status === processItem ? 'bg-yellow-100 text-yellow-900' : ""}`}>
                    {order.status}</p>
                </div>
              </div>

              <div className="flex justify-between">
                <ul>
                  <li className="flex gap-3 mb-2">
                    <img src={calenderIcon} alt="calender icon"/>
                    <p className="text-gray-700">วันเวลาดำเนินการ: {order.available_time}</p>
                  </li>
                  <li className="flex gap-3 mb-4">
                    <img src={frameIcon} alt="frame icon" />
                    <p className="text-gray-700">พนักงาน: {order.employee}</p>
                  </li>
                </ul>
                <div className="flex gap-2">
                  <p className="text-gray-700">ราคารวม: </p>
                  <p className="text-gray-950 font-medium">{order.totalPrice}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-700">รายการ:</p>
                  <p>{order.detail}</p>
                </div>
                <GeneralBtn onClick={() => setShowModal(true)} label="ดูรายละเอียด" />
                {showModal && <Modal onClose={() => setShowModal(false)} />}
              </div>
            </div>
          ))}
        </div>
      </div> 
      <Footer />
    </section>   
  )
}

export default CustomerServiceList


