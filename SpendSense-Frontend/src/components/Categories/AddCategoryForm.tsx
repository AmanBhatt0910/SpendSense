import React, { useState } from 'react';

interface AddCategoryFormProps {
  addCategory: (category: { name: string; icon: string }) => void;
}

const AddCategoryForm: React.FC<AddCategoryFormProps> = ({ addCategory }) => {
  const [categoryName, setCategoryName] = useState('');
  const [categoryIcon, setCategoryIcon] = useState('');
  const [showPicker, setShowPicker] = useState(false);

  const emojiList = [
    '🍔', '🚗', '🎬', '🏠', '🛒', '💼', '🏋️‍♂️', '🧳', '🍹', '🎮', '💰', '🧑‍🍳', '🏖️'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (categoryName && categoryIcon) {
      addCategory({ name: categoryName, icon: categoryIcon });
      setCategoryName('');
      setCategoryIcon('');
      setShowPicker(false);
    }
  };

  const handleEmojiClick = (emoji: string) => {
    setCategoryIcon(emoji);
    setShowPicker(false);
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg mb-12 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-neutral-dark mb-6">Add New Category</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-neutral-dark text-sm font-medium mb-2" htmlFor="categoryName">
            Category Name
          </label>
          <input
            type="text"
            id="categoryName"
            className="w-full p-4 border border-neutral-light rounded-2xl text-lg placeholder-neutral-dark focus:ring-2 focus:ring-primary focus:outline-none"
            placeholder="e.g. Food, Entertainment"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-neutral-dark text-sm font-medium mb-2" htmlFor="categoryIcon">
            Choose Category Icon
          </label>
          <div className="relative">
            <input
              type="text"
              id="categoryIcon"
              className="w-full p-4 border border-neutral-light rounded-2xl text-lg placeholder-neutral-dark focus:ring-2 focus:ring-primary focus:outline-none"
              placeholder="Select an emoji"
              value={categoryIcon}
              readOnly
              onClick={() => setShowPicker(!showPicker)}
            />
            {showPicker && (
              <div className="absolute top-full left-0 w-full bg-white border border-neutral-light rounded-lg mt-2 p-2 grid grid-cols-4 gap-2">
                {emojiList.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    className="text-2xl hover:bg-neutral-light p-2 rounded-lg"
                    onClick={() => handleEmojiClick(emoji)}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-accent-orange text-white font-semibold py-3 rounded-2xl hover:bg-accent-orange/80 transition duration-300 ease-in-out"
          >
            Add Category
          </button>
        </div>
      </form>
    </div>
  );
};

export { AddCategoryForm };
