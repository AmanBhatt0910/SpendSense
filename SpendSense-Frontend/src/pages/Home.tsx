import React from "react";

const Home: React.FC = () => {
  return (
    <div className="p-6 sm:p-8 md:p-12">
      <h1 className="text-primary text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
        Welcome to SpendSense
      </h1>
      <p className="text-neutral-dark text-lg sm:text-xl max-w-2xl mb-6">
        Manage your finances with ease. SpendSense helps you track, save, and plan for a better future.
      </p>
      <div className="bg-teal-light text-neutral-dark rounded-lg p-6">
        <p className="text-lg font-medium">
          Get started today and take control of your financial journey with SpendSense!
        </p>
      </div>
    </div>
  );
};

export default Home;
