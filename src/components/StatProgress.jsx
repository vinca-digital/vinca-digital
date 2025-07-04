import React from 'react';
import { motion } from 'framer-motion';

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
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    hover: {
      scale: 1.02,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: { 
      width: `${percentage}%`,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        delay: 0.3
      }
    }
  };

  const percentageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10,
        delay: 0.5
      }
    }
  };
  
  return (
    <motion.div 
      className="mb-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
    >
      <motion.div 
        className="flex justify-between items-center mb-1"
        variants={textVariants}
      >
        <span className="text-sm font-medium text-gray-700">{title}</span>
        <span className="text-sm font-medium text-gray-700">{current}/{total}</span>
      </motion.div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <motion.div 
          className={`h-2.5 rounded-full ${progressColorClass}`} 
          variants={progressVariants}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <motion.div 
        className="text-xs text-gray-500 mt-1"
        variants={percentageVariants}
      >
        {percentage}% complété
      </motion.div>
    </motion.div>
  );
};

export default StatProgress;
