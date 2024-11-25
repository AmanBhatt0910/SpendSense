import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-neutral-light text-neutral-dark">
      <Sidebar />

      <main className="flex-1 p-6 md:p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
