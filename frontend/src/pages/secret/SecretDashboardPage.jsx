import { useState } from "react";
import { 
  Send, Shield, Crown, Zap, Package, CreditCard, 
  MessageCircle, Copy, Check, AlertTriangle, Star,
  Lock, Users, Clock, ChevronRight, Skull, ExternalLink
} from "lucide-react";
import { Button } from "../../components/ui/button";

const services = [
  {
    id: "starter",
    name: "Pack Starter",
    icon: Package,
    price: "50€",
    description: "Parfait pour débuter dans le game",
    features: [
      "Scama complet (pages optimisées)",
      "Letter pro (taux d'ouverture élevé)",
      "Guide d'utilisation",
      "Support 48h"
    ],
    popular: false,
    color: "neutral"
  },
  {
    id: "pro",
    name: "Pack Pro",
    icon: Zap,
    price: "150€",
    description: "Pour ceux qui veulent passer au niveau supérieur",
    features: [
      "RDP clean (EU/US)",
      "Sender configuré",
      "Scama + Letter premium",
      "Support prioritaire 24h",
      "Updates gratuites 30j"
    ],
    popular: true,
    color: "red"
  },
  {
    id: "vip",
    name: "Pack VIP",
    icon: Crown,
    price: "500€",
    description: "Formation complète + accompagnement personnalisé",
    features: [
      "Tout le Pack Pro inclus",
      "Formation vidéo complète",
      "Mentorat 1-on-1 (1 mois)",
      "Accès groupe privé VIP",
      "Méthodes exclusives",
      "Support illimité"
    ],
    popular: false,
    color: "yellow"
  },
  {
    id: "logs",
    name: "Logs / CC",
    icon: CreditCard,
    price: "Sur demande",
    description: "Logs frais et CC validées",
    features: [
      "Logs FR/EU/US disponibles",
      "CC avec CVV",
      "Fullz complets",
      "Qualité garantie",
      "Remplacement si dead"
    ],
    popular: false,
    color: "green"
  }
];

const rules = [
  { icon: Shield, text: "Paiement crypto uniquement (BTC, ETH, USDT, LTC)" },
  { icon: Clock, text: "Livraison sous 24h maximum" },
  { icon: Users, text: "Pas d'arnaque entre nous, que du sérieux" },
  { icon: Lock, text: "Vos infos restent confidentielles" }
];

const faqs = [
  {
    question: "Comment payer ?",
    answer: "Crypto uniquement. BTC, ETH, USDT ou LTC. Je t'envoie l'adresse en DM après validation de ta commande."
  },
  {
    question: "C'est garanti ?",
    answer: "Oui. Si un produit est dead ou ne fonctionne pas, remplacement gratuit sous 24h. Je suis là pour du long terme."
  },
  {
    question: "Tu livres en combien de temps ?",
    answer: "Généralement sous 1-2h. Maximum 24h si je suis occupé. Tu seras prévenu."
  },
  {
    question: "Je suis débutant, c'est pour moi ?",
    answer: "Le Pack Starter ou VIP sont parfaits pour débuter. Le VIP inclut une formation complète si tu pars de zéro."
  }
];

export const SecretDashboardPage = () => {
  const [copied, setCopied] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const telegramHandle = "@Loukra";
  const telegramLink = "https://t.me/Loukra";

  const copyTelegram = async () => {
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(telegramHandle);
        setCopied(true);
      } else {
        // Fallback for older browsers or restricted environments
        const textArea = document.createElement("textarea");
        textArea.value = telegramHandle;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
        setCopied(true);
      }
    } catch (err) {
      // If all copy methods fail, just show the text
      alert(`Copie manuelle : ${telegramHandle}`);
    }
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-black" />
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-red-500/10 blur-3xl rounded-full" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Skull className="text-red-500" size={20} />
            <span className="text-xs sm:text-sm uppercase tracking-wider text-red-500 font-bold">
              Services Exclusifs
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6 tracking-tight">
            Le <span className="text-red-500">Shop</span>
          </h1>
          
          <p className="text-base sm:text-xl text-neutral-400 mb-6 sm:mb-8 max-w-2xl">
            Tout ce qu'il te faut pour commencer ou scale ton activité. 
            Qualité garantie, discrétion assurée.
          </p>

          {/* Telegram CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 transition-colors"
            >
              <Send size={20} />
              Contact Telegram
              <ExternalLink size={16} />
            </a>
            <button
              onClick={copyTelegram}
              className="flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 border border-neutral-700 transition-colors"
            >
              {copied ? <Check size={20} className="text-green-500" /> : <Copy size={20} />}
              {copied ? "Copié !" : telegramHandle}
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-neutral-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8 sm:mb-12">
            Mes <span className="text-red-500">Services</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className={`relative bg-neutral-900 border p-4 sm:p-6 transition-all hover:border-red-800 ${
                    service.popular 
                      ? "border-red-600 ring-1 ring-red-600/50" 
                      : "border-neutral-800"
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 flex items-center gap-1">
                        <Star size={12} /> POPULAIRE
                      </span>
                    </div>
                  )}

                  <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-4 ${
                    service.color === "red" ? "bg-red-600" :
                    service.color === "yellow" ? "bg-yellow-600" :
                    service.color === "green" ? "bg-green-600" :
                    "bg-neutral-700"
                  }`}>
                    <IconComponent size={24} className="text-white" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{service.name}</h3>
                  <p className="text-2xl sm:text-3xl font-black text-red-500 mb-3">{service.price}</p>
                  <p className="text-neutral-400 text-sm mb-4">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-300">
                        <ChevronRight className="text-red-500 flex-shrink-0 mt-0.5" size={14} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-2 sm:py-3 font-bold text-sm transition-colors ${
                      service.popular
                        ? "bg-red-600 hover:bg-red-700 text-white"
                        : "bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700"
                    }`}
                  >
                    <MessageCircle size={16} />
                    Commander
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rules */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8 sm:mb-12">
            Les <span className="text-red-500">Règles</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {rules.map((rule, index) => {
              const IconComponent = rule.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 sm:p-6 bg-neutral-900 border border-neutral-800"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-950 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="text-red-500" size={20} />
                  </div>
                  <p className="text-neutral-300 text-sm sm:text-base">{rule.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-neutral-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8 sm:mb-12">
            <span className="text-red-500">FAQ</span>
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
                >
                  <span className="font-bold text-white text-sm sm:text-base">{faq.question}</span>
                  <ChevronRight 
                    className={`text-red-500 transition-transform flex-shrink-0 ${
                      expandedFaq === index ? "rotate-90" : ""
                    }`} 
                    size={20} 
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                    <p className="text-neutral-400 text-sm sm:text-base">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-red-950/20 border-t border-red-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <AlertTriangle className="text-red-500 mx-auto mb-4 sm:mb-6" size={40} />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl mx-auto">
            DM moi sur Telegram avec le pack qui t'intéresse. 
            Réponse rapide garantie.
          </p>
          <a
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg transition-colors"
          >
            <Send size={20} />
            Contacter @Loukra
          </a>
        </div>
      </section>
    </div>
  );
};

export default SecretDashboardPage;
