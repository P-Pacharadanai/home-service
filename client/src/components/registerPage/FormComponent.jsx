import { facebookLogo } from "../../assets/images/index.js";
import exclamation from "../../assets/icons/exclamation-circle-solid.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authentication"; // รอเขียน auth
import { validateForm } from "./ValidateForm";
import { HidePasswordIcon } from "../../assets/icons";
import { ShowPasswordIcon } from "../../assets/icons";
function FormComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [isPolicyAccepted, setIsPolicyAccepted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const handleCheckboxChange = () => {
    setIsPolicyAccepted(!isPolicyAccepted);
    setShowWarning(false);
  };

  const navigate = useNavigate();

  const { register } = useAuth();
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
      setShowWarning(true);
    }
  };

  return (
    <div className="flex-1 font-prompt bg-base w-screen  flex justify-center items-center">
      <div
        className=" flex flex-col w-10/12 lg:w-8/12 bg-white rounded-xl border border-gray-300 mx-auto px-20 max-w-[620px]"
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
                      errors.firstName
                        ? "border-red focus:outline-none"
                        : "border-gray-300"
                    } bg-white flex p-2 items-center gap-2 self-stretch mt-1 `}
                    onChange={(event) => {
                      setFirstName(event.target.value);
                    }}
                    value={firstName}
                  />
                  {errors.firstName && (
                    <div className="flex items-center relative">
                      <p className="text-red">{errors.firstName}</p>
                      <img
                        src={exclamation}
                        alt="exclamation-circle"
                        className="w-[20px] h-[20px] absolute right-3 top-[-30px] "
                      />
                    </div>
                  )}
                </label>
              </div>
              <div className="flex-1  ">
                <label className="text-gray-900">
                  นามสกุล
                  <span className="text-red ml-1">*</span>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className={`w-full rounded-md border ${
                      errors.lastName
                        ? "border-red focus:outline-none"
                        : "border-gray-300"
                    } bg-white flex p-2 items-center gap-2 self-stretch mt-1 relative`}
                    onChange={(event) => {
                      setLastName(event.target.value);
                    }}
                    value={lastName}
                  />
                  {errors.lastName && (
                    <div className="flex items-center relative">
                      <p className="text-red">{errors.lastName}</p>
                      <img
                        src={exclamation}
                        alt="exclamation-circle"
                        className="w-[20px] h-[20px] absolute right-3 top-[-30px] "
                      />
                    </div>
                  )}
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
                className={`text-gray-700   rounded-md border ${
                  errors.phoneNumber
                    ? "border-red focus:outline-none"
                    : "border-gray-300"
                } bg-white flex p-2 items-center gap-2 self-stretch w-full mt-1`}
                onChange={(event) => {
                  setPhoneNumber(event.target.value);
                }}
                value={phoneNumber}
              />
              {errors.phoneNumber && (
                <div className="flex items-center relative">
                  <p className="text-red">{errors.phoneNumber}</p>
                  <img
                    src={exclamation}
                    alt="exclamation-circle"
                    className="w-[20px] h-[20px] absolute right-3 top-[-30px] "
                  />
                </div>
              )}
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
                className={`text-gray-700 rounded-md border ${
                  errors.email
                    ? "border-red focus:outline-none"
                    : "border-gray-300"
                } bg-white flex p-2 items-center gap-2 self-stretch w-full mt-1`}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                value={email}
              />
              {errors.email && (
                <div className="flex items-center relative">
                  <p className="text-red">{errors.email}</p>
                  <img
                    src={exclamation}
                    alt="exclamation-circle"
                    className="w-[20px] h-[20px] absolute right-3 top-[-30px] "
                  />
                </div>
              )}
            </label>
          </div>
          <div className="mt-5 w-full">
            <label className="text-gray-900 ">
              รหัสผ่าน
              <span className="text-red ml-1">*</span>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="กรุณากรอกรหัสผ่าน"
                  className={`text-gray-700 rounded-md border ${
                    errors.phoneNumber
                      ? "border-red focus:outline-none"
                      : "border-gray-300"
                  } bg-white flex p-2 items-center gap-2 self-stretch w-full mt-1`}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  value={password}
                />
                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute right-3 top-2/4 -translate-y-2/4 transform focus:outline-none"
                >
                  {passwordVisible ? (
                    <img
                      src={ShowPasswordIcon}
                      alt="Show Password"
                      className="w-5 h-5"
                    />
                  ) : (
                    <img
                      src={HidePasswordIcon}
                      alt="Hide Password"
                      className="w-5 h-5"
                    />
                  )}
                </button>
              </div>
              {errors.password && (
                <div className="flex items-center relative">
                  <p className="text-red">{errors.password}</p>
                </div>
              )}
            </label>
          </div>
          <div className="mt-5 w-full flex flex-row items-center">
            <input
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={isPolicyAccepted}
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
              className={`rounded-lg ${
                isPolicyAccepted ? "bg-blue-600" : "bg-gray-400"
              } text-white px-8 py-3 w-full`}
            >
              ลงทะเบียน
            </button>
            {showWarning && (
              <p className="text-red">
                กรุณากดยอมรับข้อตกลงและกรอกข้อมูลให้ครบถ้วน
              </p>
            )}
          </div>
          <div className="relative w-full h-px bg-gray-300 my-9">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-gray-500 px-4">
              หรือลงชื่อเข้าใช้ผ่าน
            </span>
          </div>
          <div className="mt-5 w-full">
            <div
              // onClick={() => navigate("/login")}
              className="flex items-center justify-center  bg-white text-gray-400 rounded-md border border-gray-400 p-2 md:p-4 lg:p-6 font-semibold w-full relative cursor-default"
            >
              <img
                src={facebookLogo}
                alt="facebook logo"
                className="w-[25px] h-[25px] grayscale"
              />
              &nbsp;&nbsp;เข้าสู่ระบบด้วย Facebook
            </div>
          </div>

          <div
            onClick={() => navigate("/login")}
            className="text-blue-600 text-lg font-semibold leading-6 underline block mt-5 text-center w-full mb-11 hover:cursor-pointer"
          >
            กลับไปหน้าเข้าสู่ระบบ
          </div>
        </form>
      </div>
    </div>
  );
}
export default FormComponent;
