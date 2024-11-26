import React from "react";
import Header from "../components/Home/Header";
import Statistics from "../components/Home/Statistics";
import QuickActions from "../components/Home/QuickActions";

const Dashboard: React.FC = () => {
  return (
    <div className="bg-neutral-light min-h-screen p-8">
      <Header />
      <Statistics />
      <QuickActions />
    </div>
  );
};

export default Dashboard;
