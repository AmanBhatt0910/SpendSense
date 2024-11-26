import React from 'react';

interface SummaryCardProps {
  title: string;
  value: string;
  icon: string;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon }) => (
  <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-md">
    <span className="text-3xl">{icon}</span>
    <div>
      <h3 className="text-lg font-semibold text-neutral-dark">{title}</h3>
      <p className="text-xl font-bold text-primary">{value}</p>
    </div>
  </div>
);
