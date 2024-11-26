import React from 'react';

export const TransactionFilters: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
      <div className="flex space-x-4">
        <select className="border border-neutral-dark rounded-md p-2 text-neutral-dark">
          <option value="all">All Transactions</option>
          <option value="income">Income</option>
          <option value="expense">Expenses</option>
        </select>
        <input
          type="date"
          className="border border-neutral-dark rounded-md p-2 text-neutral-dark"
          placeholder="Select Date"
        />
      </div>
      <button className="bg-teal text-white px-4 py-2 rounded-md hover:bg-teal-light transition">
        Apply Filters
      </button>
    </div>
  );
};
