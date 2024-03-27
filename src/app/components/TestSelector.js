// src/app/components/TestSelector.js
"use client";

export default function TestSelector({ tests, onSelect }) {
  return (
    <div>
      <label htmlFor="test">Select Test:</label>
      <select id="test" onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select</option>
        {tests.map((test) => (
          <option key={test} value={test}>
            {test}
          </option>
        ))}
      </select>
    </div>
  );
}