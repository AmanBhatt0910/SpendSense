import React from "react";

const Statistics: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-neutral-dark">Total Income</h2>
        <p className="text-3xl font-bold text-teal">₹12,345</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-neutral-dark">Total Expenses</h2>
        <p className="text-3xl font-bold text-orange">₹8,765</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-neutral-dark">Total Savings</h2>
        <p className="text-3xl font-bold text-primary">₹3,580</p>
      </div>
    </div>
  );
};

export default Statistics;
