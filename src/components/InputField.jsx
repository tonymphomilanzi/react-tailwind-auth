import React from 'react';

const InputField = ({ type = 'text', placeholder, value, onChange, className = '' }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full p-4 border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none ${className}`}
    />
  );
};

export default InputField;
