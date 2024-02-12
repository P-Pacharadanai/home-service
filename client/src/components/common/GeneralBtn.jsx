import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const GeneralBtn = forwardRef(({ onClick , className, label, backgroundColor, textColor, borderColor, fullWidth = false }, ref) => {
 

  return (
    <button
      className={twMerge(
        `flex justify-center gap-2 px-7 py-4 border text-lg leading-none font-prompt rounded-xl`,
        backgroundColor ? `${backgroundColor} ${borderColor}` : "bg-blue-600",
        textColor ? `${textColor}` : `text-white`,
        fullWidth ? "w-full" : "", className
      )}
      ref={ref}
      onClick={onClick} 
    >
      {label}
    </button>
  );
});

GeneralBtn.defaultProps = {
  backgroundColor: null,
  textColor: null,
  borderColor: null,
  fullWidth: false,
  onClick: () => {} 
};

export default GeneralBtn;
