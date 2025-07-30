import React from 'react';
const DashboardCard = ({ title, value, icon, color, trend, trendValue }) => {
  const bgColorClass = `bg-${color}-100`;
  const textColorClass = `text-${color}-600`;
  const iconBgClass = `bg-${color}-500`;

  return (
    <div className={`p-6 rounded-xl shadow-md ${bgColorClass} relative`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
          <div className="flex items-baseline">
            <p className="text-2xl font-bold">
              {value}
            </p>
            {trend && (
              <span className={`ml-2 text-xs font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {trend === 'up' ? '↑' : '↓'} {trendValue}
              </span>
            )}
          </div>
        </div>
        <div className={`p-2 rounded-full ${iconBgClass}`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
