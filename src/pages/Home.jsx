import React from "react";
import Banner from "../components/Banner";
import BannerService from "../components/BannerService";
import Advertisment from "../components/Advertisment";
import NewArrivals from "../components/NewArrivals";
import Bestseller from "../components/BestSeller";
import Middeladd from "../components/Middeladd";
import SpacialOffer from "../components/SpacialOffer";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <BannerService />
      <Advertisment />
      <NewArrivals />
      <Bestseller />
      <Middeladd />
      <SpacialOffer />
      <Footer />
    </>
  );
};

export default Home;
