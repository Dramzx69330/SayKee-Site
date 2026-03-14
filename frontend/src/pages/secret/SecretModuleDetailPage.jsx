import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, BookOpen, AlertTriangle, Shield, CheckCircle } from "lucide-react";
import { Button } from "../../components/ui/button";

// Module data
const modulesData = {
  carding: {
    1: {
      title: "Comprendre le Carding",
      duration: "15 min",
      level: "Débutant",
      description: "Qu'est-ce que le carding ? Comment les données sont volées et revendues sur le dark web.",
      content: [
        {
          type: "intro",
          title: "Introduction",
          text: "Le carding est une forme de fraude à la carte bancaire qui consiste à utiliser des informations de cartes volées pour effectuer des achats frauduleux. Cette pratique est illégale et punie par la loi."
        },
        {
          type: "section",
          title: "Comment les données sont-elles volées ?",
          points: [
            "Skimming : dispositifs installés sur les distributeurs automatiques ou terminaux de paiement",
            "Phishing : faux emails et sites web imitant des entreprises légitimes",
            "Data breaches : piratage de bases de données d'entreprises",
            "Malware : logiciels malveillants qui enregistrent les frappes clavier"
          ]
        },
        {
          type: "section",
          title: "Le Dark Web et la revente",
          points: [
            "Les données volées sont vendues sur des marchés clandestins",
            "Prix variables selon la qualité des données (CVV, date d'expiration, etc.)",
            "Fullz : packages complets incluant nom, adresse, numéro de sécurité sociale",
            "Les vendeurs offrent parfois des 'garanties' sur les cartes actives"
          ]
        },
        {
          type: "warning",
          title: "Rappel légal",
          text: "Le carding est un délit pénal grave passible de plusieurs années de prison et d'amendes importantes. Cette formation est uniquement éducative pour vous aider à vous protéger."
        }
      ]
    },
    2: {
      title: "Les Techniques Utilisées",
      duration: "20 min",
      level: "Intermédiaire",
      description: "Skimming, phishing, data breaches - les méthodes les plus courantes expliquées.",
      content: [
        {
          type: "intro",
          title: "Les méthodes d'attaque",
          text: "Les fraudeurs utilisent diverses techniques sophistiquées pour obtenir vos données bancaires. Comprendre ces méthodes vous permet de mieux vous en protéger."
        },
        {
          type: "section",
          title: "1. Le Skimming",
          points: [
            "Dispositifs physiques placés sur les DAB et terminaux",
            "Caméras cachées pour capturer le code PIN",
            "Overlays sur les claviers pour enregistrer les touches",
            "Comment détecter : vérifiez toujours le lecteur avant insertion"
          ]
        },
        {
          type: "section",
          title: "2. Le Phishing",
          points: [
            "Emails imitant votre banque ou des services connus",
            "Sites web clonés avec des URLs similaires",
            "SMS frauduleux (smishing)",
            "Appels téléphoniques (vishing)"
          ]
        },
        {
          type: "section",
          title: "3. Les Data Breaches",
          points: [
            "Piratage de grandes entreprises (retailers, hôtels, etc.)",
            "Exploitation de failles de sécurité",
            "Données revendues en masse sur le dark web",
            "Vérifiez sur haveibeenpwned.com si vos données ont fuité"
          ]
        }
      ]
    },
    3: {
      title: "Se Protéger Efficacement",
      duration: "25 min",
      level: "Tous niveaux",
      description: "Mesures concrètes pour sécuriser vos transactions et vos données bancaires.",
      content: [
        {
          type: "intro",
          title: "La protection au quotidien",
          text: "La majorité des fraudes peuvent être évitées avec quelques précautions simples. Voici les mesures essentielles à mettre en place."
        },
        {
          type: "section",
          title: "Protégez vos cartes physiques",
          points: [
            "Ne perdez jamais votre carte de vue lors d'un paiement",
            "Vérifiez les DAB avant d'insérer votre carte",
            "Couvrez le clavier lors de la saisie du PIN",
            "Utilisez le paiement sans contact quand possible"
          ]
        },
        {
          type: "section",
          title: "Sécurisez vos achats en ligne",
          points: [
            "Vérifiez le HTTPS et le cadenas dans la barre d'adresse",
            "Utilisez une carte virtuelle pour les achats en ligne",
            "Activez les notifications de transaction",
            "Ne sauvegardez pas vos données de carte sur les sites"
          ]
        },
        {
          type: "section",
          title: "Outils recommandés",
          points: [
            "Cartes virtuelles : proposées par la plupart des banques",
            "Authentification 3D Secure",
            "Applications bancaires avec alertes temps réel",
            "Gestionnaire de mots de passe"
          ]
        }
      ]
    },
    4: {
      title: "Que Faire en Cas de Fraude",
      duration: "10 min",
      level: "Urgent",
      description: "Les étapes à suivre immédiatement si vous êtes victime d'une fraude bancaire.",
      content: [
        {
          type: "intro",
          title: "Réagir rapidement",
          text: "Si vous suspectez une fraude, chaque minute compte. Voici les étapes à suivre immédiatement."
        },
        {
          type: "section",
          title: "Étape 1 : Bloquer la carte",
          points: [
            "Appelez immédiatement votre banque (numéro au dos de la carte)",
            "Utilisez l'application bancaire pour bloquer instantanément",
            "En France : 0 892 705 705 (serveur interbancaire)",
            "Notez l'heure et le numéro de référence de l'opposition"
          ]
        },
        {
          type: "section",
          title: "Étape 2 : Documenter et signaler",
          points: [
            "Rassemblez toutes les preuves (relevés, emails suspects)",
            "Déposez plainte en ligne sur pre-plainte-en-ligne.gouv.fr",
            "Ou rendez-vous au commissariat/gendarmerie",
            "Signalez sur Perceval (service-public.fr)"
          ]
        },
        {
          type: "section",
          title: "Étape 3 : Demander remboursement",
          points: [
            "Contactez votre banque par écrit (lettre recommandée)",
            "Délai légal de remboursement : 1 jour ouvré",
            "Franchise maximum : 50€ (sauf négligence grave)",
            "Conservez tous les documents pendant 5 ans"
          ]
        },
        {
          type: "warning",
          title: "Important",
          text: "Vous avez 13 mois pour contester une opération frauduleuse auprès de votre banque. N'attendez pas !"
        }
      ]
    }
  },
  spoofer: {
    1: {
      title: "IP Spoofing",
      duration: "15 min",
      level: "Intermédiaire",
      description: "Comment les attaquants masquent leur identité en falsifiant leur adresse IP.",
      content: [
        {
          type: "intro",
          title: "Qu'est-ce que l'IP Spoofing ?",
          text: "L'IP spoofing consiste à envoyer des paquets réseau avec une adresse IP source falsifiée, permettant à l'attaquant de masquer son identité ou d'usurper celle d'un autre."
        },
        {
          type: "section",
          title: "Utilisations malveillantes",
          points: [
            "Attaques DDoS amplifiées",
            "Contournement des pare-feu",
            "Man-in-the-middle attacks",
            "Session hijacking"
          ]
        },
        {
          type: "section",
          title: "Comment se protéger",
          points: [
            "Utilisez des connexions chiffrées (HTTPS, VPN)",
            "Configurez le filtrage d'entrée sur votre réseau",
            "Activez les protections anti-spoofing de votre routeur",
            "Surveillez les logs réseau pour détecter les anomalies"
          ]
        }
      ]
    }
  },
  spam: {
    1: {
      title: "Identifier le Phishing",
      duration: "15 min",
      level: "Débutant",
      description: "Apprenez à reconnaître les emails de phishing en quelques secondes.",
      content: [
        {
          type: "intro",
          title: "Les signes révélateurs",
          text: "94% des malwares sont distribués par email. Apprendre à identifier le phishing est essentiel pour votre sécurité numérique."
        },
        {
          type: "section",
          title: "Red flags à surveiller",
          points: [
            "Adresse email de l'expéditeur suspecte",
            "Fautes d'orthographe et de grammaire",
            "Urgence excessive dans le message",
            "Liens raccourcis ou avec des caractères étranges",
            "Demande d'informations personnelles"
          ]
        },
        {
          type: "section",
          title: "Bonnes pratiques",
          points: [
            "Ne cliquez jamais sur les liens suspects",
            "Vérifiez l'URL en passant la souris dessus",
            "Contactez directement l'entreprise via son site officiel",
            "Signalez les emails suspects à signal-spam.fr"
          ]
        }
      ]
    }
  }
};

