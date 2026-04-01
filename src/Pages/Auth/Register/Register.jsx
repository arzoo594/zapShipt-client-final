import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router";
import AnimateOnScroll from "../../../Component/AnimateOnScroll";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../../../Component/SocialLogin/SocialLogin";

const Register = () => {
  const { registerUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    registerUser(data.email, data.password)
      .then((result) => {
        result.user;

        Swal.fire({
          title: `Welcome, ${data.name}!`,
          text: "You have registered successfully.",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        let message;

        switch (error.code) {
          case "auth/email-already-in-use":
            message = "This email is already registered. Try logging in.";
            break;
          case "auth/invalid-email":
            message = "Please enter a valid email address.";
            break;
          case "auth/weak-password":
            message =
              "Password is too weak. Use at least 6 characters including uppercase, lowercase, number & special character.";
            break;
          default:
            message = "Something went wrong. Please try again.";
        }

        Swal.fire({
          title: "Registration Failed!",
          text: message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };
  return (
    <AnimateOnScroll>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-md shadow-2xl rounded-xl bg-white">
          <div className="p-6 md:p-8">
            <h1 className="text-secondary font-extrabold text-2xl md:text-3xl">
              Create An Account
            </h1>
            <p className="text-gray-500 mt-1">Register with ZapShipt!</p>

            <form onSubmit={handleSubmit(handleRegister)}>
              <div className="flex justify-center my-4">
                <div className="border-2 border-primary text-primary rounded-full p-3 bg-gray-100">
                  <FaRegUserCircle
                    {...register("img")}
                    className="text-4xl md:text-5xl hover:cursor-pointer hover:"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="label">Name</label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className="input w-full border-primary"
                    placeholder="Name"
                  />
                </div>

                <div>
                  <label className="label">Email</label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="input w-full border-primary"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label className="label">Password</label>
                  <input
                    type="password"
                    {...register("password", {
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
                      required: true,
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
                  Register
                </button>

                <p className="text-sm text-center">
                  Already have an account?{" "}
                  <Link className="font-bold" to="/login">
                    Login
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
  );
};

export default Register;
