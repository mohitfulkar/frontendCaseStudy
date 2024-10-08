import React from "react";
import "../../style.css";

const AboutMe = ({ profile, onSummaryClick }) => {
  return (
    <div className="about-me h-screen p-6 pt-24 bg-gradient-to-r from-green-400 to-green-600 shadow-lg rounded-lg">
      <h1 className="text-4xl text-white text-center font-bold mb-8 text-shadow-lg">
        About Me
      </h1>
      <div className="about-me-details space-y-6 text-xl">
        <p className="text-white">
          <span className="font-semibold">
            Contact:
            <br />
          </span>{" "}
          {profile.contact}
        </p>
        <p className="text-white">
          <span className="font-semibold">Hobbies:</span> <br />
          {profile.interests}
        </p>
        <p className="text-white">
          <span className="font-semibold">Address:</span> <br />
          {profile.location}
        </p>

        <button className="sum-btn text-center ml-24" onClick={onSummaryClick}>
          Summary
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
