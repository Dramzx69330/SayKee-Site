import { Monitor, Shield, AlertTriangle, Wifi, Globe, Server } from "lucide-react";
import { Button } from "../../components/ui/button";

export const SpooferPage = () => {
  const techniques = [
    {
      icon: Wifi,
      title: "IP Spoofing",
      description: "Comment les attaquants masquent leur identité en falsifiant leur adresse IP.",
      danger: "Élevé"
    },
    {
      icon: Globe,
      title: "DNS Spoofing",
      description: "Redirection vers de faux sites web en corrompant les serveurs DNS.",
      danger: "Critique"
    },
    {
      icon: Monitor,
      title: "MAC Spoofing",
      description: "Usurpation d'identité sur les réseaux locaux via l'adresse MAC.",
      danger: "Moyen"
    },
    {
      icon: Server,
      title: "ARP Spoofing",
      description: "Interception du trafic réseau par empoisonnement des tables ARP.",
      danger: "Élevé"
    }
  ];

  const protections = [
    "Utilisez toujours un VPN sur les réseaux publics",
    "Vérifiez les certificats SSL des sites web",
    "Activez l'authentification à deux facteurs",
    "Mettez à jour régulièrement vos logiciels",
    "Méfiez-vous des réseaux Wi-Fi inconnus"
  ];

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/30 via-black to-black" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 blur-3xl rounded-full" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <Monitor className="text-orange-500" size={28} />
            <span className="text-sm uppercase tracking-wider text-orange-500 font-bold">
              Techniques d'Usurpation
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Spoofing & <span className="text-orange-500">Usurpation</span>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-2xl mb-10">
            Comprendre les techniques de spoofing pour identifier et éviter les attaques 
            d'usurpation d'identité numérique.
          </p>
        </div>
      </section>

      {/* Warning */}
      <section className="py-6 px-6 bg-orange-950/30 border-y border-orange-900/30">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <AlertTriangle className="text-orange-500" size={20} />
          <p className="text-orange-300 text-sm font-medium text-center">
            Le spoofing est utilisé dans 60% des cyberattaques. Apprenez à vous en protéger.
          </p>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12">
            Types de <span className="text-orange-500">Spoofing</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {techniques.map((tech, index) => (
              <div 
                key={index}
                className="group bg-neutral-900 border border-neutral-800 hover:border-orange-900/50 p-8 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 bg-orange-950 border border-orange-900/50 flex items-center justify-center flex-shrink-0">
                    <tech.icon size={28} className="text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors">
                        {tech.title}
                      </h3>
                      <span className={`text-xs uppercase tracking-wider font-bold px-2 py-1 ${
                        tech.danger === 'Critique' ? 'bg-red-950 text-red-500' :
                        tech.danger === 'Élevé' ? 'bg-orange-950 text-orange-500' :
                        'bg-yellow-950 text-yellow-500'
                      }`}>
                        {tech.danger}
                      </span>
                    </div>
                    <p className="text-neutral-400">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protection */}
      <section className="py-20 px-6 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-black text-white mb-8">
                Comment se <span className="text-orange-500">protéger</span>
              </h2>
              <div className="space-y-4">
                {protections.map((tip, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-neutral-300 pt-1">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-orange-950/20 border border-orange-900/30 p-10">
              <Shield className="text-orange-500 mb-6" size={40} />
              <h3 className="text-2xl font-black text-white mb-4">
                Outils recommandés
              </h3>
              <ul className="space-y-3 text-neutral-300">
                <li>• VPN de confiance (NordVPN, ProtonVPN)</li>
                <li>• Gestionnaire de mots de passe</li>
                <li>• Extensions anti-phishing</li>
                <li>• Antivirus avec protection réseau</li>
                <li>• Authentificateur 2FA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpooferPage;
