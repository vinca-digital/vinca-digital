import React from 'react';

const RankBadge = ({ rank }) => {
  let badgeColor, textColor, borderColor, icon;
  
  switch(rank.toLowerCase()) {
    case 'green':
      badgeColor = 'bg-green-500';
      textColor = 'text-green-500';
      borderColor = 'border-green-500';
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      );
      break;
    case 'silver':
      badgeColor = 'bg-gray-400';
      textColor = 'text-gray-400';
      borderColor = 'border-gray-400';
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      );
      break;
    case 'black':
      badgeColor = 'bg-gray-900';
      textColor = 'text-gray-900';
      borderColor = 'border-gray-900';
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
        </svg>
      );
      break;
    default:
      badgeColor = 'bg-gray-500';
      textColor = 'text-gray-500';
      borderColor = 'border-gray-500';
      icon = null;
  }
  
  return (
    <div className="flex items-center space-x-2">
      <div className={`w-2 h-2 rounded-full ${badgeColor} mr-1.5`}></div>
      <div className={`flex items-center space-x-1 ${textColor} border ${borderColor} rounded-full px-2 py-0.5`}>
        {icon}
        <span className="text-xs font-medium">
        {rank}
      </span>
      </div>
    </div>
  );
};

export default RankBadge;
