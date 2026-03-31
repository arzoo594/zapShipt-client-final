import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../../../../Component/Logo";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  const links = () => {
    return (
      <>
        <NavLink className="btn" to="/services">
          Services
        </NavLink>
        <NavLink to="/coverage" className="btn">
          Coverage
        </NavLink>
        <NavLink className="btn" to="/about">
          About Us
        </NavLink>
        <NavLink className="btn" to="/pricing">
          Pricing
        </NavLink>
        <NavLink className="btn" to="/blog">
          Blog
        </NavLink>
        <NavLink className="btn" to="/contact">
          Contact
        </NavLink>
      </>
    );
  };
  return (
    <div>
      <div className="navbar  rounded-xl shadow-lg">
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
                {" "}
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box gap-3 z-1 mt-3 w-52 p-2 shadow"
            >
              {links()}
              <Link to="/login" className="btn bg-secondary text-white">
                SignIn
              </Link>
              <NavLink to="/be-a-rider" className="btn bg-primary text-white">
                Be A Rider{" "}
                <GoArrowUpRight className="text-2xl bg-secondary rounded-full" />
              </NavLink>
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 px-1">{links()}</ul>
        </div>
        <div className="navbar-end hidden lg:flex gap-2">
          <Link to="login" className="btn bg-secondary text-white">
            SignIn{" "}
          </Link>
          <Link className="btn bg-primary text-white">
            Be A Rider{" "}
            <GoArrowUpRight className="text-2xl bg-secondary rounded-full" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
