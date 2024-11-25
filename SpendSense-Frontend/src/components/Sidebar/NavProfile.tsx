import React from "react";

const NavProfile: React.FC = () => {
  return (
    <div className="p-6 border-b border-primary-light flex items-center space-x-4">
      <img
        src="/images/ProfilePic.jpg"
        alt="User Profile"
        className="w-14 h-14 rounded-full border-2 border-accent-orange shadow-lg"
      />
      <div className="space-y-1">
        <h2 className="text-lg font-semibold text-white">Aman Bhatt</h2>
        <p className="text-sm text-primary-light">Admin</p>
      </div>
    </div>
  );
};

export default NavProfile;
