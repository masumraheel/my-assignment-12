import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink to="/" className="lg:hover:text-red-400">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="allTours" className="lg:hover:text-red-400">
          All Tours
        </NavLink>
      </li>
      <li>
        <NavLink to="aboutUs" className="lg:hover:text-red-400">
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="community" className="lg:hover:text-red-400">
          Community
        </NavLink>
      </li>
      <li>
        <NavLink to="blogs" className="lg:hover:text-red-400">
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink to="contactUs" className="lg:hover:text-red-400">
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div
        className="navbar lg:bg-base-100 lg:bg-opacity-40 fixed z-10
       max-w-screen-xl mx-auto lg:text-red-700 font-semibold"
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} className="lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content 
              rounded-box z-[1] mt-3 w-52 p-2 shadow-md text-red-700"
            >
              {navOptions}
            </ul>
          </div>
          <figure>
            <NavLink to="/">
              <h3>
                <span className="text-2xl text-rose-700 font-bold">Bongo</span>
                <span className="text-2xl text-cyan-800 font-bold">Tours</span>
              </h3>
            </NavLink>
          </figure>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <NavLink to="logIn">
            <button className="btn bg-black text-white rounded-xl p-2">
              Log in
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
