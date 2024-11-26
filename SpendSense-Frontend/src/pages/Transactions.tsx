import React, { useState } from 'react';
import { SummaryCard } from '../components/Transactions/SummaryCard';
import { FinancialChart } from '../components/Transactions/FinancialChart';
import { TransactionFilters } from '../components/Transactions/TransactionFilters';
import { TransactionList } from '../components/Transactions/TransactionList';

interface Transaction {
  id: number;
  date: string;
  category: string;
  amount: number;
  icon: string;
}

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: 1, date: '2024-11-25', category: 'Food', amount: -20.5, icon: '🍔' },
    { id: 2, date: '2024-11-24', category: 'Salary', amount: 2000, icon: '💼' },
    { id: 3, date: '2024-11-23', category: 'Transportation', amount: -15, icon: '🚗' },
  ]);

  return (
    <div className="bg-neutral-light min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-primary text-4xl font-bold mb-8">Transactions</h1>
        <p className="text-neutral-dark text-lg mb-6">View and manage all your financial transactions.</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <SummaryCard title="Total Income" value="$4,200" icon="💰" />
          <SummaryCard title="Total Expenses" value="$2,150" icon="💸" />
          <SummaryCard title="Net Savings" value="$2,050" icon="📈" />
        </div>

        <div className="mb-8 bg-white rounded-xl shadow-lg p-6">
          <FinancialChart transactions={transactions} />
        </div>

        <div className="mb-8">
          <TransactionFilters />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-neutral-dark mb-4">Recent Transactions</h2>
          <TransactionList transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
