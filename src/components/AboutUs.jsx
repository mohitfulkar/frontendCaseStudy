import React from "react";
import "./style.css";

const AboutUs = () => {
  return (
    <div className="about-us  bg p-64 pt-16 space-x-12 flex justify-between ">
      <div className="poster hidden md:block lg:block"></div>
      <div className="poster-heading space-y-7 pt-32 text-center text-2xl md:justify-center ">
        <p>Seemlessly go through the Profile</p>
        <p>Best Map services</p>
        <p>Locate it, get it</p>
      </div>
    </div>
  );
};

export default AboutUs;
