import React from 'react';
import { ReportCard } from '../components/Reports/ReportCard';
import { Chart } from '../components/Reports/Chart';
import { ReportTable } from '../components/Reports/ReportTable';
import { reportData } from '../data/staticdata';

const Reports = () => {
  return (
    <div className="bg-neutral-light min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-primary text-4xl font-bold mb-8">Expenditure Reports</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reportData.cards.map((card, index) => (
            <ReportCard key={index} title={card.title} value={card.value} icon={card.icon} />
          ))}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-2xl font-semibold text-neutral-dark mb-4">Expenditure Overview</h2>
          <Chart />
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-neutral-dark mb-4">Recent Transactions</h2>
          <ReportTable transactions={reportData.transactions} />
        </div>
      </div>
    </div>
  );
};

export default Reports;
