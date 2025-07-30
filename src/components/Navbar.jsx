import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import NotificationPanel from './NotificationPanel';

const Navbar = ({ onLogout }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const notificationBadgeVariants = {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
        delay: 1
      }
    }
  };

  const navLinks = [
    { to: "/dashboard", text: "" },
    { to: "/boutique", text: "" },
    { to: "/forfait", text: "" },
    { to: "/reportings", text: "" },
    { to: "/factures", text: "" }
  ];

  return (
    <motion.nav
      className="bg-vinca-dark text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center"
          variants={itemVariants}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={process.env.PUBLIC_URL + "public/VINCA CIRCLE.png"}
              alt="Logo"
              className="h-12 w-auto md:h-16 absolute -top-2"
              style={{ transformOrigin: 'center' }}
              onError={(e) => {
                console.error("Erreur de chargement du logo");
                e.target.src = process.env.PUBLIC_URL + "/logo princ.png";
              }}
            />
          </motion.div>
        </motion.div>
        {/* Burger menu for mobile */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-vinca-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Ouvrir le menu principal</span>
            {/* Icon burger */}
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Desktop center content */}
        <div className="flex-1 items-center justify-center px-4 hidden md:flex">
          <div className="flex items-center space-x-4 w-full max-w-4xl">
            <motion.div
              className="bg-gradient-to-r from-vinca-primary to-vinca-secondary p-[1px] rounded-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="bg-vinca-dark p-2 rounded-md">
                <div className="flex items-center space-x-2">
                  <motion.div
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center shadow-md"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-vinca-dark font-bold text-sm">G</span>
                  </motion.div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-medium">Niveau</p>
                    <p className="text-xs font-bold bg-gradient-to-r from-gold to-yellow-600 bg-clip-text text-transparent">Gold</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-vinca-primary focus:border-vinca-primary sm:text-sm"
                  placeholder="Rechercher"
                  type="search"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Desktop right content */}
        <motion.div
          className="items-center space-x-4 hidden md:flex"
          variants={itemVariants}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              className="hover:text-vinca-accent"
              onClick={() => setShowNotifications(!showNotifications)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <motion.span
                className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full h-4 w-4 flex items-center justify-center"
                variants={notificationBadgeVariants}
                initial="initial"
                animate="animate"
              >
                3
              </motion.span>
            </motion.button>
            <AnimatePresence>
              {showNotifications && <NotificationPanel />}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-8 h-8 rounded-full bg-vinca-accent flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.5
              }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 8px rgba(245, 158, 11, 0.6)"
              }}
            >
              <span className="text-white font-bold">AH</span>
            </motion.div>
            <motion.span
              className="hidden md:inline"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              Amine Raiss
            </motion.span>
          </motion.div>

          <motion.button
            onClick={onLogout}
            className="ml-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Déconnexion
          </motion.button>
        </motion.div>
      </div>
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-vinca-dark px-2 pt-2 pb-3 space-y-1"
          >
            {/* Liens de navigation */}
            <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-vinca-primary">Dashboard</Link>
            <Link to="/boutique" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-vinca-primary">Boutique</Link>
            <Link to="/forfait" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-vinca-primary">Forfait</Link>
            <Link to="/reportings" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-vinca-primary">Reportings</Link>
            <Link to="/factures" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-vinca-primary">Factures</Link>
            <button
              onClick={onLogout}
              className="w-full mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            >
              Déconnexion
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
