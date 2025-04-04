import React, { use, useEffect } from "react";
import Hero from "../Component/Hero";
import Services from "../Component/Services";
import BestSelling from "../Component/BestSelling";
import NewItems from "../Component/NewItems";
import { message } from "antd";
import HeroSlider from "../Component/HeroSlider";

const Home = () => {
  useEffect(() => {
    message.success("Test Message - If this shows, Ant Design message works.");
  }, []);
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
