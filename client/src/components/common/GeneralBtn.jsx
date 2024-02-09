import React from "react";
import { useNavigate } from "react-router-dom";

const GeneralBtn = ({
  label,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  const navigate = useNavigate();
  return (
    <button
      className={`flex left-0 gap-2 px-7 py-4 border text-lg leading-none font-prompt 
    ${backgroundColor ? `${backgroundColor} ${borderColor}` : "bg-blue-600"}
    ${textColor ? `${textColor}` : `text-white`}
    rounded-xl ${fullWidth ? "w-full" : ""}`}
    >
      {label}
    </button>
  );
};

GeneralBtn.defaultProps = {
  backgroundColor: null,
  textColor: null,
  borderColor: null,
  fullWidth: false,
};

export default GeneralBtn;
