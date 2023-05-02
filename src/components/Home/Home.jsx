import React from "react";
import Spinner from "../Spinner/Spinner";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import Service from "../Service/Service";
import Testimonial from "../Testimonial/Testimonial";
import Subscribe from "../Subscribe/Subscribe";
import ChefCard from "../ChefCard/ChefCard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ChefCard></ChefCard>
      <Info></Info>
      <Service></Service>
      <Testimonial></Testimonial>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
