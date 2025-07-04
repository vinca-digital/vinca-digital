import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Star, Clock, Zap } from 'lucide-react';
import { Card, CardContent } from '../components/card.tsx';
import { CardHeader, CardTitle } from '../components/card.tsx';
import { Button } from '../components/button.tsx';

const BuyPoints = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [particles, setParticles] = useState([]);
  const navigate = useNavigate();
  const [userPoints, setUserPoints] = useState(10);
  
  const conversionRate = 0.5; // 1 point = 0.5 Dh
  const timeConversionRate = 100; // 1h = 100 points

  const getTimeEquivalent = (points) => {
    const hours = points / timeConversionRate;
    if (hours < 1) {
      return `${Math.round(hours * 60)} min`;
    }
    return `${hours}h`;
  };

  const purchaseOptions = [
    { 
      id: 1,
      dh: 100, 
      points: 200, 
      bonus: 0,
      popular: false,
      color: 'from-gray-700 to-gray-900',
      icon: '/COIN 2.png',
      title: 'Starter'
    },
    { 
      id: 2,
      dh: 500, 
      points: 1000, 
      bonus: 50,
      popular: true,
      color: 'from-pink-600 to-fuchsia-800',
      icon: '/COIN 2.png',
      title: 'Popular'
    },
    { 
      id: 3,
      dh: 1000, 
      points: 2000, 
      bonus: 150,
      popular: false,
      color: 'from-teal-600 to-emerald-800',
      icon: '/COIN 2.png',
      title: 'Premium'
    },
    { 
      id: 4,
      dh: 10000, 
      points: 20000, 
      bonus: 500,
      popular: false,
      color: 'from-amber-500 to-orange-700',
      icon: '/COIN 2.png',
      title: 'Ultimate'
    }
  ];

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 40; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 4,
          duration: Math.random() * 7 + 5
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const handlePurchase = async (packageId) => {
    setIsProcessing(true);
    setSelectedPackage(packageId);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setSelectedPackage(null);
      alert('Achat réussi ! Les points ont été ajoutés à votre compte.');
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      y: -15,
      scale: 1.05,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const sparkleVariants = {
    sparkle: {
      scale: [0, 1, 0],
      rotate: [0, 180, 360],
      opacity: [0, 1, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white overflow-hidden relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-purple-400 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -200, 0],
              x: [0, Math.random() * 80 - 40, 0],
              opacity: [0.1, 1, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Large floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-8">
        <h5 className="text-4xl font-bold text-center mb-4">Page Avant</h5>
        
      </div>
      <div className="flex justify-center">
        <motion.div
          className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl mb-6 shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src="/COIN 2.png" alt="Coin" className="w-12 h-12 object-contain" />
        </motion.div>
      </div>
          
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent text-glow"
            initial={{ scale: 0.5, rotateX: -90 }}
            animate={{ scale: 1, rotateX: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2
            }}
           
          >
            Acheter des Points Vinca Circle
          </motion.h1>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Chaque point que vous achetez équivaut à 0.5 Dh. 
            Obtenez plus de valeur avec nos offres spéciales !
          </motion.p>

          
            

          {/* Floating icons with sparkle effect */}
          <div className="flex justify-center space-x-8 mt-8">
            {[ 
              '/COIN 1.png', '/COIN 2.png', '/COIN 3.png', '/COIN 4.png'
            ].map((icon, index) => (
              <motion.div
                key={index}
                className="relative flex items-center justify-center"
                style={{ width: '60px', height: '60px' }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut"
                }}
              >
                <img src={icon} alt={`Coin Icon ${index + 1}`} className="w-full h-full object-contain" />
                {/* Sparkle effect */}
                <motion.div
                  className="absolute -top-2 -right-2 text-yellow-400 text-xs"
                  variants={sparkleVariants}
                  animate="sparkle"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  ✨
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Purchase Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {purchaseOptions.map((option, index) => (
            <motion.div
              key={option.id}
              className="relative perspective-1000"
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Popular badge */}
              {option.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg glow-animation">
                    ⭐ POPULAIRE
                  </div>
                </motion.div>
              )}

              <motion.div
                className={`bg-gradient-to-br ${option.color} p-8 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden hover-lift`}
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
                style={{
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Card background pattern */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer-animation opacity-30" />
                
                <div className="relative z-10">
                  {/* Package title */}
                  <motion.div
                    className="text-center mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <span className="text-sm font-semibold opacity-75 uppercase tracking-wider">
                      {option.title}
                    </span>
                  </motion.div>

                  {/* Icon with pulse ring */}
                  <motion.div
                    className="text-6xl mb-4 text-center relative"
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -10, 10, 0]
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {option.popular && (
                      <div className="absolute inset-0 rounded-full bg-white/20 pulse-ring-animation" />
                    )}
                    <img src={option.icon} alt={option.title} className="w-32 h-32 object-contain mx-auto" />
                  </motion.div>

                  {/* Points */}
                  <motion.h2
                    className="text-4xl font-bold text-center mb-2 text-shadow"
                    variants={option.popular ? pulseVariants : {}}
                    animate={option.popular ? "pulse" : ""}
                  >
                    {option.points.toLocaleString()} Points
                  </motion.h2>

                  {/* Price */}
                  <p className="text-2xl text-center mb-4 opacity-90 font-semibold">
                    {option.dh} Dh
                  </p>

                  {/* Bonus */}
                  {option.bonus > 0 && (
                    <motion.div
                      className="bg-green-500/20 border border-green-400/30 rounded-lg p-3 mb-6 glass-effect"
                      initial={{ scale: 0, rotateX: -90 }}
                      animate={{ scale: 1, rotateX: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    >
                      <p className="text-green-300 font-semibold text-center">
                        🎁 +{option.bonus} Dh Bonus!
                      </p>
                    </motion.div>
                  )}

                  {/* Value calculation */}
                  <div className="text-center mb-6 opacity-75">
                    <p className="text-sm">
                      Valeur: {(option.points * conversionRate).toLocaleString()} Dh
                    </p>
                    {option.bonus > 0 && (
                      <p className="text-sm text-green-300 font-semibold">
                        Total: {(option.points * conversionRate + option.bonus).toLocaleString()} Dh
                      </p>
                    )}
                  </div>

                  {/* Buy button */}
                  <motion.button
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 relative overflow-hidden ${
                      selectedPackage === option.id && isProcessing
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handlePurchase(option.id)}
                    disabled={isProcessing}
                  >
                    {/* Button shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />
                    
                    <AnimatePresence mode="wait">
                      {selectedPackage === option.id && isProcessing ? (
                        <motion.div
                          key="processing"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center"
                        >
                          <div className="spinner mr-2" />
                          Traitement...
                        </motion.div>
                      ) : (
                        <motion.span
                          key="buy"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Acheter Maintenant
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-glow">Pourquoi choisir Vinca Circle ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { icon: '🔒', title: 'Sécurisé', desc: 'Transactions 100% sécurisées' },
                { icon: '⚡', title: 'Instantané', desc: 'Points ajoutés immédiatement' },
                { icon: '🎁', title: 'Bonus', desc: 'Plus vous achetez, plus vous économisez' }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="text-4xl mb-3"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className="font-semibold mb-2 text-lg">{feature.title}</h4>
                  <p className="text-sm opacity-75">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-8"
            whileHover={{ scale: 1.05 }}
          >
            <Link 
              to="/dashboard" 
              className="inline-flex items-center text-purple-300 hover:text-purple-100 transition-colors duration-300 text-lg hover-lift"
            >
              <motion.svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </motion.svg>
              Retour au Tableau de Bord
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Return Button */}
      <motion.button
        onClick={() => navigate(-1)}
        className="fixed bottom-6 left-6 z-50 shadow-lg bg-purple-700 hover:bg-purple-800 text-white py-3 px-5 rounded-full flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Retour
      </motion.button>
    </motion.div>
  );
};

export default BuyPoints;

