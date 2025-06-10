import React from "react";

function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-sm md:rounded-lg py-1 px-2 md:py-2 md:px-4 bg-[#f97e3e] hover:scale-105 transition-colors ease-in duration-300 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
