import React from 'react';

interface ReportTableProps {
  transactions: Array<{
    id: number;
    description: string;
    amount: string;
    category: string;
    date: string;
  }>;
}

export const ReportTable: React.FC<ReportTableProps> = ({ transactions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto bg-white rounded-lg shadow-lg">
        <thead>
          <tr className="border-b-2 border-neutral-dark">
            <th className="py-4 px-6 text-left text-neutral-dark font-semibold">Description</th>
            <th className="py-4 px-6 text-left text-neutral-dark font-semibold">Amount</th>
            <th className="py-4 px-6 text-left text-neutral-dark font-semibold">Category</th>
            <th className="py-4 px-6 text-left text-neutral-dark font-semibold">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((item) => (
            <tr key={item.id} className="border-b hover:bg-neutral-light transition-all">
              <td className="py-4 px-6 text-neutral-dark">{item.description}</td>
              <td className="py-4 px-6 text-neutral-dark">{item.amount}</td>
              <td className="py-4 px-6 text-neutral-dark">{item.category}</td>
              <td className="py-4 px-6 text-neutral-dark">{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
