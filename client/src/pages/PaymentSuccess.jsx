import { GeneralBtn, NavUser } from "../components/common";
import { vectorChecked } from "../assets/icons";

const PaymentSuccess = () => {
  return (
    <section className="font-prompt max-container bg-gray-100 w-screen-full h-screen">
      <NavUser />
      
      <div className="w-[500px]  mx-auto mt-14 mb-20 rounded-lg border-gray-300 border " >
      <div className="bg-white w-full px-12 ">
        <img src={vectorChecked} width={50} alt="check icon" className="m-auto mb-6 mt-4"/>
        <div className="text-center">
            <h3 className="md:text-2xl text-gray-950 font-medium text-center text-2xl mb-4">ชำระเงินเรียบร้อย !</h3>
            <div className="flex justify-between mb-2">
              <p className="text-black my-2">9,000 - 18,000 BTU, แบบติดผนัง</p>
              <p className="text-black my-2">2 รายการ</p>
            </div>
            <hr className="border-gray-300 my-4" />
            <div className="flex justify-between mb-2">
              <p className="text-gray-700 my-2">วันที่</p>
              <p className="my-2">23 เม.ย. 2021</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-gray-700 my-2">เวลา</p>
              <p className="my-2">11.00 น.</p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-gray-700  mb-2">สถานที่</p>
              <p>444/4 คอนโดสุภาลัย เสนานิคม <br/> 
                <span className=" flex items-end justify-end">จตุจักร กรุงเทพ</span>
              </p>
            </div>
            <hr className="border-gray-300 my-4" />
            <div className="flex justify-between">
              <p className="text-gray-600 my-2">รวม</p>
              <p className="font-semibold">1550.00 ฿</p>
            </div>
            
            <div className="py-4 mb-6 -mt-1max-sm:justify-center items-center flex">
              < GeneralBtn  onClick={console.log('Button clicked!')} label="เช็ครายการซ่อม" fullWidth />
            </div>
        </div>
    </div>
      </div>

    </section>
  )
}

export default PaymentSuccess
