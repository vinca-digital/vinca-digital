"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../pages/ui/button"
import { Input } from "../pages/ui/input"
import { Label } from "../pages/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../pages/ui/select"
import { Textarea } from "../pages/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../pages/ui/card"
import { Badge } from "../pages/ui/badge"
import { Separator } from "../pages/ui/separator"
import { CreditCard, Lock, ShieldCheck, CheckCircle, AlertCircle } from "lucide-react"

interface PaymentFormProps {
  service: {
    id: string
    name: string
    description: string
    price: string
    icon: string
  } | null
  onClose: () => void
}

export default function PaymentForm({ service, onClose }: PaymentFormProps) {
  const [formData, setFormData] = useState({
    // Informations personnelles
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",

    // Adresse de facturation
    address: "",
    city: "",
    postalCode: "",
    country: "Maroc",

    // Informations de paiement
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",

    // Détails du projet
    projectDescription: "",
    deadline: "",
    additionalNotes: "",
  })

  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentSuccess, setPaymentSuccess] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulation du traitement du paiement
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsProcessing(false)
    setPaymentSuccess(true)

    // Fermer le modal après 3 secondes
    setTimeout(() => {
      setPaymentSuccess(false)
      onClose()
    }, 3000)
  }

  if (paymentSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Paiement réussi ! 🎉</h3>
        <p className="text-gray-600 mb-4">
          Votre commande a été confirmée. Vous recevrez un email de confirmation sous peu.
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-sm text-green-800">
            <strong>Référence :</strong> {service?.id}-{Date.now().toString().slice(-6)}
          </p>
        </div>
      </div>
    )
  }

  if (!service) return null

  const priceValue = service.price.replace(/[^\d]/g, "") || "0"
  const tva = Math.round(Number.parseInt(priceValue) * 0.2)
  const total = Number.parseInt(priceValue) + tva

  return (
    <div className="space-y-6">
      {/* En-tête de la commande */}
      <div className="bg-gradient-to-r from-[rgb(120,164,86)] to-emerald-600 text-white p-6 rounded-lg -m-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="text-4xl">{service.icon}</div>
          <div>
            <h2 className="text-2xl font-bold">{service.name}</h2>
            <p className="text-white/90">{service.description}</p>
            <Badge className="bg-white/20 text-white mt-2" variant="default">{service.id}</Badge>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Informations personnelles */}
        <Card className="">
          <CardHeader className="">
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-blue-600">1</span>
              </div>
              Informations personnelles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="">Prénom *</Label>
                <Input
                  id="firstName"
                  className=""
                  type="text"
                  value={formData.firstName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("firstName", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="">Nom *</Label>
                <Input
                  id="lastName"
                  className=""
                  type="text"
                  value={formData.lastName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("lastName", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="">Email *</Label>
                <Input
                  id="email"
                  className=""
                  type="email"
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone" className="">Téléphone *</Label>
                <Input
                  id="phone"
                  className=""
                  type="tel"
                  value={formData.phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="company" className="">Entreprise (optionnel)</Label>
              <Input
                id="company"
                className=""
                type="text"
                value={formData.company}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("company", e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Adresse de facturation */}
        <Card className="">
          <CardHeader className="">
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-purple-600">2</span>
              </div>
              Adresse de facturation
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="address" className="">Adresse *</Label>
              <Input
                id="address"
                className=""
                type="text"
                value={formData.address}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("address", e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city" className="">Ville *</Label>
                <Input
                  id="city"
                  className=""
                  type="text"
                  value={formData.city}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("city", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="postalCode" className="">Code postal *</Label>
                <Input
                  id="postalCode"
                  className=""
                  type="text"
                  value={formData.postalCode}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("postalCode", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="country" className="">Pays *</Label>
                <Select value={formData.country} onValueChange={(value: string) => handleInputChange("country", value)}>
                  <SelectTrigger className="">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectItem value="Maroc" className="">Maroc</SelectItem>
                    <SelectItem value="France" className="">France</SelectItem>
                    <SelectItem value="Belgique" className="">Belgique</SelectItem>
                    <SelectItem value="Suisse" className="">Suisse</SelectItem>
                    <SelectItem value="Canada" className="">Canada</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Détails du projet */}
        <Card className="">
          <CardHeader className="">
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-orange-600">3</span>
              </div>
              Détails du projet
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="projectDescription" className="">Description du projet *</Label>
              <Textarea
                id="projectDescription"
                className=""
                placeholder="Décrivez votre projet, vos attentes, votre secteur d'activité..."
                value={formData.projectDescription}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("projectDescription", e.target.value)}
                required
                rows={4}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="deadline" className="">Délai souhaité</Label>
                <Select value={formData.deadline} onValueChange={(value: string) => handleInputChange("deadline", value)}>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Sélectionner un délai" />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectItem value="urgent" className="">Urgent (sous 7 jours) +30%</SelectItem>
                    <SelectItem value="standard" className="">Standard (7-14 jours)</SelectItem>
                    <SelectItem value="flexible" className="">Flexible (plus de 14 jours) -10%</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="additionalNotes" className="">Notes supplémentaires</Label>
                <Textarea
                  id="additionalNotes"
                  className=""
                  placeholder="Informations complémentaires..."
                  value={formData.additionalNotes}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange("additionalNotes", e.target.value)}
                  rows={2}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Informations de paiement */}
        <Card className="">
          <CardHeader className="">
            <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-green-600">4</span>
              </div>
              <CreditCard className="h-5 w-5" />
              Paiement sécurisé
            </CardTitle>
            <CardDescription className="flex items-center gap-2 text-green-600">
              <Lock className="h-4 w-4" />
              Vos données sont protégées par cryptage SSL
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="cardNumber" className="">Numéro de carte *</Label>
              <Input
                id="cardNumber"
                className=""
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("cardNumber", e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="expiryDate" className="">Date d'expiration *</Label>
                <Input
                  id="expiryDate"
                  className=""
                  placeholder="MM/AA"
                  value={formData.expiryDate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("expiryDate", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="cvv" className="">CVV *</Label>
                <Input
                  id="cvv"
                  className=""
                  placeholder="123"
                  value={formData.cvv}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("cvv", e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="cardName" className="">Nom sur la carte *</Label>
                <Input
                  id="cardName"
                  className=""
                  value={formData.cardName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("cardName", e.target.value)}
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Récapitulatif */}
        <Card className="bg-gray-50">
          <CardHeader className="">
            <CardTitle>Récapitulatif de la commande</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span>{service.name}</span>
              <span>{service.price} MAD HT</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>TVA (20%)</span>
              <span>{tva.toLocaleString()} MAD</span>
            </div>
            <Separator className="" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total TTC</span>
              <span className="text-[rgb(120,164,86)]">{total.toLocaleString()} MAD</span>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">Modalités de paiement :</p>
                  <ul className="space-y-1 text-xs">
                    <li>• 50% à la commande, 50% à la livraison</li>
                    <li>• Révisions incluses selon le forfait</li>
                    <li>• Garantie satisfaction 30 jours</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
            className="flex-1 bg-transparent"
            disabled={isProcessing}
          >
            Annuler
          </Button>
          <Button
            type="submit"
            className="flex-1 bg-[rgb(120,164,86)] hover:bg-green-700 text-white"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Traitement en cours...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Confirmer le paiement
              </div>
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}
