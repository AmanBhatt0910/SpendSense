import React, { useEffect, useState } from "react";

const Statistics: React.FC = () => {
  const [stats, setStats] = useState<{
    income: number;
    expense: number;
    balance: number;
  }>({
    income: 0,
    expense: 0,
    balance: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/stats");
        if (!response.ok) {
          throw new Error("Failed to fetch stats");
        }
        const data = await response.json();
        setStats({
          income: data.income,
          expense: data.expense,
          balance: data.balance,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-neutral-dark">Total Income</h2>
        <p className="text-3xl font-bold text-teal">₹{stats.income.toLocaleString()}</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-neutral-dark">Total Expenses</h2>
        <p className="text-3xl font-bold text-orange">₹{stats.expense.toLocaleString()}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-neutral-dark">Total Savings</h2>
        <p className="text-3xl font-bold text-primary">₹{stats.balance.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Statistics;
