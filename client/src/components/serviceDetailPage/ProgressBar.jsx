function ProgressBar(props) {
  const { currentStep } = props;
  return (
    <div className="w-full h-32 bg-white px-48 border border-gray-300 rounded-xl flex items-center">
      <div className="w-full h-16">
        <ol className="flex items-center justify-center ">
          <li className="flex flex-col w-fit relative">
            <span
              className={`flex items-center justify-center w-10 h-10  rounded-full border-2 border-blue-500 duration-500 ${
                currentStep === 1 ? "bg-transparent" : "bg-blue-500"
              } `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                className={`w-4 duration-500 ${
                  currentStep === 1 ? "fill-blue-500" : "fill-white"
                }`}
              >
                <path d="M280 64h40c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128C0 92.7 28.7 64 64 64h40 9.6C121 27.5 153.3 0 192 0s71 27.5 78.4 64H280zM64 112c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16H304v24c0 13.3-10.7 24-24 24H192 104c-13.3 0-24-10.7-24-24V112H64zm128-8a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
              </svg>
            </span>
            <span className="w-32 absolute text-blue-500 -bottom-8 left-2/4 -translate-x-2/4 text-center">
              รายการ
            </span>
          </li>
          <li
            className={`w-full h-1 ${
              currentStep === 1
                ? "bg-gray-300 "
                : "bg-blue-500 transition-all duration-500"
            }`}
          ></li>
          <li className="flex w-fit items-center relative">
            <span
              className={`flex items-center justify-center w-10 h-10  rounded-full border-2 duration-500 ${
                currentStep === 1
                  ? "bg-transparent border-gray-300"
                  : currentStep === 2
                  ? "bg-transparent border-blue-500"
                  : "bg-blue-500 border-blue-500"
              } `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className={`w-4 duration-500 ${
                  currentStep === 1
                    ? "fill-gray-300"
                    : currentStep === 2
                    ? "fill-blue-500"
                    : "fill-white"
                }`}
              >
                <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
              </svg>
              <span
                className={`w-32 absolute -bottom-8 left-2/4 -translate-x-2/4 text-center duration-500 ${
                  currentStep !== 1 ? "text-blue-500" : "text-gray-700"
                }`}
              >
                กรอกข้อมูลบริการ
              </span>
            </span>
          </li>
          <li
            className={`w-full h-1 ${
              currentStep === 3
                ? "bg-blue-500 transition-all duration-500"
                : "bg-gray-300"
            }`}
          ></li>
          <li className="flex items-center w-fit relative">
            <span
              className={`flex items-center justify-center w-10 h-10 bg-transparent rounded-full border-2 duration-500 ${
                currentStep === 3 ? "border-blue-500" : "border-gray-300"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className={`w-[1.3rem] duration-500 ${
                  currentStep === 3 ? "fill-blue-500" : "fill-gray-300"
                }`}
              >
                <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z" />
              </svg>
            </span>
            <span
              className={`w-32 absolute -bottom-8 left-2/4 -translate-x-2/4 text-center duration-500 ${
                currentStep === 3 ? "text-blue-500" : "text-gray-700"
              }`}
            >
              ชำระเงิน
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default ProgressBar;
