import React from 'react';

const ValueCard = ({ title, values }) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-xs">
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <ul>
        {values.map((value, index) => (
          <li key={index} className="flex justify-between py-2 border-b border-gray-700">
            <span className="text-gray-400">{value.label}</span>
            <span className="text-gray-100 font-medium">{value.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ValueCard;
