import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router";
import AnimateOnScroll from "../../../Component/AnimateOnScroll";

const Register = () => {
  return (
    <div>
      <AnimateOnScroll>
        <div>
          <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left"></div>
              <div className="card w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                  <h1 className="text-secondary font-extrabold text-3xl">
                    Create An Account
                  </h1>
                  <h1 className="pl-1 text-gray-500">
                    Register with ZapShipt!
                  </h1>
                  <FaRegUserCircle className="text-5xl border-2 border-primary text-primary rounded-full p-1 bg-gray-300" />
                  <fieldset className="fieldset ">
                    <label className="label">Name</label>
                    <input
                      type="text"
                      className="input border-primary"
                      placeholder="Name"
                    />
                    <label className="label">Email</label>
                    <input
                      type="email"
                      className="input border-primary"
                      placeholder="Email"
                    />
                    <label className="label">Password</label>
                    <input
                      type="password"
                      className="input border-primary"
                      placeholder="Password"
                    />
                    <div>
                      <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button className="btn bg-primary border-none btn-neutral mt-4">
                      Login
                    </button>
                    <p>
                      Already have an account?
                      <Link className="font-bold" to="/login">
                        Login
                      </Link>
                    </p>
                    <h3 className="text-gray-400 text-2xl mx-auto">Or</h3>
                    <button className="btn border-primary text-primary bg-white  ">
                      <svg
                        aria-label="Google logo"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <g>
                          <path d="m0 0H512V512H0" fill="#fff"></path>
                          <path
                            fill="#34a853"
                            d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                          ></path>
                          <path
                            fill="#4285f4"
                            d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                          ></path>
                          <path
                            fill="#fbbc02"
                            d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                          ></path>
                          <path
                            fill="#ea4335"
                            d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                          ></path>
                        </g>
                      </svg>
                      Register with Google
                    </button>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Register;
