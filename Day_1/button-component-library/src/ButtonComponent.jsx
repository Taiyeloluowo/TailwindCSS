import React from 'react'

const ButtonComponent = ({ variant = "primary", size = "md", children }) => {
  let baseClasses =
    "font-semibold rounded-lg focus:outline-none transition duration-200";

  // Size classes
  let sizeClasses = "";
  switch (size) {
    case "sm":
      sizeClasses = "px-4 py-2 text-sm";
      break;
    case "lg":
      sizeClasses = "px-8 py-3 text-lg";
      break;
    default:
      sizeClasses = "px-6 py-2.5 text-md";
  }

  // Variant classes
  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses = "bg-[#283618] text-white hover:bg-teal-700";
      break;
    case "secondary":
      variantClasses =
        "bg-white text-[#283618] border-2 border-[#283618] hover:bg-green-50";
      break;
    case "danger":
      variantClasses = "bg-red-600 text-white hover:bg-red-700";
      break;
    case "success":
      variantClasses = "bg-yellow-500 text-white hover:bg-yellow-600";
      break;
    default:
      variantClasses = "bg-gray-200 text-gray-800";
  }

  return (
    <button className={`${baseClasses} ${sizeClasses} ${variantClasses}`}>
      {children}
    </button>
  );
};
export default ButtonComponent;