// src/app/components/CategorySelector.js
"use client";

export default function CategorySelector({ categories, onSelect }) {
  return (
    <div>
      <label htmlFor="category">Select Category:</label>
      <select id="category" onChange={(e) => onSelect(e.target.value)}>
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