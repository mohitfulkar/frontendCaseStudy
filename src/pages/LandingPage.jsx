import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SwiperComponent from "../components/SwiperComponent";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";


const LandingPage = () => {
  return (
    <>
      <Navbar />
      <hr/>
      <HeroSection />
      <hr/>
      <SwiperComponent />
      <hr/>
      <AboutUs/>
      <hr/>
      <Footer/>
    </>
  );
};

export default LandingPage;
