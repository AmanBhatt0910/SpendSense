import React from 'react';

interface CategoryCardProps {
  name: string;
  icon: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, icon }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center justify-between space-x-4 hover:shadow-2xl hover:bg-neutral-light transition-all duration-300 ease-in-out">
      <div className="flex items-center space-x-4">
        <div className="text-4xl">{icon}</div>
        <span className="text-xl font-semibold text-neutral-dark">{name}</span>
      </div>
      <div className="text-primary text-lg">Edit</div>
    </div>
  );
};

export { CategoryCard };