export const SecretModuleDetailPage = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  
  const module = modulesData[type]?.[id];
  
  if (!module) {
    return (
      <div className="min-h-screen pt-20 bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">Module non trouvé</h1>
          <Button onClick={() => navigate(-1)} className="bg-red-600 hover:bg-red-700">
            Retour
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Header */}
      <section className="py-12 px-6 border-b border-red-900/30">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-neutral-400 hover:text-red-500 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Retour</span>
          </button>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm uppercase tracking-wider text-red-500 font-bold">
              Module {id}
            </span>
            <span className="text-neutral-600">•</span>
            <span className="flex items-center gap-1 text-neutral-400 text-sm">
              <Clock size={14} />
              {module.duration}
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-sm text-neutral-400">{module.level}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            {module.title}
          </h1>
          <p className="text-xl text-neutral-400">
            {module.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {module.content.map((section, index) => (
            <div key={index}>
              {section.type === "intro" && (
                <div className="bg-neutral-900 border border-neutral-800 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="text-red-500" size={24} />
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  <p className="text-neutral-300 leading-relaxed text-lg">
                    {section.text}
                  </p>
                </div>
              )}
              
              {section.type === "section" && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
                  <div className="space-y-4">
                    {section.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="w-6 h-6 bg-red-950 border border-red-900/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle size={14} className="text-red-500" />
                        </div>
                        <p className="text-neutral-300">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {section.type === "warning" && (
                <div className="bg-red-950/30 border border-red-900/50 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertTriangle className="text-red-500" size={24} />
                    <h2 className="text-xl font-bold text-red-500">{section.title}</h2>
                  </div>
                  <p className="text-neutral-300 leading-relaxed">
                    {section.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-6 border-t border-red-900/30">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="border-neutral-700 hover:bg-neutral-900 text-white rounded-none"
          >
            ← Retour aux modules
          </Button>
          
          {modulesData[type]?.[parseInt(id) + 1] && (
            <Button 
              onClick={() => navigate(`/secret/module/${type}/${parseInt(id) + 1}`)}
              className="bg-red-600 hover:bg-red-700 text-white rounded-none"
            >
              Module suivant →
            </Button>
          )}
        </div>
      </section>
    </div>
  );
};

export default SecretModuleDetailPage;
