import React from "react";
import { Link } from "react-router-dom";
import {
  BanknotesIcon,
  CreditCardIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import quickActionsData from "../../data/quickActionsData";

const QuickActions: React.FC = () => {
  const getIcon = (title: string) => {
    switch (title) {
      case "Add Income":
        return <BanknotesIcon className="w-12 h-12 text-teal mx-auto mb-4" />;
      case "Add Expense":
        return <CreditCardIcon className="w-12 h-12 text-orange mx-auto mb-4" />;
      case "View Reports":
        return <ChartBarIcon className="w-12 h-12 text-primary mx-auto mb-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
      {quickActionsData.map((action, index) => (
        <Link
          key={index}
          to={action.link}
          className="bg-gradient-to-r from-white to-neutral-50 p-6 rounded-lg shadow-lg text-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          {getIcon(action.title)}
          <h3 className="text-xl font-semibold text-neutral-dark">
            {action.title}
          </h3>
          <p className="text-sm text-neutral-dark">{action.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default QuickActions;
