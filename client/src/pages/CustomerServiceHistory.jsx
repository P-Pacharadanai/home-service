import React, { useState, useEffect } from "react";
import { NavUser, Footer, UserAccount } from "../components/common";
import { calenderIcon, frameIcon } from "../assets/icons";
import axios from "axios";
import { useAuth } from "../contexts/authentication";
import CustomerServiceListSkeleton from "../components/skeleton/CustomerServiceList";

const CustomerServiceList = () => {
  const { state } = useAuth();

  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getOrders = async () => {
    try {
      const apiUrl = `${
        import.meta.env.VITE_APP_HOME_SERVICE_API
      }/order?user_id=${state.user?.userId}&status=ดำเนินการสำเร็จ`;

      const { data } = await axios.get(apiUrl);

      setOrders(data.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (state.user?.userId) {
      getOrders();
    }
  }, [state]);

  return (
    <section className="min-h-screen flex flex-col font-prompt  mb-20">
      <NavUser />

      <div className="bg-blue-600 flex py-6 justify-center text-white text-2xl font-medium">
        ประวัติการซ่อม
      </div>
      <div className="flex-1  gap-9 py-8 bg-gray-100 w-full">
        <div className="flex justify-between pr-28 pl-40 max-container ">
          <UserAccount currentPage="ประวัติการซ่อม" />
          {isLoading && (
            <div className="flex flex-col gap-4 w-[831px]">
              <CustomerServiceListSkeleton itemCount={5} />
            </div>
          )}
          {!isLoading && (
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
                        <p className="bg-green-100 rounded-full  text-green-900 leading-1 px-4 py-1 text-sm ">
                          {order.status}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <ul>
                        <li className="flex gap-3 mb-2">
                          <img src={calenderIcon} alt="calender icon" />
                          <p className="text-gray-700">
                            วันเวลาดำเนินการ: {order.available_date} น.
                          </p>
                        </li>
                        <li className="flex gap-3 mb-4">
                          <img src={frameIcon} alt="frame icon" />
                          <p className="text-gray-700">
                            พนักงาน: {order.employee}
                          </p>
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
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
};

export default CustomerServiceList;
