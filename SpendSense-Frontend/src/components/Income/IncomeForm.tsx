import React, { useState } from 'react';

export const IncomeForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState<number>(0);
  const [description, setDescription] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({ category, amount, description });

    setSuccess(true);
    setCategory('');
    setAmount(0);
    setDescription('');

    setTimeout(() => {
      setShowForm(false);
      setSuccess(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="bg-teal text-white py-2 px-4 rounded-full shadow-lg hover:bg-teal-light transition-all"
          >
            Add Income
          </button>
        ) : (
          <button
            onClick={() => setShowForm(false)}
            className="bg-gray-500 text-white py-2 px-4 rounded-full shadow-lg hover:bg-gray-400 transition-all"
          >
            Cancel
          </button>
        )}
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg space-y-4 transition-all">
          <h2 className="text-2xl font-semibold text-gray-800">Add New Income</h2>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
              placeholder="Enter category"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
              placeholder="Enter amount"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal"
              placeholder="Enter description"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full py-2 bg-teal text-white rounded-lg shadow-lg hover:bg-teal-light transition-all"
            >
              Add Income
            </button>
          </div>
        </form>
      )}

      {success && (
        <div className="bg-green-100 text-green-700 p-4 rounded-lg text-center shadow-md transition-all">
          <p className="font-semibold">Income Added Successfully!</p>
        </div>
      )}
    </div>
  );
};
