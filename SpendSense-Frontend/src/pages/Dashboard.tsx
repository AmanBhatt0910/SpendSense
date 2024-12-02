import React from "react";
import Header from "../components/Home/Header";
import Statistics from "../components/Home/Statistics";
import QuickActions from "../components/Home/QuickActions";

const Dashboard: React.FC = () => {
  return (
    <div className="bg-neutral-light min-h-screen px-4 md:px-8 lg:px-16 py-8">
      <Header />
      <div
        className="space-y-8 animate-fade-in"
        style={{ animationDuration: "1s", animationTimingFunction: "ease-out" }}
      >
        <Statistics />
        <QuickActions />
      </div>
    </div>
  );
};

export default Dashboard;
