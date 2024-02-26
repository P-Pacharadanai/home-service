import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/th";
import "antd/lib/locale/th_TH";

import { useState } from "react";

const AddPromotionSection = () => {
  const [bookingDate, setBookingDate] = useState(null); // State for booking date
  const [bookingTime, setBookingTime] = useState(null); // State for booking time
  const [promotionType, setPromotionType] = useState(""); // State for promotion type

  const changeDate = (_, dateString) => {
    setBookingDate(dateString);
  };

  const changeTime = (_, timeString) => {
    setBookingTime(timeString);
  };

  const disabledDate = (current) => {
    return current && current < dayjs().endOf("day");
  };

  // Function to handle radio button change
  const handlePromotionTypeChange = (e) => {
    const selectedType = e.target.value;
    if (selectedType !== promotionType) {
      setPromotionType(selectedType);
    }
  };

  const pickerStyle = {
    marginTop: "3px",
    width: "205px",
    height: "44px",
    borderRadius: "8px",
    padding: "10px 16px",
    borderWidth: "1px",
    borderColor: "#ccd0d7",
    borderStyle: "solid",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "10px",
    display: "inline-flex",
    outline: "none",
    fontFamily: "prompt",
  };

  const spanStyle =
    "absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 text-base font-normal font-Prompt leading-normal";

  const fontStyle =
    "w-[205px] text-gray-500 text-base font-medium font-['Prompt'] leading-normal";

  const DISABLED_INPUT_STYLES = `
    .disabled-input:disabled {
      background-color: #f2f2f2; 
      color: #ccd0d7; 
    }
  `;

  return (
    <div className="w-[1120px] h-[428px] px-6 py-10 bg-white rounded-lg border border-gray-200 flex-col justify-start items-start gap-10 inline-flex font-['Prompt'] ">
      <style>{DISABLED_INPUT_STYLES}</style>
      <div className="w-[663px] h-11 justify-start items-center gap-6 inline-flex">
        <p className={fontStyle}>Promotion Code</p>
        <input className="w-[433px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 flex  focus:outline-none " />
      </div>
      <div className="w-[497px] h-24 justify-start items-start gap-6 inline-flex">
        <p className={fontStyle}>ประเภท</p>
        <div className="flex-col justify-start items-start gap-3 inline-flex ">
          <div className="w-[268px] justify-between items-center inline-flex ">
            <div className="justify-start items-center gap-3 flex  ">
              <input
                type="radio"
                value="fixed"
                checked={promotionType === "fixed"}
                onChange={handlePromotionTypeChange}
                className="w-5 h-5 justify-start items-start flex focus:outline-none "
              />
              <p
                className={`text-black text-sm font-normal font-['Prompt'] leading-[21px] ${
                  promotionType === "percent" ? "text-gray-400" : ""
                }`}
              >
                Fixed
              </p>
            </div>
            <div className="relative">
              <input
                type="text"
                className={`w-[140px] h-[42px] px-[13px] py-[9px] bg-white rounded-md border border-gray-300 justify-end items-center flex focus:outline-none disabled-input ${
                  promotionType === "percent" ? "disabled-input" : ""
                }`}
                disabled={promotionType === "percent"}
              />
              <span className={spanStyle}>฿</span>
            </div>
          </div>

          <div className="w-[268px] justify-between items-center inline-flex">
            <div className="justify-start items-center gap-3 flex">
              <input
                type="radio"
                value="percent"
                checked={promotionType === "percent"}
                onChange={handlePromotionTypeChange}
                className="w-5 h-5 justify-start items-start flex "
              />
              <p
                className={`text-black text-sm font-normal font-['Prompt'] leading-[21px] ${
                  promotionType === "fixed" ? "text-gray-400" : ""
                }`}
              >
                Percent
              </p>
            </div>
            <div className="relative">
              <input
                type="text"
                className={`w-[140px] h-[42px] px-[13px] py-[9px] bg-white rounded-md border border-gray-300 justify-end items-center flex focus:outline-none disabled-input ${
                  promotionType === "fixed" ? "disabled-input" : ""
                }`}
                disabled={promotionType === "fixed"}
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 text-base font-normal font-['Prompt'] leading-normal">
                %
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[663px] h-11 justify-start items-center gap-6 inline-flex">
        <p className={fontStyle}>โควต้าการใช้</p>
        <div className="relative">
          <input
            type="text"
            className="w-[433px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-end items-center gap-2.5 inline-flex focus:outline-none"
          />
          <span className={spanStyle}>ครั้ง</span>
        </div>
      </div>
      <div className="w-[663px] h-11 justify-start items-center gap-6 inline-flex">
        <p className={fontStyle}>วันหมดอายุ</p>
        <DatePicker
          format="DD/MM/YYYY"
          locale={{ lang: { locale: "th" } }}
          disabledDate={disabledDate}
          showDate={{
            defaultValue: dayjs().format("DD/MM/YYYY"),
          }}
          onChange={changeDate}
          placeholder="กรุณาเลือกวันที่"
          style={pickerStyle}
        />
        <TimePicker
          format="HH:mm"
          showNow={true}
          showTime={{
            defaultValue: dayjs("00:00", "HH:mm"),
          }}
          onChange={changeTime}
          placeholder="กรุณาเลือกเวลา"
          style={pickerStyle}
        />
      </div>
    </div>
  );
};

export default AddPromotionSection;
