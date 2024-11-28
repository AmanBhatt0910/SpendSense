import React, { useEffect, useState } from 'react';
import { SummaryCard } from '../components/Expense/SummaryCard';
import { ExpenseList } from '../components/Expense/ExpenseList';
import { ExpenseChart } from '../components/Expense/ExpenseChart';
import { ExpenseForm } from '../components/Expense/ExpenseForm';

interface Expense {
  id: number;
  date: string;
  category: string;
  amount: number;
  description: string;
}

const Expense: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      if (!apiUrl) {
        console.error('API URL is not defined in environment variables.');
        return;
      }
      const response = await fetch(`${apiUrl}/api/expense/all`);
      if (!response.ok) throw new Error('Failed to fetch expenses');
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const totalExpenses = expenses.reduce((sum, expense) => sum + Math.abs(expense.amount), 0);
  const remainingBudget = 10000 - totalExpenses;

  const handleEdit = (expense: Expense) => {
    setEditingExpense(expense);
  };

  return (
    <div className="bg-neutral-light min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-primary text-4xl font-bold mb-8">Expense Management</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <SummaryCard title="Total Expenses" value={`₹${totalExpenses}`} icon="💸" />
          <SummaryCard title="Remaining Budget" value={`₹${remainingBudget}`} icon="💰" />
        </div>

        <div className="mb-8">
          <ExpenseChart
            expenses={expenses.map((e) => ({
              category: e.category,
              amount: e.amount,
            }))}
          />
        </div>

        <div className="mb-8">
          <ExpenseForm
            refreshData={fetchExpenses}
            initialData={editingExpense}
            onFormSubmit={() => setEditingExpense(null)}
          />
        </div>

        <div className="mb-8">
          <ExpenseList
            expenses={expenses}
            refreshData={fetchExpenses}
            onEdit={handleEdit}
          />
        </div>
      </div>
    </div>
  );
};

export default Expense;
