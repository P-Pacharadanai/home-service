import React, { useState, useEffect } from 'react';
import { NavUser, Footer, UserAccount } from "../components/common";
import { calenderIcon, frameIcon } from "../assets/icons";
import axios from 'axios';
import { useAuth } from "../contexts/authentication";
//import { useNavigate } from "react-router-dom";

const CustomerServiceHistory = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    const getOrders = async () => {
      try {
        const apiUrl = `http://localhost:4000/order?user_id=${state.user?.user_id}`;
        const result = await axios.get(apiUrl);
        const successOrders = result.data.data.filter(order => order.status === "ดำเนินการสำเร็จ");
        setOrders(successOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
      {/*}
    const getOrders = async () => {
      try {
        const apiUrl = `http://localhost:4000/order?user_id=${state.user?.user_id}`;
        const result = await axios.get(apiUrl);
        setOrders(result.data.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } */}
    };
  
    getOrders(); // เรียกใช้ฟังก์ชันเมื่อ component โหลดครั้งแรก
  }, []); // ใช้งาน useEffect โดยไม่มีการเรียกฟังก์ชันเมื่อ orders เปลี่ยนแปลง

  // ตรวจสอบสถานะการเข้าสู่ระบบและนำผู้ใช้ไปยังหน้ารายละเอียดบริการหรือหน้าเข้าสู่ระบบตามเงื่อนไข
  const { isAuthenticated, state } = useAuth();
  console.log('state:', state);
  const handleChooseService = (service_id) => {
    isAuthenticated.status
      ? navigate(`/service-detail/${service_id}`)
      : navigate("/login");
  };

  return (
    <section className="font-prompt max-container mb-20">
      < NavUser />

      <div className="bg-blue-600 flex py-6 justify-center text-white text-2xl font-medium">ประวัติการซ่อม</div>
      <div className="flex gap-9 justify-center py-8 bg-gray-100 w-full">
        <UserAccount/>

        <div className="flex flex-col gap-4 w-[831px]">
          {orders && orders.map((order, index) => (
            <div key={index} className="pb-8 p-6 rounded-lg border border-gray-300 bg-white">
              <div className="flex justify-between mb-4">
                <h4 className="font-medium">คำสั่งการซ่อมรหัส : {order.service_information_id}</h4>
                <div className="flex gap-2">
                  <p className="text-gray-700">สถานะ:</p>
                  <p className="bg-green-100 rounded-full text-green-900 leading-1 px-2 py-1 text-sm ">
                    {order.status}
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <ul>
                  <li className="flex gap-3 mb-2">
                    <img src={calenderIcon} alt="calender icon"/>
                    <p className="text-gray-700">วันเวลาดำเนินการ: {order.availble_time}</p>
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
              
              </div>
            </div>
          ))}
        </div>
      </div> 
      <Footer />
    </section>   
  ); 
}

export default CustomerServiceHistory
