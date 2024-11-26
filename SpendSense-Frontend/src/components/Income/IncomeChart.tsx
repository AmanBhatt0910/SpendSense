import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

interface IncomeChartProps {
  incomeEntries: { category: string; amount: number }[];
}

export const IncomeChart: React.FC<IncomeChartProps> = ({ incomeEntries }) => {
  const chartData = {
    labels: incomeEntries.map((entry) => entry.category),
    datasets: [
      {
        label: 'Income by Category',
        data: incomeEntries.map((entry) => entry.amount),
        backgroundColor: '#4C1D95',
        borderColor: '#4C1D95',
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `$${tooltipItem.raw}`,
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-lg font-semibold text-neutral-dark">Income Chart</h2>
      <div className="h-64 mt-4">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};
