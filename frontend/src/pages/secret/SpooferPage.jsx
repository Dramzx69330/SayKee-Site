import { useNavigate } from "react-router-dom";
import { AlertTriangle, Monitor, Shield, Wifi, Globe, Server, Fingerprint, Eye } from "lucide-react";
import { Button } from "../../components/ui/button";

export const SpooferPage = () => {
  const navigate = useNavigate();

  const modules = [
    {
      id: 1,
      title: "Introduction au Spoofing",
      description: "Qu'est-ce que le spoofing ? Les bases de l'usurpation d'identité numérique et comment ça fonctionne.",
      duration: "15 min",
      level: "Débutant"
    },
    {
      id: 2,
      title: "IP & MAC Spoofing",
      description: "Comment masquer son identité réseau, changer d'adresse IP et usurper une adresse MAC.",
      duration: "25 min",
      level: "Intermédiaire"
    },
    {
      id: 3,
      title: "DNS & ARP Spoofing",
      description: "Techniques avancées de redirection et d'interception du trafic réseau.",
      duration: "30 min",
      level: "Avancé"
    },
    {
      id: 4,
      title: "Outils & Setup OPSEC",
      description: "Configuration complète : VPN, proxies, anti-detect browsers et protection de ton identité.",
      duration: "20 min",
      level: "Pratique"
    }
  ];

  const spoofingTypes = [
    {
      icon: Wifi,
      title: "IP Spoofing",
      description: "Masquer ta vraie adresse IP pour rester anonyme.",
      color: "purple"
    },
    {
      icon: Monitor,
      title: "MAC Spoofing", 
      description: "Changer l'identité hardware de ta machine.",
      color: "orange"
    },
    {
      icon: Globe,
      title: "DNS Spoofing",
      description: "Rediriger le trafic vers des serveurs alternatifs.",
      color: "purple"
    },
    {
      icon: Server,
      title: "ARP Spoofing",
      description: "Intercepter le trafic sur un réseau local.",
      color: "orange"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-black" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <Monitor className="text-purple-500" size={28} />
            <span className="text-sm uppercase tracking-wider text-purple-500 font-bold">
              Formation
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Spoofing & <span className="text-purple-500">Anonymat</span>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-2xl mb-10">
            Apprends à masquer ton identité numérique, changer d'IP, spoofer ton MAC 
            et devenir un fantôme sur le réseau.
          </p>

          <div className="flex items-center gap-4 p-5 bg-purple-950/30 border border-purple-900/50 max-w-xl">
            <Shield className="text-purple-500 flex-shrink-0" size={24} />
            <p className="text-neutral-300 text-sm">
              <strong className="text-white">OPSEC First :</strong> L'anonymat est la base de tout. 
              Sans ça, t'es grillé avant même de commencer.
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

      {/* Types de Spoofing */}
      <section className="py-20 px-6 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12">
            Types de <span className="text-purple-500">Spoofing</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {spoofingTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-neutral-900 border border-neutral-800 p-6 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center ${
                  type.color === 'purple' ? 'bg-purple-950 border border-purple-900/50' : 'bg-orange-950 border border-orange-900/50'
                }`}>
                  <type.icon size={28} className={type.color === 'purple' ? 'text-purple-500' : 'text-orange-500'} />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${
                  type.color === 'purple' ? 'text-purple-500' : 'text-orange-500'
                }`}>
                  {type.title}
                </h3>
                <p className="text-neutral-400 text-sm">{type.description}</p>
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
              <div className="text-4xl font-black text-white mb-2">99%</div>
              <div className="text-sm text-neutral-400">Des pros utilisent un VPN</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-500 mb-2">0</div>
              <div className="text-sm text-neutral-400">Trace laissée si bien setup</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">5 min</div>
              <div className="text-sm text-neutral-400">Pour setup ton anonymat</div>
            </div>
            <div>
              <div className="text-4xl font-black text-purple-500 mb-2">∞</div>
              <div className="text-sm text-neutral-400">IPs disponibles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Outils recommandés */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12">
            Outils <span className="text-purple-500">recommandés</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="w-12 h-12 bg-purple-600 flex items-center justify-center mb-6">
                <Shield size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">VPN Premium</h3>
              <p className="text-neutral-400 mb-4">
                Mullvad, ProtonVPN, IVPN - Les seuls qui ne gardent vraiment aucun log.
              </p>
              <span className="text-purple-500 text-sm font-semibold">Essentiel</span>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="w-12 h-12 bg-purple-600 flex items-center justify-center mb-6">
                <Fingerprint size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Anti-Detect Browser</h3>
              <p className="text-neutral-400 mb-4">
                Multilogin, GoLogin, Dolphin - Pour gérer plusieurs identités.
              </p>
              <span className="text-purple-500 text-sm font-semibold">Recommandé</span>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="w-12 h-12 bg-purple-600 flex items-center justify-center mb-6">
                <Eye size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proxies Résidentiels</h3>
              <p className="text-neutral-400 mb-4">
                Bright Data, Smartproxy - IPs résidentielles clean et rotatives.
              </p>
              <span className="text-purple-500 text-sm font-semibold">Avancé</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpooferPage;
