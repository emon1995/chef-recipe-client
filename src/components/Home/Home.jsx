import React from "react";
import Spinner from "../Spinner/Spinner";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import Service from "../Service/Service";
import Testimonial from "../Testimonial/Testimonial";
import Subscribe from "../Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Service></Service>
      <Testimonial></Testimonial>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
