import React from "react";
import Spinner from "../Spinner/Spinner";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";
import Service from "../Service/Service";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Service></Service>
      <Spinner></Spinner>
    </div>
  );
};

export default Home;
