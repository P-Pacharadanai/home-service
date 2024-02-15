import dayjs from "dayjs";
import "dayjs/locale/th";
import localizedFormat from "dayjs/plugin/localizedFormat";

function SummaryDetail(props) {
  const { serviceOrder, fullAddress, bookingDate, bookingTime } = props;

  // Set locale to Thai
  dayjs.locale("th");
  dayjs.extend(localizedFormat);

  let formattedBookingDate = bookingDate
    ? dayjs(bookingDate, "DD/MM/YYYY")
        .add(543, "year")
        .locale("th")
        .format("D MMM YYYY")
    : "ยังไม่ได้ระบุวันที่";

  let formattedBookingTime = bookingTime
    ? dayjs(bookingTime, "HH:mm", "").format("LT น.")
    : "ยังไม่ได้ระบุเวลา";

  let formattedAddress =
    (fullAddress
      ? `${fullAddress.address || ""} ${fullAddress.subdistrict || ""} ${
          fullAddress.district || ""
        } ${fullAddress.province || ""} ${fullAddress.zipcode || ""}`
      : ""
    ).trim() || "ยังไม่ได้ระบุสถานที่";

  const totalOrderPrice = serviceOrder
    .reduce((acc, curr) => (acc += curr.price * curr.quantity), 0)
    .toLocaleString("th-TH", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div className="max-w-[350px] px-6 pt-4 pb-9 bg-white border border-gray-300 rounded-lg sticky top-28">
      <h3 className="text-xl text-gray-700">สรุปรายการ</h3>
      <div className="text-sm mt-5">
        <div className="flex flex-col gap-4">
          {serviceOrder.map((item) => {
            return (
              <div key={item.service_list_id} className="flex justify-between">
                <p>{item.title}</p>
                <p>
                  {item.quantity} {item.unit}
                </p>
              </div>
            );
          })}
        </div>

        <hr className="my-6 border-1 border-gray-300" />
        <div className="flex justify-between">
          <p>วันที่</p>
          <p>{formattedBookingDate}</p>
        </div>
        <div className="flex justify-between mt-4">
          <p>เวลา</p>
          <p>{formattedBookingTime}</p>
        </div>
        <div className="flex justify-between mt-4">
          <p className="basis-1/4">สถานที่</p>
          <p className="basis-3/4 text-right">{formattedAddress}</p>
        </div>
        <hr className="my-6 border-1 border-gray-300" />
      </div>
      <div className="flex justify-between">
        <p>รวม</p>
        <p className="font-semibold">{totalOrderPrice} ฿</p>
      </div>
    </div>
  );
}
export default SummaryDetail;
