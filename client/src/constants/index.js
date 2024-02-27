import {
  iconEmail,
  iconPhone,
  iconTag,
  iconTagCircle,
  vectorChart,
  vectorHistoryBlack,
  vectorHistoryGray,
  vectorLogout,
  vectorHuman,
  vectorHumanMd,
  vectorListBlue,
  historyBlue,
  vectorhumanBlue,
} from "../assets/icons/";
import { cleaning, acCleaning, washing } from "../assets/images";

// Our service is landing page
export const ourServices = [
  {
    photo: cleaning,
    tag: "บริการทั่วไป",
    title: "ทำความสะอาดทั่วไป",
    iconTag: iconTag,
    circle: iconTagCircle,
    price: "ค่าบริการประมาณ 500.00 ฿",
    btnGhost: "เลือกบริการ",
    path: "/service-detail/:serviceId",
  },
  {
    photo: acCleaning,
    tag: "บริการทั่วไป",
    title: "ล้างแอร์",
    iconTag: iconTag,
    circle: iconTagCircle,
    price: "ค่าบริการประมาณ 500.00 - 1,000.00 ฿",
    btnGhost: "เลือกบริการ",
  },
  {
    photo: washing,
    tag: "บริการทั่วไป",
    title: "ซ่อมเครื่องซักผ้า",
    iconTag: iconTag,
    circle: iconTagCircle,
    price: "ค่าบริการประมาณ 500.00 ฿",
    btnGhost: "เลือกบริการ",
  },
];

//Dropdown Admin
export const menuItemsAdmin = [
  { icon: vectorHuman, text: "ข้อมูลผู้ใช้งาน" },
  {
    icon: vectorChart,
    text: "รายการคำสั่งซ่อม",
    path: "/customer-service-list",
  },
  { icon: vectorHistoryGray, text: "ประวัติการซ่อม", path: "/service-history" },
  { icon: vectorHistoryGray, text: "Admin Dashboard", path: "/admin-category" },
];

//Dropdown User
export const menuItemsUser = [
  { icon: vectorHuman, text: "ข้อมูลผู้ใช้งาน" },
  {
    icon: vectorChart,
    text: "รายการคำสั่งซ่อม",
    path: "/customer-service-list",
  },
  {
    icon: vectorHistoryBlack,
    text: "ประวัติการซ่อม",
    path: "/service-history",
  },
];

//Footer
export const footerContacts = [
  {
    iconContact: iconPhone,
    link: "080-540-6357",
  },
  {
    iconContact: iconEmail,
    link: "contact@homeservices.co",
  },
];

//User account
export const UserAcct = [
  { icon: vectorHumanMd, text: "ข้อมูลผู้ใช้งาน" },
  {
    icon: vectorChart,
    text: "รายการคำสั่งซ่อม",
    path: "/customer-service-list",
  },
  { icon: vectorHistoryGray, text: "ประวัติการซ่อม", path: "/service-history" },
];

//Service Lists
export const repairOrders = [
  {
    id: "AD04071205",
    status: "รอดำเนินการ",
    dateTime: "25/04/2563 เวลา 13.00 น.",
    employee: "สมาน เยี่ยมยอด",
    totalPrice: "1,550.00 ฿",
    details: "・ ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง 2 เครื่อง",
  },
  {
    id: "AD04071205",
    status: "รอดำเนินการ",
    dateTime: "25/04/2563 เวลา 13.00 น.",
    employee: "สมาน เยี่ยมยอด",
    totalPrice: "1,550.00 ฿",
    details: "・ ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง 2 เครื่อง",
  },
  {
    id: "AD04071205",
    status: "กำลังดำเนินการ",
    dateTime: "25/04/2563 เวลา 13.00 น.",
    employee: "สมาน เยี่ยมยอด",
    totalPrice: "1,550.00 ฿",
    details: "・ ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง 2 เครื่อง",
  },
];

//Service History
export const repairHistory = [
  {
    id: "AD04071205",
    status: "ดำเนินการสำเร็จ",
    dateTime: "25/04/2563 เวลา 16.00 น.",
    employee: "สมาน เยี่ยมยอด",
    totalPrice: "1,550.00 ฿",
    details: "・ ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง 2 เครื่อง",
  },
  {
    id: "AD04071205",
    status: "ดำเนินการสำเร็จ",
    dateTime: "25/04/2563 เวลา 16.00 น.",
    employee: "สมาน เยี่ยมยอด",
    totalPrice: "1,550.00 ฿",
    details: "・ ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง 2 เครื่อง",
  },
  {
    id: "AD04071205",
    status: "ดำเนินการสำเร็จ",
    dateTime: "25/04/2563 เวลา 16.00 น.",
    employee: "สมาน เยี่ยมยอด",
    totalPrice: "1,550.00 ฿",
    details: "・ ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง 2 เครื่อง",
  },
];

//Pop up ดูรายละเอียด
export const popupdetails = [
  {
    title: "🐶 บริการเลี้ยงสุนัข",
    price: "2500 THB",
    description: "น้องหมา น้ำหนัก2-4 กิโลกรัม, ฝากเลี้ยงรายวัน",
    quantity: "2 ตัว",
    totalPrice: "5000 THB",
  },
  {
    title: "👨🏻‍🔧 ติดตั้งเครื่องดูดควัน",
    price: "1200 THB",
    description: "รุ่น AB-CDEFGH-90, สำหรับครัวไทย",
    quantity: "1 เครื่อง",
    totalPrice: "1200 THB",
  },
  {
    title: "🧼 บริการล้างแอร์",
    price: "900 THB",
    description: "ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง",
    quantity: "2 เครื่อง",
    totalPrice: "1800 THB",
  },
];

const initialPromotionCodes = [
  { id: 1, code: 'HOME202', type: 'Fixed', usage: '10/100', discount: '-50.00฿', startDate: '12/02/2024 10:30 PM', endDate: '12/06/2024 10:30 PM' },
  { id: 2, code: 'HOME10',  type: 'Percent', usage: '5/100', discount: '10.00%', startDate: '12/02/2024 10:30 PM', endDate: '12/06/2024 10:30 PM' },
  { id: 3, code: 'HOME203', type: 'Fixed', usage: '10/100', discount: '-50.00฿', startDate: '12/02/2024 10:30 PM', endDate: '12/06/2024 10:30 PM' },
  { id: 4, code: 'HOME204', type: 'Fixed', usage: '10/100', discount: '-50.00฿', startDate: '12/02/2024 10:30 PM', endDate: '12/06/2024 10:30 PM' },
  { id: 5, code: 'HOME205', type: 'Fixed', usage: '10/100', discount: '-50.00฿', startDate: '12/02/2024 10:30 PM', endDate: '12/06/2024 10:30 PM' },
];