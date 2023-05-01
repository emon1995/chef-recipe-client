import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <div>
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" />
          <h1 className="text-primary text-2xl font-bold mt-5">CHEF</h1>
        </div>
        <p>
          Food Chef Ltd.
          <br />
          Providing Famous Recipe since 1992
        </p>
      </div>
      <div>
        <span className="footer-title">Opening Restaurant</span>
        <p className="">Sat-Wet: 09:00am-10:00PM</p>
        <p className="">Thursdayt: 09:00am-11:00PM</p>
        <p className="">Friday: 09:00am-8:00PM</p>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Contact Us</span>
        <p className="">1234 Country Club Ave</p>
        <p className="">NC 123456, London, UK</p>
        <p className="">+0123 456 7891</p>
      </div>
    </footer>
  );
};

export default Footer;
