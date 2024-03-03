import { useState } from "react";
import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/th";
import "antd/lib/locale/th_TH";
import {
  pickerStyle,
  fontStyle,
  spanStyle,
  divStyle,
} from "./AddPromotionStyle";
const AddPromotionDetail = (props) => {
  const {
    promotionData,
    setPromotionData,
    setExpirationDate,
    setExpirationTime,
  } = props;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    const inputData = { ...promotionData, [name]: value };
    setPromotionData(inputData);
  };

  const onChangeType = (event) => {
    const { name, value } = event.target;
    const inputData = { ...promotionData, [name]: value, discount: 0 };
    setPromotionData(inputData);
  };

  const changeDate = (_, dateString) => {
    setExpirationDate(dateString);
  };

  const changeTime = (_, timeString) => {
    setExpirationTime(timeString);
  };

  return (
    <div className="w-full px-6 py-10 bg-white rounded-lg border border-gray-200 flex-col justify-start items-start gap-10 inline-flex font-['Prompt'] ">
      <div className={divStyle}>
        <p className={fontStyle}>Promotion Code</p>
        <input
          type="text"
          name="code"
          value={promotionData.code}
          onChange={onChangeHandler}
          className="w-[433px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 flex  focus:outline-none "
        />
      </div>

      <div className="w-[497px] h-24 justify-start items-start gap-6 inline-flex">
        <p className={fontStyle}>ประเภท</p>
        <div className="flex-col justify-start items-start gap-3 inline-flex ">
          <div className="w-[268px] justify-between items-center inline-flex ">
            <div className="justify-start items-center gap-3 flex  ">
              <input
                type="radio"
                value="fixed"
                name="type"
                checked={promotionData.type === "fixed"}
                onChange={onChangeType}
                className="w-5 h-5 justify-start items-start flex focus:outline-none "
              />
              <p
                className={`text-black text-sm font-normal font-['Prompt'] leading-[21px] ${
                  promotionData.type !== "fixed" ? "text-gray-400" : ""
                }`}
              >
                Fixed
              </p>
            </div>
            <div className="relative">
              <input
                type="number"
                name="discount"
                value={
                  promotionData.type === "fixed" ? promotionData.discount : ""
                }
                onChange={onChangeHandler}
                className={`w-[140px] h-[42px] px-[13px] py-[9px] bg-white rounded-md border border-gray-300 justify-end items-center flex focus:outline-none disabled-input ${
                  promotionData.type !== "fixed" ? "disabled-input" : ""
                }`}
                disabled={promotionData.type !== "fixed"}
              />
              <span className={spanStyle}>฿</span>
            </div>
          </div>

          <div className="w-[268px] justify-between items-center inline-flex">
            <div className="justify-start items-center gap-3 flex">
              <input
                type="radio"
                value="percent"
                name="type"
                checked={promotionData.type === "percent"}
                onChange={onChangeType}
                className="w-5 h-5 justify-start items-start flex "
              />
              <p
                className={`text-black text-sm font-normal font-['Prompt'] leading-[21px] ${
                  promotionData.type !== "percent" ? "text-gray-400" : ""
                }`}
                disabled={promotionData.type !== "percent"}
              >
                Percent
              </p>
            </div>
            <div className="relative">
              <input
                type="number"
                name="discount"
                value={
                  promotionData.type === "percent" ? promotionData.discount : ""
                }
                onChange={onChangeHandler}
                className={`w-[140px] h-[42px] px-[13px] py-[9px] bg-white rounded-md border border-gray-300 justify-end items-center flex focus:outline-none disabled-input ${
                  promotionData.type !== "percent" ? "disabled-input" : ""
                }`}
                disabled={promotionData.type !== "percent"}
              />
              <span className={spanStyle}>%</span>
            </div>
          </div>
        </div>
      </div>
      <div className={divStyle}>
        <p className={fontStyle}>โควต้าการใช้</p>
        <div className="relative">
          <input
            type="number"
            name="usage_limit"
            value={promotionData.usage_limit}
            onChange={onChangeHandler}
            className="w-[433px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-end items-center gap-2.5 inline-flex focus:outline-none"
          />
          <span className={spanStyle}>ครั้ง</span>
        </div>
      </div>
      <div className={divStyle}>
        <p className={fontStyle}>วันหมดอายุ</p>
        <DatePicker
          format="DD/MM/YYYY"
          showDate
          placeholder="กรุณาเลือกวันที่"
          style={pickerStyle}
          onChange={changeDate}
        />
        <TimePicker
          format="HH:mm"
          showNow={false}
          showTime
          placeholder="กรุณาเลือกเวลา"
          style={pickerStyle}
          onChange={changeTime}
        />
      </div>
    </div>
  );
};

export default AddPromotionDetail;
