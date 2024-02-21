import { DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import "dayjs/locale/th";
import "antd/lib/locale/th_TH";
import AddressAutocomplete from "react-thailand-address-autocomplete";
import { useState } from "react";
import "./ServiceDetailForm.css";

function ServiceDetailForm(props) {
  const {
    fullAddress,
    setFullAddress,
    note,
    setNote,
    setBookingDate,
    setBookingTime,
  } = props;

  const changeDate = (_, dateString) => {
    setBookingDate(dateString);
  };

  const changeTime = (_, timeString) => {
    setBookingTime(timeString);
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

  const handleChangeAddress = (e) => {
    if (fullAddress) {
      const temp = { ...fullAddress };
      temp.address = e;
      setFullAddress(temp);
    }
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
  };

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
    fontFamily: "prompt",
  };

  return (
    <>
      <div className="max-w-[735px] px-6 pt-8 pb-14 bg-white border border-gray-300 rounded-lg">
        <h3 className="text-xl text-gray-700">กรอกข้อมูลบริการ</h3>
        <div className=" mt-8">
          <section className="flex flex-row items-start gap-4">
            <div className="flex flex-col items-start">
              <label className="flex flex-col items-start">
                <h5 className="font-medium text-grey900">
                  วันที่สะดวกใช้บริการ
                  <span className="text-red"> *</span>
                </h5>
                <DatePicker
                  format="DD/MM/YYYY"
                  locale={{ lang: { locale: "th" } }}
                  disabledDate={disabledDate}
                  showToday={false}
                  showDate={{
                    defaultValue: dayjs().format("DD/MM/YYYY"),
                  }}
                  onChange={changeDate}
                  placeholder="กรุณาเลือกวันที่"
                  style={addressStyle}
                />
              </label>
            </div>
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
                  onChange={changeTime}
                  placeholder="กรุณาเลือกเวลา"
                  style={addressStyle}
                />
              </label>
            </div>
          </section>
        </div>

        <div className=" mt-7">
          <section className="flex flex-row items-start gap-4">
            <div className="flex flex-col items-start">
              <label className="flex flex-col items-start">
                <h5 className="font-medium text-grey900">
                  ที่อยู่
                  <span className="text-red"> *</span>
                </h5>
                <AddressAutocomplete
                  id="address"
                  value={fullAddress.address}
                  placeholder="กรุณากรอกที่อยู่"
                  onChange={(e) => {
                    handleChangeAddress(e.target.value);
                  }}
                  onSelect={(e) => {
                    handleSelectAddress(e);
                  }}
                  style={addressStyle}
                />
              </label>
            </div>
            <div className="flex flex-col items-start">
              <label className="flex flex-col items-start">
                <h5 className="font-medium text-gray-900">
                  แขวง / ตำบล
                  <span className="text-red"> *</span>
                </h5>
                <AddressAutocomplete
                  id="subdistrict"
                  value={fullAddress.subdistrict}
                  placeholder="กรุณากรอกแขวง / ตำบล"
                  onChange={(e) => {
                    handleChangeSubDistrict(e.target.value);
                  }}
                  onSelect={(e) => {
                    handleSelectAddress(e);
                  }}
                  style={addressStyle}
                />
              </label>
            </div>
          </section>
        </div>
        <div className=" mt-7">
          <section className="flex flex-row items-start gap-4">
            <div className="flex flex-col items-start">
              <label className="flex flex-col items-start">
                <h5 className="font-medium text-grey900">
                  เขต / อำเภอ
                  <span className="text-red"> *</span>
                </h5>
                <AddressAutocomplete
                  id="district"
                  value={fullAddress.district}
                  placeholder="กรุณากรอกเขต / อำเภอ"
                  onChange={(e) => {
                    handleChangeDistrict(e.target.value);
                  }}
                  onSelect={(e) => {
                    handleSelectAddress(e);
                  }}
                  style={addressStyle}
                />
              </label>
            </div>
            <div className="flex flex-col items-start">
              <label className="flex flex-col items-start">
                <h5 className="font-medium text-gray-900">
                  จังหวัด
                  <span className="text-red"> *</span>
                </h5>
                <AddressAutocomplete
                  id="province"
                  value={fullAddress.province}
                  placeholder="กรุณากรอกจังหวัด"
                  onChange={(e) => {
                    handleChangeProvince(e.target.value);
                  }}
                  onSelect={(e) => {
                    handleSelectAddress(e);
                  }}
                  style={addressStyle}
                />
              </label>
            </div>
          </section>
        </div>

        <div className=" mt-7">
          <section>
            <div className="flex flex-col items-start">
              <label className="flex flex-col items-start">
                <h5 className="font-medium text-grey900">
                  รหัสไปรษณีย์
                  <span className="text-red"> *</span>
                </h5>
                <AddressAutocomplete
                  id="zipcode"
                  value={fullAddress.zipcode}
                  placeholder="กรุณากรอกรหัสไปรษณีย์"
                  onChange={(e) => {
                    handleChangeZipcode(e.target.value);
                  }}
                  onSelect={(e) => {
                    handleSelectAddress(e);
                  }}
                  style={addressStyle}
                />
              </label>
            </div>
          </section>
        </div>
        <div className=" mt-7 ">
          <section>
            <div className="flex flex-col items-start">
              <label className="flex flex-col items-start">
                <h5 className="font-medium text-grey900">
                  ระบุข้อมูลเพิ่มเติม
                  <span className="text-red"> *</span>
                </h5>
                <textarea
                  id="detail"
                  name="detail"
                  placeholder="กรุณาระบุข้อมูลเพิ่มเติม"
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-[678px] h-[92px] px-4 py-2.5 bg-white rounded-lg border border-gray-300 justify-start items-center gap-2.5 inline-flex focus:outline-none"
                />
              </label>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ServiceDetailForm;
