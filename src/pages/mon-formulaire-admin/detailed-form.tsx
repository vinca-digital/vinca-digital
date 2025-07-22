"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Checkbox } from "../../components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Eye, Users, Globe } from "lucide-react"

interface DetailedFormProps {
  formData: any
  updateFormData: (section: string, subsection: string, field: string, value: any) => void
  detailedFormFields: any
}

export default function DetailedForm({ formData, updateFormData, detailedFormFields }: DetailedFormProps) {
  const [activeDetailedTab, setActiveDetailedTab] = useState("visual")

  const handleCheckboxChange = (section: string, field: string, value: string, checked: boolean) => {
    const currentValues = formData.detailed?.[section]?.[field] || []
    const newValues = checked ? [...currentValues, value] : currentValues.filter((item: string) => item !== value)
    updateFormData("detailed", section, field, newValues)
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl shadow-2xl p-8 mt-12 border border-indigo-100">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg mb-4">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
          FORMULAIRE DÉTAILLÉ DÉBLOQUÉ
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Spécifiez vos besoins en détail
        </h2>
        <p className="text-gray-600">Maintenant que nous connaissons vos besoins de base, détaillons votre projet</p>
      </div>

      <Tabs value={activeDetailedTab} onValueChange={setActiveDetailedTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/50 backdrop-blur-sm">
          <TabsTrigger
            value="visual"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-yellow-500 data-[state=active]:to-orange-500 data-[state=active]:text-white"
          >
            <Eye className="w-4 h-4 mr-2" />
            VISUAL DÉTAILLÉ
          </TabsTrigger>
          <TabsTrigger
            value="social"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
          >
            <Users className="w-4 h-4 mr-2" />
            SOCIAL DÉTAILLÉ
          </TabsTrigger>
          <TabsTrigger
            value="web"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-indigo-500 data-[state=active]:text-white"
          >
            <Globe className="w-4 h-4 mr-2" />
            WEB DÉTAILLÉ
          </TabsTrigger>
        </TabsList>

        {/* Visual Detailed Tab */}
        <TabsContent value="visual" className="space-y-8">
          <Card className="border-yellow-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50">
              <CardTitle className="text-yellow-700 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Détails du projet VISUAL
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label className="text-yellow-700 font-semibold text-lg">Types de goodies à concevoir</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {detailedFormFields.visual.goodiesTypes.map((type: string) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={`goodie-${type}`}
                          checked={formData.detailed?.visual?.goodiesTypes?.includes(type) || false}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("visual", "goodiesTypes", type, checked as boolean)
                          }
                          className="border-yellow-300"
                        />
                        <Label htmlFor={`goodie-${type}`} className="text-sm">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-yellow-700 font-semibold text-lg">Refonte de logo</Label>
                  <Select onValueChange={(value) => updateFormData("detailed", "visual", "logoRefonte", value)}>
                    <SelectTrigger className="border-yellow-200 focus:border-yellow-500">
                      <SelectValue placeholder="Choisissez une option" />
                    </SelectTrigger>
                    <SelectContent>
                      {detailedFormFields.visual.logoOptions.map((option: string) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dateTournage" className="text-yellow-700 font-semibold">
                    Date souhaitée pour tournage photo/vidéo
                  </Label>
                  <Input
                    id="dateTournage"
                    type="date"
                    value={formData.detailed?.visual?.dateTournage || ""}
                    onChange={(e) => updateFormData("detailed", "visual", "dateTournage", e.target.value)}
                    className="border-yellow-200 focus:border-yellow-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budgetDetaille" className="text-yellow-700 font-semibold">
                    Budget détaillé pour le projet visual
                  </Label>
                  <Input
                    id="budgetDetaille"
                    placeholder="Ex: 2500€ pour logo + 1500€ pour goodies"
                    value={formData.detailed?.visual?.budgetDetaille || ""}
                    onChange={(e) => updateFormData("detailed", "visual", "budgetDetaille", e.target.value)}
                    className="border-yellow-200 focus:border-yellow-500"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="delaiLivraison" className="text-yellow-700 font-semibold">
                    Délai de livraison souhaité
                  </Label>
                  <Textarea
                    id="delaiLivraison"
                    placeholder="Décrivez vos contraintes de timing..."
                    value={formData.detailed?.visual?.delaiLivraison || ""}
                    onChange={(e) => updateFormData("detailed", "visual", "delaiLivraison", e.target.value)}
                    className="border-yellow-200 focus:border-yellow-500"
                    rows={3}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Social Detailed Tab */}
        <TabsContent value="social" className="space-y-8">
          <Card className="border-red-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50">
              <CardTitle className="text-red-700 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Détails du projet SOCIAL
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Label className="text-red-700 font-semibold text-lg">Réseaux sociaux à utiliser</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {detailedFormFields.social.reseaux.map((reseau: string) => (
                      <div key={reseau} className="flex items-center space-x-2">
                        <Checkbox
                          id={`reseau-${reseau}`}
                          checked={formData.detailed?.social?.reseauxUtilises?.includes(reseau) || false}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("social", "reseauxUtilises", reseau, checked as boolean)
                          }
                          className="border-red-300"
                        />
                        <Label htmlFor={`reseau-${reseau}`} className="text-sm">
                          {reseau}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-red-700 font-semibold text-lg">Types de publications</Label>
                  <div className="space-y-2">
                    {detailedFormFields.social.publicationsTypes.map((type: string) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={`pub-${type}`}
                          checked={formData.detailed?.social?.typePublications?.includes(type) || false}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("social", "typePublications", type, checked as boolean)
                          }
                          className="border-red-300"
                        />
                        <Label htmlFor={`pub-${type}`} className="text-sm">
                          {type}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="nombrePublications" className="text-red-700 font-semibold">
                    Nombre de publications par semaine
                  </Label>
                  <Select onValueChange={(value) => updateFormData("detailed", "social", "nombrePublications", value)}>
                    <SelectTrigger className="border-red-200 focus:border-red-500">
                      <SelectValue placeholder="Choisissez la fréquence" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-3">1 à 3 publications</SelectItem>
                      <SelectItem value="4-7">4 à 7 publications</SelectItem>
                      <SelectItem value="8-14">8 à 14 publications</SelectItem>
                      <SelectItem value="15+">Plus de 15 publications</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budgetPub" className="text-red-700 font-semibold">
                    Budget publicitaire mensuel
                  </Label>
                  <Input
                    id="budgetPub"
                    placeholder="Ex: 500€/mois"
                    value={formData.detailed?.social?.budgetPub || ""}
                    onChange={(e) => updateFormData("detailed", "social", "budgetPub", e.target.value)}
                    className="border-red-200 focus:border-red-500"
                  />
                </div>

                <div className="space-y-4 md:col-span-2">
                  <Label className="text-red-700 font-semibold text-lg">Objectifs de communication</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {detailedFormFields.social.objectifs.map((objectif: string) => (
                      <div key={objectif} className="flex items-center space-x-2">
                        <Checkbox
                          id={`obj-${objectif}`}
                          checked={formData.detailed?.social?.objectifsCommunication?.includes(objectif) || false}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("social", "objectifsCommunication", objectif, checked as boolean)
                          }
                          className="border-red-300"
                        />
                        <Label htmlFor={`obj-${objectif}`} className="text-sm">
                          {objectif}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 md:col-span-2">
                  <Label className="text-red-700 font-semibold text-lg">Outils à utiliser</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {detailedFormFields.social.outils.map((outil: string) => (
                      <div key={outil} className="flex items-center space-x-2">
                        <Checkbox
                          id={`outil-${outil}`}
                          checked={formData.detailed?.social?.outilsUtilises?.includes(outil) || false}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("social", "outilsUtilises", outil, checked as boolean)
                          }
                          className="border-red-300"
                        />
                        <Label htmlFor={`outil-${outil}`} className="text-sm">
                          {outil}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Web Detailed Tab */}
        <TabsContent value="web" className="space-y-8">
          <Card className="border-blue-200 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="text-blue-700 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Détails du projet WEB
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="typeSiteDetaille" className="text-blue-700 font-semibold">
                    Type de site détaillé
                  </Label>
                  <Textarea
                    id="typeSiteDetaille"
                    placeholder="Décrivez précisément le type de site souhaité..."
                    value={formData.detailed?.web?.typeSiteDetaille || ""}
                    onChange={(e) => updateFormData("detailed", "web", "typeSiteDetaille", e.target.value)}
                    className="border-blue-200 focus:border-blue-500"
                    rows={3}
                  />
                </div>

                <div className="space-y-4">
                  <Label className="text-blue-700 font-semibold text-lg">Fonctionnalités spécifiques</Label>
                  <div className="space-y-2">
                    {detailedFormFields.web.fonctionnalites.map((fonc: string) => (
                      <div key={fonc} className="flex items-center space-x-2">
                        <Checkbox
                          id={`fonc-${fonc}`}
                          checked={formData.detailed?.web?.fonctionnalitesSpecifiques?.includes(fonc) || false}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("web", "fonctionnalitesSpecifiques", fonc, checked as boolean)
                          }
                          className="border-blue-300"
                        />
                        <Label htmlFor={`fonc-${fonc}`} className="text-sm">
                          {fonc}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hebergementDetails" className="text-blue-700 font-semibold">
                    Détails hébergement et nom de domaine
                  </Label>
                  <Textarea
                    id="hebergementDetails"
                    placeholder="Nom de domaine souhaité, accès client, etc..."
                    value={formData.detailed?.web?.hebergementDetails || ""}
                    onChange={(e) => updateFormData("detailed", "web", "hebergementDetails", e.target.value)}
                    className="border-blue-200 focus:border-blue-500"
                    rows={3}
                  />
                </div>

                <div className="space-y-4">
                  <Label className="text-blue-700 font-semibold text-lg">Contenus à intégrer</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {detailedFormFields.web.contenus.map((contenu: string) => (
                      <div key={contenu} className="flex items-center space-x-2">
                        <Checkbox
                          id={`contenu-${contenu}`}
                          checked={formData.detailed?.web?.contenusIntegrer?.includes(contenu) || false}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange("web", "contenusIntegrer", contenu, checked as boolean)
                          }
                          className="border-blue-300"
                        />
                        <Label htmlFor={`contenu-${contenu}`} className="text-sm">
                          {contenu}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="maintenanceDetails" className="text-blue-700 font-semibold">
                    Maintenance et mise à jour
                  </Label>
                  <Textarea
                    id="maintenanceDetails"
                    placeholder="Vos besoins en maintenance, fréquence des mises à jour..."
                    value={formData.detailed?.web?.maintenanceDetails || ""}
                    onChange={(e) => updateFormData("detailed", "web", "maintenanceDetails", e.target.value)}
                    className="border-blue-200 focus:border-blue-500"
                    rows={3}
                  />
                </div>

                <div className="flex items-center space-x-2 md:col-span-2">
                  <Checkbox
                    id="formationsRequises"
                    checked={formData.detailed?.web?.formationsRequises || false}
                    onCheckedChange={(checked) => updateFormData("detailed", "web", "formationsRequises", checked)}
                    className="border-blue-300"
                  />
                  <Label htmlFor="formationsRequises" className="text-blue-700 font-semibold">
                    Formations à distance requises
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
