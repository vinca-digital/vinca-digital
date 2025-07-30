import React from 'react';

const StatProgress = ({ title, current, total, color }) => {
  const percentage = Math.round((current / total) * 100);
  
  const getProgressColorClass = (color) => {
    switch (color) {
      case 'yellow':
        return 'bg-yellow-500';
      case 'blue':
        return 'bg-blue-500';
      case 'red':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const progressColorClass = getProgressColorClass(color);
  

  
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">{title}</span>
        <span className="text-sm font-medium text-gray-700">{current}/{total}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <div 
          className={`h-2.5 rounded-full ${progressColorClass}`} 
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-xs text-gray-500 mt-1">
        {percentage}% complété
      </div>
    </div>
  );
};

export default StatProgress;
