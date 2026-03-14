import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast.success("Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-blue-950/20 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contactez <span className="gradient-text">SayKee</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une question ? Une suggestion ? N'hésitez pas à nous contacter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur border-blue-800/50">
              <CardHeader>
                <CardTitle className="text-3xl text-white">Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Nom complet</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                      className="bg-black/50 border-white/20 text-white mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre.email@exemple.com"
                      required
                      className="bg-black/50 border-white/20 text-white mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-300">Sujet</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sujet de votre message"
                      required
                      className="bg-black/50 border-white/20 text-white mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-300">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message..."
                      rows={6}
                      required
                      className="bg-black/50 border-white/20 text-white mt-2"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800" size="lg">
                    <Send className="mr-2" size={20} />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="bg-card/50 backdrop-blur border-blue-800/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Informations de contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-300">contact@saykee.com</p>
                      <p className="text-gray-400 text-sm mt-1">
                        Réponse sous 24-48 heures
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Téléphone</h3>
                      <p className="text-gray-300">+33 1 23 45 67 89</p>
                      <p className="text-gray-400 text-sm mt-1">
                        Lun-Ven 9h-18h
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin size={24} className="text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Adresse</h3>
                      <p className="text-gray-300">Paris, France</p>
                      <p className="text-gray-400 text-sm mt-1">
                        Rendez-vous sur demande
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-950/50 to-blue-900/30 border-blue-800/50">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Heures d'ouverture</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span className="text-white font-semibold">9h - 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi</span>
                      <span className="text-white font-semibold">10h - 16h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span className="text-gray-500">Fermé</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-blue-950/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Questions fréquentes</h2>
          </div>

          <div className="space-y-4">
            <Card className="bg-card/50 backdrop-blur border-blue-800/50">
              <CardHeader>
                <CardTitle className="text-white">Comment accéder aux formations ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Créez simplement un compte gratuit, choisissez vos formations et commencez à apprendre immédiatement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-blue-800/50">
              <CardHeader>
                <CardTitle className="text-white">Les formations sont-elles adaptées aux débutants ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Oui ! Nous proposons des formations pour tous les niveaux, du débutant complet à l'expert.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-blue-800/50">
              <CardHeader>
                <CardTitle className="text-white">Puis-je obtenir un remboursement ?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Nous offrons une garantie satisfait ou remboursé de 30 jours sur toutes nos formations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
