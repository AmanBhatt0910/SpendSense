import React from 'react';

interface GoalProgressProps {
  current: number;
  target: number;
}

const GoalProgress: React.FC<GoalProgressProps> = ({ current, target }) => {
  const progressPercentage = (current / target) * 100;

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-neutral-dark">Progress</span>
        <span className="text-sm font-semibold text-neutral-dark">{progressPercentage.toFixed(1)}%</span>
      </div>
      <div className="w-full bg-neutral-light rounded-full h-2 mb-4">
        <div
          className="bg-accent-orange h-2 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

export { GoalProgress };
