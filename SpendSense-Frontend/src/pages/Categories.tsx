import React, { useState } from 'react';
import { CategoryList } from '../components/Categories/CategoryList';
import { AddCategoryForm } from '../components/Categories/AddCategoryForm';

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<{ name: string; icon: string }[]>([
    { name: 'Food', icon: '🍔' },
    { name: 'Transportation', icon: '🚗' },
    { name: 'Entertainment', icon: '🎬' },
  ]);

  const addCategory = (category: { name: string; icon: string }) => {
    setCategories([...categories, category]);
  };

  return (
    <div className="bg-neutral-light min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-primary text-4xl font-bold mb-8">Categories</h1>
        <p className="text-neutral-dark text-lg mb-12">Manage your income and expense categories.</p>

        <AddCategoryForm addCategory={addCategory} />

        <CategoryList categories={categories} />
      </div>
    </div>
  );
};

export default Categories;
