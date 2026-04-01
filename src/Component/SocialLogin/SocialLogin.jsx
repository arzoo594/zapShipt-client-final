import React from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { signInGoogle } = useAuth();
  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;

        Swal.fire({
          title: `Welcome, ${user.displayName || "User"}!`,
          text: "You have logged in successfully with Google.",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        let message;

        switch (error.code) {
          case "auth/popup-closed-by-user":
            message = "Login popup was closed. Please try again.";
            break;
          case "auth/cancelled-popup-request":
            message = "Multiple login attempts detected. Try again.";
            break;
          case "auth/network-request-failed":
            message = "Network error. Check your internet connection.";
            break;
          default:
            message = "Google sign-in failed. Please try again.";
        }

        Swal.fire({
          title: "Google Login Failed!",
          text: message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="btn border-primary text-primary bg-white w-full flex items-center justify-center gap-2"
      >
        <svg width="16" height="16" viewBox="0 0 512 512">
          <path
            fill="#34a853"
            d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
          />
          <path
            fill="#4285f4"
            d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
          />
          <path
            fill="#fbbc02"
            d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
          />
          <path
            fill="#ea4335"
            d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
          />
        </svg>
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
