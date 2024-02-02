import { facebookLogo } from "../../assets/images/index.js";
import exclamation from "../../assets/icons/exclamation-circle-solid.svg";
import { useState } from "react";
import { useAuth } from "../../contexts/authentication"; // รอเขียน auth
import { validateForm } from "./ValidateForm";

function FormComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const { register } = useAuth(); // รอเขียน auth
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
    };
    const formErrors = validateForm(data);
    if (Object.keys(formErrors).length === 0) {
      register(data);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="font-prompt bg-base w-screen min-h-screen flex justify-center items-center">
      <div
        className="flex flex-col w-10/12 lg:w-8/12 bg-white rounded-xl border border-gray-300 mx-auto px-20 max-w-[620px]"
        id="register-form-container"
      >
        <h1 className="text-blue-950 text-center font-medium text-2xl leading-8 mt-8">
          ลงทะเบียน
        </h1>
        <form
          className="flex flex-col items-start "
          id="form-container"
          onSubmit={handleSubmit}
        >
          <div className="mt-5 w-full">
            <div className="flex gap-5 w-full ">
              <div className="flex-1  ">
                <label className="text-gray-900 ">
                  ชื่อ
                  <span className="text-red ml-1">*</span>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className={`w-full rounded-md border ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    } bg-white flex p-2 items-center gap-2 self-stretch mt-1`}
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                    value={firstName}
                  />
                  {errors.firstName && (
                    <div className="flex items-center">
                      <p className="text-red">{errors.firstName}</p>
                      <img src={exclamation} alt="exclamation-circle" />
                    </div>
                  )}
                </label>
              </div>
              <div className="flex-1  ">
                {/* <div className="text-red mt-2">{errors.firstName}</div> */}
                <label className="text-gray-900">
                  นามสกุล
                  <span className="text-red ml-1">*</span>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className={`w-full rounded-md border ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    } bg-white flex p-2 items-center gap-2 self-stretch mt-1`}
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                    value={lastName}
                  />
                  {errors.firstName && (
                    <p className="text-red">{errors.firstName}</p>
                  )}
                  {/* <div className="text-red mt-2">{errors.firstName}</div> */}
                </label>
              </div>
            </div>
          </div>
          <div className="mt-5 w-full">
            <label className="text-gray-900">
              เบอร์โทรศัพท์
              <span className="text-red ml-1">*</span>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="กรุณากรอกเบอร์โทรศัพท์"
                className="text-gray-700 border-gray rounded-md border border-gray-300 bg-white flex p-2 items-center gap-2 self-stretch w-full mt-1"
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
                }}
                value={phoneNumber}
              />
            </label>
          </div>
          <div className="mt-5 w-full">
            <label className="text-gray-900">
              อีเมล
              <span className="text-red ml-1">*</span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="กรุณากรอกอีเมล"
                className="text-gray-700 rounded-md border border-gray-300 bg-white flex p-2 items-center gap-2 self-stretch w-full mt-1"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                value={email}
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
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                value={password}
              />
            </label>
          </div>
          <div className="mt-5 w-full flex flex-row items-center">
            <input
              type="checkbox"
              className="w-4 h-4 cursor-pointer   border- border-gray-300  transition-colors duration-300 hover:border-blue-600"
            />
            <label className="cursor-pointer hover:text-blue-600  flex flex-row justify-center items-center">
              &nbsp;ยอมรับ&nbsp;
              <a href="#" className="text-blue-600 font-semibold underline">
                &nbsp;ข้อตกลงและเงื่อนไข
              </a>
              &nbsp;และ &nbsp;
              <a href="#" className="text-blue-600 font-semibold underline">
                นโยบายความเป็นส่วนตัว
              </a>
            </label>
          </div>
          <div className="mt-5 w-full">
            <button
              type="submit"
              className="rounded-lg bg-blue-600 text-white px-8 py-3 w-full"
            >
              ลงทะเบียน
            </button>
          </div>
          <div className="relative w-full h-px bg-gray-300 my-9">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-gray-500 px-4">
              หรือลงชื่อเข้าใช้ผ่าน
            </span>
          </div>
          <div className="mt-5 w-full">
            <button className="flex items-center justify-center  bg-white text-blue-600 rounded-md border border-blue-600 p-2 md:p-4 lg:p-6 font-semibold w-full relative">
              <img
                src={facebookLogo}
                alt="facebook logo"
                className="w-[25px] h-[25px]"
              />
              &nbsp;&nbsp;เข้าสู่ระบบด้วย Facebook
            </button>
          </div>

          <a
            href="#"
            className="text-blue-600 text-lg font-semibold leading-6 underline block mt-5 text-center w-full mb-11"
          >
            กลับไปหน้าเข้าสู่ระบบ
          </a>
        </form>
      </div>
    </div>
  );
}
export default FormComponent;
