import { iconEmail,
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
  vectorhumanBlue
 }
from "../assets/icons/";
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
 { icon: vectorChart, text: "รายการคำสั่งซ่อม" },
 { icon: vectorHistoryGray, text: "ประวัติการซ่อม" },
 { icon: vectorHistoryGray, text: "Admin Dashboard" },
];

//Dropdown User
export const menuItemsUser = [
 { icon: vectorHuman, text: "ข้อมูลผู้ใช้งาน" },
 { icon: vectorChart, text: "รายการคำสั่งซ่อม" },
 { icon: vectorHistoryBlack, text: "ประวัติการซ่อม" },
];

//Footer
export const footerContacts = [
 {
   iconContact: iconPhone,
   link: "080-540-6357" , 
 },
 {
   iconContact: iconEmail,
   link: "contact@homeservices.co" , 
 }
];

//User account 
export const UserAcct = [
 { icon: vectorHumanMd, text: "ข้อมูลผู้ใช้งาน" },
 { icon: vectorChart, text: "รายการคำสั่งซ่อม" },
 { icon: vectorHistoryGray, text: "ประวัติการซ่อม" },
];

//User account onclick active change to blue icon
export const UserInfor = [
  { icon: vectorhumanBlue, text: "ข้อมูลผู้ใช้งาน", path: "/" },
  { icon: vectorListBlue, text: "รายการคำสั่งซ่อม", path: "/customer-service-list" },
  { icon: historyBlue, text: "ประวัติการซ่อม" , path: "/service-history" },
 ];

//Service Lists
export const repairOrders = [
 {
   id: "AD04071205",
   status: "รอดำเนินการ",
   dateTime: "25/04/2563 เวลา 13.00 น.",
   employee: "สมาน เยี่ยมยอด",
   totalPrice: "1,550.00 ฿",
   details: "・ ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง 2 เครื่อง"
 },
 {
   id: "AD04071205",
   status: "รอดำเนินการ",
   dateTime: "25/04/2563 เวลา 13.00 น.",
   employee: "สมาน เยี่ยมยอด",
   totalPrice: "1,550.00 ฿",
   details: "・ ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง 2 เครื่อง"
 },
 {
   id: "AD04071205",
   status: "กำลังดำเนินการ",
   dateTime: "25/04/2563 เวลา 13.00 น.",
   employee: "สมาน เยี่ยมยอด",
   totalPrice: "1,550.00 ฿",
   details: "・ ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง 2 เครื่อง"
 },
 
];

//Service History
export const repairHistory =[
 {
   id: "AD04071205",
   status: "ดำเนินการสำเร็จ",
   dateTime: "25/04/2563 เวลา 16.00 น.",
   employee: "สมาน เยี่ยมยอด",
   totalPrice: "1,550.00 ฿",
   details: "・ ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง 2 เครื่อง"
 },
 {
   id: "AD04071205",
   status: "ดำเนินการสำเร็จ",
   dateTime: "25/04/2563 เวลา 16.00 น.",
   employee: "สมาน เยี่ยมยอด",
   totalPrice: "1,550.00 ฿",
   details: "・ ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง 2 เครื่อง"
 },
 {
   id: "AD04071205",
   status: "ดำเนินการสำเร็จ",
   dateTime: "25/04/2563 เวลา 16.00 น.",
   employee: "สมาน เยี่ยมยอด",
   totalPrice: "1,550.00 ฿",
   details: "・ ล้างแอร์ 9,000 - 18,000 BTU, ติดผนัง 2 เครื่อง"
 },
 
]