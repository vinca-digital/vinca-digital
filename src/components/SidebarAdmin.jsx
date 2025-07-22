import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const SidebarAdmin = () => {
  const [activeMenu, setActiveMenu] = useState('/admin/dashboard');

  const menuItems = [
    {
      path: '/admin/dashboard',
      name: 'Admin Dashboard',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      )
    },
    {
      path: '/admin/formulaire-avance',
      name: 'SDC',
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      path: '/admin/users',
      name: 'Utilisateurs & Clients',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 12a5 5 0 100-10 5 5 0 000 10zm-7 8a7 7 0 0114 0H3z" />
        </svg>
      )
    },
    {
      path: '/boutiqueadmin',
      name: 'Boutique Admin',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      )
    },
    {
      path: '/admin/services',
      name: 'Services',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
        </svg>
      )
    },
    {
      path: '/admin/reports',
      name: 'Reportings',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      path: '/admin/settings',
      name: 'Paramètres',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11.3 1.046a1 1 0 00-2.6 0l-.25.637a1 1 0 01-.95.684H5.5a1 1 0 00-.98.804l-.12.6a1 1 0 01-.7.7l-.6.12A1 1 0 002.5 6.5v1.6a1 1 0 01-.684.95l-.637.25a1 1 0 000 2.6l.637.25A1 1 0 012.5 13.9v1.6a1 1 0 00.804.98l.6.12a1 1 0 01.7.7l.12.6a1 1 0 00.98.804h1.6a1 1 0 01.95.684l.25.637a1 1 0 002.6 0l.25-.637a1 1 0 01.95-.684h1.6a1 1 0 00.98-.804l.12-.6a1 1 0 01.7-.7l.6-.12a1 1 0 00.804-.98v-1.6a1 1 0 01.684-.95l.637-.25a1 1 0 000-2.6l-.637-.25A1 1 0 0117.5 8.1v-1.6a1 1 0 00-.804-.98l-.6-.12a1 1 0 01-.7-.7l-.12-.6a1 1 0 00-.98-.804h-1.6a1 1 0 01-.95-.684l-.25-.637zM10 13a3 3 0 110-6 3 3 0 010 6z" />
        </svg>
      )
    },
    {
      path: '/boutiqueadmin',
      name: 'Boutique Admin',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
        </svg>
      )
    },
  ];

  // Animation variants et floatingEffect identiques à Sidebar
  const sidebarVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
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

  return (
    <motion.div 
      className="bg-vinca-dark text-white h-full w-64 fixed left-0 top-0 z-40 shadow-lg overflow-hidden"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="pt-16">
        <div className="p-4">
          <div className="space-y-1">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  x: 5,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={item.path} 
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg ${
                    activeMenu === item.path ? 'bg-gray-700' : 'hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveMenu(item.path)}
                >
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.icon}
                  </motion.div>
                  <span>{item.name}</span>
                  {activeMenu === item.path && (
                    <motion.div
                      className="w-1 h-full bg-vinca-primary absolute right-0"
                      layoutId="activeIndicator"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Footer admin/help identique à Sidebar */}
        <motion.div 
          className="absolute bottom-0 w-full p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div 
            className="bg-gray-700 rounded-lg p-3"
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
            }}
          >
            <div className="flex items-center space-x-3">
              <motion.div 
                className="bg-vinca-primary p-2 rounded-full"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 10-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 102 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </motion.div>
              <div>
                <p className="text-sm font-medium">Besoin d'aide ?</p>
                <p className="text-xs text-gray-400">Contactez le support admin</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SidebarAdmin; 