import React from "react";
import { useNavigate } from "react-router-dom";

const NavLogo: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div
      className="p-6 border-b border-primary-light flex items-center justify-center cursor-pointer"
      onClick={handleLogoClick}
    >
      <img
        src="/images/SpendSense.png"
        alt="SpendSense Logo"
        className="w-30 h-30"
      />
    </div>
  );
};

export default NavLogo;
