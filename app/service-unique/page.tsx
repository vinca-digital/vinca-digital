"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { toast, Toaster } from "react-hot-toast"
import {
  ArrowLeft,
  Palette,
  Camera,
  ShoppingCart,
  X,
  Sparkles,
  Zap,
  Star,
  CheckCircle,
  CreditCard,
  Smartphone,
  Mail,
  User,
  ArrowRight,
  Play,
  Pause,
} from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

// Validation schema
const paymentSchema = z.object({
  fullName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  paymentMethod: z.string().min(1, "Veuillez sélectionner une méthode de paiement"),
})

type PaymentFormData = z.infer<typeof paymentSchema>

// Types
interface Service {
  reference: string
  title: string
  description: string
  priceMin: number
  priceMax?: number
  features: string[]
  popular?: boolean
}

interface ServiceCategory {
  id: string
  title: string
  subtitle: string
  color: string
  bgGradient: string
  textColor: string
  hoverColor: string
  icon: React.ReactNode
  services: Service[]
  description: string
  mainReference: string
  mainDetails: string
}

// Enhanced Data
const serviceCategories: ServiceCategory[] = [
  {
    id: "visual",
    title: "Services Uniques VISUAL",
    subtitle: "Infographie & Design",
    color: "from-yellow-400 to-orange-500",
    bgGradient: "bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500",
    textColor: "text-yellow-900",
    hoverColor: "hover:bg-yellow-400",
    description: "Créez une identité visuelle forte et mémorable",
    mainReference: "SV-VISUAL",
    mainDetails: "Services de création graphique et identité visuelle",
    icon: <Palette className="w-16 h-16" />,
    services: [
      {
        reference: "SV-01",
        title: "Création de logo",
        description: "Logo sur mesure, moderne et impactant avec 3 propositions créatives",
        priceMin: 6000,
        priceMax: 10000,
        features: ["3 propositions créatives", "Révisions illimitées", "Fichiers vectoriels", "Guide d'utilisation"],
        popular: true,
      },
      {
        reference: "SV-02",
        title: "Charte graphique Standard",
        description: "Couleurs principales, typographies, logos pour une cohérence visuelle parfaite",
        priceMin: 9000,
        features: ["Palette de couleurs", "Typographies", "Logo décliné", "Guide de base"],
      },
      {
        reference: "SV-03",
        title: "Charte graphique Medium",
        description: "Identité visuelle complète pour supports print et digitaux",
        priceMin: 11000,
        features: ["Identité complète", "Supports print", "Supports digitaux", "Templates"],
      },
      {
        reference: "SV-04",
        title: "Charte graphique Premium",
        description: "Guidelines détaillées, déclinaisons avancées, marque cohérente",
        priceMin: 20000,
        features: ["Guidelines détaillées", "Déclinaisons avancées", "Brand book", "Formation équipe"],
        popular: true,
      },
      {
        reference: "SV-05",
        title: "Forfait Conception Graphique",
        description: "5 à 10 pages : site web, brochure, rapport, catalogue – design harmonisé",
        priceMin: 9000,
        features: ["5-10 pages design", "Design harmonisé", "Formats multiples", "Révisions incluses"],
      },
    ],
  },
  {
    id: "prod",
    title: "Services Uniques PROD",
    subtitle: "Photo & Vidéo",
    color: "from-purple-600 to-pink-600",
    bgGradient: "bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600",
    textColor: "text-purple-100",
    hoverColor: "hover:bg-yellow-400",
    description: "Capturez l'essence de votre marque en images",
    mainReference: "SV-PROD",
    mainDetails: "Services de production photo et vidéo professionnelle",
    icon: <Camera className="w-16 h-16" />,
    services: [
      {
        reference: "SV-06",
        title: "Shooting Photos/Vidéos",
        description: "Studio ou extérieur, pour produits, équipes, événements avec équipe pro",
        priceMin: 6000,
        features: ["Studio professionnel", "Équipe experte", "Retouches incluses", "Formats multiples"],
        popular: true,
      },
      {
        reference: "SV-07",
        title: "Vidéo Motion Design",
        description: "Vidéos animées créatives pour expliquer ou présenter un projet avec impact",
        priceMin: 10000,
        features: ["Animation 2D/3D", "Scénario inclus", "Voix-off pro", "Musique originale"],
      },
      {
        reference: "SV-08",
        title: "Vincartoon",
        description: "Bandes dessinées ou illustrations personnalisées, fun et engageantes",
        priceMin: 16000,
        features: ["Illustrations custom", "Style unique", "Storytelling", "Formats variés"],
        popular: true,
      },
    ],
  },
]

// Floating particles component (adapted for white background)
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
          }}
          animate={{
            x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 1000),
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}

