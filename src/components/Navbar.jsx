import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and close icons
import "./style.css";
import Logo from "../images/PF.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu
  };

  return (
    <div className="h-16 w-full flex text-white justify-between items-center fixed bg-green-500 z-10 px-4 md:px-8">
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
      <div className="navbar-services hidden md:flex space-x-8 ml-4">
        <Link to="#">MY GUIDE</Link>
        <Link to="#">SERVICES</Link>
        <Link to="#">PRODUCTS</Link>
        <Link to="#">EDUCATION</Link>
        <Link to="#">ABOUT</Link>
      </div>

      {/* Modules Section - Shown on larger screens */}
      <div className="hidden md:flex space-x-6 text-lg pr-5">
        <Link to="/user" className="user-btn  ">
          USER
        </Link>
        <Link to="/admin" className="admin-btn ">
          ADMIN
        </Link>
      </div>

      {/* Mobile Menu - Shown when the hamburger menu is open */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-green-500 text-white flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link to="#" onClick={toggleMenu}>
            MY GUIDE
          </Link>
          <Link to="#" onClick={toggleMenu}>
            SERVICES
          </Link>
          <Link to="#" onClick={toggleMenu}>
            PRODUCTS
          </Link>
          <Link to="#" onClick={toggleMenu}>
            EDUCATION
          </Link>
          <Link to="#" onClick={toggleMenu}>
            ABOUT
          </Link>
          <Link to="/user" className="user-btn " onClick={toggleMenu}>
            USER
          </Link>
          <Link to="/admin" className="admin-btn " onClick={toggleMenu}>
            ADMIN
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
