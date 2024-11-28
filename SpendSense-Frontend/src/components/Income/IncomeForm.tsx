import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface IncomeFormProps {
  refreshData: () => Promise<void>;
  incomeToEdit?: { id: number; category: string; amount: number; description: string; date: string };
}

export const IncomeForm: React.FC<IncomeFormProps> = ({ refreshData, incomeToEdit }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState('');
  const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    if (incomeToEdit) {
      setCategory(incomeToEdit.category);
      setAmount(incomeToEdit.amount);
      setDescription(incomeToEdit.description);
      setDate(incomeToEdit.date);
    }
  }, [incomeToEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      if (!apiUrl) {
        console.error('API URL is not defined in environment variables.');
        return;
      }
      if (incomeToEdit) {
        await axios.put(`${apiUrl}/api/income/${incomeToEdit.id}`, {
          category,
          amount,
          description,
          date,
        });
      } else {
        await axios.post(`${apiUrl}/api/income`, {
          category,
          amount,
          description,
          date,
        });
      }
      await refreshData();
      setCategory('');
      setAmount(0);
      setDescription('');
      setDate(new Date().toISOString().split('T')[0]);
    } catch (error) {
      console.error('Error adding/editing income entry:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-semibold text-primary mb-4">{incomeToEdit ? 'Edit Income Entry' : 'Add Income Entry'}</h2>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-neutral-dark">Category</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-2 block w-full border border-neutral-light rounded-lg px-4 py-2 shadow-sm focus:ring-teal focus:border-teal"
          placeholder="Enter category"
          required
        />
      </div>

      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-neutral-dark">Amount ($)</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="mt-2 block w-full border border-neutral-light rounded-lg px-4 py-2 shadow-sm focus:ring-teal focus:border-teal"
          placeholder="Enter amount"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-neutral-dark">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-2 block w-full border border-neutral-light rounded-lg px-4 py-2 shadow-sm focus:ring-teal focus:border-teal"
          placeholder="Enter description"
          required
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-neutral-dark">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="mt-2 block w-full border border-neutral-light rounded-lg px-4 py-2 shadow-sm focus:ring-teal focus:border-teal"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={() => {
            setCategory('');
            setAmount(0);
            setDescription('');
            setDate(new Date().toISOString().split('T')[0]);
          }}
          className="px-6 py-2 bg-gray-200 rounded-lg text-neutral-dark hover:bg-gray-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-teal text-white rounded-lg hover:bg-teal-dark"
        >
          {incomeToEdit ? 'Save Changes' : 'Add Income'}
        </button>
      </div>
    </form>
  );
};
