import React from "react";
import NavLogo from "./NavLogo";
import NavProfile from "./NavProfile";
import NavLinks from "./NavLinks";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-primary text-white h-screen flex flex-col shadow-xl transition-transform duration-300 ease-in-out transform hover:translate-x-0">
      <div className="flex-shrink-0">
        <NavLogo />
      </div>

      <div className="flex-shrink-0">
        <NavProfile />
      </div>

      <nav className="flex-grow overflow-y-auto">
        <NavLinks />
      </nav>

      <div className="flex-shrink-0 p-4 border-t border-primary-light text-center text-sm">
        <p className="text-neutral-light">
          &copy; {new Date().getFullYear()} SpendSense
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
