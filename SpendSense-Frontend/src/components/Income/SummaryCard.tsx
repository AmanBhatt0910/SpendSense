import React from 'react';

interface SummaryCardProps {
  title: string;
  value: string;
  icon: string;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-between space-x-4 transition-all hover:shadow-xl">
      <div className="text-center">
        <div className="text-4xl text-primary">{icon}</div>
        <p className="text-lg font-semibold text-neutral-dark">{title}</p>
        <p className="text-2xl text-neutral-dark">{value}</p>
      </div>
    </div>
  );
};
