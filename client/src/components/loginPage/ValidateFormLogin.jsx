export const validateFormLogin = (data) => {
  const errors = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (data.email.trim() === "") {
    errors.email = "กรุณากรอกอีเมล";
  } else if (!email_pattern.test(data.email)) {
    errors.email = "อีเมลไม่ถูกต้อง กรุณาตรวจสอบอีกครั้ง";
  }
  if (data.password.trim() === "") {
    errors.password = "กรุณากรอกรหัสผ่าน";
  }

  return errors;
};

export default validateFormLogin;
