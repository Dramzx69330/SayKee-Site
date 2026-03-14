import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { AlertTriangle, Shield, Eye, Lock, UserX, CreditCard, Mail, Phone, Globe, Skull } from "lucide-react";

export const SecretHomePage = () => {
  const navigate = useNavigate();

  const scamTypes = [
    {
      icon: CreditCard,
      title: "Carding & Faux Conseillé",
      description: "Le carding est une fraude qui consiste à utiliser des CC (cartes bancaires volées) pour faire des achats.",
      color: "red"
    },
    {
      icon: Mail,
      title: "Social Engineering",
      description: "Techniques de manipulation psychologique utilisées pour exploiter la confiance ou la peur d’une personne pour obtenir des informations sensibles",
      color: "orange"
    },
    {
      icon: Globe,
      title: "Scama & Letter",
      description: "Scama = Dossié contenant les fausses pages / Letter = Apercu du mail recus par la victime.",
      color: "yellow"
    },
    {
      icon: UserX,
      title: "Usurpation d'Identité",
      description: "Technique pour se faire passer pour une personne ou une organisation légitime pour gagner la confiance de la victime et obtenir des informations sensibles.",
      color: "red"
    }
  ];

  const protectionTips = [
    {
      number: "01",
      title: "VPN no log",
      description: "Pour commencer il te faudras un VPN no log ( qui ne conserve aucune trace d'activité (connexions, IP, historique), EX : Mullvad"
    },
    {
      number: "02", 
      title: "RDP",
      description: "Un RDP c'est un protocole qui permet de se connecter à distance a un serveur et de le contrôler comme si on était directement devant. mais avec aucune donnée sur son reel PC"
    },
    {
      number: "03",
      title: "SENDER",
      description: "Un sender c'est un outil pour envoyer des messages en masse (emails ou SMS) beaucoup de destinataires automatiquement. qu'on va détourné pour l’envoi de spam."
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-black">
      {/* Hero Section - Dark Red Theme */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black to-black" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-3">
              <AlertTriangle className="text-red-500" size={24} />
              <span className="text-sm uppercase tracking-wider text-red-500 font-bold">
                Face Cachée — Escroquerie
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 text-white leading-[0.95] tracking-tighter">
              La vérité sur<br/>
              <span className="text-red-500">l'escroquerie</span>
            </h1>
            
            <p className="text-xl text-neutral-400 mb-12 max-w-2xl leading-relaxed">
              Cette section existe pour une raison : <span className="text-white font-semibold">vous faire bekter</span>. 
              Comprendre comment fonctionnent l'escroquerie est la meilleure maniere de la reproduire. 
              Pas de glorification, juste de l'éducation.
            </p>
            
            <div className="flex items-center gap-4 p-6 bg-red-950/30 border border-red-900/50">
              <Shield className="text-red-500 flex-shrink-0" size={32} />
              <div>
                <p className="text-white font-bold">Objectif : Prévention</p>
                <p className="text-neutral-400 text-sm">
                  Chaque arnaque que vous comprenez est une arnaque que vous pouvez reproduire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="py-6 px-6 bg-red-950/50 border-y border-red-900/50">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <Skull className="text-red-500" size={20} />
          <p className="text-red-300 text-sm font-medium text-center">
            Ce contenu est éducatif. L'escroquerie est un délit pénal grave. Protégez-vous et protégez les autres.
          </p>
          <Skull className="text-red-500" size={20} />
        </div>
      </section>

      {/* Scam Types Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              Les maitrise en fin de <span className="text-red-500">formations</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl">
              On commence directement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {scamTypes.map((scam, index) => (
              <div 
                key={index}
                className="group bg-neutral-900 border border-neutral-800 hover:border-red-900/50 p-10 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-red-950 border border-red-900/50 flex items-center justify-center flex-shrink-0">
                    <scam.icon size={28} className="text-red-500" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                      {scam.title}
                    </h3>
                    <p className="text-neutral-400 leading-relaxed">
                      {scam.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section className="py-32 px-6 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              Mon <span className="text-red-500">parcours</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl">
              Behind the scenes — La vérité derrière le succès
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-neutral-900 border border-neutral-800 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="text-red-500" size={24} />
                  <h3 className="text-xl font-bold text-white">Pourquoi cette section ?</h3>
                </div>
                <p className="text-neutral-400 leading-relaxed">
                On dit que tout doit se mériter avec le temps et les efforts. Mais certains ne jouent pas selon ces règles. 
                Ils observent le système, ses failles, et les opportunités que les autres refusent de voir.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="text-red-500" size={24} />
                  <h3 className="text-xl font-bold text-white">Ce que j'ai appris</h3>
                </div>
                <p className="text-neutral-400 leading-relaxed">
                  Dans ma vie, j'ai vécu le pire comme le meilleur. 
                  Les tech que j'enseigne ici viennent de cette expérience — 
                  monter dans le train avant de le voir passer.
                </p>
              </div>
            </div>

            <div className="bg-red-950/20 border border-red-900/30 p-10">
              <h3 className="text-2xl font-black text-white mb-6">
                Avertissement important
              </h3>
              <div className="space-y-6">
                <p className="text-neutral-300 leading-relaxed">
                Nous n’encourageons en aucun cas l’escroquerie, la fraude ou toute activité illégale. 
                Le contenu présenté ici a uniquement pour objectif d’informer et de sensibiliser aux différentes techniques utilisées dans ce domaine.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                Les exemples, termes et situations évoqués sont utilisés dans un cadre éducatif et de prévention afin de mieux comprendre ces pratiques et de savoir les reconnaître.
                 </p>
                <p className="text-neutral-300 leading-relaxed">
                  Chacun reste responsable de l’utilisation qu’il fait de ces informations. Notre objectif est d’informer, pas d’inciter.
                </p>
                <p className="text-white font-bold">
                  Protégez-vous. Éduquez-vous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protection Tips */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              Comment se <span className="text-red-500">préparer</span>
            </h2>
            <p className="text-xl text-neutral-400">
              Les prérequis de base
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {protectionTips.map((tip, index) => (
              <div key={index} className="relative">
                <div className="text-8xl font-black text-red-950 absolute -top-6 -left-2">{tip.number}</div>
                <div className="relative pt-12">
                  <h3 className="text-2xl font-black text-white mb-4">{tip.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-32 px-6 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl font-black text-white mb-4 tracking-tight">
              Ne pas <span className="text-red-500">RED</span>
            </h2>
            <p className="text-xl text-neutral-400">
              Comment eviter de RED
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <Phone className="text-red-500 mb-4" size={28} />
              <h3 className="text-xl font-bold text-white mb-3">Bonne Scama</h3>
              <p className="text-neutral-400 text-lg mb-4">Pas de leak</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <Globe className="text-red-500 mb-4" size={28} />
              <h3 className="text-xl font-bold text-white mb-3">AB a jour</h3>
              <p className="text-neutral-400 text-lg mb-4">Avoir les AB de sa scama a jour</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <Shield className="text-red-500 mb-4" size={28} />
              <h3 className="text-xl font-bold text-white mb-3">NDD</h3>
              <p className="text-neutral-400 text-lg mb-4">Avoir un NDD pas trop flag</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-red-950/20 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Retour à la<br/><span className="text-red-500">lumière</span>
          </h2>
          <p className="text-xl text-neutral-400 mb-12">
            Maintenant que vous êtes informé, continuez votre apprentissage
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/trading")}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-14 h-16 rounded-none"
          >
            Voir les formations
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SecretHomePage;
