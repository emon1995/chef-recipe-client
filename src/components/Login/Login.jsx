import React from "react";
import { Link } from "react-router-dom";
import google from "../../assets/google.png";
import github from "../../assets/github.png";

const Login = () => {
  return (
    <div className="flex items-center justify-center ">
      <div>
        <div className="p-8 border shadow-xl rounded">
          <h1 className="text-2xl font-bold">Login</h1>
          <form>
            <input
              type="email"
              placeholder="Your Email"
              className="input mb-3 input-bordered w-full max-w-xs"
            />
            <br />
            <input
              type="password"
              placeholder="Your Password"
              className="input mb-3 input-bordered w-full max-w-xs"
            />
            <br />
            <button className="btn btn-active btn-primary text-white w-full">
              Login
            </button>
          </form>
          <p>
            Don't have an account?
            <Link className="text-primary " to={`/register`}>
              Sign Up
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-start gap-8 border rounded-full p-4 mt-8">
          <img className="w-8 h-8" src={google} alt="google" />
          <p>Continue with Google</p>
        </div>
        <div className="flex items-center justify-start gap-8 border rounded-full p-4 my-4">
          <img className="w-8 h-8" src={github} alt="google" />
          <p>Continue with GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
