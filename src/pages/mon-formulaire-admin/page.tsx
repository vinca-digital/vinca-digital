"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Eye, Users, Globe, Save, CheckCircle, Sparkles, ArrowRight, Zap, Printer } from "lucide-react"
import { useToast } from "./ui/use-toast"
import { Checkbox } from "./ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card"
import { Badge } from "./ui/badge"
import DetailedForm from "./detailed-form"
import SidebarAdmin from "../../components/SidebarAdmin"
import NavbarAdmin from "../../components/NavbarAdmin"

interface DetailedSection {
  [key: string]: any;
}

interface FormData {
  mustHave: {
    visual: {
      publicCible: string
      objectifs: string
      styleGraphique: string
      couleurs: string
      budget: string
      services: string[]
    }
    social: {
      plateformes: string
      frequence: string
      typeContenu: string
      audience: string
      planning: string
      services: string[]
    }
    web: {
      typesite: string
      fonctionnalites: string
      contenu: string
      hebergement: string
      maintenance: string
      services: string[]
    }
  }
  detailed: {
    visual: DetailedSection
    social: DetailedSection
    web: DetailedSection
  }
}

const initialFormData: FormData = {
  mustHave: {
    visual: {
      publicCible: "",
      objectifs: "",
      styleGraphique: "",
      couleurs: "",
      budget: "",
      services: [],
    },
    social: {
      plateformes: "",
      frequence: "",
      typeContenu: "",
      audience: "",
      planning: "",
      services: [],
    },
    web: {
      typesite: "",
      fonctionnalites: "",
      contenu: "",
      hebergement: "",
      maintenance: "",
      services: [],
    },
  },
  detailed: {
    visual: {
      goodiesTypes: [],
      logoRefonte: "",
      dateTournage: "",
      budgetDetaille: "",
      delaiLivraison: "",
    },
    social: {
      reseauxUtilises: [],
      nombrePublications: "",
      typePublications: [],
      objectifsCommunication: [],
      outilsUtilises: [],
      budgetPub: "",
    },
    web: {
      typeSiteDetaille: "",
      fonctionnalitesSpecifiques: [],
      hebergementDetails: "",
      contenusIntegrer: [],
      maintenanceDetails: "",
      formationsRequises: false,
    },
  },
}

