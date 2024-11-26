interface SummaryCardProps {
    title: string;
    value: string;
    icon: string;
  }
  
  export const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon }) => {
    return (
      <div className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-4">
        <div className="text-4xl">{icon}</div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <p className="text-lg text-gray-600">{value}</p>
        </div>
      </div>
    );
  };
  