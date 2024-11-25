import React from "react";

const NavLogo: React.FC = () => {
  return (
    <div className="p-6 border-b border-primary-light flex items-center justify-center">
      <img
        src="/images/SpendSense.png"
        alt="SpendSense Logo"
        className="w-30 h-30"
      />
    </div>
  );
};

export default NavLogo;
