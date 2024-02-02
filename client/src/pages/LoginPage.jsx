import { useState } from "react";
import { facebookLogo } from "../assets/images";
import { GeneralNav } from "../components/common";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //validate login ตรวจว่า กรอกข้อมูลหรือไม่
  const validateLogin = () => {
    if (!email || !password) {
      alert("กรุณากรอก Email และ Password");
      return false;
    }
    if (!email) {
      alert("ยังไม่ได้กรอก Email");
      return false;
    }

    if (!password) {
      alert("ยังไม่ได้กรอก Password");
      return false;
    }

    const handleSubmit = (event) => {
      event.preventDefault();

      // Validate login
      if (validateLogin()) {
        // เรียกใช้ฟังก์ชันหรือ API ที่เกี่ยวข้องกับการเข้าสู่ระบบ
      }
    };
  };

  return (
    <>
      <GeneralNav />
      <div className=" font-prompt bg-base w-screen min-h-screen flex justify-center items-center">
        <div
          className="flex flex-col w-10/12 lg:w-8/12 bg-white rounded-xl border border-gray-300 mx-auto px-20 max-w-[620px]"
          id="register-form-container"
        >
          <h1 className="text-center text-blue-950 text-[32px] font-medium  leading-[48px] mt-8">
            เข้าสู่ระบบ
          </h1>

          {/* <div className="flex flex-col items-center ">
              
            </div> */}
          <form className="flex flex-col items-start " id="form-container">
            <div className="mt-5 w-full">
              <label className="text-gray-900">
                อีเมล
                <span className="text-red ml-1">*</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="กรุณากรอกอีเมล"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  className="text-gray-700 rounded-md border border-gray-300 bg-white flex p-2 items-center gap-2 self-stretch w-full mt-1"
                />
              </label>
            </div>
            <div className="mt-5 w-full">
              <label className="text-gray-900">
                รหัสผ่าน
                <span className="text-red ml-1">*</span>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="กรุณากรอกรหัสผ่าน"
                  className="text-gray-700 rounded-md border border-gray-300 bg-white flex p-2 items-center gap-2 self-stretch w-full mt-1"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
              </label>
            </div>

            <div className="mt-5 w-full">
              <button className="rounded-lg bg-blue-600 text-white px-8 py-3 w-full">
                เข้าสู่ระบบ
              </button>
            </div>
            <div className="relative w-full h-px bg-gray-300 my-9">
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-gray-500 px-4">
                หรือลงชื่อเข้าใช้ผ่าน
              </span>
            </div>
            <div className="mt-5 w-full">
              <button className="w-full h-11 px-6 py-2.5 rounded-lg border border-blue-600 justify-center items-center gap-2 inline-flex ">
                <img
                  src={facebookLogo}
                  alt="facebook logo"
                  className="w-[23px] h-[23px]"
                />
                &nbsp;&nbsp;
                <p className="text-blue-600  font-medium leading-normal">
                  เข้าสู่ระบบด้วย Facebook
                </p>
              </button>
            </div>
            <div className="mt-5 mb-8 w-full  h-6 justify-center items-center gap-2 inline-flex">
              <p className="text-center text-gray-600  font-normal ">
                ยังไม่มีบัญชีผู้ใช้ HomeService? &nbsp;
                <a
                  href="#"
                  className="text-blue-600 text-lg font-semibold leading-6 underline"
                >
                  ลงทะเบียน
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
