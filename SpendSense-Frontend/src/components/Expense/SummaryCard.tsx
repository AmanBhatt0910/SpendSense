interface SummaryCardProps {
  title: string;
  value: string;
  icon: string;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-xl hover:shadow-2xl rounded-xl p-6 flex items-center space-x-4 transition-shadow duration-300 ease-in-out transform hover:scale-105">
      <div className="text-5xl text-primary">{icon}</div>
      <div>
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        <p className="text-xl text-gray-600">{value}</p>
      </div>
    </div>
  );
};
