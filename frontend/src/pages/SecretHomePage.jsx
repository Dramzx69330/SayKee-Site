import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { AlertTriangle, Shield, Eye, Lock, UserX, CreditCard, Mail, Phone, Globe, Skull } from "lucide-react";

export const SecretHomePage = () => {
  const navigate = useNavigate();

  const scamTypes = [
    {
      icon: CreditCard,
      title: "Carding & Fraude CB",
      description: "Comment les escrocs volent et utilisent les données bancaires. Apprenez à reconnaître les signaux d'alerte.",
      color: "red"
    },
    {
      icon: Mail,
      title: "Phishing & Social Engineering",
      description: "Les techniques de manipulation psychologique utilisées pour voler vos informations personnelles.",
      color: "orange"
    },
    {
      icon: Globe,
      title: "Faux Sites & Dropshipping Arnaque",
      description: "Comment identifier les boutiques frauduleuses et les vendeurs malhonnêtes.",
      color: "yellow"
    },
    {
      icon: UserX,
      title: "Usurpation d'Identité",
      description: "Protection contre le vol d'identité et les conséquences juridiques pour les victimes.",
      color: "red"
    }
  ];

  const protectionTips = [
    {
      number: "01",
      title: "Ne jamais partager vos codes",
      description: "Aucune banque, aucun service légitime ne vous demandera jamais vos codes par téléphone ou email."
    },
    {
      number: "02", 
      title: "Vérifiez les URLs",
      description: "Avant d'entrer des informations sensibles, vérifiez toujours que l'URL est correcte et sécurisée (https)."
    },
    {
      number: "03",
      title: "Méfiez-vous des urgences",
      description: "Les escrocs créent un sentiment d'urgence. Prenez toujours le temps de réfléchir avant d'agir."
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
                Face Cachée — Sensibilisation
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 text-white leading-[0.95] tracking-tighter">
              La vérité sur<br/>
              <span className="text-red-500">l'escroquerie</span>
            </h1>
            
            <p className="text-xl text-neutral-400 mb-12 max-w-2xl leading-relaxed">
              Cette section existe pour une raison : <span className="text-white font-semibold">vous protéger</span>. 
              Comprendre comment fonctionnent les arnaques est la meilleure défense contre elles. 
              Pas de glorification, juste de l'éducation.
            </p>
            
            <div className="flex items-center gap-4 p-6 bg-red-950/30 border border-red-900/50">
              <Shield className="text-red-500 flex-shrink-0" size={32} />
              <div>
                <p className="text-white font-bold">Objectif : Prévention</p>
                <p className="text-neutral-400 text-sm">
                  Chaque arnaque que vous comprenez est une arnaque que vous pouvez éviter.
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
              Les arnaques les plus <span className="text-red-500">courantes</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl">
              Connaître l'ennemi pour mieux se défendre.
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
                  J'ai vu trop de gens se faire arnaquer. Des proches, des connaissances, 
                  des gens sur internet. L'ignorance est ce qui permet aux escrocs de prospérer. 
                  En partageant ces connaissances, je veux inverser la tendance.
                </p>
              </div>

              <div className="bg-neutral-900 border border-neutral-800 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="text-red-500" size={24} />
                  <h3 className="text-xl font-bold text-white">Ce que j'ai appris</h3>
                </div>
                <p className="text-neutral-400 leading-relaxed">
                  Dans mon parcours en trading et e-commerce, j'ai croisé le pire comme le meilleur. 
                  Les techniques que j'enseigne ici viennent de cette expérience — reconnaître les 
                  signaux d'alerte avant qu'il ne soit trop tard.
                </p>
              </div>
            </div>

            <div className="bg-red-950/20 border border-red-900/30 p-10">
              <h3 className="text-2xl font-black text-white mb-6">
                Le message important
              </h3>
              <div className="space-y-6">
                <p className="text-neutral-300 leading-relaxed">
                  L'argent facile n'existe pas. Quand quelqu'un vous promet des gains 
                  rapides sans effort, fuyez. C'est le premier signe d'une arnaque.
                </p>
                <p className="text-neutral-300 leading-relaxed">
                  Mes formations sur le trading et l'e-commerce demandent du travail, 
                  du temps et de la persévérance. Ceux qui réussissent sont ceux qui 
                  investissent dans leur éducation — pas dans des schémas douteux.
                </p>
                <p className="text-white font-bold">
                  Protégez-vous. Éduquez-vous. C'est la seule vraie stratégie.
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
              Comment se <span className="text-red-500">protéger</span>
            </h2>
            <p className="text-xl text-neutral-400">
              Les règles de base qui sauvent
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
              Ressources <span className="text-red-500">utiles</span>
            </h2>
            <p className="text-xl text-neutral-400">
              Où signaler et se renseigner
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <Phone className="text-red-500 mb-4" size={28} />
              <h3 className="text-xl font-bold text-white mb-3">Info Escroqueries</h3>
              <p className="text-neutral-400 text-sm mb-4">Numéro vert gratuit</p>
              <p className="text-2xl font-black text-white">0 805 805 817</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <Globe className="text-red-500 mb-4" size={28} />
              <h3 className="text-xl font-bold text-white mb-3">Signal Spam</h3>
              <p className="text-neutral-400 text-sm mb-4">Signaler un email frauduleux</p>
              <p className="text-lg font-bold text-white">signal-spam.fr</p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <Shield className="text-red-500 mb-4" size={28} />
              <h3 className="text-xl font-bold text-white mb-3">Cybermalveillance</h3>
              <p className="text-neutral-400 text-sm mb-4">Assistance et prévention</p>
              <p className="text-lg font-bold text-white">cybermalveillance.gouv.fr</p>
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
