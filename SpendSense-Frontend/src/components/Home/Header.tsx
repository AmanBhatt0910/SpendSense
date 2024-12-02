import React from "react";

const Header: React.FC = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#4C1D95] to-primary-light p-6 rounded-lg shadow-lg text-white mb-8 transform hover:scale-[102%] transition-transform duration-300"
    >
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 animate-slide-up">
        Welcome to SpendSense
      </h1>
      <p className="text-sm sm:text-lg animate-fade-in">
        Manage your finances with ease. SpendSense helps you track, save, and plan for a better future.
      </p>
    </div>
  );
};

export default Header;
