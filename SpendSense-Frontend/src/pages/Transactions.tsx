import React, { useEffect, useState } from 'react';
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
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<Transaction[]>([]);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [totalExpenses, setTotalExpenses] = useState<number>(0);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/stats/chart');
        const data = await response.json();

        const incomeTransactions = data.incomeList.map((income: any) => ({
          id: income.id,
          date: income.date,
          category: income.category,
          amount: income.amount,
          icon: '💰',
        }));

        const expenseTransactions = data.expenseList.map((expense: any) => ({
          id: expense.id,
          date: expense.date,
          category: expense.category,
          amount: -expense.amount,
          icon: '💸',
        }));

        const allTransactions = [...incomeTransactions, ...expenseTransactions].sort((a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
        );

        setTransactions(allTransactions);
        setFilteredTransactions(allTransactions.slice(0, 5));

        const incomeSum = incomeTransactions.reduce((acc: number, curr: Transaction) => acc + curr.amount, 0);
        const expenseSum = expenseTransactions.reduce((acc: number, curr: Transaction) => acc + curr.amount, 0);

        setTotalIncome(incomeSum);
        setTotalExpenses(expenseSum);

      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  const handleFilterChange = (category: string, date: string) => {
    let filteredData = [...transactions];

    if (category !== 'all') {
      filteredData = filteredData.filter((transaction) => transaction.category === category);
    }

    if (date) {
      filteredData = filteredData.filter((transaction) =>
        transaction.date.startsWith(date)
      );
    }

    setFilteredTransactions(filteredData.slice(0, 5));
  };

  const netSavings = totalIncome + totalExpenses;

  return (
    <div className="bg-neutral-light min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-primary text-4xl font-bold mb-8">Transactions</h1>
        <p className="text-neutral-dark text-lg mb-6">View and manage all your financial transactions.</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <SummaryCard title="Total Income" value={`₹${totalIncome}`} icon="💰" />
          <SummaryCard title="Total Expenses" value={`₹${totalExpenses}`} icon="💸" />
          <SummaryCard title="Net Savings" value={`₹${netSavings}`} icon="📈" />
        </div>

        <div className="mb-8 bg-white rounded-xl shadow-lg p-6">
          <FinancialChart transactions={transactions} />
        </div>

        <div className="mb-8">
          <TransactionFilters onFilterChange={handleFilterChange} />
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-neutral-dark mb-4">Latest Transactions</h2>
          <TransactionList transactions={filteredTransactions} />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
