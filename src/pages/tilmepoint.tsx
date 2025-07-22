"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, Star, ShoppingBag, Award, Zap, Gift, Check, X } from "lucide-react"
import { Button } from "../components/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/card"
import { Badge } from "../components/badge"
import { useNavigate } from "react-router-dom"

// Types
interface Reward {
  id: number;
  name: string;
  image: string;
  description: string;
  points: number;
  category: string;
  popular: boolean;
  color: string;
  borderColor: string;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

const VincaCircleDashboard = () => {
  const [userPoints, setUserPoints] = useState<number>(10) // L'utilisateur commence avec 10 points
  const [selectedReward, setSelectedReward] = useState<number | null>(null)
  const [isProcessing, setIsProcessing] = useState<boolean>(false)
  const [showSuccess, setShowSuccess] = useState<boolean>(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const navigate = useNavigate();

  const conversionRate = 100 // 1h = 100 points

  const rewards: Reward[] = [
    {
      id: 1,
      name: "Shooting Bonus",
      image: "/1.png",
      description: "1 Shooting Photo/Vidéo ajouté au forfait",
      points: 4000,
      category: "Création",
      popular: false,
      color: "from-emerald-700 to-teal-800",
      borderColor: "border-emerald-600/50",
    },
    {
      id: 2,
      name: "Réel Bonus",
      image: "/2.png",
      description: "1 Réel ajouté à votre Forfait Social",
      points: 2500,
      category: "Social Media",
      popular: true,
      color: "from-cyan-700 to-blue-800",
      borderColor: "border-cyan-600/50",
    },
    {
      id: 3,
      name: "Visuel Bonus",
      image: "/3.png",
      description: "1 Visuel ajouté à votre Forfait Social",
      points: 1500,
      category: "Design",
      popular: true,
      color: "from-violet-700 to-purple-800",
      borderColor: "border-violet-600/50",
    },
    {
      id: 4,
      name: "Panneau publicitaire",
      image: "/4.png",
      description: "1 mois - Ville : Casablanca",
      points: 50000,
      category: "Publicité",
      popular: false,
      color: "from-orange-700 to-red-800",
      borderColor: "border-orange-600/50",
    },
    {
      id: 5,
      name: "SLEEVO pour Macbook",
      image: "/5.png",
      description: "1 SLEEVO de www.smaalt.com",
      points: 1500,
      category: "Accessoires",
      popular: false,
      color: "from-slate-700 to-gray-800",
      borderColor: "border-slate-600/50",
    },
    {
      id: 6,
      name: "Journée Olea pour 2 personnes",
      image: "/6.png",
      description: "Ferme Olea : www.fermeolea.com pour 2 personnes",
      points: 1600,
      category: "Expérience",
      popular: false,
      color: "from-lime-700 to-green-800",
      borderColor: "border-lime-600/50",
    },
  ]

  // Generate floating particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = []
      for (let i = 0; i < 40; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 4,
          duration: Math.random() * 7 + 5
        });
      }
      setParticles(newParticles)
    };

    generateParticles()
  }, [])

  const handleRewardPurchase = async (reward: Reward) => {
    if (userPoints < reward.points) {
      alert("Vous n'avez pas assez de points pour cette récompense !")
      return
    }

    setIsProcessing(true)
    setSelectedReward(reward.id)

    // Simulate processing
    setTimeout(() => {
      setUserPoints((prev: number) => prev - reward.points)
      setIsProcessing(false)
      setSelectedReward(null)
      setShowSuccess(true)

      setTimeout(() => setShowSuccess(false), 3000)
    }, 2000)
  }

  const getTimeEquivalent = (points: number) => {
    const hours = points / conversionRate
    if (hours < 1) {
      return `${Math.round(hours * 60)} min`
    }
    return `${hours}h`
  }

  const canAfford = (points: number) => userPoints >= points

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-fuchsia-900 to-black text-white relative overflow-hidden">
        <div className="container mx-auto px-2 sm:px-4 pt-6 sm:pt-8">
          <Button onClick={() => navigate(-1)} className="mb-4 sm:mb-6">
            r
          </Button>
        </div>
        {/* Animated background */}
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

        {/* Success notification */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              className="fixed top-4 right-4 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2"
            >
              <Check className="w-5 h-5" />
              <span>Récompense obtenue avec succès !</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative z-10 container mx-auto px-2 sm:px-4 pt-4 sm:pt-8 pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">Vinca Family & Circle</h1>
            <div className="flex items-center gap-2">
              <Badge className="bg-yellow-400 text-black text-xs sm:text-sm">{userPoints} Points</Badge>
              <span className="text-xs sm:text-sm text-gray-300">(1h = 100 points)</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {rewards.map((reward, index) => (
                <motion.div
                  key={reward.id}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  {/* Popular badge */}
                  {reward.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg glow-animation">
                        ⭐ POPULAIRE
                      </div>
                    </div>
                  )}

                  <Card className={`bg-gradient-to-br ${reward.color}/30 border-2 border-white/10 backdrop-blur-sm relative overflow-hidden ${reward.popular ? "shadow-2xl" : ""}`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <img src={reward.image} alt={reward.name} className="w-12 h-12 object-contain" />
                        <span className="text-xs border-white/30 border rounded px-2 py-1">{reward.category}</span>
                      </div>
                      <CardTitle className="text-lg text-white">{reward.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="mt-4 pt-4 border-t border-blue-600/20">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-2xl font-bold text-blue-200 flex items-center">
                            {reward.points.toLocaleString()}
                            <img src="/COIN 2.png" alt="Coin" className="inline w-5 h-5 ml-1" />
                          </span>
                        </div>
                        <p className="text-sm text-slate-300 mb-2">{reward.description}</p>
                        <div className="space-y-3">
                        <Button
                            className={`w-full mt-2 py-3 rounded-xl font-bold text-lg transition-all duration-300 ${
                              isProcessing && selectedReward === reward.id
                                ? 'bg-gray-600 cursor-not-allowed'
                                : 'bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20'
                        }`}
                          onClick={() => handleRewardPurchase(reward)}
                            disabled={isProcessing || !canAfford(reward.points)}
                          >
                            {isProcessing && selectedReward === reward.id ? 'Traitement...' : canAfford(reward.points) ? 'Échanger' : 'Points insuffisants'}
                        </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="bg-white/5 border-white/15 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-6 flex items-center justify-center space-x-2">
                  <Award className="w-6 h-6 text-amber-400" />
                  <span>Comment ça marche ?</span>
                </h3>

                <div className="flex flex-row gap-6 justify-center text-center">
                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-blue-600/30 rounded-full flex items-center justify-center mx-auto">
                      <Clock className="w-6 h-6 text-blue-300" />
                    </div>
                    <h4 className="font-semibold">Gagnez des Points</h4>
                    <p className="text-sm text-slate-300">1 heure de travail = 100 points Vinca Circle</p>
                  </div>

                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-indigo-600/30 rounded-full flex items-center justify-center mx-auto">
                      <ShoppingBag className="w-6 h-6 text-indigo-300" />
                    </div>
                    <h4 className="font-semibold">Choisissez vos Récompenses</h4>
                    <p className="text-sm text-slate-300">Parcourez notre boutique et sélectionnez ce qui vous plaît</p>
                  </div>

                  <div className="space-y-3">
                    <div className="w-12 h-12 bg-cyan-600/30 rounded-full flex items-center justify-center mx-auto">
                      <Gift className="w-6 h-6 text-cyan-300" />
                    </div>
                    <h4 className="font-semibold">Profitez !</h4>
                    <p className="text-sm text-slate-300">Échangez vos points et profitez de vos récompenses</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div> {/* This closes the main content container */}
      {/* Floating Return Button */}
      <motion.button
        onClick={() => navigate(-1)}
        className="fixed bottom-6 left-6 z-50 shadow-lg bg-blue-700 hover:bg-blue-800 text-white py-3 px-5 rounded-full flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Retour
      </motion.button>
    </>
  )
}

export default VincaCircleDashboard
