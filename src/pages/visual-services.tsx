"use client"

import { useState } from "react"
import { Badge } from "../pages/ui/badge"
import { Button } from "../pages/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../pages/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../pages/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../pages/ui/dialog"
import { Camera, Palette, Sparkles, CheckCircle, Star } from "lucide-react"
import PaymentForm from "../components/payment-form"

export default function VisualServices() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedService, setSelectedService] = useState<any>(null)
  const [isPaymentOpen, setIsPaymentOpen] = useState(false)

  const identityServices = [
    {
      id: "SV-01",
      name: "Création de logo",
      description: "Un logo sur mesure, moderne et percutant, qui reflète l'identité de votre marque.",
      price: "6 000",
      icon: "🎨",
      popular: true,
    },
    {
      id: "SV-02",
      name: "Charte graphique Standard",
      description:
        "Les bases essentielles : couleurs, typographies et logos pour assurer la cohérence de vos supports.",
      price: "9 000",
      icon: "📋",
      popular: false,
    },
    {
      id: "SV-03",
      name: "Charte graphique Medium",
      description: "Identité visuelle étendue : déclinaisons pour les réseaux sociaux, papeterie, print & web.",
      price: "11 000",
      icon: "🚀",
      popular: true,
    },
    {
      id: "SV-04",
      name: "Charte graphique Premium",
      description: "Une charte complète avec guidelines détaillées et univers visuel cohérent.",
      price: "20 000",
      icon: "👑",
      popular: false,
    },
    {
      id: "SV-05",
      name: "Forfait Conception Graphique",
      description: "Création de maquettes pour site, brochure ou rapport avec design harmonisé (5 à 10 pages).",
      price: "9 000",
      icon: "📖",
      popular: false,
    },
  ]

  const creativeServices = [
    {
      id: "SV-06",
      name: "Shooting Photos / Vidéos",
      description:
        "Photos et vidéos professionnelles en studio ou extérieur, pour vos produits, vos équipes ou événements.",
      price: "6 000",
      icon: "📸",
      popular: true,
    },
    {
      id: "SV-07",
      name: "Vidéo Motion Design",
      description:
        "Vidéos animées percutantes pour présenter un service ou raconter une histoire de manière dynamique.",
      price: "10 000",
      icon: "🎬",
      popular: true,
    },
    {
      id: "SV-08",
      name: "Vincartoon",
      description: "Transformez vos idées ou anecdotes en BD ou illustrations personnalisées, fun et engageantes.",
      price: "16 000",
      icon: "🎭",
      popular: false,
    },
  ]

  const handleOrderClick = (service: any) => {
    setSelectedService(service)
    setIsPaymentOpen(true)
  }

  const handleClosePayment = () => {
    setIsPaymentOpen(false)
    setSelectedService(null)
  }

  const allServices = [...identityServices, ...creativeServices]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[rgb(120,164,86)] text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Nos Services VISUAL
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Services Créatifs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme de services créatifs conçus pour renforcer votre image de marque et sublimer vos
            contenus visuels.
          </p>
        </div>

        {/* Featured Package */}
        <Card className="mb-12 bg-gradient-to-r from-[rgb(120,164,86)] to-emerald-600 text-white border-0">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1">
                <Badge className="bg-white/20 text-white mb-4" variant="default">
                  <Star className="h-3 w-3 mr-1" />
                  Pack Complet
                </Badge>
                <h2 className="text-3xl font-bold mb-4">Pack Identité Visuelle Premium</h2>
                <p className="text-white/90 mb-6 text-lg">
                  Tout ce dont vous avez besoin pour créer une identité visuelle forte et cohérente pour votre marque.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {[
                    "Logo professionnel sur mesure",
                    "Charte graphique complète",
                    "Déclinaisons multi-supports",
                    "Guidelines détaillées",
                    "Formats vectoriels inclus",
                    "Support et révisions",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-300" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="text-center sm:text-left">
                    <span className="text-white/70 line-through text-lg">35 000 MAD HT</span>
                    <div className="text-3xl font-bold">29 000 MAD HT</div>
                    <span className="text-green-300 text-sm font-medium">Économisez 6 000 MAD</span>
                  </div>
                  <Button
                    size="lg"
                    className="bg-white text-[rgb(120,164,86)] hover:bg-white/90 font-semibold"
                    onClick={() =>
                      handleOrderClick({
                        id: "PACK-PREMIUM",
                        name: "Pack Identité Visuelle Premium",
                        description: "Pack complet avec logo, charte graphique et déclinaisons",
                        price: "29 000",
                        icon: "🎨",
                      })
                    }
                  >
                    Commander le pack
                  </Button>
                </div>
              </div>
              <div className="text-8xl">🎨</div>
            </div>
          </CardContent>
        </Card>

        {/* Services Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-[rgb(120,164,86)] data-[state=active]:text-white"
              >
                Tous les services
              </TabsTrigger>
              <TabsTrigger
                value="identity"
                className="data-[state=active]:bg-[rgb(120,164,86)] data-[state=active]:text-white"
              >
                Identité Visuelle
              </TabsTrigger>
              <TabsTrigger
                value="creative"
                className="data-[state=active]:bg-[rgb(120,164,86)] data-[state=active]:text-white"
              >
                Création Visuelle
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-[rgb(120,164,86)] rounded-lg">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Identité Visuelle & Infographie</h2>
                  <p className="text-gray-600">Créez une identité forte et mémorable</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {identityServices.map((service) => (
                  <Card
                    key={service.id}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    {service.popular && (
                      <div className="absolute -top-2 -right-2 z-10">
                        <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          ⭐ Populaire
                        </div>
                      </div>
                    )}

                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        <div className="text-xs font-semibold text-[rgb(120,164,86)] bg-green-100 px-2 py-1 rounded-full">
                          {service.id}
                        </div>
                      </div>
                      <CardTitle className="text-lg font-bold">{service.name}</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4 text-sm">{service.description}</CardDescription>

                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-bold text-[rgb(120,164,86)]">{service.price}</div>
                          <div className="text-xs text-gray-500">MAD HT</div>
                        </div>
                        <Button
                          className="bg-[rgb(120,164,86)] hover:bg-green-700 text-white transition-colors"
                          onClick={() => handleOrderClick(service)}
                        >
                          Commander
                        </Button>
                      </div>

                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex items-center text-xs text-gray-500">
                          <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                          Livraison sous 7-14 jours
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-pink-500 rounded-lg">
                  <Camera className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Photo, Vidéo & Création Visuelle</h2>
                  <p className="text-gray-600">Donnez vie à vos idées créatives</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {creativeServices.map((service) => (
                  <Card
                    key={service.id}
                    className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    {service.popular && (
                      <div className="absolute -top-2 -right-2 z-10">
                        <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                          ⭐ Populaire
                        </div>
                      </div>
                    )}

                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-4xl">{service.icon}</div>
                        <div className="text-xs font-semibold text-pink-600 bg-pink-100 px-2 py-1 rounded-full">
                          {service.id}
                        </div>
                      </div>
                      <CardTitle className="text-lg font-bold">{service.name}</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4 text-sm">{service.description}</CardDescription>

                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-2xl font-bold text-pink-600">{service.price}</div>
                          <div className="text-xs text-gray-500">MAD HT</div>
                        </div>
                        <Button
                          className="bg-pink-600 hover:bg-pink-700 text-white transition-colors"
                          onClick={() => handleOrderClick(service)}
                        >
                          Commander
                        </Button>
                      </div>

                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex items-center text-xs text-gray-500">
                          <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                          Livraison sous 10-21 jours
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="identity" className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {identityServices.map((service) => (
                <Card
                  key={service.id}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {service.popular && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        ⭐ Populaire
                      </div>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="text-xs font-semibold text-[rgb(120,164,86)] bg-green-100 px-2 py-1 rounded-full">
                        {service.id}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold">{service.name}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 text-sm">{service.description}</CardDescription>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-[rgb(120,164,86)]">{service.price}</div>
                        <div className="text-xs text-gray-500">MAD HT</div>
                      </div>
                      <Button
                        className="bg-[rgb(120,164,86)] hover:bg-green-700 text-white transition-colors"
                        onClick={() => handleOrderClick(service)}
                      >
                        Commander
                      </Button>
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex items-center text-xs text-gray-500">
                        <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                        Livraison sous 7-14 jours
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="creative" className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {creativeServices.map((service) => (
                <Card
                  key={service.id}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  {service.popular && (
                    <div className="absolute -top-2 -right-2 z-10">
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        ⭐ Populaire
                      </div>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="text-xs font-semibold text-pink-600 bg-pink-100 px-2 py-1 rounded-full">
                        {service.id}
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold">{service.name}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 text-sm">{service.description}</CardDescription>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-2xl font-bold text-pink-600">{service.price}</div>
                        <div className="text-xs text-gray-500">MAD HT</div>
                      </div>
                      <Button
                        className="bg-pink-600 hover:bg-pink-700 text-white transition-colors"
                        onClick={() => handleOrderClick(service)}
                      >
                        Commander
                      </Button>
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex items-center text-xs text-gray-500">
                        <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
                        Livraison sous 10-21 jours
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <Card className="mt-12 bg-gray-100 border-0">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Besoin d'un service sur mesure ?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nos experts peuvent créer un service personnalisé adapté à vos besoins spécifiques. Contactez-nous pour
              discuter de votre projet et obtenir un devis sur mesure.
            </p>
            <Button size="lg" className="bg-[rgb(120,164,86)] hover:bg-green-700 text-white">
              Demander un devis personnalisé
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Modal de paiement */}
      <Dialog open={isPaymentOpen} onOpenChange={setIsPaymentOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Finaliser votre commande</DialogTitle>
            <DialogDescription>Complétez les informations ci-dessous pour confirmer votre commande</DialogDescription>
          </DialogHeader>
          <PaymentForm service={selectedService} onClose={handleClosePayment} />
        </DialogContent>
      </Dialog>
    </div>
  )
}
