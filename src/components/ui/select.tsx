import React, { useState } from "react";


interface SelectProps {
  options: string[];
  label: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, label, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onChange(value);
  };

  return (
    <div className="flex flex-col">
      <label className="text-gray-700 mb-2">{label}</label>
      <select
        className="bg-white border border-gray-300 text-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
