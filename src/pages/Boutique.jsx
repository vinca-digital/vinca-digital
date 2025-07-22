"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import RankBadge from "../components/RankBadge"

const Boutique = () => {
  const [selectedCategory, setSelectedCategory] = useState("tous")
  const [showDevisModal, setShowDevisModal] = useState(false)
  const [showPackModal, setShowPackModal] = useState(false)
  const [showValidationModal, setShowValidationModal] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [selectedPack, setSelectedPack] = useState(null)
  const [orderToValidate, setOrderToValidate] = useState(null)
  const [devisItems, setDevisItems] = useState({
    posts: 0,
    stories: 0,
    reels: 0,
  })
  const [savedPack, setSavedPack] = useState(null)
  const [packForms, setPackForms] = useState({
    web: { article: 0, barrieres: 0 },
    visual: { shooting: 0, infographie: 0 },
    social: { visuelSimple: 0, carrousel: 0, stories: 0, reel: 0 },
    global: {
      article: 0,
      barrieres: 0,
      shooting: 0,
      infographie: 0,
      visuelSimple: 0,
      carrousel: 0,
      stories: 0,
      reel: 0,
    },
  })
  const [paymentForm, setPaymentForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "card",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  })

  // Charger le pack sauvegardé au démarrage
  useEffect(() => {
    const savedPackData = localStorage.getItem("savedPack")
    if (savedPackData) {
      setSavedPack(JSON.parse(savedPackData))
    }
  }, [])

  // Sauvegarder le pack
  const savePack = (packData) => {
    localStorage.setItem("savedPack", JSON.stringify(packData))
    setSavedPack(packData)
  }

  // Supprimer le pack sauvegardé
  const removeSavedPack = () => {
    localStorage.removeItem("savedPack")
    setSavedPack(null)
  }

  const categories = [
    { id: "tous", name: "Tous les forfaits" },
    { id: "basic", name: "Forfaits Basic" },
    { id: "pro", name: "Forfaits Pro" },
    { id: "premium", name: "Forfaits Premium" },
  ]

  const products = [
    {
      id: 1,
      name: "Pack Basic",
      description: "Parfait pour démarrer",
      price: "2400",
      features: ["20 Posts Instagram", "2 Reels", "2 Stories", "Design professionnel", "Hashtags optimisés"],
      popular: true,
      type: "basic",
      details: {
        posts: 20,
        reels: 2,
        stories: 2,
      },
    },
    {
      id: 2,
      name: "Pack Pro",
      description: "Pour une présence régulière",
      price: "4800",
      features: [
        "40 Posts Instagram",
        "5 Reels",
        "5 Stories",
        "Design premium",
        "Hashtags optimisés",
        "Analyses mensuelles",
      ],
      popular: true,
      type: "pro",
      details: {
        posts: 40,
        reels: 5,
        stories: 5,
      },
    },
    {
      id: 3,
      name: "Pack Premium",
      description: "Solution complète",
      price: "9000",
      features: [
        "80 Posts Instagram",
        "10 Reels",
        "10 Stories",
        "Design exclusif",
        "Hashtags optimisés",
        "Analyses hebdomadaires",
        "Support prioritaire",
      ],
      popular: false,
      type: "premium",
      details: {
        posts: 80,
        reels: 10,
        stories: 10,
      },
    },
  ]

  // Nouveaux forfaits personnalisés avec design moderne
  const customPacks = [
    {
      id: "web",
      name: "Forfait Web",
      emoji: "🌐",
      color: "blue",
      gradient: "from-blue-500 via-blue-600 to-indigo-700",
      bgGradient: "from-blue-50 to-indigo-50",
      borderGradient: "from-blue-200 to-indigo-300",
      textColor: "text-blue-900",
      buttonGradient: "from-blue-600 to-indigo-700",
      summary: "Création de contenu web professionnel",
      description: "Parfait pour votre présence web et vos campagnes digitales",
      icon: "💻",
      services: [
        { name: "Articles", price: 600, unit: "par unité", icon: "📝" },
        { name: "Bannières", price: 600, unit: "", icon: "🚧" },
        { name: "Web page", price: 1100, unit: "", icon: "🖥️" },
        { name: "Produits (shopify)", price: 5200, unit: "", icon: "🛒" },
        { name: "Campagne Google Ads (/campagne)", price: 1500, unit: "", icon: "🔎" },
      ],
    },
    {
      id: "visual",
      name: "Forfait Visual",
      emoji: "🎨",
      color: "yellow",
      gradient: "from-yellow-400 via-yellow-500 to-yellow-600",
      bgGradient: "from-yellow-50 to-yellow-100",
      borderGradient: "from-yellow-200 to-yellow-300",
      textColor: "text-yellow-900",
      buttonGradient: "from-yellow-500 to-yellow-600",
      summary: "Création visuelle et shooting professionnel",
      description: "Pour des visuels impactants et du contenu photo/vidéo de qualité",
      icon: "📸",
      services: [
        { name: "Shooting photo/vidéo", price: 2200, unit: "", icon: "🎬" },
        { name: "Conception infographique", price: 600, unit: "", icon: "🎨" },
        { name: "Shooting (demi-journée)", price: 2700, unit: "", icon: "📷" },
        { name: "Shooting (journée)", price: 4200, unit: "", icon: "📷" },
        { name: "Conception page", price: 700, unit: "", icon: "📄" },
        { name: "Option Drone", price: 1700, unit: "", icon: "🛩️" },
        { name: "Création de logo (3 propositions)", price: 4200, unit: "", icon: "🎨" },
        { name: "Creation de charte graphique (Simple)", price: 6200, unit: "", icon: "📑" },
        { name: "Creation de charte graphique (Medium)", price: 9200, unit: "", icon: "📑" },
      ],
    },
    {
      id: "social",
      name: "Forfait Social",
      emoji: "📱",
      color: "red",
      gradient: "from-red-500 via-pink-600 to-rose-700",
      bgGradient: "from-red-50 to-pink-50",
      borderGradient: "from-red-200 to-pink-300",
      textColor: "text-red-900",
      buttonGradient: "from-red-600 to-pink-700",
      summary: "Contenu optimisé pour les réseaux sociaux",
      description: "Boostez votre engagement avec du contenu social percutant",
      icon: "🚀",
      services: [
        { name: "Visuel simple", price: 600, unit: "", icon: "🖼️" },
        { name: "Carrousel", price: 700, unit: "", icon: "🎠" },
        { name: "Stories", price: 500, unit: "", icon: "📖" },
        { name: "Reel Standard (BI simple)", price: 600, unit: "", icon: "🎬" },
        { name: "Reel Medium (Dynamique/Tournage sans ST)", price:800, unit: "", icon: "🎬" },
        { name: "Reel Premium (Tournage avec ST)", price: 1000, unit: "", icon: "🎬" },
        { name: "Vidéo YouTube courte (>5 min)", price: 2700, unit: "", icon: "📹" },
        { name: "Vidéo YouTube longue (<5 min)", price: 5200, unit: "", icon: "📹" },
        { name: "Campagne Meta Ads (campagne)", price: 1500, unit: "", icon: "📢" },
      ],
    },
    {
      id: "global",
      name: "Forfait Global",
      emoji: "⭐",
      color: "green",
      gradient: "from-green-500 via-emerald-600 to-teal-700",
      bgGradient: "from-green-50 to-emerald-50",
      borderGradient: "from-green-200 to-emerald-300",
      textColor: "text-green-900",
      buttonGradient: "from-green-600 to-emerald-700",
      summary: "Solution complète tout-en-un",
      description: "L'offre premium qui combine tous nos services pour un impact maximum",
      icon: "🌟",
      services: [
        // Web
        { name: "Articles", price: 600, unit: "par unité", icon: "📝" },
        { name: "Bannières", price: 600, unit: "", icon: "🚧" },
        { name: "Web page", price: 1100, unit: "", icon: "🖥️" },
        { name: "Produits (shopify)", price: 5200, unit: "", icon: "🛒" },
        { name: "Campagne Google Ads (/campagne)", price: 1500, unit: "", icon: "🔎" },
      
        // Visual
        { name: "Shooting photo/vidéo", price: 2200, unit: "", icon: "🎬" },
        { name: "Conception infographique", price: 600, unit: "", icon: "🎨" },
        { name: "Shooting (demi-journée)", price: 2700, unit: "", icon: "📷" },
        { name: "Shooting (journée)", price: 4200, unit: "", icon: "📷" },
        { name: "Conception page", price: 700, unit: "", icon: "📄" },
        { name: "Option Drone", price: 1700, unit: "", icon: "🛩️" },
        { name: "Création de logo (3 propositions)", price: 4200, unit: "", icon: "🎨" },
        { name: "Creation de charte graphique (Simple)", price: 6200, unit: "", icon: "📑" },
        { name: "Creation de charte graphique (Medium)", price: 9200, unit: "", icon: "📑" },
        // Social
        { name: "Visuel simple", price: 600, unit: "", icon: "🖼️" },
        { name: "Carrousel", price: 700, unit: "", icon: "🎠" },
        { name: "Stories", price: 500, unit: "", icon: "📖" },
        { name: "Reel Standard (BI simple)", price: 600, unit: "", icon: "🎬" },
        { name: "Reel Medium (Dynamique/Tournage sans ST)", price:800, unit: "", icon: "🎬" },
        { name: "Reel Premium (Tournage avec ST)", price: 1000, unit: "", icon: "🎬" },
        { name: "Vidéo YouTube courte (>5 min)", price: 2700, unit: "", icon: "📹" },
        { name: "Vidéo YouTube longue (<5 min)", price: 5200, unit: "", icon: "📹" },
        { name: "Campagne Meta Ads (campagne)", price: 1500, unit: "", icon: "📢" },
      ],
    },
  ]

  const calculateTotal = () => {
    return devisItems.posts * 100 + devisItems.stories * 100 + devisItems.reels * 200
  }

  const handleQuantityChange = (type, value) => {
    setDevisItems((prev) => ({
      ...prev,
      [type]: Math.max(0, Number.parseInt(value) || 0),
    }))
  }

  const handlePackFormChange = (packId, serviceKey, value) => {
    setPackForms((prev) => ({
      ...prev,
      [packId]: {
        ...prev[packId],
        [serviceKey]: Math.max(0, Number.parseInt(value) || 0),
      },
    }))
  }

  const calculatePackTotal = (packId) => {
    const pack = customPacks.find((p) => p.id === packId)
    const form = packForms[packId]
    if (!pack || !form) return 0

    return pack.services.reduce((total, service) => {
      const serviceKey = service.name
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")
        .replace("photovideo", "")
        .replace("conceptioninfographique", "infographie")
        .replace("visuelsimp", "visuelSimple")
        .replace("reelvideocoure", "reel")
        .replace("shootingphotovideo", "shooting")

      const quantity = form[serviceKey] || 0
      return total + quantity * service.price
    }, 0)
  }

  const handleClosePackModal = () => {
    setShowPackModal(false)
    setSelectedPack(null)
  }

  const handleSelectProduct = (product) => {
    setOrderToValidate({
      type: "predefined",
      product: product,
      total: Number.parseInt(product.price),
    })
    setShowValidationModal(true)
  }

  const handleSelectCustomPack = (pack) => {
    if (savedPack && savedPack.type === pack.id) {
      setOrderToValidate({
        type: "custom",
        pack: pack,
        services: savedPack.services,
        total: savedPack.total,
      })
      setShowValidationModal(true)
    }
  }

  const handlePaymentFormChange = (field, value) => {
    setPaymentForm((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleConfirmOrder = () => {
    setShowValidationModal(false)
    setShowPaymentModal(true)
  }

  const handlePayment = () => {
    // Simulation du paiement
    alert("Paiement effectué avec succès ! Vous recevrez un email de confirmation.")
    setShowPaymentModal(false)
    setOrderToValidate(null)
    // Réinitialiser le formulaire
    setPaymentForm({
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      company: "",
      address: "",
      city: "",
      postalCode: "",
      paymentMethod: "card",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardName: "",
    })
  }

  // Fonction utilitaire pour le prix minimum d'un forfait
  function getMinServicePrice(pack) {
    if (!pack.services || pack.services.length === 0) return 0;
    return Math.min(...pack.services.map(service => service.price));
  }

  // Fonction utilitaire pour formater le nom du service
  function formatServiceName(name) {
    return name
      .replace(/([A-Z])/g, ' $1')
      .replace(/([0-9]+)/g, ' $1')
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([a-z])([0-9])/gi, '$1 $2')
      .replace(/^./, str => str.toUpperCase())
      .replace(/videoyoutubelongue5min/i, 'Vidéo YouTube longue (<5 min)')
      .replace(/creationdechartegraphiquemedium/i, 'Charte graphique Medium')
      .replace(/bannieres/i, 'Bannières')
      .replace(/shootingjournee/i, 'Shooting (journée)')
      .trim();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800">
      <div className="p-8">
        <motion.div
          className="w-full px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        > 
        <p className="invisible">.</p>
        <p className="invisible">.</p>
        <p className="invisible">.</p>
          <div className="flex justify-between items-center mb-10">
            <div>
              {/* Bloc titre et description supprimé */}
            </div>
            <div className="flex items-center gap-4">
              <RankBadge rank="Gold" />
              <div className="text-right">
                <p className="font-bold text-yellow-500">Remise Gold</p>
                <p className="text-sm text-gray-600">-10% sur tous les forfaits</p>
              </div>
            </div>
          </div>

          {/* Pack sauvegardé */}
          {savedPack && (
            <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-lg rounded-3xl shadow-2xl p-8 flex items-center gap-8 relative mt-8">
              {/* Badge ou icône */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {/* Infos pack */}
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-green-700 mb-2">{savedPack.name || "Mon pack personnalisé"}</h2>
                {savedPack.type && (
                  <div className="flex flex-col gap-2 mb-2 max-w-2xl">
                    {/* Sélecteur de quantité pour chaque service du pack sauvegardé */}
                    {(() => {
                      const pack = customPacks.find((p) => p.id === savedPack.type);
                      if (!pack) return null;
                      return (
                        <>
                          {pack.services.map((service, serviceIndex) => {
                            const serviceKey = service.name
                              .toLowerCase()
                              .replace(/[^a-z0-9]/g, "")
                              .replace("photovideo", "")
                              .replace("conceptioninfographique", "infographie")
                              .replace("visuelsimp", "visuelSimple")
                              .replace("reelvideocoure", "reel")
                              .replace("shootingphotovideo", "shooting");
                            const quantity = packForms[pack.id]?.[serviceKey] || 0;
                            if (quantity === 0) return null;
                            return (
                              <div key={serviceIndex} className="flex items-center justify-between bg-white rounded-xl px-6 py-4 mb-3 shadow">
                                <span className="font-medium text-gray-800">{service.name}</span>
                                <span className="font-bold text-gray-700 text-lg">{quantity}</span>
                              </div>
                            );
                          })}
                        </>
                      );
                    })()}
                  </div>
                )}
                <div className="bg-white/80 rounded-xl p-4 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-700">Total du pack</span>
                    <span className="text-3xl font-extrabold text-green-600">{calculatePackTotal(savedPack.type)} DH</span>
                  </div>
                  <div className="text-xs text-gray-400">Tous services inclus</div>
                </div>
              </div>
              {/* Actions */}
              <div className="flex flex-col gap-3">
                <button onClick={removeSavedPack} className="text-gray-400 hover:text-red-500 transition p-2 self-end" title="Supprimer le pack">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
                <button onClick={() => setShowPackModal(true)} className="bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-700 transition">
                  Modifier
                </button>
                <button
                  className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold shadow flex items-center gap-2 hover:bg-green-600 transition"
                  onClick={() => {
                    const pack = customPacks.find((p) => p.id === savedPack.type)
                    if (pack) {
                      handleSelectCustomPack(pack)
                    }
                  }}
                >
                  <span>🛒</span> Prendre ce forfait
                </button>
              </div>
            </div>
          )}

          <div className="text-center my-16">
            <motion.button
              className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPackModal(true)}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <span>Créer mon pack sur mesure</span>
              </div>
            </motion.button>
          </div>

          <div className="flex justify-center mb-10">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-2 flex shadow-lg border border-gray-200">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-gray-800 to-gray-700 text-white shadow-lg"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          <div
            className="flex flex-row gap-6 overflow-x-auto pb-4 hide-scrollbar justify-center"
            style={{ marginLeft: "150px" }}
          >
            {products
              .filter((p) => selectedCategory === "tous" || p.type === selectedCategory)
              .map((product, index) => (
                <motion.div
                  key={product.id}
                  className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-md overflow-hidden flex flex-col transform hover:-translate-y-2 transition-all duration-300 border ${
                    product.popular ? "border-yellow-400 ring-2 ring-yellow-400/20" : "border-gray-200"
                  } w-[350px] min-w-[350px]`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.01 }}
                >
                  {product.popular && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-center py-1 text-xs font-bold text-white">
                      ⭐ Le plus populaire
                    </div>
                  )}
                  <div className="p-4 flex-grow">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{product.name}</h3>
                    <p className="text-xs text-gray-600 mb-2 h-8">{product.description}</p>
                    <div className="mb-4">
                      <span className="text-2xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                        {product.price}
                      </span>
                      <span className="text-sm font-medium text-gray-500"> DH</span>
                    </div>
                    <ul className="space-y-2 text-gray-600 mb-4 text-xs">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-2">
                            <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 mt-auto">
                    <motion.button
                      className="w-full bg-gradient-to-r from-gray-800 to-gray-700 text-white py-2 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-600 transition"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleSelectProduct(product)}
                    >
                      🛒 Prendre ce forfait
                    </motion.button>
                  </div>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>

      {/* Modal de validation de commande */}
      {showValidationModal && orderToValidate && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-full max-w-2xl max-h-[90vh] flex flex-col border border-gray-200"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Confirmer votre commande
              </h2>
              <motion.button
                onClick={() => setShowValidationModal(false)}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-xl hover:bg-gray-100 transition-all"
                whileHover={{ scale: 1.2, rotate: 90 }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </motion.button>
            </div>

            <div className="overflow-y-auto flex-grow">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-6 border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📋</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-900">
                      {orderToValidate.type === "predefined" ? orderToValidate.product.name : orderToValidate.pack.name}
                    </h3>
                    <p className="text-blue-600">
                      {orderToValidate.type === "predefined"
                        ? orderToValidate.product.description
                        : orderToValidate.pack.description}
                    </p>
                  </div>
                </div>

                {orderToValidate.type === "predefined" ? (
                  <div className="space-y-3">
                    {orderToValidate.product.features.map((feature, index) => (
                      <div key={index} className="flex items-center bg-white/70 p-3 rounded-xl">
                        <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-3">
                    {Object.entries(orderToValidate.services || {}).map(([serviceKey, quantity]) => {
                      if (quantity > 0) {
                        return (
                          <div key={serviceKey} className="bg-white/70 p-3 rounded-xl">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-gray-700 capitalize">
                                {formatServiceName(serviceKey)}
                              </span>
                              <span className="text-lg font-bold text-gray-900">x{quantity}</span>
                            </div>
                          </div>
                        )
                      }
                      return null
                    })}
                  </div>
                )}
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-bold text-gray-700">Total à payer</h4>
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {orderToValidate.total} DH
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-6">
                <div className="flex items-center">
                  <span className="text-yellow-600 text-xl mr-3">⚠️</span>
                  <div>
                    <h4 className="font-semibold text-yellow-800">Conditions importantes</h4>
                    <p className="text-sm text-yellow-700">
                      En confirmant cette commande, vous acceptez nos conditions générales de vente et notre politique
                      de remboursement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <motion.button
                onClick={() => setShowValidationModal(false)}
                className="flex-1 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 py-4 rounded-2xl font-bold hover:from-gray-300 hover:to-gray-400 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Annuler
              </motion.button>
              <motion.button
                onClick={handleConfirmOrder}
                className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-2xl font-bold hover:from-green-500 hover:to-emerald-500 transition-all shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                💳 Procéder au paiement
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Modal de paiement */}
      {showPaymentModal && orderToValidate && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-full max-w-4xl max-h-[90vh] flex flex-col border border-gray-200"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Finaliser votre commande
              </h2>
              <motion.button
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-xl hover:bg-gray-100 transition-all"
                whileHover={{ scale: 1.2, rotate: 90 }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </motion.button>
            </div>

            <div className="overflow-y-auto flex-grow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Formulaire de paiement */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                    <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <span className="text-2xl mr-3">👤</span>
                      Informations personnelles
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Prénom"
                        value={paymentForm.firstName}
                        onChange={(e) => handlePaymentFormChange("firstName", e.target.value)}
                        className="p-3 rounded-xl border-2 border-blue-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all bg-white/70 backdrop-blur-sm"
                      />
                      <input
                        type="text"
                        placeholder="Nom"
                        value={paymentForm.lastName}
                        onChange={(e) => handlePaymentFormChange("lastName", e.target.value)}
                        className="p-3 rounded-xl border-2 border-blue-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all bg-white/70 backdrop-blur-sm"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        value={paymentForm.email}
                        onChange={(e) => handlePaymentFormChange("email", e.target.value)}
                        className="p-3 rounded-xl border-2 border-blue-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all bg-white/70 backdrop-blur-sm md:col-span-2"
                      />
                      <input
                        type="tel"
                        placeholder="Téléphone"
                        value={paymentForm.phone}
                        onChange={(e) => handlePaymentFormChange("phone", e.target.value)}
                        className="p-3 rounded-xl border-2 border-blue-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all bg-white/70 backdrop-blur-sm"
                      />
                      <input
                        type="text"
                        placeholder="Entreprise (optionnel)"
                        value={paymentForm.company}
                        onChange={(e) => handlePaymentFormChange("company", e.target.value)}
                        className="p-3 rounded-xl border-2 border-blue-200 focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all bg-white/70 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                    <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center">
                      <span className="text-2xl mr-3">📍</span>
                      Adresse de facturation
                    </h3>
                    <div className="space-y-4">
                      <input
                        type="text"
                        placeholder="Adresse"
                        value={paymentForm.address}
                        onChange={(e) => handlePaymentFormChange("address", e.target.value)}
                        className="w-full p-3 rounded-xl border-2 border-purple-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all bg-white/70 backdrop-blur-sm"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Ville"
                          value={paymentForm.city}
                          onChange={(e) => handlePaymentFormChange("city", e.target.value)}
                          className="p-3 rounded-xl border-2 border-purple-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all bg-white/70 backdrop-blur-sm"
                        />
                        <input
                          type="text"
                          placeholder="Code postal"
                          value={paymentForm.postalCode}
                          onChange={(e) => handlePaymentFormChange("postalCode", e.target.value)}
                          className="p-3 rounded-xl border-2 border-purple-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all bg-white/70 backdrop-blur-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                    <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                      <span className="text-2xl mr-3">💳</span>
                      Méthode de paiement
                    </h3>

                    <div className="space-y-4 mb-4">
                      <div className="flex gap-4">
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="card"
                            checked={paymentForm.paymentMethod === "card"}
                            onChange={(e) => handlePaymentFormChange("paymentMethod", e.target.value)}
                            className="mr-2"
                          />
                          <span className="text-green-800 font-medium">💳 Carte bancaire</span>
                        </label>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="paypal"
                            checked={paymentForm.paymentMethod === "paypal"}
                            onChange={(e) => handlePaymentFormChange("paymentMethod", e.target.value)}
                            className="mr-2"
                          />
                          <span className="text-green-800 font-medium">🅿️ PayPal</span>
                        </label>
                      </div>
                    </div>

                    {paymentForm.paymentMethod === "card" && (
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="Numéro de carte"
                          value={paymentForm.cardNumber}
                          onChange={(e) => handlePaymentFormChange("cardNumber", e.target.value)}
                          className="w-full p-3 rounded-xl border-2 border-green-200 focus:border-green-400 focus:ring-4 focus:ring-green-100 transition-all bg-white/70 backdrop-blur-sm"
                        />
                        <div className="grid grid-cols-3 gap-4">
                          <input
                            type="text"
                            placeholder="MM/AA"
                            value={paymentForm.expiryDate}
                            onChange={(e) => handlePaymentFormChange("expiryDate", e.target.value)}
                            className="p-3 rounded-xl border-2 border-green-200 focus:border-green-400 focus:ring-4 focus:ring-green-100 transition-all bg-white/70 backdrop-blur-sm"
                          />
                          <input
                            type="text"
                            placeholder="CVV"
                            value={paymentForm.cvv}
                            onChange={(e) => handlePaymentFormChange("cvv", e.target.value)}
                            className="p-3 rounded-xl border-2 border-green-200 focus:border-green-400 focus:ring-4 focus:ring-green-100 transition-all bg-white/70 backdrop-blur-sm"
                          />
                          <input
                            type="text"
                            placeholder="Nom sur la carte"
                            value={paymentForm.cardName}
                            onChange={(e) => handlePaymentFormChange("cardName", e.target.value)}
                            className="p-3 rounded-xl border-2 border-green-200 focus:border-green-400 focus:ring-4 focus:ring-green-100 transition-all bg-white/70 backdrop-blur-sm"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Résumé de commande */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 sticky top-0">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <span className="text-2xl mr-3">📋</span>
                      Résumé de commande
                    </h3>

                    <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 mb-4">
                      <h4 className="font-bold text-gray-800 mb-2">
                        {orderToValidate.type === "predefined"
                          ? orderToValidate.product.name
                          : orderToValidate.pack.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {orderToValidate.type === "predefined"
                          ? orderToValidate.product.description
                          : orderToValidate.pack.description}
                      </p>

                      {orderToValidate.type === "custom" && (
                        <div className="space-y-2">
                          {Object.entries(orderToValidate.services || {}).map(([serviceKey, quantity]) => {
                            if (quantity > 0) {
                              return (
                                <div key={serviceKey} className="flex justify-between text-sm">
                                  <span className="text-gray-600 capitalize">
                                    {formatServiceName(serviceKey)}
                                  </span>
                                  <span className="font-medium">x{quantity}</span>
                                </div>
                              )
                            }
                            return null
                          })}
                        </div>
                      )}
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sous-total</span>
                        <span className="font-medium">{orderToValidate.total} DH</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Remise Gold (-10%)</span>
                        <span>-{Math.round(orderToValidate.total * 0.1)} DH</span>
                      </div>
                      <div className="border-t border-gray-300 pt-3">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-gray-800">Total</span>
                          <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                            {Math.round(orderToValidate.total * 0.9)} DH
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
                      <div className="flex items-center">
                        <span className="text-green-600 text-xl mr-3">🔒</span>
                        <div>
                          <h4 className="font-semibold text-green-800">Paiement sécurisé</h4>
                          <p className="text-sm text-green-700">
                            Vos données sont protégées par un cryptage SSL 256 bits
                          </p>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      onClick={handlePayment}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-green-500 hover:to-emerald-500 transition-all shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={!paymentForm.email || !paymentForm.firstName || !paymentForm.lastName}
                    >
                      <div className="flex items-center justify-center">
                        <span className="text-2xl mr-3">💳</span>
                        Finaliser le paiement ({Math.round(orderToValidate.total * 0.9)} DH)
                      </div>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Modal des forfaits personnalisés avec design moderne */}
      {showPackModal && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-full max-w-6xl max-h-[90vh] flex flex-col border border-gray-200"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                {selectedPack && (
                  <motion.button
                    onClick={() => setSelectedPack(null)}
                    className="text-gray-500 hover:text-gray-700 p-3 rounded-xl hover:bg-gray-100 transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                )}
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  {selectedPack ? selectedPack.name : "Choisissez votre forfait"}
                </h2>
              </div>
              <motion.button
                onClick={handleClosePackModal}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-xl hover:bg-gray-100 transition-all"
                whileHover={{ scale: 1.2, rotate: 90 }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </motion.button>
            </div>

            <div className="overflow-y-auto flex-grow">
              {!selectedPack ? (
                // Vue de sélection des forfaits avec design moderne
                <div className="w-full grid grid-cols-2 gap-8">
                  {customPacks.map((pack, index) => (
                    <motion.button
                      key={pack.id}
                      onClick={() => { setSelectedPack(pack); setShowPackModal(true); }}
                      className={`relative overflow-hidden bg-gradient-to-br ${pack.bgGradient} border-2 border-transparent bg-clip-padding rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 text-left group`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        background: `linear-gradient(135deg, ${pack.bgGradient.replace("from-", "").replace(" to-", ", ")})`,
                        borderImage: `linear-gradient(135deg, ${pack.borderGradient.replace("from-", "").replace(" to-", ", ")}) 1`,
                      }}
                    >
                      {/* Infos du pack */}
                      <div className="flex items-center mb-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${pack.gradient} rounded-2xl flex items-center justify-center text-2xl mr-4 shadow-lg`}
                        >
                          {pack.emoji}
                        </div>
                        <div>
                          <h3 className={`text-2xl font-bold ${pack.textColor} mb-1`}>{pack.name}</h3>
                          <span className="text-sm text-gray-500">À partir de {getMinServicePrice(pack)} DH</span>
                          <span className="text-xs text-yellow-700 font-semibold block mt-1">
                            Minimum {pack.id === 'web' ? 1500 : 4000} DH
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg mb-4 font-medium">{pack.summary}</p>
                      <p className="text-gray-600 text-sm mb-6">{pack.description}</p>
                    </motion.button>
                  ))}
                </div>
              ) : (
                // Vue du formulaire du forfait sélectionné avec design moderne
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`bg-gradient-to-br ${selectedPack.bgGradient} rounded-2xl p-8 border-2 border-gray-200`}
                >
                  <div className="flex items-center mb-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${selectedPack.gradient} rounded-2xl flex items-center justify-center text-3xl mr-6 shadow-xl`}
                    >
                      {selectedPack.emoji}
                    </div>
                    <div>
                      <h3 className={`text-3xl font-bold ${selectedPack.textColor} mb-2`}>{selectedPack.name}</h3>
                      <p className="text-gray-600">{selectedPack.description}</p>
                    </div>
                  </div>

                  <div className="space-y-6 mb-8">
                    {selectedPack.id === "global" ? (
                      (() => {
                        const globalGroups = [
                          {
                            title: "Web",
                            services: [
                              "Articles", "Bannières", "Web page", "Produits (shopify)"
                            ]
                          },
                          {
                            title: "Visual",
                            services: [
                              "Shooting photo/vidéo", "Conception infographique", "Shooting (demi-journée)", "Shooting (journée)",
                              "Conception page", "Option Drone", "Création de logo (3 propositions)",
                              "Creation de charte graphique (Simple)", "Creation de charte graphique (Medium)"
                            ]
                          },
                          {
                            title: "Social",
                            services: [
                              "Visuel simple", "Carrousel", "Stories", "Reel Standard (BI simple)",
                              "Reel Medium (Dynamique/Tournage sans ST)", "Reel Premium (Tournage avec ST)",
                              "Vidéo YouTube courte (>5 min)", "Vidéo YouTube longue (<5 min)"
                            ]
                          }
                        ];
                        return globalGroups.map(group => (
                          <div key={group.title} className="mb-8">
                            <h3 className="text-2xl font-bold mb-4 text-green-900">{group.title}</h3>
                            {selectedPack.services
                              .filter(service => group.services.includes(service.name))
                              .map((service, serviceIndex) => {
                      const serviceKey = service.name
                        .toLowerCase()
                        .replace(/[^a-z0-9]/g, "")
                        .replace("photovideo", "")
                        .replace("conceptioninfographique", "infographie")
                        .replace("visuelsimp", "visuelSimple")
                        .replace("reelvideocoure", "reel")
                                  .replace("shootingphotovideo", "shooting");
                      return (
                        <motion.div
                          key={serviceIndex}
                                    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200 mb-4"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: serviceIndex * 0.1 }}
                        >
                          <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                              <span className="text-2xl mr-3">{service.icon}</span>
                              <div>
                                <span className="font-semibold text-gray-800 text-lg">{service.name}</span>
                                {service.unit && <div className="text-xs text-gray-500">{service.unit}</div>}
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="font-bold text-2xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                {service.price} DH
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <label className="text-sm text-gray-600 font-medium min-w-0 flex-shrink-0">Quantité:</label>
                            <button
                              type="button"
                              className="w-8 h-8 rounded-full bg-red-200 hover:bg-red-400 text-red-700 hover:text-white flex items-center justify-center text-xl font-bold transition"
                              onClick={() =>
                                handlePackFormChange(
                                  selectedPack.id,
                                  serviceKey,
                                  Math.max(0, (packForms[selectedPack.id][serviceKey] || 0) - 1)
                                )
                              }
                            >-</button>
                            <input
                              type="number"
                              min="0"
                              value={packForms[selectedPack.id][serviceKey] || 0}
                              onChange={(e) => handlePackFormChange(selectedPack.id, serviceKey, e.target.value)}
                              className="flex-1 p-3 text-center rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all bg-white/70 backdrop-blur-sm"
                            />
                            <button
                              type="button"
                              className="w-8 h-8 rounded-full bg-green-200 hover:bg-green-400 text-green-700 hover:text-white flex items-center justify-center text-xl font-bold transition"
                              onClick={() =>
                                handlePackFormChange(
                                  selectedPack.id,
                                  serviceKey,
                                  (packForms[selectedPack.id][serviceKey] || 0) + 1
                                )
                              }
                            >+</button>
                            <div className="text-lg font-bold text-gray-700 min-w-0 flex-shrink-0 bg-gray-100 px-4 py-2 rounded-xl">
                              = {(packForms[selectedPack.id][serviceKey] || 0) * service.price} DH
                            </div>
                          </div>
                        </motion.div>
                                );
                    })}
                          </div>
                        ));
                      })()
                    ) : (
                      <div className="space-y-6 mb-8">
                        {selectedPack.services.map((service, serviceIndex) => {
                          const serviceKey = service.name
                            .toLowerCase()
                            .replace(/[^a-z0-9]/g, "")
                            .replace("photovideo", "")
                            .replace("conceptioninfographique", "infographie")
                            .replace("visuelsimp", "visuelSimple")
                            .replace("reelvideocoure", "reel")
                            .replace("shootingphotovideo", "shooting");
                          return (
                            <motion.div
                              key={serviceIndex}
                              className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200 mb-4"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: serviceIndex * 0.1 }}
                            >
                              <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center">
                                  <span className="text-2xl mr-3">{service.icon}</span>
                                  <div>
                                    <span className="font-semibold text-gray-800 text-lg">{service.name}</span>
                                    {service.unit && <div className="text-xs text-gray-500">{service.unit}</div>}
                                  </div>
                                </div>
                                <div className="text-right">
                                  <span className="font-bold text-2xl bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                    {service.price} DH
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-4">
                                <label className="text-sm text-gray-600 font-medium min-w-0 flex-shrink-0">Quantité:</label>
                                <button
                                  type="button"
                                  className="w-8 h-8 rounded-full bg-red-200 hover:bg-red-400 text-red-700 hover:text-white flex items-center justify-center text-xl font-bold transition"
                                  onClick={() =>
                                    handlePackFormChange(
                                      selectedPack.id,
                                      serviceKey,
                                      Math.max(0, (packForms[selectedPack.id][serviceKey] || 0) - 1)
                                    )
                                  }
                                >-</button>
                                <input
                                  type="number"
                                  min="0"
                                  value={packForms[selectedPack.id][serviceKey] || 0}
                                  onChange={(e) => handlePackFormChange(selectedPack.id, serviceKey, e.target.value)}
                                  className="flex-1 p-3 text-center rounded-xl border-2 border-gray-200 shadow-sm focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all bg-white/70 backdrop-blur-sm"
                                />
                                <button
                                  type="button"
                                  className="w-8 h-8 rounded-full bg-green-200 hover:bg-green-400 text-green-700 hover:text-white flex items-center justify-center text-xl font-bold transition"
                                  onClick={() =>
                                    handlePackFormChange(
                                      selectedPack.id,
                                      serviceKey,
                                      (packForms[selectedPack.id][serviceKey] || 0) + 1
                                    )
                                  }
                                >+</button>
                                <div className="text-lg font-bold text-gray-700 min-w-0 flex-shrink-0 bg-gray-100 px-4 py-2 rounded-xl">
                                  = {(packForms[selectedPack.id][serviceKey] || 0) * service.price} DH
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-6 border border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-700">Total du forfait:</span>
                      <span
                        className={`text-4xl font-bold bg-gradient-to-r ${selectedPack.gradient} bg-clip-text text-transparent`}
                      >
                        {calculatePackTotal(selectedPack.id)} DH
                      </span>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => {
                      const packData = {
                        type: selectedPack.id,
                        name: selectedPack.name,
                        services: packForms[selectedPack.id],
                        total: calculatePackTotal(selectedPack.id),
                      }
                      savePack(packData)
                      handleClosePackModal()
                    }}
                    className={`w-full bg-gradient-to-r ${selectedPack.buttonGradient} text-white py-4 px-6 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={calculatePackTotal(selectedPack.id) < 4000}
                  >
                    <div className="flex items-center justify-center">
                      <span className="text-2xl mr-3">✅</span>
                      Sauvegarder ce pack ({calculatePackTotal(selectedPack.id)} DH)
                    </div>
                  </motion.button>
                  {calculatePackTotal(selectedPack.id) < 4000 && (
                    <div className="text-red-600 font-semibold mt-2">
                      Le montant minimum pour valider ce forfait est de 4000 DH.
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Modal de devis personnalisé (ancienne modal) */}
      {showDevisModal && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-full max-w-2xl max-h-[90vh] flex flex-col border border-gray-200"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Créez votre pack sur mesure
              </h2>
              <motion.button
                onClick={() => setShowDevisModal(false)}
                className="text-gray-400 hover:text-gray-600 p-2 rounded-xl hover:bg-gray-100 transition-all"
                whileHover={{ scale: 1.2, rotate: 90 }}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </motion.button>
            </div>

            <div className="overflow-y-auto flex-grow pr-2">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Posts */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center border border-blue-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">📝</span>
                  </div>
                  <label className="text-lg font-bold text-blue-900 mb-3 block">Posts</label>
                  <p className="text-xs text-blue-600 mb-4 font-medium">100 DH/unité</p>
                  <input
                    type="number"
                    value={devisItems.posts}
                    onChange={(e) => handleQuantityChange("posts", e.target.value)}
                    className="w-full p-3 text-center rounded-xl border-2 border-blue-200 shadow-sm focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all bg-white/70 backdrop-blur-sm"
                  />
                </div>
                {/* Stories */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center border border-purple-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">📖</span>
                  </div>
                  <label className="text-lg font-bold text-purple-900 mb-3 block">Stories</label>
                  <p className="text-xs text-purple-600 mb-4 font-medium">100 DH/unité</p>
                  <input
                    type="number"
                    value={devisItems.stories}
                    onChange={(e) => handleQuantityChange("stories", e.target.value)}
                    className="w-full p-3 text-center rounded-xl border-2 border-purple-200 shadow-sm focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all bg-white/70 backdrop-blur-sm"
                  />
                </div>
                {/* Reels */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 text-center border border-red-200">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-xl">🎥</span>
                  </div>
                  <label className="text-lg font-bold text-red-900 mb-3 block">Reels</label>
                  <p className="text-xs text-red-600 mb-4 font-medium">200 DH/unité</p>
                  <input
                    type="number"
                    value={devisItems.reels}
                    onChange={(e) => handleQuantityChange("reels", e.target.value)}
                    className="w-full p-3 text-center rounded-xl border-2 border-red-200 shadow-sm focus:border-red-400 focus:ring-4 focus:ring-red-100 transition-all bg-white/70 backdrop-blur-sm"
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-200 mt-auto">
              <div className="flex justify-between items-center mb-6 bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl">
                <span className="text-xl font-medium text-gray-600">Total estimé</span>
                <span className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  {calculateTotal()} DH
                </span>
              </div>
              <div className="flex gap-4">
                <motion.button
                  onClick={() => {
                    savePack(devisItems)
                    setShowDevisModal(false)
                  }}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-2xl font-bold hover:from-green-500 hover:to-emerald-500 transition-all shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Sauvegarder mon pack
                </motion.button>
                <motion.button
                  onClick={() => setShowDevisModal(false)}
                  className="w-full bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800 py-4 rounded-2xl font-bold hover:from-gray-300 hover:to-gray-400 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Annuler
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default Boutique
