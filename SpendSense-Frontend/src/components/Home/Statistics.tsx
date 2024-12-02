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
        const apiUrl = import.meta.env.VITE_API_URL;
        if (!apiUrl) {
          console.error("API URL is not defined in environment variables.");
          return;
        }

        const response = await fetch(`${apiUrl}/api/stats`);
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-fade-in">
      <div className="bg-gradient-to-br from-teal-100 to-teal-50 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold text-neutral-dark">Total Income</h2>
        <p className="text-3xl font-bold text-teal animate-count-up">₹{stats.income.toLocaleString()}</p>
      </div>

      <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold text-neutral-dark">Total Expenses</h2>
        <p className="text-3xl font-bold text-orange animate-count-up">₹{stats.expense.toLocaleString()}</p>
      </div>

      <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold text-neutral-dark">Total Savings</h2>
        <p className="text-3xl font-bold text-primary animate-count-up">₹{stats.balance.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Statistics;
