import React, { useState } from 'react';
import { SummaryCard } from '../components/Expense/SummaryCard';
import { ExpenseList } from '../components/Expense/ExpenseList';
import { ExpenseChart } from '../components/Expense/ExpenseChart';
import { ExpenseForm } from '../components/Expense/ExpenseForm';

const Expense: React.FC = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, date: '2024-11-25', category: 'Food', amount: -20.5, description: 'Lunch' },
    { id: 2, date: '2024-11-24', category: 'Transportation', amount: -15, description: 'Bus fare' },
    { id: 3, date: '2024-11-23', category: 'Entertainment', amount: -50, description: 'Movie night' },
  ]);

  const totalExpenses = expenses.reduce((sum, expense) => sum + Math.abs(expense.amount), 0);
  const remainingBudget = 1000 - totalExpenses;

  return (
    <div className="bg-neutral-light min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-primary text-4xl font-bold mb-8">Expense Management</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <SummaryCard title="Total Expenses" value={`$${totalExpenses}`} icon="💸" />
          <SummaryCard title="Remaining Budget" value={`$${remainingBudget}`} icon="💰" />
        </div>

        <div className="mb-8">
          <ExpenseChart expenses={expenses.map((e) => ({ category: e.category, amount: e.amount }))} />
        </div>

        <div className="mb-8">
          <ExpenseForm />
        </div>

        <div className="mb-8">
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </div>
  );
};

export default Expense;
