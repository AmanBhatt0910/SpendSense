import React from "react";
import { FaEnvelope, FaGoogle, FaLock } from "react-icons/fa";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";

const Register: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-teal-100 via-neutral-100 to-primary-100 min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-300 opacity-30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-300 opacity-20 rounded-full blur-2xl animate-pulse"></div>

      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8 relative z-10 transform transition-all">
        <div className="flex justify-center items-center mb-6">
          <MdOutlineAccountBalanceWallet className="text-primary text-5xl animate-bounce" />
          <h2 className="ml-2 text-3xl font-bold text-primary animate-fade-in">SpendSense</h2>
        </div>
        <h3 className="text-center text-lg font-semibold text-neutral-700 mb-6 animate-fade-in delay-100">
          Create an Account
        </h3>
        <form className="space-y-6">
          {/* Full Name Field */}
          <div className="relative">
            <label htmlFor="name" className="block text-sm text-neutral-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              className="w-full mt-1 pl-10 pr-4 py-3 border rounded-lg shadow-sm focus:ring-primary focus:border-primary transition-all duration-300 ease-in-out hover:border-primary focus:outline-none"
              required
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <label htmlFor="email" className="block text-sm text-neutral-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full mt-1 pl-10 pr-4 py-3 border rounded-lg shadow-sm focus:ring-primary focus:border-primary transition-all duration-300 ease-in-out hover:border-primary focus:outline-none"
              required
            />
            <FaEnvelope className="absolute top-9 left-3 text-neutral-500" />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm text-neutral-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a strong password"
              className="w-full mt-1 pl-10 pr-4 py-3 border rounded-lg shadow-sm focus:ring-primary focus:border-primary transition-all duration-300 ease-in-out hover:border-primary focus:outline-none"
              required
            />
            <FaLock className="absolute top-9 left-3 text-neutral-500" />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-teal hover:from-teal hover:to-primary-light text-white py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-neutral-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-neutral-500">OR</span>
          </div>
        </div>

        {/* Google Register Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center space-x-2 border border-neutral-300 py-3 rounded-lg shadow-md hover:bg-neutral-100 transition-all duration-300 ease-in-out hover:scale-[103%] hover:shadow-xl"
        >
          <FaGoogle className="text-xl text-teal" />
          <span className="text-sm font-medium text-neutral-700">
            Register with Google
          </span>
        </button>

        {/* Login Link */}
        <p className="text-sm text-center text-neutral-600 mt-4 animate-fade-in delay-200">
          Already have an account?{" "}
          <a href="/login" className="text-primary hover:underline transition-all duration-300 ease-in-out">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
