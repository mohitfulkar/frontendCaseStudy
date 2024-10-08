import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const PicCard = ({ profile }) => {
  return (
    <div className="pic-card h-screen p-4 text-center bg-green-600 rounded-lg">
      <img src={profile.photo} alt="" className="ml-12 h-48 w-48 mb-8" />
      <div className="pic-name mt-12 ">
        <span className="text-3xl">Hello! I am {profile.name}</span>
        <p className="mt-4 text-md">{profile.description}</p>
      </div>
      <div className="social-media-links flex justify-center items-center space-x-8 mt-12">
        <span className="github-icons">
          <a href={profile.socialMedia.github} target="_blank">
            <FaGithub className="h-6 w-6" />
          </a>
        </span>
        <span className="twitter-icons">
          <a href={profile.socialMedia.twitter} target="_blank">
            <FaXTwitter className="h-6 w-6" />
          </a>
        </span>
        <span className="linkedin-icons">
          <a href={profile.socialMedia.linkedin} target="_blank">
            <FaLinkedin className="h-6 w-6" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default PicCard;
