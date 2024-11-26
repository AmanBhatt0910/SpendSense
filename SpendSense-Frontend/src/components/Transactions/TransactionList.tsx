import React from 'react';

interface Transaction {
  id: number;
  date: string;
  category: string;
  amount: number;
  icon: string;
}

interface TransactionListProps {
  transactions: Transaction[];
}

export const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => (
  <ul className="space-y-4">
    {transactions.map((transaction) => (
      <li
        key={transaction.id}
        className="flex items-center justify-between bg-neutral-light p-4 rounded-lg shadow-sm"
      >
        <div className="flex items-center gap-4">
          <span className="text-2xl">{transaction.icon}</span>
          <div>
            <p className="font-medium">{transaction.category}</p>
            <p className="text-sm text-neutral-dark">{transaction.date}</p>
          </div>
        </div>
        <p
          className={`text-lg font-bold ${
            transaction.amount > 0 ? 'text-teal' : 'text-accent-orange'
          }`}
        >
          {transaction.amount > 0 ? '+' : ''}
          {transaction.amount}
        </p>
      </li>
    ))}
  </ul>
);
