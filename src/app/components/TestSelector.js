// src/app/components/TestSelector.js
"use client";

export default function TestSelector({ tests, onSelect }) {
  return (
    <>
      <label style={{gridArea: 'testSelectorLabel'}} htmlFor="test" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Select Test:</label>
      <select style={{gridArea: 'testSelectorSelect'}} id="test" className="custom-input" onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select</option>
        {tests.map((test) => (
          <option key={test} value={test}>
            {test}
          </option>
        ))}
      </select>
    </>
  );
}