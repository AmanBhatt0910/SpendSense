import React from "react";
import NavLogo from "./NavLogo";
import NavProfile from "./NavProfile";
import NavLinks from "./NavLinks";

const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  return (
    <aside
      className={`${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 w-64 bg-primary text-white h-full fixed top-0 left-0 transition-transform duration-300 ease-in-out z-50 flex flex-col`}
    >
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
