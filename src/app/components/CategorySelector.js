// src/app/components/CategorySelector.js
"use client";

export default function CategorySelector({ categories, onSelect }) {
  return (
    <>
      <label style={{gridArea: 'categorySelectorLabel'}} htmlFor="category" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Select Category:</label>
      <select style={{gridArea: 'categorySelectorSelect'}} className="custom-input" onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
}