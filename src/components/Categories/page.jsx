import React from 'react';

export default function CategoryFilter({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:space-x-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-2 rounded-full transition duration-300 ${
            activeCategory === category
              ? "bg-white text-black font-bold"
              : "bg-[#232323] text-white font-bold hover:bg-gray-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
