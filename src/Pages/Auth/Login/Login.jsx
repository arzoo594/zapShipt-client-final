import React from "react";

import { Link } from "react-router";
import AnimateOnScroll from "../../../Component/AnimateOnScroll";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../../Component/SocialLogin/SocialLogin";

const Login = () => {
  const { signInUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          title: `Welcome back, ${user.displayName || data.email}!`,
          text: "You have logged in successfully.",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        let message;

        switch (error.code) {
          case "auth/user-not-found":
            message = "No user found with this email.";
            break;
          case "auth/wrong-password":
            message = "Incorrect password. Try again!";
            break;
          case "auth/invalid-email":
            message = "Please enter a valid email address.";
            break;
          default:
            message = "Something went wrong. Please try again.";
        }

        Swal.fire({
          title: "Login Failed!",
          text: message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  return (
    <div>
      <AnimateOnScroll>
        <div className="w-full flex justify-center">
          <div className="w-full max-w-md shadow-2xl rounded-xl bg-white">
            <div className="p-6 md:p-8">
              <h1 className="text-secondary font-extrabold text-3xl md:text-5xl">
                Welcome Back
              </h1>
              <p className="text-gray-500 mt-2">Login with ZapShipt!</p>

              <form onSubmit={handleSubmit(handleLogin)}>
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="label">Email</label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                      className="input w-full border-primary"
                      placeholder="Email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="label">Password</label>
                    <input
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
                          message:
                            "Password must include uppercase, lowercase, number & special character",
                        },
                      })}
                      className="input w-full border-primary"
                      placeholder="Password"
                    />
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password.message}
                      </p>
                    )}
                  </div>

                  <div className="text-right">
                    <a className="link link-hover text-sm">Forgot password?</a>
                  </div>

                  <button className="btn bg-primary border-none w-full mt-2">
                    Login
                  </button>

                  <p className="text-sm text-center">
                    Don’t have an account?{" "}
                    <Link className="font-bold" to="/register">
                      Register
                    </Link>
                  </p>

                  <div className="text-center text-gray-400">Or</div>

                  <SocialLogin />
                </div>
              </form>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default Login;
