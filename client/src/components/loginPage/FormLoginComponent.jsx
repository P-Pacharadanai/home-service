import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/authentication";
import { facebookLogo } from "../../assets/images";
import { useState } from "react";
import validateFormLogin from "./ValidateFormLogin";
import exclamation from "../../assets/icons/exclamation-circle-solid.svg";
import { HidePasswordIcon } from "../../assets/icons";
import { ShowPasswordIcon } from "../../assets/icons";

const FormLoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateFormLogin({ email, password });
    if (Object.keys(formErrors).length === 0) {
      login({ email, password });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="flex-1 font-prompt bg-base w-screen flex justify-center items-center">
      <div className="flex flex-col w-10/12 lg:w-8/12 bg-white rounded-xl border border-gray-300 mx-auto px-20 max-w-[620px]">
        <h1 className="text-center text-blue-950 text-[32px] font-medium  leading-[48px] mt-8">
          เข้าสู่ระบบ
        </h1>

        <form
          className="flex flex-col items-start "
          id="form-container"
          onSubmit={handleSubmit}
        >
          <div className="mt-5 w-full">
            <label className="text-gray-900">
              อีเมล
              <span className="text-red ml-1">*</span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="กรุณากรอกอีเมล"
                value={email}
                onChange={handleEmailChange}
                className={`text-gray-700 rounded-md border focus:outline-none ${
                  errors.email ? "border-red" : "border-gray-300"
                } bg-white flex p-2 items-center gap-2 self-stretch w-full mt-1`}
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
            <label className="text-gray-900">
              รหัสผ่าน
              <span className="text-red ml-1">*</span>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={passwordVisible ? "text" : "password"}
                  placeholder="กรุณากรอกรหัสผ่าน"
                  className={`text-gray-700 rounded-md border focus:outline-none ${
                    errors.password ? "border-red" : "border-gray-300"
                  } bg-white flex p-2 items-center gap-2 self-stretch w-full mt-1`}
                  value={password}
                  onChange={handlePasswordChange}
                />

                <button
                  type="button"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  className="absolute right-3 top-2/4 -translate-y-2/4 transform "
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

          <div className="mt-5 w-full">
            <button
              type="submit"
              className="rounded-lg bg-blue-600 text-white px-8 py-3 w-full"
            >
              เข้าสู่ระบบ
            </button>
          </div>

          <div className="relative w-full h-px bg-gray-300 my-9">
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-gray-500 px-4">
              หรือลงชื่อเข้าใช้ผ่าน
            </span>
          </div>

          <div className="mt-5 w-full">
            <div className="w-full h-11 px-6 py-2.5 rounded-lg border border-gray-400 justify-center items-center gap-2 inline-flex ">
              <img
                src={facebookLogo}
                alt="facebook logo"
                className="w-[23px] h-[23px] grayscale"
              />
              &nbsp;&nbsp;
              <p className="text-gray-400  font-medium leading-normal ">
                เข้าสู่ระบบด้วย Facebook
              </p>
            </div>
          </div>
          <div className="mt-5 mb-8 w-full  h-6 justify-center items-center gap-2 inline-flex">
            <p className="text-center text-gray-600  font-normal ">
              ยังไม่มีบัญชีผู้ใช้ HomeService? &nbsp;
              <span
                onClick={() => navigate("/register")}
                className="text-blue-600 text-lg font-semibold leading-6 underline hover:cursor-pointer"
              >
                ลงทะเบียน
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormLoginComponent;
