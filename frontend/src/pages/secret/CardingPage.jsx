import { AlertTriangle, CreditCard, Shield, Eye, Lock, Fingerprint, Database } from "lucide-react";
import { Button } from "../../components/ui/button";

export const CardingPage = () => {
  const modules = [
    {
      id: 1,
      title: "Comprendre le Carding",
      description: "Qu'est-ce que le carding ? Comment les données sont volées et revendues sur le dark web.",
      duration: "15 min",
      level: "Débutant"
    },
    {
      id: 2,
      title: "Les Techniques Utilisées",
      description: "Skimming, phishing, data breaches - les méthodes les plus courantes expliquées.",
      duration: "20 min",
      level: "Intermédiaire"
    },
    {
      id: 3,
      title: "Se Protéger Efficacement",
      description: "Mesures concrètes pour sécuriser vos transactions et vos données bancaires.",
      duration: "25 min",
      level: "Tous niveaux"
    },
    {
      id: 4,
      title: "Que Faire en Cas de Fraude",
      description: "Les étapes à suivre immédiatement si vous êtes victime d'une fraude bancaire.",
      duration: "10 min",
      level: "Urgent"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 via-black to-black" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-500/10 blur-3xl rounded-full" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="text-red-500" size={28} />
            <span className="text-sm uppercase tracking-wider text-red-500 font-bold">
              Formation Sensibilisation
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Carding & <span className="text-red-500">Fraude CB</span>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-2xl mb-10">
            Apprenez comment les escrocs opèrent pour mieux vous protéger. 
            Cette formation est 100% préventive et éducative.
          </p>

          <div className="flex items-center gap-4 p-5 bg-red-950/30 border border-red-900/50 max-w-xl">
            <Shield className="text-red-500 flex-shrink-0" size={24} />
            <p className="text-neutral-300 text-sm">
              <strong className="text-white">Rappel :</strong> Le carding est un délit pénal grave. 
              Cette formation vise uniquement à vous protéger.
            </p>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12">
            Modules de <span className="text-red-500">formation</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {modules.map((module) => (
              <div 
                key={module.id}
                className="group bg-neutral-900 border border-neutral-800 hover:border-red-900/50 p-8 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-red-500 font-bold text-sm">Module {module.id}</span>
                  <span className="text-neutral-500 text-sm">{module.duration}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                  {module.title}
                </h3>
                <p className="text-neutral-400 mb-4">{module.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                    {module.level}
                  </span>
                  <Button variant="ghost" className="text-red-500 hover:text-red-400 hover:bg-red-950/30 p-0 h-auto font-semibold">
                    Commencer →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-red-950/20 border-y border-red-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-black text-white mb-2">1.2M</div>
              <div className="text-sm text-neutral-400">Victimes/an en France</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-500 mb-2">€470M</div>
              <div className="text-sm text-neutral-400">Pertes annuelles</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white mb-2">+32%</div>
              <div className="text-sm text-neutral-400">Hausse des fraudes</div>
            </div>
            <div>
              <div className="text-4xl font-black text-red-500 mb-2">80%</div>
              <div className="text-sm text-neutral-400">Évitables avec éducation</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardingPage;
