import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-neutral-light text-neutral-dark">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />

      {/* Main content area */}
      <main className="flex-1 p-6 md:p-8 overflow-auto md:ml-64">
        {children}
      </main>

      {/* Mobile sidebar toggle button */}
      <button
        className="fixed bottom-4 right-4 md:hidden p-4 bg-primary text-white rounded-full shadow-lg z-50"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? "Close" : "Open"}
      </button>
    </div>
  );
};

export default Layout;
