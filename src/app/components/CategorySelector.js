// src/app/components/CategorySelector.js
"use client";

export default function CategorySelector({ categories, onSelect }) {
  return (
    <div className="flex">
      <label htmlFor="category" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Select Category:</label>
      <select className="border-2 border-black" onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select</option>
        {console.log(categories)}
        {categories.map((category) => (
          <option key={category} value={category}>
            {console.log(category)}
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}