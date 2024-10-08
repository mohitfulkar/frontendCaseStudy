import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const LowerUserNavbar = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setSearchTerm(value); 
  };

  return (
    <div className="h-12 bg-green-300">
      <div className="flex justify-center pt-2">
        <input
          className="w-96 h-7 rounded-md p-2 text-sm"
          type="text"
          placeholder="Search"
          value={inputValue}
          onChange={handleSearchChange}
        />
        <button>
          <CiSearch className="h-7 w-8 pl-1 rounded-lg bg-green-300" />
        </button>
      </div>
    </div>
  );
};

export default LowerUserNavbar;
