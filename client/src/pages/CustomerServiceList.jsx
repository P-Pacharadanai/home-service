import React, { useState, useEffect } from "react";
import {
  NavUser,
  Footer,
  UserAccount,
  GeneralBtn,
  Modal,
} from "../components/common";
import { calenderIcon, frameIcon } from "../assets/icons";
import axios from "axios";
import { useAuth } from "../contexts/authentication";

const CustomerServiceList = () => {
  const { state } = useAuth();

  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState({
    orderId: null,
  });

  const getOrders = async () => {
    try {
      const apiUrl = `${
        import.meta.env.VITE_APP_HOME_SERVICE_API
      }/order?user_id=${state.user?.userId}&status=รอดำเนินการ,กำลังดำเนินการ`;

      const { data } = await axios.get(apiUrl);

      setOrders(data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    if (state.user?.userId) {
      getOrders();
    }
  }, [state]);

  return (
    <section className="min-h-screen flex flex-col font-prompt max-container mb-20">
      <div className="relative z-20">
        <NavUser />
      </div>

      <div className="bg-blue-600 flex py-6 justify-center text-white text-2xl font-medium relative z-10">
        รายการคำสั่งซ่อม
      </div>
      <div className="flex-1 flex gap-9 justify-center py-8 bg-gray-100 w-full">
        <UserAccount currentPage="รายการคำสั่งซ่อม" />

        <div className="flex flex-col gap-4 w-[831px]">
          {orders.map((order) => {
            const totalPriceStr = (order?.total_price ?? 0).toLocaleString(
              "th-TH",
              {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }
            );
            return (
              <div
                key={order.order_id}
                className="p-6 rounded-lg border border-gray-300 bg-white"
              >
                <div className="flex justify-between mb-4">
                  <h4 className="text-xl font-medium">
                    คำสั่งการซ่อมรหัส : {order.order_id}
                  </h4>
                  <div className="flex gap-2">
                    <p className="text-gray-700">สถานะ:</p>
                    <p
                      className={`bg-gray-200 rounded-full text-gray-950 leading-1 px-4 py-1 text-sm ${
                        order.status === "กำลังดำเนินการ"
                          ? "bg-yellow-100 text-yellow-900"
                          : ""
                      }`}
                    >
                      {order.status}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <ul>
                    <li className="flex gap-3 mb-2">
                      <img src={calenderIcon} alt="calender icon" />
                      <p className="text-gray-700">
                        วันเวลาดำเนินการ: {order.available_date}{" "}
                        {order.available_time} น.
                      </p>
                    </li>
                    <li className="flex gap-3 mb-4">
                      <img src={frameIcon} alt="frame icon" />
                      <p className="text-gray-700">พนักงาน: {order.employee}</p>
                    </li>
                  </ul>
                  <div>
                    <div className="flex items-center gap-4">
                      <p className="text-gray-700">ราคารวม: </p>
                      <p className="text-gray-950 text-lg font-medium">
                        {totalPriceStr} ฿
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex flex-col gap-2 text-gray-700">
                    <p className="text-[1rem]">ที่อยู่:</p>
                    <p className="text-gray-950">
                      {" "}
                      {`${order.service_infomation?.house_number} ${order.service_infomation?.sub_district} ${order.service_infomation?.district} ${order.service_infomation?.provice} ${order.service_infomation?.zipcode}`}
                    </p>
                  </div>
                  <div className="">
                    <GeneralBtn
                      onClick={() => setShowModal({ orderId: order.order_id })}
                      label="ดูรายละเอียด"
                    />
                  </div>
                  {showModal.orderId === order.order_id && (
                    <Modal
                      onClose={() => setShowModal({ orderId: null })}
                      orderId={order.order_id}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default CustomerServiceList;
