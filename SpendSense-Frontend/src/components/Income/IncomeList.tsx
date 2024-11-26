import React from 'react';

interface IncomeListProps {
  incomeEntries: { id: number; date: string; category: string; amount: number; description: string }[];
}

export const IncomeList: React.FC<IncomeListProps> = ({ incomeEntries }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
      <h2 className="text-xl font-semibold text-gray-800">Recent Incomes</h2>
      <ul className="space-y-4">
        {incomeEntries.map((entry) => (
          <li key={entry.id} className="border-b border-gray-300 py-4">
            <div className="flex justify-between items-center">
              <div className="text-lg font-medium text-gray-700">{entry.category}</div>
              <div className="text-sm text-gray-500">{entry.date}</div>
            </div>
            <div className="text-gray-600">{entry.description}</div>
            <div className="text-right text-teal font-semibold">{`$${entry.amount}`}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
