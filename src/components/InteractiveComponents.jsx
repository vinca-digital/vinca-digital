import React from 'react';
import { motion } from 'framer-motion';

const CodeSection = ({ title, children, icon: Icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.8, 
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className="relative group"
    >
      {/* Effet de lueur */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
      
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            whileHover={{ 
              scale: 1.2, 
              rotate: 360,
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)"
            }}
            transition={{ duration: 0.6 }}
            className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg"
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {title}
          </h2>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.3 }}
          className="space-y-4"
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};

const CodeBlock = ({ children, language = "jsx" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-gray-400 font-mono">{language}</span>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
          <code>{children}</code>
        </pre>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, color, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ 
        duration: 0.6, 
        delay,
        type: "spring",
        stiffness: 120
      }}
      className="relative group cursor-pointer"
    >
      <div className={`absolute -inset-1 bg-gradient-to-r ${color} rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300`}></div>
      <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 h-full">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
          className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${color.replace('from-', 'from-').replace('to-', 'to-')} mb-4`}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const FloatingElement = ({ children, delay = 0, amplitude = 20 }) => {
  return (
    <motion.div
      animate={{
        y: [0, -amplitude, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
};

export { CodeSection, CodeBlock, FeatureCard, FloatingElement };

