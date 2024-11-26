import React from "react";
import { BanknotesIcon, CreditCardIcon, ChartBarIcon } from "@heroicons/react/24/outline";

const QuickActions: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
        <BanknotesIcon className="w-12 h-12 text-teal mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-neutral-dark">Add Income</h3>
        <p className="text-sm text-neutral-dark">Track your income quickly.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
        <CreditCardIcon className="w-12 h-12 text-orange mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-neutral-dark">Add Expense</h3>
        <p className="text-sm text-neutral-dark">Log your expenses with ease.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
        <ChartBarIcon className="w-12 h-12 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-neutral-dark">View Reports</h3>
        <p className="text-sm text-neutral-dark">Generate detailed financial reports.</p>
      </div>
    </div>
  );
};

export default QuickActions;
