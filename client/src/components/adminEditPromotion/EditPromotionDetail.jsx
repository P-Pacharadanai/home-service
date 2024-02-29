import { useState, useEffect } from "react";
import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/th";
import "antd/lib/locale/th_TH";
import { pickerStyle, fontStyle, divStyle } from "./EditPromotionStyle";

const EditPromotionDetail = (props) => {
  const {
    promotionCode,
    setPromotionCode,
    promotionType,
    setPromotionType,
    fixedDiscount,
    setFixedDiscount,
    percentDiscount,
    setPercentDiscount,
    discount,
    setDiscount,
    usageLimit,
    setUsageLimit,
    expirationDate,
    expirationTime,
    setExpirationDate,
    setExpirationTime,
  } = props;

  const { categoryData, onChangeHandler } = props;

  const changeDate = (_, dateString) => {
    setExpirationDate(dateString);
  };

  const changeTime = (_, timeString) => {
    setExpirationTime(timeString);
  };

  const disabledDate = (current) => {
    return current && current < dayjs().endOf("day");
  };
  console.log(discount);
  return (
    <div className="w-[1120px]  px-6 py-10 bg-white rounded-lg border border-gray-200 flex-col justify-start items-start gap-10 inline-flex font-['Prompt'] ">
      <div className={divStyle}>
        <p className={fontStyle}>Promotion Code</p>
        <input
          value={promotionCode}
          onChange={(e) => setPromotionCode(e.target.value)}
          className="w-[433px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 flex  focus:outline-none "
        />
        {categoryData?.code}
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
                onChange={(e) => setPromotionType(e.target.value)}
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
                type="number"
                value={fixedDiscount}
                placeholder="฿"
                style={{ textAlign: "right" }}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setFixedDiscount(newValue);
                  setDiscount(newValue);
                }}
                className={`w-[140px] h-[42px] px-[13px] py-[9px] bg-white rounded-md border border-gray-300 justify-end items-center flex focus:outline-none disabled-input ${
                  promotionType === "percent" ? "disabled-input" : ""
                }`}
                disabled={promotionType === "percent"}
              />
            </div>
          </div>

          <div className="w-[268px] justify-between items-center inline-flex">
            <div className="justify-start items-center gap-3 flex">
              <input
                type="radio"
                value="percent"
                checked={promotionType === "percent"}
                onChange={(e) => setPromotionType(e.target.value)}
                className="w-5 h-5 justify-start items-start flex "
              />
              <p
                className={`text-black text-sm font-normal font-['Prompt'] leading-[21px] ${
                  promotionType === "fixed" ? "text-gray-400" : ""
                }`}
                disabled={promotionType === "fixed"}
              >
                Percent
              </p>
            </div>
            <div className="relative">
              <input
                type="number"
                value={percentDiscount}
                placeholder="%"
                style={{ textAlign: "right" }}
                onChange={(e) => {
                  setPercentDiscount(e.target.value),
                    setDiscount(e.target.value);
                }}
                className={`w-[140px] h-[42px] px-[13px] py-[9px] bg-white rounded-md border border-gray-300 justify-end items-center flex focus:outline-none disabled-input ${
                  promotionType === "fixed" ? "disabled-input" : ""
                }`}
                disabled={promotionType === "fixed"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={divStyle}>
        <p className={fontStyle}>โควต้าการใช้</p>
        <div>
          <input
            type="number"
            value={usageLimit}
            onChange={(e) => setUsageLimit(e.target.value)}
            placeholder="ครั้ง"
            style={{ textAlign: "right" }}
            className=" flex w-[433px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 gap-2.5 focus:outline-none"
          />
        </div>
      </div>

      <div className={divStyle}>
        <p className={fontStyle}>วันหมดอายุ</p>
        <DatePicker
          format="DD/MM/YYYY"
          locale="th_TH"
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
      <hr className="border-t border-gray-300 w-full mb-2 mt-2" />
      <div className={divStyle}>
        <p className={fontStyle}>สร้างเมื่อ</p>
        <div>
          <p className=" flex w-[433px] h-11 px-4 py-2.5 text-black">1234</p>
        </div>
      </div>
      <div className={divStyle}>
        <p className={fontStyle}>แก้ไขล่าสุด</p>
        <div>
          <p className=" flex w-[433px] h-11 px-4 py-2.5 text-black">1234</p>
        </div>
      </div>
    </div>
  );
};

export default EditPromotionDetail;
