import React from 'react';

const Button = ({ type = 'button', text, onClick, className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-all ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
