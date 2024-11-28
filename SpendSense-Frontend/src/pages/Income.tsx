import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SummaryCard } from '../components/Income/SummaryCard';
import { IncomeList } from '../components/Income/IncomeList';
import { IncomeChart } from '../components/Income/IncomeChart';
import { IncomeForm } from '../components/Income/IncomeForm';

const Income: React.FC = () => {
  const [incomeEntries, setIncomeEntries] = useState<any[]>([]);
  const [totalIncome, setTotalIncome] = useState<number>(0);
  const [incomeToEdit, setIncomeToEdit] = useState<any | null>(null);

  const fetchIncomeData = async () => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      if (!apiUrl) {
        console.error('API URL is not defined in environment variables.');
        return;
      }
      const response = await axios.get(`${apiUrl}/api/income/all`);
      setIncomeEntries(response.data);
      setTotalIncome(response.data.reduce((sum: number, income: any) => sum + income.amount, 0));
    } catch (error) {
      console.error('Error fetching income data:', error);
    }
  };

  useEffect(() => {
    fetchIncomeData();
  }, []);

  const handleEdit = (id: number) => {
    const incomeToEdit = incomeEntries.find((entry) => entry.id === id);
    setIncomeToEdit(incomeToEdit);
  };

  const remainingBudget = 100000 - totalIncome;

  return (
    <div className="bg-neutral-light min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-primary text-4xl font-bold mb-8">Income Management</h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          <SummaryCard title="Total Income" value={`₹${totalIncome}`} icon="💵" />
          <SummaryCard title="Remaining Budget" value={`₹${remainingBudget}`} icon="💰" />
        </div>

        <div className="mb-8">
          <IncomeChart incomeEntries={incomeEntries.map((e) => ({ category: e.category, amount: e.amount }))} />
        </div>

        <div className="mb-8">
          <IncomeForm refreshData={fetchIncomeData} incomeToEdit={incomeToEdit} />
        </div>

        <div className="mb-8">
          <IncomeList incomeEntries={incomeEntries} refreshData={fetchIncomeData} onEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
};

export default Income;
