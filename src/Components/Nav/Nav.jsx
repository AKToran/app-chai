import React from "react";
import { NavLink } from "react-router";
import "./Nav.css";
import { FaGithub } from "react-icons/fa6";

const Nav = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/apps"}>Apps</NavLink>
      </li>
      <li>
        <NavLink to={"/installation"}>Installation</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm px-0 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a href="/" className="flex items-center text-xl font-bold text-blue-900">
          <span>
            <img className="w-6 lg:w-10" src="/logo.png" alt="" />
          </span>
          APP.CHAI
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg px-1 space-x-2 font-semibold">
          {links}
        </ul>
      </div>
      <div className="navbar-end ">
        <a className="btn bg-blue-900 text-white"> <span className="text-lg"><FaGithub/></span> Contribute</a>
      </div>
    </div>
  );
};

export default Nav;
