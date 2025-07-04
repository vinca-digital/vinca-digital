import React, { useState } from 'react';
import { motion } from 'framer-motion';
  const DashboardCard = ({ title, value, icon, color, trend, trendValue }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const bgColorClass = `bg-${color}-100`;
  const textColorClass = `text-${color}-600`;
  const iconBgClass = `bg-${color}-500`;
  
  return (
    <motion.div 


      className={`p-6 rounded-xl shadow-md ${bgColorClass} relative`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 15,
        delay: Math.random() * 0.3 // Légère variation pour chaque carte
      }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        z: 20,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
          <div className="flex items-baseline">
            <motion.p 
              className="text-2xl font-bold"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {value}
            </motion.p>
            {trend && (
              <motion.span 
                className={`ml-2 text-xs font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                {trend === 'up' ? '↑' : '↓'} {trendValue}
              </motion.span>
            )}
          </div>
        </motion.div>
        <motion.div 
          className={`p-2 rounded-full ${iconBgClass}`}
          whileHover={{ rotate: 15 }}
          animate={{ 
            y: isHovered ? -5 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {icon}
        </motion.div>
      </div>
      
      {/* Effet de brillance au survol */}
      {isHovered && (
        <motion.div 
          className="absolute inset-0 rounded-xl bg-white opacity-10"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.1, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
    </motion.div>
  );
};

export default DashboardCard;
