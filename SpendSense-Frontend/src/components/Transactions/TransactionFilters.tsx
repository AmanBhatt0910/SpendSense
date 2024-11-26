import React, { useState } from 'react';

interface TransactionFiltersProps {
  onFilterChange: (category: string, date: string) => void;
}

export const TransactionFilters: React.FC<TransactionFiltersProps> = ({ onFilterChange }) => {
  const [category, setCategory] = useState<string>('all');
  const [date, setDate] = useState<string>('');

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const applyFilters = () => {
    onFilterChange(category, date);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
      <div className="flex space-x-4">
        <select
          className="border border-neutral-dark rounded-md p-2 text-neutral-dark"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="all">All Transactions</option>
          <option value="income">Income</option>
          <option value="expense">Expenses</option>
        </select>
        <input
          type="date"
          className="border border-neutral-dark rounded-md p-2 text-neutral-dark"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <button
        className="bg-teal text-white px-4 py-2 rounded-md hover:bg-teal-light transition"
        onClick={applyFilters}
      >
        Apply Filters
      </button>
    </div>
  );
};
