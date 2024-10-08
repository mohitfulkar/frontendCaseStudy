import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Logo from "../images/PF.png";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer h-auto flex flex-col md:flex-row justify-between items-center p-8 bg-gray-100">
      {/* Services Section */}
      <div className="services-section flex flex-col justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Services Links */}
        <div className="services-links flex flex-wrap justify-center items-center space-x-4 md:space-x-12 text-sm">
          <Link to="#">Blog</Link>
          <Link to="#">About Us</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">FAQ</Link>
          <Link to="#">Terms of Services</Link>
          <Link to="#">Careers</Link>
          <Link to="#">Contact</Link>
        </div>

        {/* Logo Section */}
        <div className="footer-logo flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <img
            src={Logo}
            alt="Logo"
            className=" h-12 w-12 md:h-24 md:w-24 rounded-full"
          />
          <p className="text-xs md:text-sm text-center md:text-left">
            &copy;2024 Profile Explorer. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Social Media & Play Store Links */}
      <div className="socialmedia-links mt-8 md:mt-0 flex flex-col items-center space-y-4">
        {/* Play Store Button */}
        <button className="h-16 w-full md:w-48 flex items-center justify-center border border-gray-300 rounded-md bg-gray-200 p-2">
          <IoLogoGooglePlaystore className="h-8 w-8 md:h-12 md:w-12 mr-2" />
          <span className="text-xs md:text-sm">Download from Play Store</span>
        </button>

        {/* Social Media Links */}
        <div className="social-icons flex space-x-4 text-gray-600">
          <GrInstagram className="h-6 w-6 md:h-8 md:w-8" />
          <FaFacebook className="h-6 w-6 md:h-8 md:w-8" />
          <FaXTwitter className="h-6 w-6 md:h-8 md:w-8" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
