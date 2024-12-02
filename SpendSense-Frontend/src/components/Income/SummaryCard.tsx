import React from 'react';

interface SummaryCardProps {
  title: string;
  value: string;
  icon: string;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon }) => {
  return (
    <div
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 transition-transform transform hover:scale-[102%] hover:shadow-2xl"
      role="region"
      aria-labelledby={title}
    >
      <div className="text-4xl text-white flex-shrink-0">{icon}</div>
      <div className="text-center md:text-left">
        <p id={title} className="text-lg font-semibold text-white">
          {title}
        </p>
        <p className="text-3xl font-bold text-white mt-2">{value}</p>
      </div>
    </div>
  );
};
