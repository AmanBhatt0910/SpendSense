import React, { useState } from 'react';
import { GoalCard } from '../components/Goals/GoalCard';
import { AddGoalForm } from '../components/Goals/AddGoalForm';

const Goals: React.FC = () => {
  const [goals, setGoals] = useState([
    { id: 1, name: "Save for Emergency Fund", amount: 5000, saved: 1200, targetDate: "2025-12-31" },
    { id: 2, name: "Vacation Fund", amount: 3000, saved: 1000, targetDate: "2024-08-01" },
  ]);

  const addGoal = (goal: any) => {
    setGoals([...goals, goal]);
  };

  return (
    <div className="bg-neutral-light min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-primary text-4xl font-semibold mb-6">Your Financial Goals</h1>
        <p className="text-neutral-dark text-lg mb-12">Track and achieve your financial goals with ease.</p>

        <AddGoalForm addGoal={addGoal} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {goals.map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;
