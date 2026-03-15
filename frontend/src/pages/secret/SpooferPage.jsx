import { useNavigate } from "react-router-dom";
import { Phone, AlertTriangle, Shield, PhoneCall, PhoneIncoming, PhoneOutgoing, MessageSquare, Users } from "lucide-react";
import { Button } from "../../components/ui/button";

export const SpooferPage = () => {
  const navigate = useNavigate();

  const modules = [
    {
      id: 1,
      title: "Introduction au Spoofing Call",
      description: "Qu'est-ce que le caller ID spoofing ? Comment ça fonctionne et pourquoi c'est utilisé.",
      duration: "10 min",
      level: "Débutant"
    },
    {
      id: 2,
      title: "Les Outils de Spoof",
      description: "Applications, services et méthodes pour changer ton numéro affiché lors d'un appel.",
      duration: "20 min",
      level: "Intermédiaire"
    },
    {
      id: 3,
      title: "Techniques Avancées",
      description: "Voice changer, numéros virtuels, SIP trunking et configuration pro.",
      duration: "25 min",
      level: "Avancé"
    },
    {
      id: 4,
      title: "OPSEC & Sécurité",
      description: "Comment rester anonyme, éviter le traçage et protéger ton identité.",
      duration: "15 min",
      level: "Essentiel"
    }
  ];

  const useCases = [
    {
      icon: PhoneOutgoing,
      title: "Appels Sortants",
      description: "Afficher un numéro différent du tien quand tu appelles quelqu'un.",
      color: "purple"
    },
    {
      icon: MessageSquare,
      title: "SMS Spoofing", 
      description: "Envoyer des SMS avec un numéro ou nom d'expéditeur personnalisé.",
      color: "orange"
    },
    {
      icon: PhoneIncoming,
      title: "Numéros Virtuels",
      description: "Obtenir des numéros jetables pour recevoir des appels/SMS.",
      color: "purple"
    },
    {
      icon: Users,
      title: "Usurpation d'Identité",
      description: "Se faire passer pour une banque, un service ou une personne.",
      color: "orange"
    }
  ];

  const tools = [
    { name: "SpoofCard", desc: "App populaire pour spoof calls aux US/EU", type: "App" },
    { name: "TextNow", desc: "Numéros virtuels gratuits US/Canada", type: "Numéro" },
    { name: "Hushed", desc: "Numéros temporaires dans 60+ pays", type: "Numéro" },
    { name: "SpoofTel", desc: "Service web de caller ID spoofing", type: "Service" },
    { name: "Dingtone", desc: "Appels et SMS avec numéros virtuels", type: "App" },
    { name: "Vyke", desc: "Second numéro avec spoof intégré", type: "App" }
  ];

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-black" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <Phone className="text-purple-500" size={28} />
            <span className="text-sm uppercase tracking-wider text-purple-500 font-bold">
              Formation
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Spoofer <span className="text-purple-500">ID / Call</span>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-2xl mb-10">
            Apprends à changer le numéro qui s'affiche quand tu appelles, 
            envoyer des SMS anonymes et utiliser des numéros virtuels.
          </p>

          <div className="flex items-center gap-4 p-5 bg-purple-950/30 border border-purple-900/50 max-w-xl">
            <Shield className="text-purple-500 flex-shrink-0" size={24} />
            <p className="text-neutral-300 text-sm">
              <strong className="text-white">Attention :</strong> Le spoofing d'appels à des fins 
              frauduleuses est illégal. Formation à but éducatif uniquement.
            </p>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12">
            Modules de <span className="text-purple-500">formation</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <div 
                key={module.id}
                className="group bg-neutral-900 border border-neutral-800 hover:border-purple-900/50 p-8 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-purple-500 font-bold text-sm">Module {module.id}</span>
                  <span className="text-neutral-500 text-sm">{module.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-500 transition-colors">
                  {module.title}
                </h3>
                <p className="text-neutral-400 mb-4">{module.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                    {module.level}
                  </span>
                  <Button 
                    onClick={() => navigate(`/secret/module/spoofer/${module.id}`)}
                    variant="ghost" 
                    className="text-purple-500 hover:text-purple-400 hover:bg-purple-950/30 p-0 h-auto font-semibold"
                  >
                    Commencer →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12">
            Types de <span className="text-purple-500">Spoofing</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((item, index) => (
              <div 
                key={index}
                className="bg-neutral-900 border border-neutral-800 p-6 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center ${
                  item.color === 'purple' ? 'bg-purple-950 border border-purple-900/50' : 'bg-orange-950 border border-orange-900/50'
                }`}>
                  <item.icon size={28} className={item.color === 'purple' ? 'text-purple-500' : 'text-orange-500'} />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${
                  item.color === 'purple' ? 'text-purple-500' : 'text-orange-500'
                }`}>
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-purple-950/20 border-y border-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-black text-white mb-2">50M+</div>
              <div className="text-sm text-neutral-400">Appels spoofés/jour aux US</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-500 mb-2">100%</div>
              <div className="text-sm text-neutral-400">Anonymat si bien configuré</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">60+</div>
              <div className="text-sm text-neutral-400">Pays supportés</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-500 mb-2">~2€</div>
              <div className="text-sm text-neutral-400">Prix moyen par appel spoof</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12">
            Outils <span className="text-purple-500">populaires</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="bg-neutral-900 border border-neutral-800 p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <PhoneCall size={20} className="text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white">{tool.name}</h3>
                    <span className="text-xs bg-purple-950 text-purple-400 px-2 py-0.5">{tool.type}</span>
                  </div>
                  <p className="text-neutral-400 text-sm">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="py-12 px-6 bg-red-950/20 border-t border-red-900/30">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <AlertTriangle className="text-red-500 flex-shrink-0" size={24} />
          <p className="text-red-300/80 text-sm text-center">
            <strong>Rappel légal :</strong> Utiliser le spoofing pour frauder, harceler ou usurper l'identité 
            d'autrui est un délit pénal passible de prison. Utilise ces connaissances de manière responsable.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SpooferPage;
