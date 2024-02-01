import facebooklogo from "../assets/images/facebook-logo.png";

function RegisterPage() {
  return (
    <>
      {/* common NAVBAR here flex-col rounded-md border border-gray-300 bg-white p-4  */}
      <div className="bg-base w-screen min-h-screen flex justify-center items-center">
        <div
          className="flex flex-col w-10/12 lg:w-8/12 bg-white rounded-xl border border-gray-300 mx-auto px-20 max-w-[620px]"
          id="register-form-container"
        >
          <h1 className="text-blue-950 text-center font-medium text-2xl leading-8 mt-8">
            ลงทะเบียน
          </h1>

          {/* <div className="flex flex-col items-center ">
              
            </div> */}
          <div className="flex flex-col items-start " id="form-container">
            <div className="mt-5 w-full">
              <div class="flex gap-5 w-full ">
                <div className="flex-1  ">
                  <label className="text-gray-900 ">
                    ชื่อ
                    <span className="text-red ml-1">*</span>
                    <input
                      id="firstName"
                      name="username"
                      type="text"
                      className="w-full rounded-md border border-gray-300 bg-white flex p-2 items-center gap-2 self-stretch mt-1"
                      required
                    />
                  </label>
                </div>
                <div className="flex-1  ">
                  <label className="text-gray-900">
                    นามสกุล
                    <span className="text-red ml-1">*</span>
                    <input
                      id="lastName"
                      name="username"
                      type="text"
                      className=" w-full rounded-md border border-gray-300 bg-white flex p-2 items-center gap-2 self-stretch mt-1"
                      required
                    />
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
                  required
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
                  required
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
                <a href="#" class="text-blue-600 font-semibold underline">
                  &nbsp;ข้อตกลงและเงื่อนไข
                </a>
                &nbsp;และ &nbsp;
                <a href="#" class="text-blue-600 font-semibold underline">
                  นโยบายความเป็นส่วนตัว
                </a>
              </label>
            </div>
            <div className="mt-5 w-full">
              <button className="rounded-lg bg-blue-600 text-white px-8 py-3 w-full">
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
          </div>
        </div>
      </div>

      {/* common Footer here */}
    </>
  );
}
export default RegisterPage;
