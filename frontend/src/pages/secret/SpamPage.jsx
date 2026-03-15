import { useNavigate } from "react-router-dom";
import { Mail, AlertTriangle, Shield, Send, FileText, Users, Database, Server, Globe } from "lucide-react";
import { Button } from "../../components/ui/button";

export const SpamPage = () => {
  const navigate = useNavigate();

  const modules = [
    {
      id: 1,
      title: "Introduction au Spam",
      description: "C'est quoi le spam ? Comment ça marche et pourquoi c'est efficace pour récupérer des données.",
      duration: "10 min",
      level: "Débutant"
    },
    {
      id: 2,
      title: "Le Matériel Nécessaire",
      description: "Hébergeur, NDD, scama, sender, numlist... tout ce qu'il te faut pour lancer une campagne.",
      duration: "20 min",
      level: "Intermédiaire"
    },
    {
      id: 3,
      title: "Créer une Scama",
      description: "Comment créer une page de phishing convaincante qui imite parfaitement l'original.",
      duration: "30 min",
      level: "Avancé"
    },
    {
      id: 4,
      title: "Lancer une Campagne",
      description: "Configuration du sender, envoi en masse, et optimisation du taux de conversion.",
      duration: "25 min",
      level: "Pratique"
    }
  ];

  const spamTypes = [
    {
      icon: Mail,
      title: "Spam Mail",
      description: "Envoi massif d'emails avec une scama pour récupérer des logs.",
      color: "orange"
    },
    {
      icon: Send,
      title: "Spam SMS", 
      description: "Envoi de SMS en masse avec lien vers ta scama.",
      color: "yellow"
    },
    {
      icon: Globe,
      title: "Spam Vocal",
      description: "Messages vocaux automatisés (robocalls) pour rediriger.",
      color: "orange"
    },
    {
      icon: Users,
      title: "Spam Social",
      description: "Messages en masse sur réseaux sociaux et messageries.",
      color: "yellow"
    }
  ];

  const targets = [
    { name: "Banques", desc: "BNP, SG, CA, LCL, Boursorama...", rate: "15-25%" },
    { name: "Services", desc: "Netflix, Amazon, PayPal, Apple...", rate: "10-20%" },
    { name: "Livraison", desc: "La Poste, Colissimo, Chronopost...", rate: "20-35%" },
    { name: "Santé", desc: "Ameli, carte vitale, mutuelles...", rate: "25-40%" },
    { name: "Impôts", desc: "Remboursement fiscal, amendes...", rate: "15-30%" },
    { name: "Telecom", desc: "Orange, SFR, Free, Bouygues...", rate: "10-15%" }
  ];

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/40 via-black to-black" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="text-orange-500" size={28} />
            <span className="text-sm uppercase tracking-wider text-orange-500 font-bold">
              Formation
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Spam & <span className="text-orange-500">Phishing</span>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-2xl mb-10">
            Apprends à créer des campagnes de spam efficaces, monter des scamas 
            convaincantes et récupérer des logs en masse.
          </p>

          <div className="flex items-center gap-4 p-5 bg-orange-950/30 border border-orange-900/50 max-w-xl">
            <Shield className="text-orange-500 flex-shrink-0" size={24} />
            <p className="text-neutral-300 text-sm">
              <strong className="text-white">Avertissement :</strong> Le phishing est un délit pénal grave. 
              Cette formation est à but éducatif uniquement.
            </p>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12">
            Modules de <span className="text-orange-500">formation</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <div 
                key={module.id}
                className="group bg-neutral-900 border border-neutral-800 hover:border-orange-900/50 p-8 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-orange-500 font-bold text-sm">Module {module.id}</span>
                  <span className="text-neutral-500 text-sm">{module.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {module.title}
                </h3>
                <p className="text-neutral-400 mb-4">{module.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                    {module.level}
                  </span>
                  <Button 
                    onClick={() => navigate(`/secret/module/spam/${module.id}`)}
                    variant="ghost" 
                    className="text-orange-500 hover:text-orange-400 hover:bg-orange-950/30 p-0 h-auto font-semibold"
                  >
                    Commencer →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de Spam */}
      <section className="py-20 px-6 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12">
            Types de <span className="text-orange-500">Spam</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spamTypes.map((item, index) => (
              <div 
                key={index}
                className="bg-neutral-900 border border-neutral-800 p-6 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center ${
                  item.color === 'orange' ? 'bg-orange-950 border border-orange-900/50' : 'bg-yellow-950 border border-yellow-900/50'
                }`}>
                  <item.icon size={28} className={item.color === 'orange' ? 'text-orange-500' : 'text-yellow-500'} />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${
                  item.color === 'orange' ? 'text-orange-500' : 'text-yellow-500'
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
      <section className="py-20 px-6 bg-orange-950/20 border-y border-orange-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-black text-white mb-2">3.4B</div>
              <div className="text-sm text-neutral-400">Emails spam/jour mondial</div>
            </div>
            <div>
              <div className="text-4xl font-black text-orange-500 mb-2">15-40%</div>
              <div className="text-sm text-neutral-400">Taux de clic moyen</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">~5€</div>
              <div className="text-sm text-neutral-400">Coût pour 10K SMS</div>
            </div>
            <div>
              <div className="text-4xl font-black text-orange-500 mb-2">94%</div>
              <div className="text-sm text-neutral-400">Malwares via email</div>
            </div>
          </div>
        </div>
      </section>

      {/* Targets / Cibles populaires */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12">
            Cibles <span className="text-orange-500">populaires</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targets.map((target, index) => (
              <div 
                key={index}
                className="bg-neutral-900 border border-neutral-800 p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-orange-600 flex items-center justify-center flex-shrink-0">
                  <Database size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg font-bold text-white">{target.name}</h3>
                    <span className="text-xs bg-orange-950 text-orange-400 px-2 py-0.5">{target.rate}</span>
                  </div>
                  <p className="text-neutral-400 text-sm">{target.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Matériel rapide */}
      <section className="py-20 px-6 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12">
            Matériel <span className="text-orange-500">nécessaire</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="w-12 h-12 bg-orange-600 flex items-center justify-center mb-6">
                <Server size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Infrastructure</h3>
              <ul className="text-neutral-400 text-sm space-y-2">
                <li>• Hébergeur (Plesk recommandé)</li>
                <li>• Nom de domaine crédible</li>
                <li>• Certificat SSL</li>
                <li>• VPN / Proxy</li>
              </ul>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="w-12 h-12 bg-orange-600 flex items-center justify-center mb-6">
                <FileText size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Contenu</h3>
              <ul className="text-neutral-400 text-sm space-y-2">
                <li>• Scama (page de phishing)</li>
                <li>• Letter (template email/SMS)</li>
                <li>• Panel de réception</li>
                <li>• Redirections</li>
              </ul>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="w-12 h-12 bg-orange-600 flex items-center justify-center mb-6">
                <Send size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Envoi</h3>
              <ul className="text-neutral-400 text-sm space-y-2">
                <li>• Sender (SMTP/SMS API)</li>
                <li>• Liste de numéros (NL)</li>
                <li>• Liste d'emails (ML)</li>
                <li>• Rotation de domaines</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="py-12 px-6 bg-red-950/20 border-t border-red-900/30">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <AlertTriangle className="text-red-500 flex-shrink-0" size={24} />
          <p className="text-red-300/80 text-sm text-center">
            <strong>Rappel légal :</strong> Le phishing et l'escroquerie sont des délits pénaux graves 
            passibles de 5 ans de prison et 375 000€ d'amende. Formation à but éducatif uniquement.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SpamPage;
