import React, { use, useEffect } from "react";
import Hero from "../Component/Hero";
import Services from "../Component/Services";
import BestSelling from "../Component/BestSelling";
import NewItems from "../Component/NewItems";
import { message } from "antd";
import HeroSlider from "../Component/HeroSlider";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <HeroSlider />
      <NewItems />
      <BestSelling />
      {/* <Services /> */}
      {/* <Hero /> */}
      {/* <Services /> */}
      {/* <Gallery /> */}
    </>
  );
};

export default Home;
