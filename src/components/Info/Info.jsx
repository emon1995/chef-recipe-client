import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BiPhoneCall, BiMap } from "react-icons/bi";

const Info = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center my-20 shadow-xl rounded-full border">
      <div className="text-center py-10 px-20">
        <div className="inline-block bg-primary p-2 rounded-full">
          <AiOutlineClockCircle />
        </div>
        <p className="text-xl font-bold">Today 10:00am - 10:00pm</p>
        <p>Working time</p>
      </div>
      <div className="text-center border-x-2 py-10 px-20">
        <div className="inline-block bg-primary p-2 rounded-full">
          <BiMap />
        </div>
        <p className="text-xl font-bold">Washington, DC, USA</p>
        <p>Our Location</p>
      </div>
      <div className="text-center py-10 px-20">
        <div className="inline-block bg-primary p-2 rounded-full">
          <BiPhoneCall />
        </div>
        <p className="text-xl font-bold">+0123 456 7891</p>
        <p>Phone Number</p>
      </div>
    </div>
  );
};

export default Info;
