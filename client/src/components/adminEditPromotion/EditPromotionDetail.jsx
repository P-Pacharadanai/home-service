import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import "antd/lib/locale/th_TH";
import {
  pickerStyle,
  fontStyle,
  divStyle,
  spanStyle,
} from "./EditPromotionStyle";
import { convertThaiDateTime } from "../common";
import { TrashIcon } from "../../assets/icons";

const EditPromotionDetail = (props) => {
  const {
    setExpirationDate,
    setExpirationTime,
    promotionData,
    setPromotionData,
    setDeletePromotionId,
  } = props;

  const changeDate = (_, dateString) => {
    setExpirationDate(dateString);
  };

  const changeTime = (_, timeString) => {
    setExpirationTime(timeString);
  };

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

  const convertShowDateTime = (isoString) => {
    const dateObject = new Date(isoString);

    dateObject.setHours(dateObject.getHours() + 7);

    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };

    const formattedDateTime = dateObject
      .toLocaleDateString("en-EN", options)
      .split(",")
      .join("");

    const date = formattedDateTime.slice(0, 10);
    const time = formattedDateTime.slice(-5);

    return { date, time };
  };

  const expirationDateTimeStr = convertShowDateTime(
    promotionData.expiration_date
  );

  const handleConfirmDelete = () => {
    setDeletePromotionId({
      id: promotionData.promotion_id,
      name: promotionData.code,
    });
  };

  return (
    <div className="w-fit">
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
                <p
                  className={`${
                    promotionData.type !== "fixed" && "text-gray-500"
                  } text-sm font-normal font-['Prompt'] leading-[21px]`}
                >
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
                <p
                  className={`${
                    promotionData.type !== "percent" && "text-gray-500"
                  } text-sm font-normal font-['Prompt'] leading-[21px]`}
                >
                  Percent
                </p>
              </div>

              <div className="relative">
                <input
                  type="number"
                  name="discount"
                  value={
                    promotionData.type === "percent"
                      ? promotionData.discount
                      : ""
                  }
                  onChange={onChangeHandler}
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
            <input
              name="usage_limit"
              type="number"
              onChange={onChangeHandler}
              value={promotionData.usage_limit}
              style={{ textAlign: "left" }}
              className="w-[433px] h-11 px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-end items-center gap-2.5 inline-flex focus:outline-none"
            />
            <span className={spanStyle}>ครั้ง</span>
          </div>
        </div>
        <div className={divStyle}>
          <p className={fontStyle}>วันหมดอายุ</p>
          {promotionData.expiration_date && (
            <DatePicker
              format="DD/MM/YYYY"
              defaultValue={dayjs(expirationDateTimeStr.date, "MM/DD/YYYY")}
              showDate
              placeholder="กรุณาเลือกวันที่"
              style={pickerStyle}
              onChange={changeDate}
            />
          )}

          {promotionData.expiration_date && (
            <TimePicker
              format="HH:mm"
              showNow={false}
              defaultValue={dayjs(expirationDateTimeStr.time, "HH:mm")}
              showTime
              placeholder="กรุณาเลือกเวลา"
              style={pickerStyle}
              onChange={changeTime}
            />
          )}
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
      <div className="w-full flex justify-end">
        <div
          onClick={handleConfirmDelete}
          className="group flex items-center justify-end gap-3 mt-6 cursor-pointer"
        >
          <img
            src={TrashIcon}
            alt="Trash Icon"
            className="w-4 h-auto group-hover:opacity-80 duration-200"
          />
          <p className="text-[1rem] text-gray-600 group-hover:text-gray-500 duration-200 font-semibold underline ">
            ลบ Promotion Code
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditPromotionDetail;
