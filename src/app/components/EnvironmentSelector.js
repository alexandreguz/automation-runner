// src/app/components/EnvironmentSelector.js
"use client";

export default function EnvironmentSelector({ options, onSelect }) {
  return (
    <div className="flex">
      <label htmlFor="environment" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Select Environment:</label>
      <select className="border-2 border-black" id="environment " onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}