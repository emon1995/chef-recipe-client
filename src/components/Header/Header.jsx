import React, { useContext } from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log("user", user);

  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li tabIndex={0}>
              <ActiveLink to="/blog">Blog</ActiveLink>
            </li>
          </ul>
        </div>
        <Link to={`/`} className="btn btn-ghost normal-case items-center gap-1">
          <img className="object-cover  lg:w-24 " src={logo} alt="logo" />
          <h1 className="text-primary text-base mt-3">CHEF</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li tabIndex={0}>
            <ActiveLink to="/blog">Blog</ActiveLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-0 lg:gap-2">
        {user && (
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full" title={user?.displayName}>
              <img src={user?.photoURL} />
            </div>
          </label>
        )}
        {user && (
          <button
            onClick={handleLogout}
            className="btn btn-primary btn-xs lg:btn-md text-white"
          >
            Logout
          </button>
        )}
        {!user && (
          <>
            <Link to="/login">
              <button className="btn btn-primary text-white ">Login</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
