import { useState, useEffect } from "react";
import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/th";
import "antd/lib/locale/th_TH";
import {
  pickerStyle,
  fontStyle,
  divStyle,
  spanStyle,
} from "./EditPromotionStyle";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { convertThaiDateTime } from "../common";

const EditPromotionDetail = (props) => {
  const {
    expirationDate,
    setExpirationDate,
    expirationTime,
    setExpirationTime,
    promotionData,
    setPromotionData,
  } = props;

  const changeDate = (_, dateString) => {
    setExpirationDate(dateString);
    console.log(dateString);
  };

  const changeTime = (_, timeString) => {
    setExpirationTime(timeString);
    console.log(timeString);
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    const inputData = { ...promotionData, [name]: value };
    setPromotionData(inputData);
    console.log(inputData);
  };

  const onChangeType = (event) => {
    const { name, value } = event.target;
    const inputData = { ...promotionData, [name]: value, discount: 0 };
    setPromotionData(inputData);
    console.log(inputData);
  };

  const handlePromotionTypeChange = (e) => {
    const newType = e.target.value;
    setPromotionType(newType);
  };

  const handleDisabledInputChange = (type) => {
    if (type === "fixed") {
      //setPercentDiscount(0);
      setDiscount(0);
    } else if (type === "percent") {
      // setFixedDiscount(0);
      setDiscount(0);
    }
  };

  // const timestamp = dayjs(
  //   `${expirationDate} ${expirationTime}`,
  //   "DD/MM/YYYY HH:mm"
  // ).valueOf();

  // const date = new Date(timestamp);

  // Parse expiration date and time from categoryData
  // const expirationDateTime = dayjs(promotionData.expiration_date);
  const expirationDateTime = dayjs(promotionData.created_at);

  return (
    <div className="w-[1120px]  px-6 py-10 bg-white rounded-lg border border-gray-200 flex-col justify-start items-start gap-10 inline-flex font-['Prompt'] ">
      <div className={divStyle}>
        <p className={fontStyle}>Promotion Code</p>
        <input
          name="code"
          value={promotionData.code}
          onChange={onChangeHandler}
          className=" w-[433px] text-black h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 flex focus:outline-none "
        />
      </div>
      <div className="w-[497px] h-24 justify-start items-start gap-6 inline-flex">
        <p className={fontStyle}>ประเภท</p>
        <div className="flex-col justify-start items-start gap-3 inline-flex ">
          <div className="w-[268px] justify-between items-center inline-flex ">
            <div className="justify-start items-center gap-3 flex  ">
              <input
                type="radio"
                name="type"
                value="fixed"
                checked={promotionData.type === "fixed"}
                onChange={onChangeType}
                className="w-5 h-5 justify-start items-start flex"
              />
              <p className="text-black text-sm font-normal font-['Prompt'] leading-[21px]">
                Fixed
              </p>
            </div>

            <div className="relative">
              <input
                type="number"
                name="discount"
                onChange={onChangeHandler}
                value={
                  promotionData.type === "fixed" ? promotionData.discount : ""
                }
                checked={promotionData.type === "fixed"}
                //onBlur={() => handleDisabledInputChange("fixed")}
                className="w-[140px] h-[42px] px-[13px] py-[9px] bg-white rounded-md border border-gray-300 justify-end items-center flex focus:outline-none"
                disabled={promotionData.type !== "fixed"}
              />
              <span className={spanStyle}>฿</span>
            </div>
          </div>

          <div className="w-[268px] justify-between items-center inline-flex">
            <div className="justify-start items-center gap-3 flex">
              <input
                type="radio"
                name="type"
                value="percent"
                checked={promotionData.type === "percent"}
                onChange={onChangeType}
                className="w-5 h-5 justify-start items-start flex"
              />
              <p className="text-black text-sm font-normal font-['Prompt'] leading-[21px]">
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
                //onBlur={() => handleDisabledInputChange("percent")}
                className="w-[140px] h-[42px] px-[13px] py-[9px] bg-white rounded-md border border-gray-300 justify-end items-center flex focus:outline-none"
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
          <p className="absolute text-black left-4 mt-3">
            {/* {categoryData.usage_fixed} {categoryData.usage_percent} */}
          </p>
          <input
            name="usage_limit"
            type="number"
            onChange={onChangeHandler}
            value={promotionData.usage_limit}
            // onChange={(e) => setUsageLimit(e.target.value)}
            style={{ textAlign: "left" }}
            className="w-[433px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-end items-center gap-2.5 inline-flex focus:outline-none"
          />
          <span className={spanStyle}>ครั้ง</span>
        </div>
      </div>
      <div className={divStyle}>
        <p className={fontStyle}>วันหมดอายุ</p>
        {/* <DatePicker
          format="DD/MM/YYYY"
          locale={{ lang: { locale: "th" } }}
          showDate={{
            defaultValue: dayjs("09/08/2023", "DD/MM/YYYY").format(
              "DD/MM/YYYY"
            ),
          }}
          style={pickerStyle}
        /> */}
        <DatePicker
          format="DD/MM/YYYY"
          locale={{ lang: { locale: "th" } }}
          defaultValue={expirationDateTime}
          showDate
          style={pickerStyle}
          onChange={changeDate}
        />
        <TimePicker
          format="HH:mm"
          showNow={false}
          defaultValue={expirationDateTime}
          showTime
          // showTime={{
          //   defaultValue: dayjs("00:00", "HH:mm"),
          // }}
          placeholder="กรุณาเลือกเวลา"
          style={pickerStyle}
          onChange={changeTime}
        />
      </div>

      <hr className="border-t border-gray-300 w-full mb-2 mt-2" />
      <div className={divStyle}>
        <p className={fontStyle}>สร้างเมื่อ</p>
        <div>
          <p className=" flex w-[433px] h-11 px-4 py-2.5 text-black">
            {convertThaiDateTime(promotionData.created_at)}
          </p>
        </div>
      </div>
      <div className={divStyle}>
        <p className={fontStyle}>แก้ไขล่าสุด</p>
        <div>
          <p className=" flex w-[433px] h-11 px-4 py-2.5 text-black">
            {convertThaiDateTime(promotionData.updated_at)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditPromotionDetail;
