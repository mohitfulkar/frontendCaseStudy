import React from "react";
import UserNavbar from "../../components/user/UserNavbar";
import LowerUserNavbar from "../../components/user/LowerUserNavbar";
import ProfileCards from "../ProfileCards";
import Footer from "../../components/Footer";

const UserPage = () => {
  return (
    <div>
      <UserNavbar />
      <ProfileCards />
      <Footer />
    </div>
  );
};

export default UserPage;
