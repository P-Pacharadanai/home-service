//validate credit card number with Luhn Algorithm
function validateCardNumber(cardNumber) {
  // convert the string into an array of digits
  let digits = cardNumber.split(" ").join("").split("").map(Number);

  // start from the second-to-last digit and move backward
  for (let i = digits.length - 2; i >= 0; i -= 2) {
    let doubledDigit = digits[i] * 2;

    if (doubledDigit > 9) {
      doubledDigit -= 9;
    }

    digits[i] = doubledDigit;
  }

  const sum = digits.reduce((acc, curr) => (acc += curr), 0);

  // if true, the credit card number is valid.
  return sum % 10 === 0;
}

function validateCreditCard(data) {
  const { cardNumber, cardName, expiryDate, cvv } = data;
  const errors = {};

  if (cardNumber.length !== 19) {
    errors.cardNumber = "กรุณากรอกหมายเลขบัตรเครดิตให้ถูกต้อง";
  } else if (!validateCardNumber(cardNumber)) {
    errors.cardNumber = "หมายเลขบัตรเครดิตไม่ถูกต้อง";
  }

  if (cardName.trim() === "") {
    errors.cardName = "กรุณากรอกชื่อบนบัตร";
  }
  if (expiryDate.length !== 5) {
    errors.expiryDate = "กรุณากรอกวันหมดอายุให้ถูกต้อง (MM/YY)";
  }

  if (cvv.length < 3) {
    errors.cvv = "กรุณากรอกหมายเลข CVC/CVV ให้ถูกต้อง";
  }

  return errors;
}

const formatCreditCardInput = () => {
  const formatCardNumber = (input) => {
    return input
      .replace(/\D/g, "")
      .slice(0, 16)
      .split("")
      .map((char, index) =>
        index % 4 === 0 && index !== 0 ? " " + char : char
      )
      .join("");
  };

  const formatExpiryDate = (input) => {
    let expiryDate = input.replace(/\D/g, "");
    let month = expiryDate.slice(0, 2);
    month = Number(month) <= 12 ? month : "12";
    if (expiryDate.length > 2) {
      let year = expiryDate.slice(2, 4);
      expiryDate = month + year;
      expiryDate = expiryDate.slice(0, 4);
      expiryDate = expiryDate.replace(/(\d{2})(\d{0,2})/, "$1/$2");
    }

    return expiryDate;
  };

  const formatCVV = (input) => {
    let cvv = input.replace(/\D/g, "");
    cvv = cvv.slice(0, 4);

    return cvv;
  };

  return { formatCardNumber, formatExpiryDate, formatCVV };
};

export { validateCreditCard, formatCreditCardInput };
