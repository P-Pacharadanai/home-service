import React from "react";

const Button = ({ label, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button className={`flex left-0 gap-2 px-7 py-4 border text-lg leading-none text-white font-prompt
      ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-blue-600"}
      rounded-xl ${fullWidth ? 'w-full' : ''}`} >
      {label}
    </button>
  );
};

Button.defaultProps = {
  backgroundColor: null,
  textColor: null,
  borderColor: null,
  fullWidth: false
};

export default Button;

