import { NavUser, Footer, UserAccount } from "../components/common";
import {repairHistory } from "../constants";
import { calenderIcon, frameIcon } from "../assets/icons";

const CustomerServiceHistory = () => {
  return (
    <section className="font-prompt max-container mb-20 ">
      < NavUser />
      <div className="bg-blue-600 flex w-full py-6 justify-center text-white text-2xl font-prompt font-medium">ประวัติการซ่อม</div>
      <div className="flex gap-10 px-28 py-14 bg-gray-100 w-full">
        <UserAccount/>

        <div className="flex flex-col gap-8 w-[990px]">
          {repairHistory.map((order, index) => (
            <div key={index} className="pb-8 p-6 rounded-lg border border-gray-300 bg-white">
              <div className="flex justify-between mb-4">
                <h4 className="font-medium">คำสั่งการซ่อมรหัส : {order.id}</h4>
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
                    <p className="text-gray-700">วันเวลาดำเนินการ: {order.dateTime}</p>
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
                  <p>{order.details}</p>
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
