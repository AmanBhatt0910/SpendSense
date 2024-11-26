import React from 'react';
import { TrashIcon, PencilIcon } from '@heroicons/react/20/solid';
import axios from 'axios';

interface Expense {
  id: number;
  date: string;
  category: string;
  amount: number;
  description: string;
}

interface ExpenseListProps {
  expenses: Expense[];
  refreshData: () => Promise<void>;
  onEdit?: (expense: Expense) => void;
}

export const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, refreshData, onEdit }) => {
  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/expense/${id}`);
      await refreshData();
    } catch (error) {
      console.error('Error deleting expense entry:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
      <h2 className="text-xl font-semibold text-primary">Recent Expenses</h2>
      <ul className="space-y-4">
        {expenses.map((expense) => (
          <li key={expense.id} className="flex justify-between items-center border-b border-neutral-light py-4 hover:bg-neutral-light rounded-lg">
            <div className="flex-1">
              <div className="text-lg font-medium text-neutral-dark">{expense.category}</div>
              <div className="text-sm text-neutral-dark">{expense.date}</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-gray-600 text-sm">{expense.description}</div>
              <div className="text-teal font-semibold">₹{expense.amount}</div>
            </div>
            <div className="flex space-x-3 ml-4">
              {onEdit && (
                <button
                  onClick={() => onEdit(expense)}
                  className="p-2 rounded-full bg-neutral-light hover:bg-neutral-dark text-neutral-dark hover:text-white transition duration-200"
                >
                  <PencilIcon className="h-5 w-5" />
                </button>
              )}
              <button
                onClick={() => handleDelete(expense.id)}
                className="p-2 rounded-full bg-neutral-light hover:bg-neutral-dark text-neutral-dark hover:text-white transition duration-200"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
