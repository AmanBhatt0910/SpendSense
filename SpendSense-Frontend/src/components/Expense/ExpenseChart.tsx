import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface ExpenseChartProps {
  expenses: { category: string; amount: number }[];
}

export const ExpenseChart: React.FC<ExpenseChartProps> = ({ expenses }) => {
  const categories = expenses.map((expense) => expense.category);
  const amounts = expenses.map((expense) => expense.amount);

  const data = {
    labels: categories,
    datasets: [
      {
        data: amounts,
        backgroundColor: ['#14B8A6', '#F97316', '#FF6347', '#4B9FFF'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full h-64">
      <Doughnut data={data} options={options} />
    </div>
  );
};