function Recapitulatif({ formData }: { formData: FormData }) {
  const { toast } = useToast()

  const isMustHaveCompleted = () => {
    if (!formData?.mustHave) return false

    const { visual, social, web } = formData.mustHave
    return (
      visual?.publicCible &&
      visual?.objectifs &&
      (visual?.services?.length || 0) > 0 &&
      social?.plateformes &&
      social?.frequence &&
      (social?.services?.length || 0) > 0 &&
      web?.typesite &&
      web?.fonctionnalites &&
      (web?.services?.length || 0) > 0
    )
  }

  const handleSave = () => {
    localStorage.setItem("servicesFormData", JSON.stringify(formData))
    toast({
      title: "✅ Données sauvegardées",
      description: "Vos informations ont été enregistrées avec succès.",
    })
  }

  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50 rounded-3xl -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-100/10 via-transparent to-transparent rounded-3xl -z-10" />

      <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-3xl p-10 shadow-2xl shadow-gray-500/10">
        <div className="text-center mb-12 relative">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700 px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-gray-200/50">
            <Zap className="w-4 h-4" />
            Étape 1
          </div>

          <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">MUST HAVE</h2>
          <p className="text-gray-600 text-lg leading-relaxed">Définissez les bases de votre projet créatif</p>

          {isMustHaveCompleted() && (
            <div className="flex items-center justify-center gap-2 mt-6 text-emerald-600">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Votre MUST HAVE est complété !</span>
            </div>
          )}
        </div>

        <Tabs value="visual" onValueChange={() => {}} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-gray-100/50 backdrop-blur-sm p-2 rounded-2xl border border-gray-200/50">
            <TabsTrigger
              value="visual"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-amber-500/25 rounded-xl transition-all duration-300 font-semibold"
            >
              <Eye className="w-4 h-4 mr-2" />
              VISUAL
            </TabsTrigger>
            <TabsTrigger
              value="social"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-rose-500/25 rounded-xl transition-all duration-300 font-semibold"
            >
              <Users className="w-4 h-4 mr-2" />
              SOCIAL
            </TabsTrigger>
            <TabsTrigger
              value="web"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25 rounded-xl transition-all duration-300 font-semibold"
            >
              <Globe className="w-4 h-4 mr-2" />
              WEB
            </TabsTrigger>
          </TabsList>

          {/* Visual Tab */}
          <TabsContent value="visual" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                <Label htmlFor="publicCible" className="text-amber-700 font-bold text-lg flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                  Public cible *
                      </Label>
                <Input
                  id="publicCible"
                  placeholder="Décrivez votre audience cible..."
                  value={formData.mustHave.visual?.publicCible || ""}
                  className="border-amber-200/50 focus:border-amber-500 bg-white/60 backdrop-blur-sm rounded-xl h-12 text-base"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="objectifs" className="text-amber-700 font-bold text-lg flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Objectifs du projet *
                </Label>
                <Input
                  id="objectifs"
                  placeholder="Quels sont vos objectifs ?"
                  value={formData.mustHave.visual?.objectifs || ""}
                  className="border-amber-200/50 focus:border-amber-500 bg-white/60 backdrop-blur-sm rounded-xl h-12 text-base"
                />
              </div>

              <div className="space-y-6 md:col-span-2">
                <Label className="text-amber-700 font-bold text-xl flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Services VISUAL requis *
                </Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {servicesDetails.visual.map((service: string) => (
                          <div
                      key={service}
                      className="flex items-center space-x-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-amber-200/30 hover:bg-white/80 transition-all duration-200"
                          >
                            <Checkbox
                        id={`visual-${service}`}
                        checked={formData.mustHave.visual?.services?.includes(service) || false}
                        onCheckedChange={(checked) => {
                          const currentServices = formData.mustHave.visual?.services || []
                          const newServices = checked ? [...currentServices, service] : currentServices.filter((s: string) => s !== service)
                          // updateFormData("mustHave", "visual", "services", newServices) // This function is not defined here
                        }}
                              className="border-amber-300 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-amber-500 data-[state=checked]:to-orange-500"
                            />
                            <Label
                        htmlFor={`visual-${service}`}
                              className="text-sm font-medium text-gray-700 cursor-pointer"
                            >
                        {service}
                            </Label>
                          </div>
                        ))}
                    </div>
                  </div>

                    <div className="space-y-3">
                <Label htmlFor="styleGraphique" className="text-amber-700 font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Style graphique souhaité
                      </Label>
                <Select onValueChange={(value) => {
                  // updateFormData("mustHave", "visual", "styleGraphique", value) // This function is not defined here
                }}>
                        <SelectTrigger className="border-amber-200/50 focus:border-amber-500 bg-white/60 backdrop-blur-sm rounded-xl h-12">
                    <SelectValue placeholder="Choisissez un style" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-amber-200/50">
                    <SelectItem value="moderne" className="rounded-lg">
                      Moderne
                            </SelectItem>
                    <SelectItem value="classique" className="rounded-lg">
                      Classique
                    </SelectItem>
                    <SelectItem value="minimaliste" className="rounded-lg">
                      Minimaliste
                    </SelectItem>
                    <SelectItem value="vintage" className="rounded-lg">
                      Vintage
                    </SelectItem>
                    <SelectItem value="artistique" className="rounded-lg">
                      Artistique
                    </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                <Label htmlFor="couleurs" className="text-amber-700 font-bold flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                  Couleurs préférées
                      </Label>
                      <Input
                  id="couleurs"
                  placeholder="Ex: Bleu, blanc, rouge..."
                  value={formData.mustHave.visual?.couleurs || ""}
                  className="border-amber-200/50 focus:border-amber-500 bg-white/60 backdrop-blur-sm rounded-xl h-12 text-base"
                      />
                    </div>
                    </div>
          </TabsContent>

          {/* Social Tab */}
          <TabsContent value="social" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                <Label htmlFor="plateformes" className="text-rose-700 font-bold text-lg flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                  Plateformes ciblées *
                      </Label>
                <Input
                  id="plateformes"
                  placeholder="Facebook, Instagram, LinkedIn..."
                  value={formData.mustHave.social?.plateformes || ""}
                  className="border-rose-200/50 focus:border-rose-500 bg-white/60 backdrop-blur-sm rounded-xl h-12 text-base"
                />
                          </div>
                    <div className="space-y-3">
                <Label htmlFor="frequence" className="text-rose-700 font-bold text-lg flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                  Fréquence de publication *
                      </Label>
                <Select onValueChange={(value) => {
                  // updateFormData("mustHave", "social", "frequence", value) // This function is not defined here
                }}>
                      <SelectTrigger className="border-rose-200/50 focus:border-rose-500 bg-white/60 backdrop-blur-sm rounded-xl h-12">
                        <SelectValue placeholder="Choisissez la fréquence" />
                      </SelectTrigger>
                      <SelectContent className="rounded-xl border-rose-200/50">
                    <SelectItem value="quotidien" className="rounded-lg">
                      Quotidien
                        </SelectItem>
                    <SelectItem value="3-fois-semaine" className="rounded-lg">
                      3 fois par semaine
                        </SelectItem>
                    <SelectItem value="hebdomadaire" className="rounded-lg">
                      Hebdomadaire
                        </SelectItem>
                    <SelectItem value="bi-hebdomadaire" className="rounded-lg">
                      Bi-hebdomadaire
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

              <div className="space-y-6 md:col-span-2">
                <Label className="text-rose-700 font-bold text-xl flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Services SOCIAL requis *
                    </Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {servicesDetails.social.map((service: string) => (
                        <div
                      key={service}
                      className="flex items-center space-x-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-rose-200/30 hover:bg-white/80 transition-all duration-200"
                        >
                          <Checkbox
                        id={`social-${service}`}
                        checked={formData.mustHave.social?.services?.includes(service) || false}
                        onCheckedChange={(checked) => {
                          const currentServices = formData.mustHave.social?.services || []
                          const newServices = checked ? [...currentServices, service] : currentServices.filter((s: string) => s !== service)
                          // updateFormData("mustHave", "social", "services", newServices) // This function is not defined here
                        }}
                            className="border-rose-300 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-rose-500 data-[state=checked]:to-pink-500"
                          />
                          <Label
                        htmlFor={`social-${service}`}
                            className="text-sm font-medium text-gray-700 cursor-pointer"
                          >
                        {service}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

              <div className="space-y-3">
                <Label htmlFor="typeContenu" className="text-rose-700 font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Type de contenu souhaité
                    </Label>
                <Textarea
                  id="typeContenu"
                  placeholder="Photos, vidéos, articles, stories..."
                  value={formData.mustHave.social?.typeContenu || ""}
                  className="border-rose-200/50 focus:border-rose-500 bg-white/60 backdrop-blur-sm rounded-xl min-h-[100px] resize-none"
                  rows={3}
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="audience" className="text-rose-700 font-bold flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Taille d'audience visée
                          </Label>
                <Select onValueChange={(value) => {
                  // updateFormData("mustHave", "social", "audience", value) // This function is not defined here
                }}>
                  <SelectTrigger className="border-rose-200/50 focus:border-rose-500 bg-white/60 backdrop-blur-sm rounded-xl h-12">
                    <SelectValue placeholder="Objectif d'audience" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-rose-200/50">
                    <SelectItem value="1000" className="rounded-lg">
                      1 000 followers
                    </SelectItem>
                    <SelectItem value="5000" className="rounded-lg">
                      5 000 followers
                    </SelectItem>
                    <SelectItem value="10000" className="rounded-lg">
                      10 000 followers
                    </SelectItem>
                    <SelectItem value="50000+" className="rounded-lg">
                      50 000+ followers
                    </SelectItem>
                  </SelectContent>
                </Select>
                        </div>
                    </div>
          </TabsContent>

          {/* Web Tab */}
          <TabsContent value="web" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                <Label htmlFor="typesite" className="text-blue-700 font-bold text-lg flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                  Type de site web *
                    </Label>
                <Select onValueChange={(value) => {
                  // updateFormData("mustHave", "web", "typesite", value) // This function is not defined here
                }}>
                  <SelectTrigger className="border-blue-200/50 focus:border-blue-500 bg-white/60 backdrop-blur-sm rounded-xl h-12">
                    <SelectValue placeholder="Choisissez le type de site" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-blue-200/50">
                    <SelectItem value="vitrine" className="rounded-lg">
                      Site vitrine
                    </SelectItem>
                    <SelectItem value="ecommerce" className="rounded-lg">
                      E-commerce
                    </SelectItem>
                    <SelectItem value="blog" className="rounded-lg">
                      Blog
                    </SelectItem>
                    <SelectItem value="portfolio" className="rounded-lg">
                      Portfolio
                    </SelectItem>
                    <SelectItem value="application" className="rounded-lg">
                      Application web
                    </SelectItem>
                  </SelectContent>
                </Select>
                  </div>
                    <div className="space-y-3">
                            <Label
                  htmlFor="fonctionnalites"
                  className="text-blue-700 font-bold text-lg flex items-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  Fonctionnalités requises *
                    </Label>
                    <Textarea
                  id="fonctionnalites"
                  placeholder="Contact, réservation, paiement en ligne..."
                  value={formData.mustHave.web?.fonctionnalites || ""}
                  className="border-blue-200/50 focus:border-blue-500 bg-white/60 backdrop-blur-sm rounded-xl min-h-[100px] resize-none"
                  rows={3}
                    />
                  </div>

              <div className="space-y-6 md:col-span-2">
                <Label className="text-blue-700 font-bold text-xl flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  Services WEB requis *
                      </Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {servicesDetails.web.map((service: string) => (
                          <div
                      key={service}
                      className="flex items-center space-x-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-blue-200/30 hover:bg-white/80 transition-all duration-200"
                          >
                            <Checkbox
                        id={`web-${service}`}
                        checked={formData.mustHave.web?.services?.includes(service) || false}
                        onCheckedChange={(checked) => {
                          const currentServices = formData.mustHave.web?.services || []
                          const newServices = checked ? [...currentServices, service] : currentServices.filter((s: string) => s !== service)
                          // updateFormData("mustHave", "web", "services", newServices) // This function is not defined here
                        }}
                              className="border-blue-300 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-500 data-[state=checked]:to-cyan-500"
                            />
                            <Label
                        htmlFor={`web-${service}`}
                              className="text-sm font-medium text-gray-700 cursor-pointer"
                            >
                        {service}
                            </Label>
                          </div>
                        ))}
                    </div>
                  </div>

              <div className="space-y-3">
                <Label htmlFor="contenu" className="text-blue-700 font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Contenu du site
                    </Label>
                    <Textarea
                  id="contenu"
                  placeholder="Décrivez le contenu à intégrer..."
                  value={formData.mustHave.web?.contenu || ""}
                      className="border-blue-200/50 focus:border-blue-500 bg-white/60 backdrop-blur-sm rounded-xl min-h-[100px] resize-none"
                  rows={3}
                    />
                  </div>
              <div className="space-y-3">
                <Label htmlFor="hebergement" className="text-blue-700 font-bold flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  Hébergement souhaité
                    </Label>
                <Select onValueChange={(value) => {
                  // updateFormData("mustHave", "web", "hebergement", value) // This function is not defined here
                }}>
                  <SelectTrigger className="border-blue-200/50 focus:border-blue-500 bg-white/60 backdrop-blur-sm rounded-xl h-12">
                    <SelectValue placeholder="Type d'hébergement" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-blue-200/50">
                    <SelectItem value="shared" className="rounded-lg">
                      Hébergement partagé
                    </SelectItem>
                    <SelectItem value="vps" className="rounded-lg">
                      Serveur VPS
                    </SelectItem>
                    <SelectItem value="dedicated" className="rounded-lg">
                      Serveur dédié
                    </SelectItem>
                    <SelectItem value="cloud" className="rounded-lg">
                      Cloud (AWS, Vercel...)
                    </SelectItem>
                  </SelectContent>
                </Select>
                  </div>
                </div>
          </TabsContent>
        </Tabs>

        {/* Progress Indicator Moderne */}
        <div className="mt-12 p-6 bg-gradient-to-r from-gray-50/50 to-slate-50/50 backdrop-blur-sm rounded-2xl border border-gray-200/30">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-bold text-gray-700 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Progression MUST HAVE
            </span>
            <span
              className={`text-sm font-semibold px-3 py-1 rounded-full ${isMustHaveCompleted() ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}
            >
              {isMustHaveCompleted() ? "✅ Complété" : "⏳ En cours"}
            </span>
      </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className={`h-3 rounded-full transition-all duration-1000 ${
                isMustHaveCompleted()
                  ? "bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 w-full"
                  : "bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 w-1/2"
              }`}
            />
    </div>
        </div>

        {/* Save Button Moderne */}
        <div className="flex justify-center mt-12">
          <Button
            onClick={handleSave}
            className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 hover:from-violet-700 hover:via-fuchsia-700 hover:to-cyan-700 text-white px-12 py-4 text-lg font-bold shadow-2xl shadow-violet-500/25 hover:shadow-3xl hover:shadow-violet-500/30 transition-all duration-300 rounded-2xl group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Save className="w-6 h-6 mr-3 relative z-10" />
            <span className="relative z-10">
              Sauvegarder le projet
            </span>
            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
          </Button>
        </div>
              </div>
    </div>
  )
}

export default function ServicesPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [activeTab, setActiveTab] = useState("visual")
  const [isSaved, setIsSaved] = useState(false)
  const [showDetailedForm, setShowDetailedForm] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState<'M1' | 'M2' | 'M3'>('M1');
  const { toast } = useToast()

  // Charger les données du cache au démarrage
  useEffect(() => {
    const savedData = localStorage.getItem("servicesFormData")
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)
        setFormData({
          ...initialFormData,
          ...parsedData,
          mustHave: {
            ...initialFormData.mustHave,
            ...parsedData.mustHave,
            visual: {
              ...initialFormData.mustHave.visual,
              ...parsedData.mustHave?.visual,
            },
            social: {
              ...initialFormData.mustHave.social,
              ...parsedData.mustHave?.social,
            },
            web: {
              ...initialFormData.mustHave.web,
              ...parsedData.mustHave?.web,
            },
          },
          detailed: {
            ...initialFormData.detailed,
            ...parsedData.detailed,
            visual: {
              ...initialFormData.detailed.visual,
              ...parsedData.detailed?.visual,
            },
            social: {
              ...initialFormData.detailed.social,
              ...parsedData.detailed?.social,
            },
            web: {
              ...initialFormData.detailed.web,
              ...parsedData.detailed?.web,
            },
          },
        })
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error)
        setFormData(initialFormData)
      }
    }
  }, [])

  // Sauvegarder automatiquement les données
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      localStorage.setItem("servicesFormData", JSON.stringify(formData))
      setIsSaved(true)
      setTimeout(() => setIsSaved(false), 2000)
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [formData])

  const services = [
    {
      id: "visual",
      title: "VISUAL",
      subtitle: "Identité & Design",
      color: "bg-amber-500",
      hoverColor: "hover:bg-amber-600",
      icon: Eye,
      description: "Création d'identité visuelle premium",
      features: [
        "Logo et charte graphique",
        "Supports de communication",
        "Design print et digital",
        "Packaging et merchandising",
      ],
    },
    {
      id: "social",
      title: "SOCIAL",
      subtitle: "Réseaux & Community",
      color: "bg-rose-500",
      hoverColor: "hover:bg-rose-600",
      icon: Users,
      description: "Gestion des réseaux sociaux",
      features: [
        "Stratégie de contenu",
        "Community management",
        "Publicité ciblée",
        "Analyse des performances",
        "Partenariats Influenceurs",
      ],
    },
    {
      id: "web",
      title: "WEB",
      subtitle: "Sites & Applications",
      color: "bg-blue-500",
      hoverColor: "hover:bg-blue-600",
      icon: Globe,
      description: "Développement web sur mesure",
      features: ["Sites vitrine et e-commerce", "Applications web", "Référencement SEO", "Maintenance et support"],
    },
  ]

  const servicesDetails = {
    visual: [
      "Conceptions graphiques, visuelles",
      "Branding de marque (Logo, packaging, naming, etc)",
      "Charte graphique et identité visuelle",
      "Impression des supports PLV, cartes visites, brochures",
      "Vidéos Motion design, Liquid Motion",
      "Photographie, montages vidéos 3D et maquettes",
    ],
    social: [
      "Animation des réseaux sociaux",
      "Création de contenu (idées)",
      "Production du contenu",
      "Publication du contenu",
      "Reporting de fin de mois",
      "Conseil en stratégie",
      "Partenariats Influenceurs",
      "Inbound marketing",
      "Organisation de lives",
    ],
    web: [
      "Création de site internet vitrine",
      "Création de site internet e-commerce",
      "Google my business",
      "Campagnes web",
      "SEO / SEA",
      "Formations (à distance)",
      "Partenaires Shopify, Squarespace",
      "Animation mensuelle du site",
    ],
  }

  const detailedFormFields = {
    visual: {
      goodiesTypes: ["Stylos personnalisés", "T-shirts", "Mugs", "Clés USB", "Carnets"],
      logoOptions: ["Refonte complète", "Modernisation", "Déclinaisons", "Pas de refonte"],
    },
    social: {
      reseaux: ["Instagram", "Facebook", "TikTok", "LinkedIn", "YouTube", "Twitter"],
      publicationsTypes: ["Posts statiques", "Reels dynamiques", "Stories", "Capsules vidéos", "Lives"],
      objectifs: ["Notoriété", "Engagement", "Conversion", "Fidélisation", "Acquisition"],
      outils: ["Meta Ads", "CRM GoHighLevel", "Hootsuite", "Buffer", "Analytics"],
    },
    web: {
      fonctionnalites: [
        "Formulaire de contact",
        "Comparateur d'offres",
        "Système de réservation",
        "Chat en ligne",
        "Newsletter",
      ],
      contenus: ["Textes", "Images", "Vidéos", "Témoignages", "FAQ", "Blog"],
    },
  }

  const isMustHaveCompleted = () => {
    if (!formData?.mustHave) return false

    const { visual, social, web } = formData.mustHave
    return (
      visual?.publicCible &&
      visual?.objectifs &&
      (visual?.services?.length || 0) > 0 &&
      social?.plateformes &&
      social?.frequence &&
      (social?.services?.length || 0) > 0 &&
      web?.typesite &&
      web?.fonctionnalites &&
      (web?.services?.length || 0) > 0
    )
  }

  useEffect(() => {
    if (isMustHaveCompleted() && !showDetailedForm) {
      setShowDetailedForm(true)
      toast({
        title: "🎉 Formulaire détaillé débloqué !",
        description: "Vous pouvez maintenant accéder aux options avancées.",
      })
    }
  }, [formData.mustHave, showDetailedForm, toast])

  const updateFormData = (
    section: "mustHave" | "detailed",
    subsection: string,
    field: string,
    value: string | string[] | boolean,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [subsection]: {
          ...prev[section][subsection as keyof (typeof prev)[typeof section]],
          [field]: value,
        },
      },
    }))
  }

  const handleSave = () => {
    localStorage.setItem("servicesFormData", JSON.stringify(formData))

    if (!showDetailedForm) {
      setShowDetailedForm(true)
      toast({
        title: "🚀 Section 2 débloquée !",
        description: "Vous pouvez maintenant accéder au formulaire détaillé.",
      })
    } else {
      toast({
        title: "✅ Données sauvegardées",
        description: "Vos informations ont été enregistrées avec succès.",
      })
    }
  }

  const handleServiceToggle = (section: "visual" | "social" | "web", service: string, checked: boolean) => {
    const currentServices = formData.mustHave[section]?.services || []
    const newServices = checked ? [...currentServices, service] : currentServices.filter((s: string) => s !== service)
    updateFormData("mustHave", section, "services", newServices)
  }

  return (
    <div className="min-h-screen flex flex-row bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <SidebarAdmin />
      <div className="flex-1 flex flex-col">
        <NavbarAdmin />
        <div className="flex-1 relative z-10 py-16 px-4 pl-64">
          <div className="max-w-[1200px] mx-auto print-area">
          {/* Header moderne */}
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 via-fuchsia-600/5 to-cyan-600/5 rounded-full blur-3xl -z-10" />

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-violet-200/50">
              <Sparkles className="w-4 h-4" />
              Services Premium
            </div>

            <h1 className="text-6xl font-black bg-gradient-to-r from-slate-900 via-violet-900 to-slate-900 bg-clip-text text-transparent mb-6 tracking-tight">
                SDC
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez nos trois univers créatifs pour transformer vos idées en réalité digitale
            </p>
          </div>

          {/* Services Cards - Design Ultra Moderne */}
          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {services.map((service, index) => {
              const IconComponent = service.icon
              const gradients = {
                visual: "from-amber-400 via-orange-500 to-red-500",
                social: "from-rose-400 via-pink-500 to-fuchsia-500",
                web: "from-blue-400 via-cyan-500 to-teal-500",
              }
              const glowColors = {
                visual: "shadow-amber-500/20",
                social: "shadow-rose-500/20",
                web: "shadow-blue-500/20",
              }

              return (
                <div
                  key={service.id}
                  className={`group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl ${glowColors[service.id as keyof typeof glowColors]} hover:shadow-3xl transition-all duration-700 hover:-translate-y-6 hover:scale-105`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: "fadeInUp 0.8s ease-out forwards",
                  }}
                >
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${gradients[service.id as keyof typeof gradients]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />
                  {/* Floating Elements */}
                  <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  <div className="absolute bottom-6 left-6 w-20 h-20 bg-gradient-to-br from-white/5 to-white/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />
                  <div className="relative z-10 p-10">
                    {/* Icon Section */}
                    <div className="flex justify-center mb-8">
                      <div
                        className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${gradients[service.id as keyof typeof gradients]} shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:rotate-6 group-hover:scale-110`}
                      >
                        <div className="absolute inset-0 rounded-2xl bg-white/20 backdrop-blur-sm" />
                        <div className="relative w-full h-full flex items-center justify-center">
                          <IconComponent className="w-12 h-12 text-white drop-shadow-lg" />
                        </div>
                        <div
                          className={`absolute -inset-3 bg-gradient-to-br ${gradients[service.id as keyof typeof gradients]} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10`}
                        />
                      </div>
                    </div>
                    {/* Title */}
                    <div className="text-center mb-6">
                      <h3
                        className={`text-4xl font-black bg-gradient-to-r ${gradients[service.id as keyof typeof gradients]} bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-gray-500 font-semibold text-sm tracking-wide uppercase">{service.subtitle}</p>
                      <div
                        className={`h-1 w-20 bg-gradient-to-r ${gradients[service.id as keyof typeof gradients]} rounded-full mx-auto mt-3 group-hover:w-32 transition-all duration-500`}
                      />
                    </div>
                    {/* Description */}
                    <p className="text-gray-600 font-medium text-center mb-8 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                      {service.description}
                    </p>
                    {/* Features List */}
                    <div className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300"
                          style={{
                            animationDelay: `${index * 200 + featureIndex * 100}ms`,
                          }}
                        >
                          <div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradients[service.id as keyof typeof gradients]} mt-2.5 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-300`}
                          />
                          <span className="text-gray-700 text-sm leading-relaxed font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    {/* Bottom Accent */}
                    <div className="mt-10 pt-8 border-t border-gray-100">
                      <div
                        className={`h-2 bg-gradient-to-r ${gradients[service.id as keyof typeof gradients]} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
                      />
                    </div>
                  </div>
                  {/* Hover Border Effect */}
                  <div
                    className={`absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r ${gradients[service.id as keyof typeof gradients]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    style={{
                      background: `linear-gradient(white, white) padding-box, linear-gradient(135deg, var(--tw-gradient-stops)) border-box`,
                      backgroundClip: "padding-box, border-box",
                    }}
                  />
                </div>
              )
            })}
          </div>

          {/* MUST HAVE Form Section - Design Moderne */}
          <div className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50 rounded-3xl -z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-100/10 via-transparent to-transparent rounded-3xl -z-10" />

            <div className="backdrop-blur-xl bg-white/80 border border-white/20 rounded-3xl p-10 shadow-2xl shadow-gray-500/10">
              <div className="text-center mb-12 relative">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700 px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-gray-200/50">
                  <Zap className="w-4 h-4" />
                  Étape 1
                </div>

                  <div className="flex items-center justify-center gap-4 mb-4">
                    <h2 className="text-4xl font-black text-gray-900 tracking-tight">MUST HAVE</h2>
                    <div className="flex gap-2">
                      {['M1', 'M2', 'M3'].map((mois) => (
                        <button
                          key={mois}
                          onClick={() => setSelectedMonth(mois as 'M1' | 'M2' | 'M3')}
                          className={`px-4 py-1 rounded-full font-bold border transition
                            ${selectedMonth === mois
                              ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow'
                              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
                        >
                          {mois}
                        </button>
                      ))}
                    </div>
                  </div>
                <p className="text-gray-600 text-lg leading-relaxed">Définissez les bases de votre projet créatif</p>

                {isSaved && (
                  <div className="flex items-center justify-center gap-2 mt-6 text-emerald-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Sauvegardé automatiquement</span>
                  </div>
                )}
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-12 bg-gray-100/50 backdrop-blur-sm p-2 rounded-2xl border border-gray-200/50">
                  <TabsTrigger
                    value="visual"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-amber-500 data-[state=active]:to-orange-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-amber-500/25 rounded-xl transition-all duration-300 font-semibold"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    VISUAL
                  </TabsTrigger>
                  <TabsTrigger
                    value="social"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-pink-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-rose-500/25 rounded-xl transition-all duration-300 font-semibold"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    SOCIAL
                  </TabsTrigger>
                  <TabsTrigger
                    value="web"
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-blue-500/25 rounded-xl transition-all duration-300 font-semibold"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    WEB
                  </TabsTrigger>
                </TabsList>

                {/* Visual Tab */}
                <TabsContent value="visual" className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="publicCible" className="text-amber-700 font-bold text-lg flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Public cible *
                      </Label>
                      <Input
                        id="publicCible"
                        placeholder="Décrivez votre audience cible..."
                        value={formData.mustHave.visual?.publicCible || ""}
                        onChange={(e) => updateFormData("mustHave", "visual", "publicCible", e.target.value)}
                        className="border-amber-200/50 focus:border-amber-500 bg-white/60 backdrop-blur-sm rounded-xl h-12 text-base"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="objectifs" className="text-amber-700 font-bold text-lg flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        Objectifs du projet *
                      </Label>
                      <Input
                        id="objectifs"
                        placeholder="Quels sont vos objectifs ?"
                        value={formData.mustHave.visual?.objectifs || ""}
                        onChange={(e) => updateFormData("mustHave", "visual", "objectifs", e.target.value)}
                        className="border-amber-200/50 focus:border-amber-500 bg-white/60 backdrop-blur-sm rounded-xl h-12 text-base"
                      />
                    </div>

                    <div className="space-y-6 md:col-span-2">
                      <Label className="text-amber-700 font-bold text-xl flex items-center gap-2">
                        <ArrowRight className="w-5 h-5" />
                        Services VISUAL requis *
                      </Label>
                      <div className="grid md:grid-cols-2 gap-4">
                          {servicesDetails.visual.map((service: string) => (
                          <div
                            key={service}
                            className="flex items-center space-x-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-amber-200/30 hover:bg-white/80 transition-all duration-200"
                          >
                            <Checkbox
                              id={`visual-${service}`}
                              checked={formData.mustHave.visual?.services?.includes(service) || false}
                              onCheckedChange={(checked) => handleServiceToggle("visual", service, checked as boolean)}
                              className="border-amber-300 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-amber-500 data-[state=checked]:to-orange-500"
                            />
                            <Label
                              htmlFor={`visual-${service}`}
                              className="text-sm font-medium text-gray-700 cursor-pointer"
                            >
                              {service}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="styleGraphique" className="text-amber-700 font-bold flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Style graphique souhaité
                      </Label>
                      <Select onValueChange={(value) => updateFormData("mustHave", "visual", "styleGraphique", value)}>
                        <SelectTrigger className="border-amber-200/50 focus:border-amber-500 bg-white/60 backdrop-blur-sm rounded-xl h-12">
                          <SelectValue placeholder="Choisissez un style" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-amber-200/50">
                          <SelectItem value="moderne" className="rounded-lg">
                            Moderne
                          </SelectItem>
                          <SelectItem value="classique" className="rounded-lg">
                            Classique
                          </SelectItem>
                          <SelectItem value="minimaliste" className="rounded-lg">
                            Minimaliste
                          </SelectItem>
                          <SelectItem value="vintage" className="rounded-lg">
                            Vintage
                          </SelectItem>
                          <SelectItem value="artistique" className="rounded-lg">
                            Artistique
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="couleurs" className="text-amber-700 font-bold flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Couleurs préférées
                      </Label>
                      <Input
                        id="couleurs"
                        placeholder="Ex: Bleu, blanc, rouge..."
                        value={formData.mustHave.visual?.couleurs || ""}
                        onChange={(e) => updateFormData("mustHave", "visual", "couleurs", e.target.value)}
                        className="border-amber-200/50 focus:border-amber-500 bg-white/60 backdrop-blur-sm rounded-xl h-12 text-base"
                      />
                    </div>
                  </div>
                </TabsContent>

                {/* Social Tab */}
                <TabsContent value="social" className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="plateformes" className="text-rose-700 font-bold text-lg flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Plateformes ciblées *
                      </Label>
                      <Input
                        id="plateformes"
                        placeholder="Facebook, Instagram, LinkedIn..."
                        value={formData.mustHave.social?.plateformes || ""}
                        onChange={(e) => updateFormData("mustHave", "social", "plateformes", e.target.value)}
                        className="border-rose-200/50 focus:border-rose-500 bg-white/60 backdrop-blur-sm rounded-xl h-12 text-base"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="frequence" className="text-rose-700 font-bold text-lg flex items-center gap-2">
                        <Zap className="w-4 h-4" />
                        Fréquence de publication *
                      </Label>
                      <Select onValueChange={(value) => updateFormData("mustHave", "social", "frequence", value)}>
                        <SelectTrigger className="border-rose-200/50 focus:border-rose-500 bg-white/60 backdrop-blur-sm rounded-xl h-12">
                          <SelectValue placeholder="Choisissez la fréquence" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-rose-200/50">
                          <SelectItem value="quotidien" className="rounded-lg">
                            Quotidien
                          </SelectItem>
                          <SelectItem value="3-fois-semaine" className="rounded-lg">
                            3 fois par semaine
                          </SelectItem>
                          <SelectItem value="hebdomadaire" className="rounded-lg">
                            Hebdomadaire
                          </SelectItem>
                          <SelectItem value="bi-hebdomadaire" className="rounded-lg">
                            Bi-hebdomadaire
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-6 md:col-span-2">
                      <Label className="text-rose-700 font-bold text-xl flex items-center gap-2">
                        <ArrowRight className="w-5 h-5" />
                        Services SOCIAL requis *
                      </Label>
                      <div className="grid md:grid-cols-2 gap-4">
                          {servicesDetails.social.map((service: string) => (
                          <div
                            key={service}
                            className="flex items-center space-x-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-rose-200/30 hover:bg-white/80 transition-all duration-200"
                          >
                            <Checkbox
                              id={`social-${service}`}
                              checked={formData.mustHave.social?.services?.includes(service) || false}
                              onCheckedChange={(checked) => handleServiceToggle("social", service, checked as boolean)}
                              className="border-rose-300 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-rose-500 data-[state=checked]:to-pink-500"
                            />
                            <Label
                              htmlFor={`social-${service}`}
                              className="text-sm font-medium text-gray-700 cursor-pointer"
                            >
                              {service}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="typeContenu" className="text-rose-700 font-bold flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Type de contenu souhaité
                      </Label>
                      <Textarea
                        id="typeContenu"
                        placeholder="Photos, vidéos, articles, stories..."
                        value={formData.mustHave.social?.typeContenu || ""}
                        onChange={(e) => updateFormData("mustHave", "social", "typeContenu", e.target.value)}
                        className="border-rose-200/50 focus:border-rose-500 bg-white/60 backdrop-blur-sm rounded-xl min-h-[100px] resize-none"
                        rows={3}
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="audience" className="text-rose-700 font-bold flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Taille d'audience visée
                      </Label>
                      <Select onValueChange={(value) => updateFormData("mustHave", "social", "audience", value)}>
                        <SelectTrigger className="border-rose-200/50 focus:border-rose-500 bg-white/60 backdrop-blur-sm rounded-xl h-12">
                          <SelectValue placeholder="Objectif d'audience" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-rose-200/50">
                          <SelectItem value="1000" className="rounded-lg">
                            1 000 followers
                          </SelectItem>
                          <SelectItem value="5000" className="rounded-lg">
                            5 000 followers
                          </SelectItem>
                          <SelectItem value="10000" className="rounded-lg">
                            10 000 followers
                          </SelectItem>
                          <SelectItem value="50000+" className="rounded-lg">
                            50 000+ followers
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>

                {/* Web Tab */}
                <TabsContent value="web" className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="typesite" className="text-blue-700 font-bold text-lg flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Type de site web *
                      </Label>
                      <Select onValueChange={(value) => updateFormData("mustHave", "web", "typesite", value)}>
                        <SelectTrigger className="border-blue-200/50 focus:border-blue-500 bg-white/60 backdrop-blur-sm rounded-xl h-12">
                          <SelectValue placeholder="Choisissez le type de site" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-blue-200/50">
                          <SelectItem value="vitrine" className="rounded-lg">
                            Site vitrine
                          </SelectItem>
                          <SelectItem value="ecommerce" className="rounded-lg">
                            E-commerce
                          </SelectItem>
                          <SelectItem value="blog" className="rounded-lg">
                            Blog
                          </SelectItem>
                          <SelectItem value="portfolio" className="rounded-lg">
                            Portfolio
                          </SelectItem>
                          <SelectItem value="application" className="rounded-lg">
                            Application web
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <Label
                        htmlFor="fonctionnalites"
                        className="text-blue-700 font-bold text-lg flex items-center gap-2"
                      >
                        <Zap className="w-4 h-4" />
                        Fonctionnalités requises *
                      </Label>
                      <Textarea
                        id="fonctionnalites"
                        placeholder="Contact, réservation, paiement en ligne..."
                        value={formData.mustHave.web?.fonctionnalites || ""}
                        onChange={(e) => updateFormData("mustHave", "web", "fonctionnalites", e.target.value)}
                        className="border-blue-200/50 focus:border-blue-500 bg-white/60 backdrop-blur-sm rounded-xl min-h-[100px] resize-none"
                        rows={3}
                      />
                    </div>

                    <div className="space-y-6 md:col-span-2">
                      <Label className="text-blue-700 font-bold text-xl flex items-center gap-2">
                        <ArrowRight className="w-5 h-5" />
                        Services WEB requis *
                      </Label>
                      <div className="grid md:grid-cols-2 gap-4">
                          {servicesDetails.web.map((service: string) => (
                          <div
                            key={service}
                            className="flex items-center space-x-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-blue-200/30 hover:bg-white/80 transition-all duration-200"
                          >
                            <Checkbox
                              id={`web-${service}`}
                              checked={formData.mustHave.web?.services?.includes(service) || false}
                              onCheckedChange={(checked) => handleServiceToggle("web", service, checked as boolean)}
                              className="border-blue-300 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-blue-500 data-[state=checked]:to-cyan-500"
                            />
                            <Label
                              htmlFor={`web-${service}`}
                              className="text-sm font-medium text-gray-700 cursor-pointer"
                            >
                              {service}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="contenu" className="text-blue-700 font-bold flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Contenu du site
                      </Label>
                      <Textarea
                        id="contenu"
                        placeholder="Décrivez le contenu à intégrer..."
                        value={formData.mustHave.web?.contenu || ""}
                        onChange={(e) => updateFormData("mustHave", "web", "contenu", e.target.value)}
                        className="border-blue-200/50 focus:border-blue-500 bg-white/60 backdrop-blur-sm rounded-xl min-h-[100px] resize-none"
                        rows={3}
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="hebergement" className="text-blue-700 font-bold flex items-center gap-2">
                        <ArrowRight className="w-4 h-4" />
                        Hébergement souhaité
                      </Label>
                      <Select onValueChange={(value) => updateFormData("mustHave", "web", "hebergement", value)}>
                        <SelectTrigger className="border-blue-200/50 focus:border-blue-500 bg-white/60 backdrop-blur-sm rounded-xl h-12">
                          <SelectValue placeholder="Type d'hébergement" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-blue-200/50">
                          <SelectItem value="shared" className="rounded-lg">
                            Hébergement partagé
                          </SelectItem>
                          <SelectItem value="vps" className="rounded-lg">
                            Serveur VPS
                          </SelectItem>
                          <SelectItem value="dedicated" className="rounded-lg">
                            Serveur dédié
                          </SelectItem>
                          <SelectItem value="cloud" className="rounded-lg">
                            Cloud (AWS, Vercel...)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Progress Indicator Moderne */}
              <div className="mt-12 p-6 bg-gradient-to-r from-gray-50/50 to-slate-50/50 backdrop-blur-sm rounded-2xl border border-gray-200/30">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-gray-700 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Progression MUST HAVE
                  </span>
                  <span
                    className={`text-sm font-semibold px-3 py-1 rounded-full ${isMustHaveCompleted() ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}
                  >
                    {isMustHaveCompleted() ? "✅ Complété" : "⏳ En cours"}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full transition-all duration-1000 ${
                      isMustHaveCompleted()
                        ? "bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 w-full"
                        : "bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 w-1/2"
                    }`}
                  />
                </div>
              </div>

              {/* Save Button Moderne */}
              <div className="flex justify-center mt-12">
                <Button
                  onClick={handleSave}
                  className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 hover:from-violet-700 hover:via-fuchsia-700 hover:to-cyan-700 text-white px-12 py-4 text-lg font-bold shadow-2xl shadow-violet-500/25 hover:shadow-3xl hover:shadow-violet-500/30 transition-all duration-300 rounded-2xl group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Save className="w-6 h-6 mr-3 relative z-10" />
                  <span className="relative z-10">
                    {showDetailedForm ? "Sauvegarder le projet" : "Sauvegarder et débloquer Section 2"}
                  </span>
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </Button>
              </div>
            </div>
          </div>

          {/* Section 2 - Detailed Form */}
          {showDetailedForm && (
              <DetailedForm formData={formData} updateFormData={updateFormData as any} detailedFormFields={detailedFormFields} />
          )}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }

        /* Glassmorphism effects */
        .backdrop-blur-xl {
          backdrop-filter: blur(16px);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #7c3aed, #db2777);
        }
      `}</style>
      <style>{`
        @media print {
          body * {
            visibility: hidden !important;
          }
          .print-area, .print-area * {
            visibility: visible !important;
          }
          .print-area {
            position: absolute !important;
            left: 0; top: 0;
            width: 100vw !important;
            background: white !important;
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
            padding: 0 !important;
            max-width: 100vw !important;
            z-index: 9999 !important;
          }
          .print:hidden, .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}