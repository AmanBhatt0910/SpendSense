import React, { useState } from 'react';

interface AddGoalFormProps {
  addGoal: (goal: any) => void;
}

const AddGoalForm: React.FC<AddGoalFormProps> = ({ addGoal }) => {
  const [goalName, setGoalName] = useState('');
  const [amount, setAmount] = useState(0);
  const [targetDate, setTargetDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (goalName && amount > 0 && targetDate) {
      addGoal({
        id: Date.now(),
        name: goalName,
        amount,
        saved: 0,
        targetDate,
      });

      setGoalName('');
      setAmount(0);
      setTargetDate('');
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
      <h2 className="text-2xl font-semibold text-neutral-dark mb-4">Add a New Goal</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-neutral-dark text-sm mb-2" htmlFor="goalName">
            Goal Name
          </label>
          <input
            type="text"
            id="goalName"
            className="w-full p-3 border border-neutral-light rounded-md"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-neutral-dark text-sm mb-2" htmlFor="amount">
            Target Amount (₹)
          </label>
          <input
            type="number"
            id="amount"
            className="w-full p-3 border border-neutral-light rounded-md"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-neutral-dark text-sm mb-2" htmlFor="targetDate">
            Target Date
          </label>
          <input
            type="date"
            id="targetDate"
            className="w-full p-3 border border-neutral-light rounded-md"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="w-full bg-accent-orange text-white p-3 rounded-md mt-4 hover:bg-accent-orange/80">
          Add Goal
        </button>
      </form>
    </div>
  );
};

export { AddGoalForm };
