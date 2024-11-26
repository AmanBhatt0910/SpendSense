import React, { useState, useEffect } from 'react';

interface Expense {
  id: number;
  category: string;
  amount: number;
  description: string;
  date: string;
}

interface ExpenseFormProps {
  refreshData: () => Promise<void>;
  initialData: Expense | null;
  onFormSubmit: () => void;
}

export const ExpenseForm: React.FC<ExpenseFormProps> = ({ refreshData, initialData, onFormSubmit }) => {
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (initialData) {
      setCategory(initialData.category);
      setAmount(initialData.amount);
      setDescription(initialData.description);
    } else {
      setCategory('');
      setAmount(0);
      setDescription('');
    }
  }, [initialData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = initialData
      ? `http://localhost:8080/api/expense/${initialData.id}`
      : 'http://localhost:8080/api/expense';

    const method = initialData ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category,
          amount,
          description,
          date: new Date().toISOString().split('T')[0],
        }),
      });

      if (!response.ok) throw new Error('Failed to save expense');

      await refreshData();
      onFormSubmit();
    } catch (error) {
      console.error('Error saving expense:', error);
      alert('There was an issue saving the expense. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">
        {initialData ? 'Edit Expense' : 'Add New Expense'}
      </h2>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <input
          id="category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter category"
          required
        />
      </div>

      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter amount"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter description"
          required
        />
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="flex-1 py-2 bg-primary text-white rounded-lg shadow-lg hover:bg-primary-dark transition-all"
        >
          {initialData ? 'Update Expense' : 'Add Expense'}
        </button>
      </div>
    </form>
  );
};