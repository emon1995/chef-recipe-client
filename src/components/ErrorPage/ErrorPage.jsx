import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { FaRegSadCry } from "react-icons/fa";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Lottie from "lottie-react";
import errorBot from "../../assets/bot-error-404.json";
import errorImg from "../../assets/error-404.json";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900 bg-[url('src/assets/404Page.png')] bg-cover">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        {/* <FaRegSadCry className="w-40 h-40 text-yellow-500" /> */}
        <div className="max-w-md text-center">
          {/* <h2 className="mb-8 font-extrabold text-9xl text-yellow-500">
            <span className="sr-only">Error</span>
            {status || 404}
          </h2> */}
          <Lottie animationData={errorBot} loop={true} />
          <p className="text-2xl font-semibold md:text-3xl text-red-800 mb-8">
            {error?.message}
          </p>
          <Link to="/" className="btn text-white">
            <HiArrowNarrowLeft />
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
