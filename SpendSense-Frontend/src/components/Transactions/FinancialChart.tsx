import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface FinancialChartProps {
  transactions: {
    id: number;
    date: string;
    category: string;
    amount: number;
    icon: string;
  }[];
}

export const FinancialChart: React.FC<FinancialChartProps> = ({ transactions }) => {
  const [chartData, setChartData] = useState({
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        data: [0, 0],
        backgroundColor: ['#14B8A6', '#F97316'],
      },
    ],
  });

  useEffect(() => {
    const income = transactions.filter((t) => t.amount > 0).reduce((sum, t) => sum + t.amount, 0);
    const expenses = transactions.filter((t) => t.amount < 0).reduce((sum, t) => sum + Math.abs(t.amount), 0);

    setChartData({
      labels: ['Income', 'Expenses'],
      datasets: [
        {
          data: [income, expenses],
          backgroundColor: ['#14B8A6', '#F97316'],
        },
      ],
    });
  }, [transactions]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full max-w-xs mx-auto md:max-w-sm lg:max-w-md h-64 md:h-80 lg:h-96">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};
