import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink to="/" className="hover:text-red-400">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="aboutUs" className="hover:text-red-400">
          About Us
        </NavLink>
      </li>
      <li>
        <details>
          <summary>More</summary>
          <ul className="p-2 bg-transparent text-black">
            <li>
              <NavLink to="community" className="hover:text-red-400">
                Community
              </NavLink>
            </li>
            <li>
              <NavLink to="blogs" className="hover:text-red-400">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="contactUs" className="hover:text-red-400">Contact Us</NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink to="allTours" className="hover:text-red-400">
          All Tours
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar lg:bg-zinc-100 opacity-70 fixed z-10 max-w-screen-xl mx-auto lg:text-black font-semibold">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-md"
            >
              {navOptions}
            </ul>
          </div>
          <figure>
            <NavLink to="/">
              <h3><span className="text-2xl text-rose-700 font-bold">Bongo</span><span className="text-2xl text-cyan-800 font-bold">Tours</span></h3>
            </NavLink>
          </figure>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn bg-black text-white rounded-xl p-2">
            Sign in
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
