interface Expense {
    id: number;
    date: string;
    category: string;
    amount: number;
    description: string;
  }
  
  interface ExpenseListProps {
    expenses: Expense[];
  }
  
  export const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
    return (
      <div className="overflow-x-auto bg-white shadow-lg rounded-xl p-6">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Date</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Category</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Amount</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Description</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="border-b">
                <td className="px-4 py-2 text-sm text-gray-600">{expense.date}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{expense.category}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{expense.amount}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{expense.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  