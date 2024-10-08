import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and close icons
import "../style.css";
import Logo from "../../images/PF.png";
import Footer from "../Footer";

const UserNavbar = ({ profile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu
  };

  return (
    <>
      {" "}
      <div className="h-16 w-full flex text-white justify-between items-center bg-green-500 z-10 px-4 md:px-8">
        {/* Logo Section */}
        <Link to="/">
          <div className="logo text-2xl">
            <img src={Logo} alt="" className="navbar-logo " />
          </div>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navbar Links - Shown on larger screens */}
        <div className="navbar-services hidden md:flex space-x-8  ml-4">
          <Link to="#">MY GUIDE</Link>
          <Link to="#">SERVICES</Link>
          <Link to="#">PRODUCTS</Link>
          <Link to="#">EDUCATION</Link>
          <Link to="#">ABOUT</Link>
        </div>

        {/* Modules Section - Shown on larger screens */}
        <div className="hidden md:flex space-x-6 text-lg pr-5">
          <span className="px-7 py-2">
            {profile?.name ? `Hey! ${profile.name}` : "Hey! User"}
          </span>
          <Link to="/admin" className="admin-btn ">
            ADMIN
          </Link>
        </div>


        {isOpen && (
          <div className="navbar-services absolute z-10 top-16 left-0 w-full bg-green-500 text-white flex flex-col items-center space-y-4 py-4 md:hidden">
            <Link to="#" onClick={toggleMenu}>
              My Guide
            </Link>
            <Link to="#" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="#" onClick={toggleMenu}>
              Products
            </Link>
            <Link to="#" onClick={toggleMenu}>
              Education
            </Link>
            <Link to="#" onClick={toggleMenu}>
              About
            </Link>

            {/* Conditional rendering of the user's name */}
            <span className="">
              {profile?.name ? `Hey! ${profile.name}` : "Hey! User"}
            </span>

            <Link to="/admin" className="admin-btn" onClick={toggleMenu}>
              ADMIN
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default UserNavbar;
