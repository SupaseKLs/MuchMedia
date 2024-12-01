import React from 'react';

export default function CategoryFilter({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="flex space-x-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`w-28 py-2 rounded-full ${
            activeCategory === category ? "bg-white text-black font-bold" : "bg-[#232323] text-white font-bold"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
