import { useState } from "react";

function PaymentDetail() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleCardNumber = (event) => {
    let inputCardNumber = event.target.value.replace(/\D/g, "");
    inputCardNumber = inputCardNumber.slice(0, 16).replace(/(.{4})/g, "$1 ");
    if (inputCardNumber.length > 19) {
      inputCardNumber = inputCardNumber.slice(0, -1);
    }

    setCardNumber(inputCardNumber);
  };

  const handleExpiryDate = (event) => {
    let inputExpiryDate = event.target.value.replace(/\D/g, "");
    let month = inputExpiryDate.slice(0, 2);
    month = Number(month) <= 12 ? month : "12";
    if (inputExpiryDate.length > 2) {
      let year = inputExpiryDate.slice(2, 4);
      inputExpiryDate = month + year;
      inputExpiryDate = inputExpiryDate.slice(0, 4);
      setExpiryDate(inputExpiryDate.replace(/(\d{2})(\d{0,2})/, "$1/$2"));
    } else {
      setExpiryDate(inputExpiryDate);
    }
  };

  const handleCVV = (event) => {
    let inputCVV = event.target.value.replace(/\D/g, "");
    inputCVV = inputCVV.slice(0, 4);
    const isValidCVV = /^[0-9]{3,4}$/.test(inputCVV);

    setCVV(inputCVV);
    setIsValid(isValidCVV);
  };

  return (
    <div className="max-w-[735px] px-6 pt-8 pb-14 bg-white border border-gray-300 rounded-lg">
      <h3 className="text-xl text-gray-700">ชำระเงิน</h3>
      <div className="flex h-[5.4rem] gap-6 mt-8">
        <div className="flex-1 flex flex-col gap-2 justify-center items-center h-full border border-gray-300 rounded-md hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-6 fill-gray-400"
          >
            <path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" />
          </svg>
          <p className="text-sm text-gray-800 font-semibold">พร้อมเพ</p>
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-center items-center h-full border border-gray-300 rounded-md hover:cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="w-6 fill-gray-400"
          >
            <path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z" />
          </svg>
          <p className="text-sm text-gray-800 font-semibold">บัตรเครดิต</p>
        </div>
      </div>
      <div className="mt-9 flex flex-col gap-9">
        <div>
          <label
            htmlFor="creditNumber"
            className="block font-medium text-gray-900"
          >
            หมายเลขบัตรเครดิต<span className="text-red">*</span>
          </label>
          <input
            id="creditNumber"
            name="creditNumber"
            type="text"
            className="w-full h-11 px-4 py-2 mt-1 text-gray-700 outline outline-1 outline-gray-300 rounded-lg"
            placeholder="กรุณากรอกหมายเลขบัตรเครดิต"
            value={cardNumber}
            onChange={handleCardNumber}
          />
        </div>
        <div>
          <label htmlFor="name" className="block font-medium text-gray-900">
            ชื่อบนบัตร<span className="text-red">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full h-11 px-4 py-2 mt-1 text-gray-700 outline outline-1 outline-gray-300 rounded-lg"
            placeholder="กรุณากรอกชื่อบนบัตร"
          />
        </div>
        <div className="flex justify-between gap-7">
          <div className="flex-1">
            <label
              htmlFor="expiryDate"
              className="block font-medium text-gray-900"
            >
              วันหมดอายุ<span className="text-red">*</span>
            </label>
            <input
              id="expiryDate"
              name="cexpiryDate"
              type="text"
              className="w-full h-11 px-4 py-2 mt-1 text-gray-700 outline outline-1 outline-gray-300 rounded-lg"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={handleExpiryDate}
            />
          </div>
          <div className="flex-1">
            <label htmlFor="cvv" className="block font-medium text-gray-900">
              รหัส CVC / CVV<span className="text-red">*</span>
            </label>
            <input
              id="cvv"
              name="cvv"
              type="text"
              className="w-full h-11 px-4 py-2 mt-1 text-gray-700 outline outline-1 outline-gray-300 rounded-lg"
              placeholder="xxx"
              value={cvv}
              onChange={handleCVV}
            />
          </div>
        </div>
      </div>
      <div>
        <hr className="mt-11 mb-8 border-1 border-gray-300" />
        <div className="flex items-end gap-7">
          <div className="flex-1">
            <label
              htmlFor="promotion"
              className="block font-medium text-gray-900"
            >
              Promotion Code
            </label>
            <input
              id="promotion"
              name="promotion"
              type="text"
              className="w-full h-11 px-4 py-2 mt-1 text-gray-700 outline outline-1 outline-gray-300 rounded-lg"
              placeholder="กรุณากรอกโค้ดส่วนลด (ถ้ามี)"
            />
          </div>
          <div className="flex-1">
            <button className="px-6 py-2.5 rounded-md font-medium bg-blue-600 text-white ">
              ใช้โค้ด
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDetail;
