import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ExpenseChartProps {
  expenses: { category: string; amount: number }[];
}

export const ExpenseChart: React.FC<ExpenseChartProps> = ({ expenses }) => {
  // Extract categories and amounts
  const categories = expenses.map((expense) => expense.category);
  const amounts = expenses.map((expense) => expense.amount);

  // Dynamically assign background colors based on the number of categories
  const backgroundColors = [
    '#14B8A6', '#F97316', '#FF6347', '#4B9FFF', '#9A58B5', '#FFB74D', '#4CAF50', '#2196F3', '#F44336'
  ];

  const data = {
    labels: categories,
    datasets: [
      {
        data: amounts,
        backgroundColor: backgroundColors.slice(0, categories.length), // Ensure we don't exceed the color array length
        borderColor: '#FFFFFF',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      animateScale: true,  // Enable animation scaling
      animateRotate: true, // Enable animation rotation
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const value = context.raw;
            return `${context.label}: ₹${value}`;
          },
        },
      },
      legend: {
        position: 'top' as const, // Use a valid value for `position`
        labels: {
          font: {
            size: 14,
            family: 'Arial, sans-serif',
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-64">
      <Doughnut data={data} options={options} />
    </div>
  );
};
