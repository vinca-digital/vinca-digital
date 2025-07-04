"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Star, Shield, Zap, Gift } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader } from "./ui/card"
import { Badge } from "./ui/badge"
import { ThemeProvider } from "../components/theme-provider"
import { useNavigate } from "react-router-dom"

interface PurchaseOption {
  id: number
  dh: number
  points: number
  bonus: number
  popular: boolean
  color: string
  title: string
  description: string
}

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
}

export default function BuyPointsPage() {
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const navigate = useNavigate()

  const conversionRate = 0.5 // 1 point = 0.5 Dh

  const purchaseOptions: PurchaseOption[] = [
    {
      id: 1,
      dh: 100,
      points: 200,
      bonus: 0,
      popular: false,
      color: "from-slate-600 to-slate-800",
      title: "Starter",
      description: "Parfait pour commencer",
    },
    {
      id: 2,
      dh: 500,
      points: 1000,
      bonus: 50,
      popular: true,
      color: "from-blue-600 to-indigo-600",
      title: "Popular",
      description: "Le plus choisi par nos utilisateurs",
    },
    {
      id: 3,
      dh: 1000,
      points: 2000,
      bonus: 150,
      popular: false,
      color: "from-indigo-600 to-purple-600",
      title: "Premium",
      description: "Pour les utilisateurs avancés",
    },
    {
      id: 4,
      dh: 10000,
      points: 20000,
      bonus: 500,
      popular: false,
      color: "from-blue-700 to-indigo-800",
      title: "Ultimate",
      description: "La solution complète",
    },
  ]

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 6 + 2,
          duration: Math.random() * 8 + 4,
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  const handlePurchase = async (packageId: number) => {
    setIsProcessing(true)
    setSelectedPackage(packageId)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setSelectedPackage(null)
      alert("Achat réussi ! Les points ont été ajoutés à votre compte.")
    }, 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  return (
    <ThemeProvider>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-blue-400/30 rounded-full blur-sm"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -300, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.1, 0.8, 0.1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Large floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        >
        <p className="invisible">.</p>
        <p className="invisible">.</p>
        <p className="invisible">.</p>
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo/Icon */}
          <motion.div
            className="flex justify-center mb-8"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 rounded-3xl flex items-center justify-center shadow-2xl">
                  <img src="/COIN 1.png" alt="Vinca Circle Coin" className="w-12 h-12 object-contain" />
              </div>
              <motion.div
                className="absolute -top-2 -right-2 text-yellow-400"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Star className="w-6 h-6 fill-current" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent"
            initial={{ scale: 0.5, rotateX: -90 }}
            animate={{ scale: 1, rotateX: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
          >
            Acheter des Points Vinca Circle
          </motion.h1>

          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Chaque point que vous achetez équivaut à <span className="text-blue-400 font-semibold">0.5 Dh</span>.
            Obtenez plus de valeur avec nos offres spéciales !
          </motion.p>

          {/* Floating feature icons */}
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
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.7, 1]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: index * 0.3,
                      ease: "easeInOut"
                    }}
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    ✨
                  </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

          {/* Purchase Options Horizontal Flex */}
          <div className="flex flex-wrap gap-8 w-full mx-auto mb-16 justify-center pb-4">
          {purchaseOptions.map((option, index) => (
              <div className="min-w-[340px] max-w-[380px] h-[520px] flex-shrink-0">
            <motion.div key={option.id} className="relative" variants={cardVariants} whileHover="hover">
              {/* Popular badge */}
              {option.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                >
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold shadow-lg">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    POPULAIRE
                  </Badge>
                </motion.div>
              )}

              <Card
                className={`bg-gradient-to-br ${option.color} border-white/20 backdrop-blur-sm relative overflow-hidden group hover:shadow-2xl transition-all duration-300`}
              >
                {/* Card background effects */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <CardHeader className="text-center relative z-10">
                  <motion.div
                    className="text-sm font-semibold opacity-75 uppercase tracking-wider mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {option.title}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="flex justify-center mb-4"
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -10, 10, 0],
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                            <img src="/COIN 1.png" alt="Coin" className="w-12 h-12 object-contain" />
                      </div>
                      {option.popular && (
                        <motion.div
                          className="absolute inset-0 rounded-2xl bg-white/20"
                          animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                    </div>
                  </motion.div>

                  {/* Points */}
                  <motion.h2
                    className="text-3xl font-bold mb-2"
                    animate={
                      option.popular
                        ? {
                            scale: [1, 1.05, 1],
                            transition: {
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            },
                          }
                        : {}
                    }
                  >
                    {option.points.toLocaleString()} Points
                  </motion.h2>

                  {/* Price */}
                  <p className="text-2xl font-semibold mb-2 opacity-90">{option.dh} Dh</p>

                  <p className="text-sm opacity-75 mb-4">{option.description}</p>
                </CardHeader>

                <CardContent className="relative z-10">
                  {/* Bonus */}
                  {option.bonus > 0 && (
                    <motion.div
                      className="bg-green-500/20 border border-green-400/30 rounded-lg p-3 mb-6 backdrop-blur-sm"
                      initial={{ scale: 0, rotateX: -90 }}
                      animate={{ scale: 1, rotateX: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    >
                      <p className="text-green-300 font-semibold text-center text-sm">
                        <Gift className="w-4 h-4 inline mr-1" />+{option.bonus} Dh Bonus!
                      </p>
                    </motion.div>
                  )}

                  {/* Value calculation */}
                  <div className="text-center mb-6 opacity-75 text-sm">
                    <p>Valeur: {(option.points * conversionRate).toLocaleString()} Dh</p>
                    {option.bonus > 0 && (
                      <p className="text-green-300 font-semibold">
                        Total: {(option.points * conversionRate + option.bonus).toLocaleString()} Dh
                      </p>
                    )}
                  </div>

                  {/* Buy button */}
                  <Button
                    className={`w-full relative overflow-hidden ${
                      selectedPackage === option.id && isProcessing
                        ? "bg-slate-600 cursor-not-allowed"
                        : "bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
                    }`}
                    onClick={() => handlePurchase(option.id)}
                    disabled={isProcessing}
                    size="lg"
                  >
                    <AnimatePresence mode="wait">
                      {selectedPackage === option.id && isProcessing ? (
                        <motion.div
                          key="processing"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center"
                        >
                          <motion.div
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          />
                          Traitement...
                        </motion.div>
                      ) : (
                        <motion.span key="buy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          Acheter Maintenant
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
              </div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Pourquoi choisir Vinca Circle ?</h3>
                <div className="flex flex-row gap-8 justify-center text-center">
                {[
                  { icon: Shield, title: "Sécurisé", desc: "Transactions 100% sécurisées", color: "text-green-400" },
                  { icon: Zap, title: "Instantané", desc: "Points ajoutés immédiatement", color: "text-yellow-400" },
                  {
                    icon: Gift,
                    title: "Bonus",
                    desc: "Plus vous achetez, plus vous économisez",
                    color: "text-blue-400",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className={`${feature.color} mb-3 flex justify-center`}
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.5,
                      }}
                    >
                      <feature.icon className="w-8 h-8" />
                    </motion.div>
                    <h4 className="font-semibold mb-2 text-lg">{feature.title}</h4>
                    <p className="text-sm opacity-75">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <motion.div className="mt-8" whileHover={{ scale: 1.05 }}>
            <Button variant="ghost" className="text-blue-300 hover:text-blue-100 hover:bg-white/10" size="lg">
              <motion.div whileHover={{ x: -5 }} transition={{ type: "spring", stiffness: 300 }}>
                <ArrowLeft className="w-5 h-5 mr-2" />
              </motion.div>
              Retour au Tableau de Bord
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Return Button */}
      <motion.div className="fixed bottom-6 left-6 z-50" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button className="shadow-lg bg-gray-700 hover:bg-gray-800 text-white" size="lg" onClick={() => navigate(-1)}>
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour
        </Button>
      </motion.div>
    </div>
    </ThemeProvider>
  )
}
