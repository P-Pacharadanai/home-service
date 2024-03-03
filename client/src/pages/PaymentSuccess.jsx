import React, { useEffect, useState } from "react";
import axios from "axios";
import { GeneralBtn, NavUser } from "../components/common";
import { vectorChecked } from "../assets/icons";
import { useNavigate, useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const [orderData, setOrderData] = useState({});

  const navigate = useNavigate();
  const params = useParams();

  const orderId = params.orderId;
  console.log("orderData", orderData);

  const getOrderData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_APP_HOME_SERVICE_API}/order/${orderId}`
    );
    console.log("Data", data);
    setOrderData(data?.data);
  };

  const date = orderData?.available_date;
  const time = orderData?.available_time;
  const information = orderData?.service_infomation;
  const orderLists = orderData?.order_service_list ?? [];
  const promotion = orderData?.promotion;

  const handleButtonClick = () => {
    navigate("/customer-service-list");
  };

  const calculateDiscount = () => {
    const typeDiscount = promotion?.type ?? "";
    let discount = 0;
    if (typeDiscount === "fixed") {
      discount = promotion?.discount;
    } else if (typeDiscount === "percent") {
      discount = (totalOrderPrice * promotion?.discount) / 100;
    }

    return discount;
  };

  const totalOrderPrice = orderLists.reduce(
    (acc, curr) => (acc += curr.service_list.price * curr.quantity),
    0
  );
  const totalOrderPriceStr = totalOrderPrice.toLocaleString("th-TH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const discount = calculateDiscount();
  const discountStr = discount.toLocaleString("th-TH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const amount = (totalOrderPrice - discount).toLocaleString("th-TH", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  useEffect(() => {
    getOrderData();
  }, []);

  console.log(orderData);
  return (
    <section className="font-prompt max-container bg-gray-100 w-svw h-svh">
      <NavUser />

      <div className="w-[500px] mx-auto mt-10 rounded-lg border-gray-300 border">
        <div className="bg-white px-12 py-4 rounded-lg">
          <img
            src={vectorChecked}
            width={50}
            alt="check icon"
            className="m-auto mb-6 mt-4"
          />
          <div className="text-center">
            <h3 className="md:text-2xl text-gray-950 font-medium text-center text-2xl mb-4">
              ชำระเงินเรียบร้อย !
            </h3>
            <div className="text-sm mt-5">
              {orderLists && orderLists.length ? (
                <div className="flex flex-col">
                  {orderLists.map((item) => {
                    const serviceList = item?.service_list;
                    return (
                      <div
                        key={item.service_list_id}
                        className="flex justify-between"
                      >
                        <p className="text-black my-2">{serviceList?.title}</p>
                        <p className="text-black my-2">
                          {item?.quantity} รายการ
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-black my-2">No service order found</p>
              )}
              <hr className="border-gray-300 mt-4" />
              <div className="flex flex-col gap-4 mt-6">
                <div className="flex justify-between">
                  <p>วันที่</p>
                  <p>{date}</p>
                </div>
                <div className="flex justify-between">
                  <p>เวลา</p>
                  <p>{time} น.</p>
                </div>
                <div className="flex justify-between">
                  <p className="basis-1/4 text-left">สถานที่</p>
                  <p className="basis-3/4 text-right">
                    {`${information?.house_number} ${information?.sub_district} ${information?.district}`}
                    <br />
                    {`${information?.provice} ${information?.zipcode}`}
                  </p>
                </div>
              </div>
              <hr className="border-gray-300 mt-4 my-4" />
              <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                  <p>ยอดรวม</p>
                  <p className="font-semibold">{totalOrderPriceStr} ฿</p>
                </div>
                <div className="flex justify-between">
                  <p>คูปองส่วนลด</p>
                  {promotion?.discount ? (
                    <p className="font-semibold text-[#df1b41]">
                      - {discountStr} ฿
                    </p>
                  ) : (
                    <p className="font-semibold text-gray-500">
                      {discountStr} ฿
                    </p>
                  )}
                </div>
                <div className="flex justify-between">
                  <p>รวมทั้งสิ้น</p>
                  <p className="font-semibold">{amount} ฿</p>
                </div>
              </div>
            </div>
            <div className="py-4 mb-6 mt-8 max-sm:justify-center items-center flex">
              <GeneralBtn
                onClick={handleButtonClick}
                label="เช็ครายการซ่อม"
                fullWidth
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSuccess;
