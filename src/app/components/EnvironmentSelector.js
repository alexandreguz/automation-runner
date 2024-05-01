"use client";

export default function EnvironmentSelector({ options, onSelect }) {
  return (
    <>
      <label style={{gridArea: 'envSelectorLabel'}} htmlFor="environment" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Select Environment:</label>
      <select style={{gridArea: 'envSelectorSelect'}} className="custom-input" id="environment " onChange={(e) => onSelect(e.target.value)}>
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
}