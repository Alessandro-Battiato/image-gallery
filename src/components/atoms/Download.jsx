import React from "react";

const Download = ({ handler }) => {
  return (
    <button
      onClick={handler}
      className="bg-blue-700 hover:bg-blue-800 text-gray-200 font-semibold p-2 lg:p-3 rounded-lg flex"
    >
      <svg
        className="fill-current h-5 w-5 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"></path>
      </svg>
      Download
    </button>
  );
};

export default Download;
