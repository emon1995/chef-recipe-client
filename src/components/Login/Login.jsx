import React, { useContext } from "react";
import { Link } from "react-router-dom";
import google from "../../assets/google.png";
import github from "../../assets/github.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const { logIn } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    let email = form.email.value;
    let password = form.password.value;
    console.log(email, password);

    if ((!email, !password)) {
      return toast.error("Input Field is empty");
    } else {
      logIn(email, password)
        .then((result) => {
          const currentUser = result.user;
          console.log(currentUser);
          toast.success("Login Successful!!");
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }

    form.email.value = "";
    form.password.value = "";
  };

  return (
    <div className="flex items-center justify-center ">
      <div>
        <div className="p-8 border shadow-xl rounded">
          <h1 className="text-2xl font-bold">Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input mb-3 input-bordered w-full max-w-xs"
            />
            <br />
            <input
              type="password"
              name="password"
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
