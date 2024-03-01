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

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    const inputData = { ...categoryData, [name]: value };
    setPromotionData(inputData);
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

  // Parse expiration date and time from categoryData
  const expirationDateTime = promotionData.expiration_date
    ? dayjs(promotionData.expiration_date)
    : dayjs();

  return (
    <div className="w-[1120px]  px-6 py-10 bg-white rounded-lg border border-gray-200 flex-col justify-start items-start gap-10 inline-flex font-['Prompt'] ">
      <div className={divStyle}>
        <p className={fontStyle}>Promotion Code</p>
        <input
          value={promotionData.code}
          //onChange={handlePromotionTypeChange}
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
                name="promotionType"
                value="fixed"
                checked={promotionData.type === "fixed"}
                //onChange={(e) => setPromotionType(e.target.value)}
                className="w-5 h-5 justify-start items-start flex"
              />
              <p className="text-black text-sm font-normal font-['Prompt'] leading-[21px]">
                Fixed
              </p>
            </div>

            <div className="relative">
              <input
                type="number"
                value={promotionData.discount}
                //checked={promotionData.type === "fixed"}
                // onChange={handlePromotionTypeChange}
                //onBlur={() => handleDisabledInputChange("fixed")}
                className="w-[140px] h-[42px] px-[13px] py-[9px] bg-white rounded-md border border-gray-300 justify-end items-center flex focus:outline-none"
                //disabled={promotionData.type !== "fixed"}
              />
              <span className={spanStyle}>฿</span>
            </div>
          </div>

          <div className="w-[268px] justify-between items-center inline-flex">
            <div className="justify-start items-center gap-3 flex">
              <input
                type="radio"
                name="promotionType"
                value="percent"
                // checked={promotionData.type === "percent"}
                // onChange={(e) => {setPromotionType(e.target.value); if (promotionData.type === "percent") {setDiscount(e.target.value); } }}
                className="w-5 h-5 justify-start items-start flex"
              />
              <p className="text-black text-sm font-normal font-['Prompt'] leading-[21px]">
                Percent
              </p>
            </div>

            <div className="relative">
              <input
                type="number"
                value={promotionData.discount}
                // onChange={handlePromotionTypeChange}
                //onBlur={() => handleDisabledInputChange("percent")}
                className="w-[140px] h-[42px] px-[13px] py-[9px] bg-white rounded-md border border-gray-300 justify-end items-center flex focus:outline-none"
                //disabled={promotionData.type !== "percent"}
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
            type="number"
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
        <DatePicker format="DD/MM/YYYY" style={pickerStyle} />
        <TimePicker format="HH:mm" style={pickerStyle} />
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
