export const validateForm = (data) => {
  const errors = {};

  const phoneNumber_pattern = /^\d+$/;
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern =
    /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*[a-z]).{8,}$/;

  // firstName
  if (data.firstName.trim() === "") {
    errors.firstName = "กรุณากรอกชื่อ";
  }

  if (data.lastName.trim() === "") {
    errors.lastName = "กรุณากรอกนามสกุล";
  }

  if (data.phoneNumber.trim() === "") {
    errors.phoneNumber = "กรุณากรอกเบอร์โทรศัพท์";
  } else if (!phoneNumber_pattern.test(data.phoneNumber)) {
    errors.phoneNumber = "เบอร์โทรศัพท์ไม่ถูกต้องกรุณาตรวจสอบอีกครั้ง";
  }

  //validate real email
  if (data.email.trim() === "") {
    errors.email = "กรุณากรอกอีเมล";
  } else if (!email_pattern.test(data.email)) {
    errors.email = "อีเมลไม่ถูกต้องกรุณาตรวจสอบอีกครั้ง";
  }

  // เงื่อนไข อักขระพิเศษ,UpperCase,Lowercase มีอย่างน้อยอย่างละ 1 ตัว
  if (data.password.trim() === "") {
    errors.password = "กรุณากรอกรหัสผ่าน";
  } else if (!password_pattern.test(data.password)) {
    errors.password =
      "ต้องมี อักขระพิเศษ,ตัวอักษรภาษาอังกฤษพิมพ์ใหญ่และพิมพ์เล็ก อย่างน้อยอย่างละ 1 ตัว และต้องยาวกว่า 8 ตัว";
  }

  return errors;
};
