// pages/income.tsx
import React, { useState } from 'react';
import { SummaryCard } from '../components/Income/SummaryCard';
import { IncomeList } from '../components/Income/IncomeList';
import { IncomeChart } from '../components/Income/IncomeChart';
import { IncomeForm } from '../components/Income/IncomeForm';

const Income: React.FC = () => {
  const [incomeEntries, setIncomeEntries] = useState([
    { id: 1, date: '2024-11-25', category: 'Salary', amount: 1500, description: 'Monthly Salary' },
    { id: 2, date: '2024-11-24', category: 'Freelancing', amount: 500, description: 'Freelance work' },
    { id: 3, date: '2024-11-23', category: 'Investment', amount: 200, description: 'Stocks' },
  ]);

  const totalIncome = incomeEntries.reduce((sum, income) => sum + income.amount, 0);
  const remainingBudget = 3000 - totalIncome;

  return (
    <div className="bg-neutral-light min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-primary text-4xl font-bold mb-8">Income Management</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <SummaryCard title="Total Income" value={`$${totalIncome}`} icon="💵" />
          <SummaryCard title="Remaining Budget" value={`$${remainingBudget}`} icon="💰" />
        </div>

        <div className="mb-8">
          <IncomeChart incomeEntries={incomeEntries.map((e) => ({ category: e.category, amount: e.amount }))} />
        </div>

        <div className="mb-8">
          <IncomeForm />
        </div>

        <div className="mb-8">
          <IncomeList incomeEntries={incomeEntries} />
        </div>
      </div>
    </div>
  );
};

export default Income;
