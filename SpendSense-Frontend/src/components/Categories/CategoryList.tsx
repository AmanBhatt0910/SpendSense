import React from 'react';
import { CategoryCard } from './CategoryCard';

interface CategoryListProps {
  categories: { name: string; icon: string }[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category, index) => (
        <CategoryCard key={index} name={category.name} icon={category.icon} />
      ))}
    </div>
  );
};

export { CategoryList };
