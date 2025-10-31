import React from "react";

function Button({ content, className = "", type = "button", onClick, disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`hidden md:flex items-center gap-2 bg-green-600 text-white px-6 py-2.5 rounded-lg 
        hover:bg-green-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl 
        hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed ${className}`}
    >
      {content}
    </button>
  );
}

export default Button;