export default function ServicesUniquePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)

  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentSchema),
  })

  useEffect(() => {
    if (selectedService) {
      setValue("paymentMethod", "")
    }
  }, [selectedService, setValue])

  const formatPrice = (min: number, max?: number) => {
    if (max) {
      return `${min.toLocaleString()} - ${max.toLocaleString()} MAD HT`
    }
    return `À partir de ${min.toLocaleString()} MAD HT`
  }

  const handleServiceClick = (service: Service) => {
    setSelectedService(service)
  }

  const handleBuyService = () => {
    setShowPaymentForm(true)
  }

  const onSubmit = async (data: PaymentFormData) => {
    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success(`🎉 Paiement confirmé pour ${selectedService?.title}! Merci ${data.fullName}!`, {
        duration: 5000,
        style: {
          background: "#10B981",
          color: "white",
        },
      })

      setShowPaymentForm(false)
      setSelectedService(null)
      setSelectedCategory(null)
      reset()
    } catch (error) {
      toast.error("Erreur lors du paiement. Veuillez réessayer.")
    }
  }

  const resetView = () => {
    setSelectedCategory(null)
    setSelectedService(null)
    setShowPaymentForm(false)
  }

  const goBackToCategory = () => {
    setSelectedService(null)
    setShowPaymentForm(false)
  }

  // Main view - Category cards
  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-white relative overflow-hidden">
        <FloatingParticles />
        <Toaster position="top-right" />

        {/* Animated background elements */}
        <motion.div
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-16 h-16 text-yellow-500" />
            </motion.div>

            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 via-purple-600 to-yellow-500 bg-clip-text text-transparent mb-6">
              Nos Services Uniques
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos deux univers créatifs pour transformer votre vision en réalité
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {serviceCategories.map((category, index) => (
              <div
                key={category.id}
                className="group cursor-pointer"
                onClick={() => setSelectedCategory(category.id)}
              >
                <div
                  className={
                    (category.id === "visual"
                      ? "bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 text-yellow-900"
                      : "bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-purple-100")
                    + " rounded-3xl shadow-xl overflow-hidden relative transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  }
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                  {/* Content */}
                  <div className="relative z-10 p-12">
                    {/* Reference Badge */}
                    <div className="mb-6">
                      <span
                        className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                          category.id === "visual" ? "bg-yellow-600 text-yellow-100" : "bg-purple-800 text-purple-200"
                        } transition-colors`}
                      >
                        {category.mainReference}
                      </span>
                    </div>
                    <div
                      className={`mb-8 flex justify-center transition-colors ${
                        category.id === "visual" ? "text-yellow-800" : "text-purple-100"
                      }`}
                    >
                      {category.icon}
                    </div>
                    <h2
                      className={`text-3xl md:text-4xl font-bold mb-4 transition-colors ${
                        category.id === "visual" ? "text-yellow-900" : "text-purple-100"
                      }`}
                    >
                      {category.title}
                    </h2>
                    <p
                      className={`text-xl mb-4 transition-colors ${
                        category.id === "visual" ? "text-yellow-800" : "text-purple-200"
                      }`}
                    >
                      {category.subtitle}
                    </p>
                    {/* Details */}
                    <div
                      className={`mb-6 p-4 rounded-xl transition-colors ${
                        category.id === "visual"
                          ? "bg-yellow-500/20 backdrop-blur-sm"
                          : "bg-purple-800/30 backdrop-blur-sm"
                      }`}
                    >
                      <h3
                        className={`font-semibold mb-2 transition-colors ${
                          category.id === "visual" ? "text-yellow-900" : "text-purple-100"
                        }`}
                      >
                        Détails :
                      </h3>
                      <p
                        className={`transition-colors ${
                          category.id === "visual" ? "text-yellow-800" : "text-purple-200"
                        }`}
                      >
                        {category.mainDetails}
                      </p>
                    </div>
                    <p
                      className={`text-lg mb-8 transition-colors ${
                        category.id === "visual" ? "text-yellow-800" : "text-purple-200"
                      }`}
                    >
                      {category.description}
                    </p>
                    <div
                      className={`inline-flex items-center font-semibold transition-colors ${
                        category.id === "visual" ? "text-yellow-900" : "text-purple-100"
                      }`}
                    >
                      Découvrir nos services
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  </div>
                  {/* Animated border supprimé */}
                  <div
                    className={`absolute inset-0 rounded-3xl border-2 transition-colors ${
                      category.id === "visual"
                        ? "border-yellow-600/30 hover:border-yellow-300"
                        : "border-purple-400/30 hover:border-purple-300"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Control button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="fixed bottom-8 right-8 z-20"
          >
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              className="rounded-full w-14 h-14 bg-white shadow-lg hover:bg-yellow-50 border border-gray-200 text-gray-700 hover:text-yellow-600"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </Button>
          </motion.div>
        </div>
      </div>
    )
  }

  const currentCategory = serviceCategories.find((cat) => cat.id === selectedCategory)!

  // Services list view
  if (selectedCategory && !selectedService) {
    return (
      <div className="min-h-screen bg-white relative">
        <Toaster position="top-right" />

        <div className="max-w-7xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center mb-12"
          >
            <Button
              onClick={resetView}
              variant="outline"
              className="mr-6 bg-white border-gray-300 text-gray-700 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">{currentCategory.title}</h1>
              <p className="text-xl text-gray-600">{currentCategory.subtitle}</p>
            </div>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {currentCategory.services.map((service, index) => (
              <div
                key={service.reference}
                className={
                  (currentCategory.id === "visual"
                    ? "bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 text-yellow-900 border-2 border-yellow-600 hover:border-yellow-300"
                    : currentCategory.id === "prod"
                      ? "bg-gradient-to-br from-purple-600 via-purple-700 to-pink-600 text-purple-100 border-2 border-purple-400 hover:border-purple-300"
                      : "bg-white border-2 border-gray-200 hover:border-yellow-400")
                  + " rounded-2xl shadow-lg cursor-pointer overflow-hidden relative group hover:shadow-xl transition-all duration-300"
                }
                onClick={() => handleServiceClick(service)}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <div
                      className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center shadow-lg"
                    >
                      <Star className="w-4 h-4 mr-1" />
                      Populaire
                    </div>
                  </div>
                )}
                {/* Glassmorphism overlay for colored cards */}
                {(currentCategory.id === "visual" || currentCategory.id === "prod") && (
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                )}
                <div className="relative z-10 p-8">
                  <div className="mb-6">
                    <span
                      className={`inline-block px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                        currentCategory.id === "visual"
                          ? "bg-yellow-600 text-yellow-100 group-hover:bg-yellow-700 group-hover:text-yellow-50"
                          : currentCategory.id === "prod"
                            ? "bg-purple-800 text-purple-200 group-hover:bg-purple-700 group-hover:text-purple-100"
                            : "bg-gray-100 text-gray-700 group-hover:bg-yellow-100 group-hover:text-yellow-800"
                      }`}
                    >
                      {service.reference}
                    </span>
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-4 transition-colors ${
                      currentCategory.id === "visual"
                        ? "text-yellow-900 group-hover:text-yellow-800"
                        : currentCategory.id === "prod"
                          ? "text-purple-100 group-hover:text-white"
                          : "text-gray-800 group-hover:text-yellow-700"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`mb-6 leading-relaxed ${
                      currentCategory.id === "visual"
                        ? "text-yellow-800"
                        : currentCategory.id === "prod"
                          ? "text-purple-200"
                          : "text-gray-600"
                    }`}
                  >
                    {service.description}
                  </p>
                  <div className="mb-6">
                    <h4
                      className={`font-semibold mb-3 ${
                        currentCategory.id === "visual"
                          ? "text-yellow-900"
                          : currentCategory.id === "prod"
                            ? "text-purple-100"
                            : "text-gray-800"
                      }`}
                    >
                      Inclus :
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span
                            className={
                              currentCategory.id === "visual"
                                ? "text-yellow-800"
                                : currentCategory.id === "prod"
                                  ? "text-purple-200"
                                  : "text-gray-600"
                            }
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`text-2xl font-bold mb-4 ${
                      currentCategory.id === "visual"
                        ? "text-yellow-900"
                        : currentCategory.id === "prod"
                          ? "text-purple-100"
                          : "text-gray-800"
                    }`}
                  >
                    {formatPrice(service.priceMin, service.priceMax)}
                  </div>
                  <div
                    className={`px-6 py-3 rounded-xl font-semibold text-center transition-all duration-300 ${
                      currentCategory.id === "visual"
                        ? "bg-yellow-600 text-yellow-100 group-hover:bg-yellow-700 group-hover:text-yellow-50"
                        : currentCategory.id === "prod"
                          ? "bg-purple-800 text-purple-100 group-hover:bg-purple-700 group-hover:text-white"
                          : "bg-gradient-to-r from-gray-700 to-gray-800 group-hover:from-yellow-500 group-hover:to-yellow-600 text-white"
                    }`}
                  >
                    Voir les détails
                  </div>
                </div>
                {/* Hover effect supprimé */}
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    currentCategory.id === "visual"
                      ? "bg-yellow-300/0 group-hover:bg-yellow-300/10"
                      : currentCategory.id === "prod"
                        ? "bg-purple-500/0 group-hover:bg-purple-500/10"
                        : "bg-yellow-400/0 group-hover:bg-yellow-400/5"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Service detail view
  if (selectedService && !showPaymentForm) {
    return (
      <div className="min-h-screen bg-white relative">
        <Toaster position="top-right" />

        <div className="max-w-5xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center mb-12"
          >
            <Button
              onClick={goBackToCategory}
              variant="outline"
              className="mr-6 bg-white border-gray-300 text-gray-700 hover:bg-yellow-50 hover:border-yellow-400 hover:text-yellow-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-gray-200 rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="p-12 text-center">
              {selectedService.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                  className="inline-block mb-6"
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full font-bold flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Service Populaire
                  </div>
                </motion.div>
              )}

              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-6 py-3 bg-gray-100 text-gray-700 rounded-full text-lg font-bold mb-6"
              >
                {selectedService.reference}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
              >
                {selectedService.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                {selectedService.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mb-10"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Ce qui est inclus :</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {selectedService.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + idx * 0.1 }}
                      className="flex items-center text-gray-700 bg-gray-50 rounded-lg p-4"
                    >
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="text-4xl font-bold text-gray-800 mb-10"
              >
                {formatPrice(selectedService.priceMin, selectedService.priceMax)}
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                <Button
                  onClick={handleBuyService}
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-4 text-xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <ShoppingCart className="w-6 h-6 mr-3" />
                  Acheter ce service
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  // Payment form
  if (showPaymentForm) {
    return (
      <div className="min-h-screen bg-gray-50 relative">
        <Toaster position="top-right" />

        <div className="max-w-3xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200"
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Finaliser votre commande</h2>
                <Button
                  onClick={() => setShowPaymentForm(false)}
                  variant="outline"
                  size="sm"
                  className="bg-white border-gray-300 text-gray-700 hover:bg-yellow-50 hover:border-yellow-400"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200"
              >
                <h3 className="font-bold text-gray-800 text-xl mb-2">Service sélectionné :</h3>
                <p className="text-gray-700 text-lg">{selectedService?.title}</p>
                <p className="font-bold text-gray-800 text-2xl mt-2">
                  {selectedService && formatPrice(selectedService.priceMin, selectedService.priceMax)}
                </p>
              </motion.div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                  <Label htmlFor="fullName" className="text-gray-800 text-lg font-semibold flex items-center mb-2">
                    <User className="w-5 h-5 mr-2" />
                    Nom complet *
                  </Label>
                  <Input
                    {...register("fullName")}
                    className="bg-white border-gray-300 text-gray-800 placeholder-gray-500 text-lg p-4 rounded-xl focus:border-yellow-400 focus:ring-yellow-400"
                    placeholder="Votre nom complet"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                  <Label htmlFor="email" className="text-gray-800 text-lg font-semibold flex items-center mb-2">
                    <Mail className="w-5 h-5 mr-2" />
                    Adresse email *
                  </Label>
                  <Input
                    {...register("email")}
                    type="email"
                    className="bg-white border-gray-300 text-gray-800 placeholder-gray-500 text-lg p-4 rounded-xl focus:border-yellow-400 focus:ring-yellow-400"
                    placeholder="votre@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                  <Label htmlFor="phone" className="text-gray-800 text-lg font-semibold flex items-center mb-2">
                    <Smartphone className="w-5 h-5 mr-2" />
                    Numéro de téléphone
                  </Label>
                  <Input
                    {...register("phone")}
                    type="tel"
                    className="bg-white border-gray-300 text-gray-800 placeholder-gray-500 text-lg p-4 rounded-xl focus:border-yellow-400 focus:ring-yellow-400"
                    placeholder="+212 6XX XXX XXX"
                  />
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                  <Label htmlFor="paymentMethod" className="text-gray-800 text-lg font-semibold flex items-center mb-2">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Méthode de paiement *
                  </Label>
                  <Select onValueChange={(value) => setValue("paymentMethod", value)}>
                    <SelectTrigger className="bg-white border-gray-300 text-gray-800 text-lg p-4 rounded-xl focus:border-yellow-400 focus:ring-yellow-400">
                      <SelectValue placeholder="Choisissez une méthode de paiement" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="card">💳 Carte bancaire</SelectItem>
                      <SelectItem value="paypal">🅿️ PayPal</SelectItem>
                      <SelectItem value="transfer">🏦 Virement bancaire</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.paymentMethod && <p className="text-red-500 text-sm mt-1">{errors.paymentMethod.message}</p>}
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 text-xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-3"
                      />
                    ) : (
                      <CreditCard className="w-6 h-6 mr-3" />
                    )}
                    {isSubmitting ? "Traitement en cours..." : "Payer maintenant"}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return null
}
