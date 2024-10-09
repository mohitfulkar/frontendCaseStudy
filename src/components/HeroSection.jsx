import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { FaArrowRight } from "react-icons/fa";

import "./style.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [text] = useTypewriter({
    words: [
      "Seemlessly go through the Profile",
      "Best Map services",
      "Locate it, get it",
    ],
    loop: {},
    typeSpeed: 30,
    deleteSpeed: 30,
  });
  return (
    <>
      <div className="hero-section h-screen w-full flex flex-col items-center justify-center text-center">
        <div className="mb-16 h-20 flex items-center justify-center">
          <h1 className="animated-text text-5xl">
            <span>{text}</span>
          </h1>
        </div>
        <div className="animate-move-up">
          <button className="go-button h-16 w-32 text-2xl p-10 flex items-center ">
            <Link to="/user">
              <span className="">GO</span>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
