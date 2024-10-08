import React from "react";
import Image from "../images/profilenotFound.png";
import "../components/style.css";

const NoProfileFound = () => {
  return (
   
      <img src={Image} alt="" className="oops-img h-64 w-64 " />
    
  );
};

export default NoProfileFound;
