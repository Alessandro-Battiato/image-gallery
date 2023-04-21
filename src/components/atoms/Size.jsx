import React from "react";

const Size = ({ size, handler }) => {
  const handleCurrentSize = () => {
    handler(size);
  };

  return (
    <button
      onClick={handleCurrentSize}
      className="p-3 text-base font-bold text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:bg-gray-900 focus:text-gray-100 dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
    >
      {size}
    </button>
  );
};

export default Size;
