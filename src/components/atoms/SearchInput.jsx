import React from "react";

const SearchInput = ({ value, onChange, onClick }) => {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={onChange}
        className="rounded-lg border-solid border-2 border-slate-400 p-2 pl-8 pr-8 outline-none"
        type="text"
        placeholder="Search for an image..."
        required
      />
      <svg
        className="absolute w-5 h-5 transform -translate-y-8 left-2 text-gray-500"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          clipRule="evenodd"
        ></path>
      </svg>
      {value && (
        <button
          type="button"
          onClick={onClick}
          className="absolute top-3 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 3.293a1 1 0 00-1.414 0L10 8.586 5.707 4.293a1 1 0 00-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 001.414 1.414L10 11.414l4.293 4.293a1 1 0 001.414-1.414L11.414 10l4.293-4.293a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchInput;
