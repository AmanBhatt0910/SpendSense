import React from 'react';

interface ReportCardProps {
  title: string;
  value: string;
  icon: string;
}

export const ReportCard: React.FC<ReportCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-lg text-neutral-dark font-semibold">{title}</span>
        <span className="text-xl text-neutral-dark font-bold mt-2">{value}</span>
      </div>
      <div className="text-3xl text-accent-orange">{icon}</div>
    </div>
  );
};
