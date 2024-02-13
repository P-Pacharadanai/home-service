import React, { useState, useEffect } from 'react';

import { NavUser, Footer, UserAccount } from "../components/common";
import { calenderIcon, frameIcon } from "../assets/icons";

//import {repairHistory } from "../constants";

const CustomerServiceHistory = () => {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://gjmjphpjtksranfvtdqg.supabase.co/rest/v1/orders?select=*', {
          headers: {
            'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqbWpwaHBqdGtzcmFuZnZ0ZHFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3NTMwMjIsImV4cCI6MjAyMjMyOTAyMn0.UoNWiRsbAyyDDEaV5T07t7vYQHaSfzOs5lYFL64KvQM'
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const successfulOrders = data.filter(order => order.status === 'ดำเนินการสำเร็จ');
     
        setOrders(successfulOrders);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <section className="font-prompt max-container mb-20 ">
      < NavUser />

      <div className="bg-blue-600 flex py-6 justify-center text-white text-2xl font-medium">ประวัติการซ่อม</div>
      <div className="flex gap-9 justify-center py-8 bg-gray-100 w-full">
        <UserAccount/>

        <div className="flex flex-col gap-4 w-[831px]">
          {orders.map((order, index) => (
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
  )
}

export default CustomerServiceHistory