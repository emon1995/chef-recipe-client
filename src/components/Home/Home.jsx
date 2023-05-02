import React from "react";
import Spinner from "../Spinner/Spinner";
import Banner from "../Banner/Banner";
import Info from "../Info/Info";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Spinner></Spinner>
    </div>
  );
};

export default Home;
