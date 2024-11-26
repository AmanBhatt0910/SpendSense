import React from "react";

const Header: React.FC = () => {
  return (
    <div className="bg-primary p-6 rounded-lg shadow-lg text-white mb-8">
      <h1 className="text-4xl font-bold mb-2">Welcome to SpendSense</h1>
      <p className="text-lg">Manage your finances with ease. SpendSense helps you track, save, and plan for a better future.</p>
    </div>
  );
};

export default Header;
