import React from "react";
import bannerImg from "../../assets/img/chef.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="md:max-w-sm rounded-lg shadow-2xl object-cover"
        />
        <div>
          <h1 className="text-3xl lg:text-6xl font-bold">
            The Famous <br /> Italian Chef In <br />{" "}
            <span className="text-primary">Your City</span>{" "}
          </h1>
          <p className="py-6">
            Discover and cook authentic dishes from the whole of italy.Inspiring
            food lovers everywhere.
          </p>
          <button className="btn btn-primary text-white">Booking Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
