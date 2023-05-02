import React from "react";

const Subscribe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly gap-40 mb-20 bg-base-200 py-10 rounded-3xl">
      <div className="lg:w-32 w-full">
        <img
          className="object-cover"
          src="https://italianchef.com/wp-content/uploads/2017/06/Swordfishsandwich600.jpg"
          alt="img"
        />
      </div>
      <div className=" mx-4">
        <h1 className="text-2xl font-bold">Subcribe To Our Newsletter</h1>
        <p>
          Discover and cook authentic dishes from the whole of italy.Inspiring
          food lovers everywhere.
        </p>
        <div className="form-control w-10">
          <div className="input-group">
            <input
              type="text"
              placeholder="type your email"
              className="input input-bordered w-44 "
            />
            <button className="btn btn-primary text-white ">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
