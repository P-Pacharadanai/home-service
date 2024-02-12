import { DatePicker } from "antd";
import { TimePicker } from "antd";
import dayjs from "dayjs";
import InputAddress from "react-thailand-address-autocomplete";
import { useState } from "react";
function ServiceDetailForm() {
  const [address, setAddress] = useState("");
  const [subdistrict, setSubdistrict] = useState("");
  const [district, setDistrictl] = useState("");
  const [province, setProvince] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [note, setNote] = useState("");
  const [bookingDateAndTime, setBookingDateAndTime] = useState("");
  setBookingDateAndTime;
  const changeDateAndTime = (date, dateString) => {
    setBookingDateAndTime(dayjs(dateString, "DD/MM/YYYY HH:mm").toISOString());
  };

  const range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  };

  const disabledDate = (current) => {
    return current && current < dayjs().endOf("day");
  };

  const disabledDateTime = () => ({
    disabledHours: () =>
      range(0, 24).splice(0, 9).concat(range(0, 24).splice(19, 6)),
  });

  /* 
  const handleChangeAddress = (e) => {
    const temp = { ...fullAddress };
    temp.address = e;
    setFullAddress(temp);
  };

  const handleChangeSubDistrict = (e) => {
    const temp = { ...fullAddress };
    temp.subdistrict = e;
    setFullAddress(temp);
  };

  const handleChangeDistrict = (e) => {
    const temp = { ...fullAddress };
    temp.district = e;
    setFullAddress(temp);
  };

  const handleChangeProvince = (e) => {
    const temp = { ...fullAddress };
    temp.province = e;
    setFullAddress(temp);
  };

  const handleChangeZipcode = (e) => {
    const temp = { ...fullAddress };
    temp.zipcode = e;
    setFullAddress(temp);
  };

  const handleSelectAddress = (addresses) => {
    setFullAddress({
      ...fullAddress,
      ...addresses,
    });
  }; */
  const addressStyle = {
    marginTop: "3px",
    width: "331px",
    height: "44px",
    borderRadius: "8px",
    padding: "10px 16px",
    borderWidth: "1px",
    borderColor: "#ccd0d7",
    borderStyle: "solid",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",
    display: "inline-flex",
    outline: "none",
  };

  return (
    <>
      <div className="max-w-[735px] px-6 pt-8 pb-14 bg-white border border-gray-300 rounded-lg">
        <h3 className="text-xl text-gray-700">กรอกข้อมูลบริการ</h3>
        <div className=" mt-8">
          {/* ไม่แน่ใจขนาด mt */}
          {/*  Date */}
          <sectionDateTime className="flex flex-row items-start gap-4">
            <div className="flex flex-col items-start">
              <label className="flex flex-col items-start">
                <h5 className="font-medium text-grey900">
                  วันที่สะดวกใช้บริการ
                  <span className="text-red"> *</span>
                </h5>
                <DatePicker
                  format="DD/MM/YYYY"
                  disabledDate={disabledDate}
                  showToday={false}
                  showDate={{
                    defaultValue: dayjs().format("DD/MM/YYYY"),
                  }}
                  onChange={changeDateAndTime}
                  placeholder="กรุณาเลือกวันที่"
                  className="w-[331px] h-[44px] rounded-8 border border-gray-300 flex justify-between items-center px-4 focus:outline-none "
                />
              </label>
            </div>
            {/*  Date */}
            {/*  Time */}
            <div className="flex flex-col items-start">
              <label className="flex flex-col items-start">
                <h5 className="font-medium text-gray-900">
                  เวลาสะดวกใช้บริการ
                  <span className="text-red"> *</span>
                </h5>
                <TimePicker
                  format="HH:mm"
                  disabledTime={disabledDateTime}
                  showNow={false}
                  showTime={{
                    defaultValue: dayjs("00:00", "HH:mm"),
                  }}
                  onChange={changeDateAndTime}
                  placeholder="กรุณาเลือกเวลา"
                  className="w-[331px] h-[44px] rounded-8 border border-red-500 flex justify-between items-center px-4 focus:outline-none"
                />
              </label>
            </div>
            {/*  Time */}
          </sectionDateTime>
        </div>
        <div className=" mt-7">
          {/* ไม่แน่ใจขนาด mt */}
          {/*  Address */}
          <sectionAddressSubdistrict className="flex flex-row items-start gap-4">
            <div className="flex flex-col items-start">
              <label className="flex flex-col items-start">
                <h5 className="font-medium text-grey900">
                  ที่อยู่
                  <span className="text-red"> *</span>
                </h5>

                <InputAddress
                  id="address"
                  address="address"
                  value={address}
                  type="text"
                  placeholder="กรุณากรอกที่อยู่"
                  style={addressStyle}
                />
              </label>
            </div>
            {/*  Address*/}
            {/*  Subdistrict */}
            <div className="flex flex-col items-start">
              <label className="flex flex-col items-start">
                <h5 className="font-medium text-gray-900">
                  แขวง / ตำบล
                  <span className="text-red"> *</span>
                </h5>
                <InputAddress
                  id="subdistrict"
                  address="subdistrict"
                  value={subdistrict}
                  placeholder="กรุณากรอกแขวง / ตำบล"
                  style={addressStyle}
                />
              </label>
            </div>
            {/*  Subdistrict */}
          </sectionAddressSubdistrict>
        </div>
        <div className=" mt-7">
          {/* ไม่แน่ใจขนาด mt */}
          {/*  District */}
          <sectionDistrictProvince className="flex flex-row items-start gap-4">
            <div className="flex flex-col items-start">
              <label className="flex flex-col items-start">
                <h5 className="font-medium text-grey900">
                  เขต / อำเภอ
                  <span className="text-red"> *</span>
                </h5>
                <InputAddress
                  id="district"
                  address="district"
                  value={district}
                  type="text"
                  placeholder="กรุณากรอกเขต / อำเภอ"
                  style={addressStyle}
                />
              </label>
            </div>
            {/*  District */}
            {/*  Province */}
            <div className="flex flex-col items-start">
              <label className="flex flex-col items-start">
                <h5 className="font-medium text-gray-900">
                  จังหวัด
                  <span className="text-red"> *</span>
                </h5>
                <InputAddress
                  id="province"
                  address="province"
                  value={province}
                  type="text"
                  placeholder="กรุณากรอกจังหวัด"
                  style={addressStyle}
                />
              </label>
            </div>
            {/*  Province */}
          </sectionDistrictProvince>
        </div>
        <div className=" mt-7  border border-red">
          {/* ไม่แน่ใจขนาด mt */}
          {/* District*/}
          <sectionDistrictProvince className="flex flex-row items-start gap-4">
            <div className="flex flex-col items-start">
              <label className="flex flex-col items-start">
                <h5 className="font-medium text-grey900">
                  เขต / อำเภอ
                  <span className="text-red"> *</span>
                </h5>
                <InputAddress
                  id="district"
                  address="district"
                  value={district}
                  type="text"
                  placeholder="กรุณากรอกเขต / อำเภอ"
                  style={addressStyle}
                />
              </label>
            </div>
            {/*  District*/}
            {/*  Province */}
            <div className="flex flex-col items-start">
              <label className="flex flex-col items-start">
                <h5 className="font-medium text-gray-900">
                  จังหวัด
                  <span className="text-red"> *</span>
                </h5>
                <InputAddress
                  id="province"
                  address="province"
                  value={province}
                  type="text"
                  placeholder="กรุณากรอกจังหวัด"
                  style={addressStyle}
                />
              </label>
            </div>
            {/*  Province */}
          </sectionDistrictProvince>
        </div>
        <div className=" mt-7">
          {/* ไม่แน่ใจขนาด mt */}
          {/* Zip Code*/}
          <sectionZipCode>
            <div className="flex flex-col items-start">
              <label className="flex flex-col items-start">
                <h5 className="font-medium text-grey900">
                  รหัสไปรษณีย์
                  <span className="text-red"> *</span>
                </h5>
                <InputAddress
                  id="district"
                  address="district"
                  value={district}
                  type="text"
                  placeholder="กรุณากรอกรหัสไปรษณีย์"
                  style={addressStyle}
                />
              </label>
            </div>
            {/*  Zip Code*/}
          </sectionZipCode>
        </div>
        <div className=" mt-7 border border-red">
          {/* ไม่แน่ใจขนาด mt */}
          {/* Zip Code*/}
          <sectionNode>
            <div className="flex flex-col items-start">
              <label className="flex flex-col items-start">
                <h5 className="font-medium text-grey900">
                  ระบุข้อมูลเพิ่มเติม
                  <span className="text-red"> *</span>
                </h5>
                <textarea
                  id="province"
                  name="province"
                  placeholder="กรุณาระบุข้อมูลเพิ่มเติม"
                  type="text"
                  value={note}
                  className="w-[678px] h-[92px] px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex"
                />{" "}
                {/* ไม่ชัวร์ width */}
              </label>
            </div>
            {/*  Zip Code*/}
          </sectionNode>
        </div>
      </div>
    </>
  );
}

export default ServiceDetailForm;
