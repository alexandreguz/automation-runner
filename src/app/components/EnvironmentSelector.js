// src/app/components/EnvironmentSelector.js
"use client";

export default function EnvironmentSelector({ options, onSelect }) {
  return (
    <div>
      <label htmlFor="environment">Select Environment:</label>
      <select id="environment" onChange={(e) => onSelect(e.target.value)}>
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