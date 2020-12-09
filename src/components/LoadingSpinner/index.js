import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <svg viewBox="0 0 40 40">
        <title>Loading Spinner</title>
        <circle fill="none" stroke="#000" cx="20" cy="20" r="15"></circle>
      </svg>
    </div>
  );
};

export default LoadingSpinner;