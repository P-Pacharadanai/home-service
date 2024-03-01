import { useState, useEffect } from "react";
import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/th";
import "antd/lib/locale/th_TH";
import { pickerStyle, fontStyle, divStyle } from "./EditPromotionStyle";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { convertThaiDateTime } from "../common";

const EditPromotionDetail = (props) => {
  const {
    promotionCode,
    setPromotionCode,
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

  const [promotionType, setPromotionType] = useState("");
  const [categoryData, setCategoryData] = useState({});
  const params = useParams();
  //const navigate = useNavigate();

  const getCategoryData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_APP_HOME_SERVICE_API}/promotion/${
          params.promotionId
        }`
      );
      setCategoryData(data.data);
      //console.log(data.data);
    } catch (error) {
      console.error("Failed to fetch category data:", error);
    }
  };

  useEffect(() => {
    getCategoryData();
  }, [params.promotionId]);

  const changeDate = (_, dateString) => {
    setExpirationDate(dateString);
  };

  const changeTime = (_, timeString) => {
    setExpirationTime(timeString);
  };

  const disabledDate = (current) => {
    return current && current < dayjs().endOf("day");
  };

  const handlePromotionTypeChange = (e) => {
    const newType = e.target.value;
    setPromotionType(newType);

    // Reset discounts when changing promotion type to ensure consistency
    setFixedDiscount("");
    setPercentDiscount("");
    setDiscount("");
  };

  const handleDisabledInputChange = (type) => {
    if (type === "fixed") {
      setPercentDiscount(0);
      setDiscount(0);
    } else if (type === "percent") {
      setFixedDiscount(0);
      setDiscount(0);
    }
  };

  console.log(discount);

  // Parse expiration date and time from categoryData
  const expirationDateTime = categoryData.expiration_date
    ? dayjs(categoryData.expiration_date)
    : dayjs();

  return (
    <div className="w-[1120px]  px-6 py-10 bg-white rounded-lg border border-gray-200 flex-col justify-start items-start gap-10 inline-flex font-['Prompt'] ">
      <div className={divStyle}>
        <p className={fontStyle}>Promotion Code</p>
        <input
          placeholder={categoryData.code}
          value={promotionCode}
          onChange={handlePromotionTypeChange}
          className="w-[433px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 flex  focus:outline-none "
        />
      </div>
      <div className="w-[497px] h-24 justify-start items-start gap-6 inline-flex">
        <p className={fontStyle}>ประเภท</p>
        <div className="justify-start items-center gap-3 flex">
          <input
            type="radio"
            name="promotionType"
            value="fixed"
            checked={promotionType === "fixed"}
            onChange={(e) => setPromotionType(e.target.value)}
            className="w-5 h-5 justify-start items-start flex"
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
            checked={promotionType === "fixed"}
            onChange={handlePromotionTypeChange}
            onBlur={() => handleDisabledInputChange("fixed")}
            className={`w-[140px] h-[42px] px-[13px] py-[9px] bg-white rounded-md border border-gray-300 justify-end items-center flex focus:outline-none ${
              promotionType !== "fixed" ? "disabled-input" : ""
            }`}
            disabled={promotionType !== "fixed"}
            placeholder={categoryData.usage_fixed}
          />
        </div>

        <div className="justify-start items-center gap-3 flex">
          <input
            type="radio"
            name="promotionType"
            value="percent"
            checked={promotionType === "percent"}
            onChange={(e) => {
              setPromotionType(e.target.value);
              if (promotionType === "percent") {
                setDiscount(e.target.value);
              }
            }}
            className="w-5 h-5 justify-start items-start flex"
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
            type="number"
            value={percentDiscount}
            onChange={handlePromotionTypeChange}
            onBlur={() => handleDisabledInputChange("percent")}
            className={`w-[140px] h-[42px] px-[13px] py-[9px] bg-white rounded-md border border-gray-300 justify-end items-center flex focus:outline-none ${
              promotionType !== "percent" ? "disabled-input" : ""
            }`}
            disabled={promotionType !== "percent"}
            placeholder={categoryData.usage_percent}
          />
        </div>
      </div>

      <div className={divStyle}>
        <p className={fontStyle}>วันหมดอายุ</p>
        <DatePicker
          format="DD/MM/YYYY"
          disabledDate={disabledDate}
          defaultValue={expirationDate}
          onChange={changeDate}
          placeholder={categoryData.end_date}
          style={pickerStyle}
        />
        <TimePicker
          format="HH:mm"
          //defaultValue={expirationTime}
          onChange={changeTime}
          placeholder={categoryData.end_time}
          style={pickerStyle}
        />
      </div>
      <hr className="border-t border-gray-300 w-full mb-2 mt-2" />
      <div className={divStyle}>
        <p className={fontStyle}>สร้างเมื่อ</p>
        <div>
          <p className=" flex w-[433px] h-11 px-4 py-2.5 text-black">
            {convertThaiDateTime(categoryData.created_at)}
          </p>
        </div>
      </div>
      <div className={divStyle}>
        <p className={fontStyle}>แก้ไขล่าสุด</p>
        <div>
          <p className=" flex w-[433px] h-11 px-4 py-2.5 text-black">
            {convertThaiDateTime(categoryData.updated_at)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditPromotionDetail;
