import React from 'react';
import { GoalProgress } from './GoalProgress';

interface GoalCardProps {
  goal: {
    id: number;
    name: string;
    amount: number;
    saved: number;
    targetDate: string;
  };
}

const GoalCard: React.FC<GoalCardProps> = ({ goal }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
      <h3 className="text-xl font-semibold text-neutral-dark mb-4">{goal.name}</h3>
      <p className="text-sm text-neutral-dark mb-4">Target Amount: ${goal.amount}</p>
      <p className="text-sm text-neutral-dark mb-4">Target Date: {goal.targetDate}</p>

      <GoalProgress current={goal.saved} target={goal.amount} />
    </div>
  );
};

export { GoalCard };
