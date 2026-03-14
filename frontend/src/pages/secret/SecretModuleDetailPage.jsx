import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, BookOpen, AlertTriangle, Shield, CheckCircle } from "lucide-react";
import { Button } from "../../components/ui/button";

// Module data
const modulesData = {
  carding: {
    1: {
      title: "Le Carding",
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
          title: "1- Mettre en place un environnement anonyme",
          points: [
            "VPN : Utilisation d'un vpn Si je vous dis VPN la plus part me diront qu'ils connaissent des vpn-no log, sans trace et fiable. Sauf que dans la réalité même les plus grand vpn (Proton notamment) gardes des logs sur leurs serveurs, donc minimise l'anonymat pour certains. Dans notre cas on va utiliser sois un VPN sous VPS basé chez nos confrères hackeur les Russes. Sois utiliser un Vpn qui fera très bien le taff Mullvad (NO LOG). Une fois le VPN installé nos passons au proxy.",
            "Browser and Proxy : Même en utilisant un vpn, vous n'êtes pas à l'abris de laisser des traces, c'est pour ca que nous allons utiliser une VM avec le naviguateur Brave ou TOR et l'intstallation de proxy socks 5. Néanmoins parler de la partie technique du proxy étant un ptit peu long, je vous laisse vous renseigner. ",
            "CCleaner : CCleaner est la référence numéro 1 sur le nettoyage de cookies, pisteur etc.. Pour mener à bien votre card veuillez utiliser l'option NETTOYEUR pour supprimer l'ensembles de petis fichiers traqueurs.",
            "RDP : (Remote Desktop Protocol) c'est un pc a distance, ca vous permettras de ne rien stocker sur votre pc en cas de probleme ou autre. vous pourrez le contrôler comme si vous étiez physiquement devant."
          ]
        },
        {
          type: "section",
          title: "-2 LE SPAM",
          points: [
          "<strong>Le spam c’est quoi ?</strong> : On va la faire bref de fou, en gros l’idée est d’envoyer en masse un SMS à des milliers de numéros en même temps. En supposant une raison quelconque à la victime d’aller sur votre site et d’y déposer des informations personnelles.",
            "<strong>Pour quoi faire ?</strong> : Spam a simplement pour but de récupérer des informations personnelles (Ccs, Log banque, Log améli, compte Netflix ou Spotify, etc.)",
          ]
        },
{
  type: "warning",
  title: "Lexique",
  text: `CC = Carte de crédit
PPL = PayPal
LOG = Compte (avec / Sans historique)
CNI = Carte Nationale d’Identité
Scam = Arnaque
Scammeur = Arnaqueur
Autoshop = Site d’achat de CC, PPL, LOG
VBV = Vérification de sécurité pour valider un paiement
Site NoVBV = Site sans vérification
Allo = Appel à une victime pour obtenir une validation
Drop = Adresse utilisée pour recevoir une commande`
}
      ]
    },
    2: {
      title: "LE MATERIEL",
      duration: "20 min",
      level: "Intermédiaire",
      description: "Voici le matériel nécessaire pour lancer un spam ainsi que les fournisseurs que je peux conseiller et leur prix",
      content: [
        {
          type: "intro",
          title: "Les méthodes d'attaque",
          text: "Les fraudeurs utilisent diverses techniques sophistiquées pour obtenir vos données bancaires. Comprendre ces méthodes vous permet de mieux vous en protéger."
        },
        {
          type: "section",
          title: "ETAPE 1 : LE MATERIEL",
          points: [
            "Un hebergeur : Je conseille un plesk",
            "Un nom de domaine : → je conseille de le prendre sur https://www.namesilo.com car facile d’utilisation et paiement en crypto possible. (Pensez à prendre un nom de domaine qui est crédible, .com ou . Fr obligatoire, à la limite un .net Exemples de NDD crédibles : www.verif-sante.com www.verif-compte.com www.authentificationcompte.com et tous ces genres de NDD)",
            "Un site qui ressemble à l’original : qu’on voudrait attaquer, autrement appelée une SCAMA",
            "Un sender : Un site ou une api qui enverra les sms à notre place",
            "Une liste de numéro de téléphone, dites NL (NumList)",
            "Et pour finir, une adresse mail Yandex. Donc par évidence sur le site : www.mail.yandex.com/en"
          ]
        },
        {
          type: "section",
          title: "ETAPE 2 : LA LIAISON ENTRE L’HEBERGEUR ET LE NOM DE DOMAINE (NDD)",
          points: [
            "On va se rendre sur le plesk afin de récupérer l’adresse IP ( sans les ports) de notre hébergeur fouillez un peu vous devriez trouver, on la garde de côté on va l’utiliser plus tard. On va se rendre sur le fournisseur de NDD afin de créer un DNS dédié à notre hébergeur. Pour se faire, trouvez la catégorie « Update DNS » ou bien « configuration dns » supprimez tous les DNS déjà crées car ils nous seront pas utiles. Créer un DNS de type « A » et non un autre. Il va falloir en créer deux telegram : @Loukra ( si besoin d'aide )",
          ]
        },
        {
          type: "",
          title: "3. Les Data Breaches",
          points: [
            "Scamma : Scamma avec AB a jour ( pas de leak ) ! risque rez stealer et de red en plein spam si utilisation de scamma leak",
            "Letter : Si spam mail, letter pas flag (risque de red en plein spam si flag )",
            "Données revendues en masse sur le dark web",
            "Vérifiez sur haveibeenpwned.com si vos données ont fuité"
          ]
        }
      ]
    },
    3: {
      title: "Achat De Prérequis",
      duration: "25 min",
      level: "Tous niveaux",
      description: "Nous proposons a la vente, les prérequis pour bien debuter.",
      content: [
        {
          type: "intro",
          title: "La protection au quotidien",
          text: "Ce contenu est éducatif. L'escroquerie est un délit pénal grave. Protégez-vous et protégez les autres."
        },
        {
          type: "section",
          title: "Annonymat",
          points: [
            "VPN NO LOG = 10€",
            "Proxy = 1GB 3€",
            "RDP = 15€",
          ]
        },
        {
          type: "section",
          title: "SPAM",
          points: [
            "Scamma sur mesure : 250€",
            "Sender Mail ( AWS / SMTP ) = 50 - 250€",
            "Sender SMS License = 250€",
            "ML = 5€/k",
            "NL = 10€/k"
          ]
        },
        {
          type: "section",
          title: "Allo",
          points: [
            "Foma Allo = 600€",
            "Spoofer ( License ) = 200€",
            "Site Recent Ship = 25/u"
          ]
        }
      ]
    },
    4: {
      title: "Nos Services",
      duration: "10 min",
      level: "Urgent",
      description: "Nous proposons differents services",
      content: [
        {
          type: "intro",
          title: "Allez bekter bande de singes",
          text: "Toujours dans le partages et la bonne humeur :)"
        },
        {
          type: "section",
          title: "RC",
          points: [
    
          ]
        },
        {
          type: "section",
          title: "Shooter",
          points: [

          ]
        },
        {
          type: "section",
          title: "Décaisse",
          points: [

          ]
        },
        {
          type: "warning",
          title: "Important",
          text: "Je suis pas responsable de vous, cette face a uniquement pour but de vous faire connaitre se monde la"
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
                        <p 
                        className="text-neutral-300 whitespace-pre-line"
                        dangerouslySetInnerHTML={{ __html: point }}
                        ></p>                      
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
                <p className="text-neutral-300 leading-relaxed whitespace-pre-line">
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
