import { iconEmail, iconPhone, iconTag, iconTagCircle } from "../assets/icons/";
import { cleaning, acCleaning, washing } from "../assets/images";


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

export const footerContacts = [
  {
    iconContact: iconEmail,
    link: "contact@homeservices.co" , 
  },
  {
    iconContact: iconPhone,
    link: "080-540-6357" , 
  }
];