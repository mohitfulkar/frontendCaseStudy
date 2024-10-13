import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";
import "../../components/style.css";

const AdminLowerUserNavbar = ({ setSearchTerm }) => {
  const { id } = useParams();
  const [inputValue, setInputValue] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setSearchTerm(value);
  };

  return (
    <div className=" h-16 flex items-center justify-center bg-green-300">
      <div className="flex justify-center items-center px-4 space-x-8">
        <div className="flex">
          {id ? (
            " "
          ) : (
            <>
              <input
                className="w-full sm:w-72 md:w-96 h-7 rounded-md p-2 text-sm"
                type="text"
                placeholder="Search"
                value={inputValue}
                onChange={handleSearchChange}
              />
              <button>
                <CiSearch className="h-7 w-8 pl-1 rounded-lg bg-green-300" />
              </button>
            </>
          )}
        </div>

        <div className="">
          <Link to="/admin/add-profile">
            <span className="add-btn">Add profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLowerUserNavbar;
