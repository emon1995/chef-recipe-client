import React, { useContext } from "react";
import { Link } from "react-router-dom";
import googleImg from "../../assets/google.png";
import githubImg from "../../assets/github.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const Register = () => {
  const { register, profileName, github, google } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    let name = form.name.value;
    let email = form.email.value;
    let password = form.password.value;
    let photoURL = form.photoURL.value;
    // console.log(name, email, password, photoURL);

    if ((!name, !email, !password, !photoURL)) {
      return toast.error("Input Field is empty");
    } else {
      if (password.length < 6) {
        return toast.error("Password at least 6 character");
      }
      register(email, password)
        .then((result) => {
          const currentUser = result.user;
          // console.log(currentUser);
          profileName(name, photoURL)
            .then((result) => {})
            .catch((err) => {
              toast.error(err.message);
            });
          toast.success("Register Successful!!");
        })
        .catch((err) => {
          toast.error(err.message);
        });
    }

    form.name.value = "";
    form.email.value = "";
    form.password.value = "";
    form.photoURL.value = "";
  };

  const handleGoogle = () => {
    google()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Successful!!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGitHub = () => {
    github()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Successful!!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex items-center justify-center ">
      <div>
        <div className="p-8 border shadow-xl rounded">
          <h1 className="text-2xl font-bold">Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input mb-3 input-bordered w-full max-w-xs"
            />
            <br />
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
            <input
              type="text"
              name="photoURL"
              placeholder="Your Photo URL"
              className="input mb-3 input-bordered w-full max-w-xs"
            />
            <br />
            <button className="btn btn-active btn-primary text-white w-full">
              Register
            </button>
          </form>
          <p>
            Already have an account?
            <Link className="text-primary " to={`/login`}>
              Login
            </Link>
          </p>
        </div>
        <div
          onClick={handleGoogle}
          className="flex items-center justify-start gap-8 border rounded-full p-4 mt-8 cursor-pointer"
        >
          <img className="w-8 h-8" src={googleImg} alt="google" />
          <p>Continue with Google</p>
        </div>
        <div
          onClick={handleGitHub}
          className="flex items-center justify-start gap-8 border rounded-full p-4 my-4 cursor-pointer"
        >
          <img className="w-8 h-8" src={githubImg} alt="google" />
          <p>Continue with GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
