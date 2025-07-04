import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'info',
      message: 'Votre forfait sera renouvelé dans 5 jours',
      time: 'Il y a 2 heures',
      read: false
    },
    {
      id: 2,
      type: 'success',
      message: 'Votre post Instagram a été publié avec succès',
      time: 'Il y a 1 jour',
      read: false
    },
    {
      id: 3,
      type: 'warning',
      message: 'Vous avez utilisé 80% de votre forfait mensuel',
      time: 'Il y a 3 jours',
      read: true
    }
  ]);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })));
  };

  // Animation variants
  const panelVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 20,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const getIconByType = (type) => {
    switch(type) {
      case 'info':
        return (
          <motion.div 
            className="bg-blue-100 p-2 rounded-full"
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </motion.div>
        );
      case 'success':
        return (
          <motion.div 
            className="bg-green-100 p-2 rounded-full"
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </motion.div>
        );
      case 'warning':
        return (
          <motion.div 
            className="bg-yellow-100 p-2 rounded-full"
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      <motion.div 
        className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50 overflow-hidden"
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div 
          className="p-4 border-b"
          variants={itemVariants}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Notifications</h3>
            <motion.button 
              onClick={markAllAsRead}
              className="text-sm text-vinca-primary hover:text-vinca-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Tout marquer comme lu
            </motion.button>
          </div>
        </motion.div>
        
        <div className="max-h-96 overflow-y-auto">
          {notifications.length > 0 ? (
            notifications.map((notification, index) => (
              <motion.div 
                key={notification.id} 
                className={`p-4 border-b hover:bg-gray-50 ${!notification.read ? 'bg-blue-50' : ''}`}
                onClick={() => markAsRead(notification.id)}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)"
                }}
                transition={{ type: "spring", stiffness: 400 }}
                custom={index}
              >
                <div className="flex items-start">
                  {getIconByType(notification.type)}
                  <div className="ml-3 flex-1">
                    <motion.p 
                      className={`text-sm ${!notification.read ? 'font-medium text-gray-900' : 'text-gray-700'}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      {notification.message}
                    </motion.p>
                    <motion.p 
                      className="text-xs text-gray-600 mt-1"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {notification.time}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="p-4 text-center text-gray-500"
              variants={itemVariants}
            >
              Aucune notification
            </motion.div>
          )}
        </div>
        
        <motion.div 
          className="p-2 border-t text-center"
          variants={itemVariants}
        >
          <motion.button 
            className="text-sm text-vinca-primary hover:text-vinca-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir toutes les notifications
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NotificationPanel;
