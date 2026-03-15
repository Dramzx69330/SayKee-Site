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
      title: "Introduction au Spoof Call",
      duration: "10 min",
      level: "Débutant",
      description: "C'est quoi le spoof call ? Comment ca marche et pourquoi c'est utilisé.",
      content: [
        {
          type: "intro",
          title: "C'est quoi le Spoof ?",
          text: "On va la faire simple : le spoof call ca te permet de changer le numéro qui s'affiche quand t'appelles quelqu'un. Genre au lieu de voir ton 06, la personne voit le numéro de sa banque ou n'importe quel numéro que t'as choisi. C'est utilisé pour les allos principalement."
        },
        {
          type: "section",
          title: "Comment ca marche ?",
          points: [
            "En gros quand tu passes un appel, ton opérateur envoie ton numéro (Caller ID) au réseau. Avec un service de spoof, ce numéro est remplacé par celui que tu veux avant que l'appel arrive.",
            "La plupart des services utilisent la VoIP (Voice over IP) pour modifier les infos d'appel. C'est pas compliqué à utiliser.",
            "Le spoof en soi c'est pas illégal partout. C'est l'utilisation pour arnaquer qui l'est. Mais bon on va pas se mentir, 99% des gens qui spoof c'est pour faire des trucs pas nets."
          ]
        },
        {
          type: "section",
          title: "Pourquoi on utilise ca ?",
          points: [
            "<strong>Allo bancaire</strong> : Tu te fais passer pour la banque de la victime pour récupérer des codes de validation, des infos perso, etc.",
            "<strong>Allo support</strong> : Tu te fais passer pour Microsoft, Apple, l'assurance... les gens font confiance.",
            "<strong>Social engineering</strong> : Pour récupérer des infos que t'aurais pas autrement.",
            "<strong>Pas se faire tracer</strong> : Ton vrai numéro apparait nulle part."
          ]
        },
        {
          type: "warning",
          title: "A savoir",
          text: "Le spoof c'est un outil. Comme un couteau ca peut servir à couper du pain ou à faire des conneries. Je suis pas responsable de ce que vous en faites. Cette formation c'est pour vous montrer comment ca marche, point."
        }
      ]
    },
    2: {
      title: "Les Outils de Spoof",
      duration: "20 min",
      level: "Intermédiaire",
      description: "Les apps, services et méthodes pour changer ton numéro.",
      content: [
        {
          type: "intro",
          title: "Le Matos",
          text: "Y'a plusieurs facons de spoof : des apps sur ton tel, des services web, ou des trucs plus techniques avec SIP. Je vais vous montrer les principales options."
        },
        {
          type: "section",
          title: "Applications Mobile",
          points: [
            "<strong>SpoofCard</strong> : L'app la plus connue. Dispo iOS et Android. Tu achètes des crédits et tu choisis le numéro à afficher. Y'a même un voice changer intégré. Ca coute environ 2€ par appel.",
            "<strong>SpoofTel</strong> : Service web + app. Marche dans 80+ pays. Interface simple, tu peux payer en crypto.",
            "<strong>Dingtone / TextNow</strong> : C'est pas vraiment du spoof mais ca te donne des numéros virtuels US/Canada gratuits. Pratique pour avoir un numéro jetable."
          ]
        },
        {
          type: "section",
          title: "Numéros Virtuels",
          points: [
            "<strong>Hushed</strong> : Numéros temporaires dans 60+ pays. Genre 5€/mois par numéro. Tu peux recevoir appels et SMS.",
            "<strong>Burner</strong> : Numéros jetables US. Tu peux les supprimer quand tu veux.",
            "<strong>OnOff</strong> : App francaise, numéros FR virtuels. Bien pour avoir un deuxième numéro."
          ]
        },
        {
          type: "section",
          title: "Setup Pro (SIP)",
          points: [
            "<strong>VoIP Providers</strong> : Twilio, Plivo, Vonage te permettent de configurer le Caller ID via API. Plus technique mais plus de contrôle.",
            "<strong>SIP Trunking</strong> : Avec un softphone (Zoiper, Linphone) et un trunk SIP, tu configures n'importe quel Caller ID.",
            "<strong>Pour débuter je conseille SpoofCard ou SpoofTel</strong>. Simple, ca marche, pas besoin d'être un génie."
          ]
        }
      ]
    },
    3: {
      title: "Techniques Avancées",
      duration: "25 min",
      level: "Avancé",
      description: "Voice changer, SIP, configuration pro.",
      content: [
        {
          type: "intro",
          title: "On passe au niveau supérieur",
          text: "Maintenant que t'as les bases, on va voir les trucs plus poussés : changer ta voix, configurer ton propre système SIP, gérer plusieurs lignes."
        },
        {
          type: "section",
          title: "Voice Changer",
          points: [
            "Changer ta voix ca te rend encore plus dur à identifier. Tu peux te faire passer pour une femme, un homme, une personne agée...",
            "<strong>SpoofCard</strong> a un voice changer intégré (homme, femme, pitch up/down). C'est basique mais ca fait le taff.",
            "<strong>Logiciels PC</strong> : Voicemod, Clownfish, MorphVOX. Tu les configures et ils modifient ta voix en temps réel pendant l'appel."
          ]
        },
        {
          type: "section",
          title: "Setup SIP Complet",
          points: [
            "<strong>1. Choisir un provider SIP</strong> : Localphone, Anveo, VoIP.ms proposent des trunks SIP pas chers avec modification du Caller ID.",
            "<strong>2. Installer un softphone</strong> : Zoiper c'est gratuit et ca marche bien. Configure tes identifiants SIP dedans.",
            "<strong>3. Configurer le Caller ID</strong> : Dans les paramètres du trunk ou du softphone, tu mets le numéro que tu veux afficher.",
            "<strong>4. Tester</strong> : Appelle toi ou un pote pour vérifier que le bon numéro s'affiche."
          ]
        },
        {
          type: "warning",
          title: "Setup recommandé",
          text: "VPN → Softphone Zoiper → Trunk SIP (VoIP.ms) → Caller ID personnalisé. C'est propre, c'est pas cher, et tu contrôles tout. Telegram : @Loukra si besoin d'aide"
        }
      ]
    },
    4: {
      title: "OPSEC & Sécurité",
      duration: "15 min",
      level: "Essentiel",
      description: "Comment rester anonyme et éviter de se faire choper.",
      content: [
        {
          type: "intro",
          title: "La sécu avant tout",
          text: "Spoofer un numéro ca te rend pas invisible. Les opérateurs et les flics peuvent remonter à toi si t'es pas prudent. Voici les règles à suivre."
        },
        {
          type: "section",
          title: "Règles de base",
          points: [
            "<strong>Jamais depuis ton tel perso</strong> : Utilise toujours un téléphone dédié ou un service VoIP. Ton IMEI et ta SIM sont tracables.",
            "<strong>VPN obligatoire</strong> : Si tu utilises un service web ou VoIP, passe par un VPN no-log (Mullvad, IVPN). Sinon ton IP est loguée.",
            "<strong>Paiement anonyme</strong> : Crypto ou cartes prépayées pour payer les services de spoof.",
            "<strong>Pas de patterns</strong> : Fais pas 50 appels d'affilée vers le même type de cible. Varie.",
            "<strong>Compartimente</strong> : Un numéro/service = un usage. Mélange pas."
          ]
        },
        {
          type: "section",
          title: "Ce qui peut te griller",
          points: [
            "<strong>Ton IP réelle</strong> : Si tu utilises un service web sans VPN, ton IP est loguée chez eux.",
            "<strong>Ta voix</strong> : Même spoofée, ta voix peut être analysée. Utilise un voice changer.",
            "<strong>Tes habitudes</strong> : Toujours les mêmes heures, mêmes cibles, même script = pattern détectable.",
            "<strong>Les plaintes</strong> : Si ta cible porte plainte, les autorités peuvent demander les logs aux providers."
          ]
        },
        {
          type: "warning",
          title: "Remember",
          text: "Le spoof laisse TOUJOURS des traces quelque part. La question c'est combien d'efforts les autorités vont mettre pour te retrouver. Plus t'es prudent, moins t'es intéressant à tracer. Stay safe les gars."
        }
      ]
    }
  },
  spam: {
    1: {
      title: "Introduction au Spam",
      duration: "10 min",
      level: "Débutant",
      description: "C'est quoi le spam ? Comment ca marche et pourquoi c'est efficace.",
      content: [
        {
          type: "intro",
          title: "Le Spam c'est quoi ?",
          text: "On va la faire bref de fou : le spam c'est envoyer en masse des SMS ou des mails à des milliers de numéros/adresses en même temps. L'idée c'est que la victime aille sur ton site et y dépose ses infos perso (CB, identifiants, etc). Même avec 1% de taux de conversion, sur 100 000 envois t'as 1000 victimes potentielles."
        },
        {
          type: "section",
          title: "Comment ca fonctionne ?",
          points: [
            "<strong>1. Tu crées une scama</strong> : Une fausse page qui ressemble à l'original (banque, Netflix, La Poste, Ameli...)",
            "<strong>2. Tu achètes une liste</strong> : Des numéros de téléphone (NL) ou des emails (ML) en masse",
            "<strong>3. Tu envoies en masse</strong> : Via un sender (SMTP pour emails, API SMS pour textos)",
            "<strong>4. Les victimes cliquent</strong> : Elles pensent que c'est vrai et entrent leurs infos",
            "<strong>5. Tu récupères les logs</strong> : Identifiants, CB, codes de validation, tout ce que tu veux"
          ]
        },
        {
          type: "section",
          title: "Pourquoi ca marche ?",
          points: [
            "<strong>Volume</strong> : Plus t'envoies, plus t'as de chances. C'est un jeu de nombres.",
            "<strong>Urgence</strong> : Les messages créent un sentiment d'urgence (compte bloqué, colis en attente...) les gens paniquent et réfléchissent pas.",
            "<strong>Confiance</strong> : Les gens font confiance aux marques connues qu'on imite. Ils vérifient pas.",
            "<strong>Facilité</strong> : Pas besoin d'être un génie pour commencer. Le plus dur c'est d'avoir le matos."
          ]
        },
        {
          type: "warning",
          title: "Lexique",
          text: "Scama = Fausse page de phishing\nLetter = Template du message envoyé\nSender = Outil d'envoi en masse\nNL = NumList (liste de numéros)\nML = MailList (liste d'emails)\nLog = Identifiants récupérés\nPanel = Interface pour voir les logs reçus\nAB = Anti-Bot (protection contre la détection)"
        }
      ]
    },
    2: {
      title: "Le Matériel Nécessaire",
      duration: "20 min",
      level: "Intermédiaire",
      description: "Hébergeur, NDD, scama, sender, numlist... tout ce qu'il te faut.",
      content: [
        {
          type: "intro",
          title: "Le Matos",
          text: "Pour lancer une campagne de spam efficace, tu vas avoir besoin de plusieurs trucs. Je vais te donner la liste complète avec les recommandations et les prix."
        },
        {
          type: "section",
          title: "ETAPE 1 : L'INFRASTRUCTURE",
          points: [
            "<strong>Un hebergeur</strong> : Je conseille un plesk offshore (Russie, Moldavie). Evite OVH/Ionos ils coupent vite. ~15-30€/mois",
            "<strong>Un nom de domaine (NDD)</strong> : → je conseille de le prendre sur https://www.namesilo.com car facile d'utilisation et paiement en crypto possible. Pensez à prendre un nom de domaine crédible : .com ou .fr obligatoire. Exemples : www.verif-sante.com www.verif-compte.com www.authentificationcompte.com",
            "<strong>Certificat SSL</strong> : Let's Encrypt gratuit ou Cloudflare. Le HTTPS c'est obligatoire pour être crédible.",
            "<strong>Email Yandex</strong> : Crée une adresse sur www.mail.yandex.com/en pour gérer tes trucs."
          ]
        },
        {
          type: "section",
          title: "ETAPE 2 : LE CONTENU",
          points: [
            "<strong>Scama</strong> : La fausse page. Tu peux l'acheter (50-250€) ou la faire toi-même. Elle doit être identique à l'originale. Scama avec AB a jour obligatoire (pas de leak) ! risque de stealer et de red en plein spam si utilisation de scama leak",
            "<strong>Letter</strong> : Le template du message. Si spam mail, letter pas flag (risque de red en plein spam si flag).",
            "<strong>Panel</strong> : L'interface où tu reçois les logs. Souvent intégré à la scama."
          ]
        },
        {
          type: "section",
          title: "ETAPE 3 : L'ENVOI",
          points: [
            "<strong>Sender SMS</strong> : License SMS ou API type Twilio avec compte vérifié. ~5€/10K SMS ou License ~250€",
            "<strong>Sender Mail</strong> : SMTP Amazon SES, SendGrid, ou SMTP privé. ~50-250€ pour un bon setup",
            "<strong>NumList (NL)</strong> : Liste de numéros FR. ~10€/10K numéros. Vérifie la qualité.",
            "<strong>MailList (ML)</strong> : Liste d'emails. ~5€/10K emails. Les emails .fr convertissent mieux."
          ]
        },
        {
          type: "warning",
          title: "Budget",
          text: "Setup de base : ~100-200€\nSetup pro : ~500-1000€\n\nLe retour sur investissement peut être x10 à x100 si bien fait. telegram : @Loukra si besoin d'aide"
        }
      ]
    },
    3: {
      title: "Créer une Scama",
      duration: "30 min",
      level: "Avancé",
      description: "Comment créer une page de phishing qui imite parfaitement l'original.",
      content: [
        {
          type: "intro",
          title: "La Scama",
          text: "La scama c'est le coeur de ta campagne. Si elle est mal faite, personne va entrer ses infos. Elle doit être une copie parfaite de l'original, avec quelques ajouts pour récupérer un max de données."
        },
        {
          type: "section",
          title: "Méthode 1 : Acheter une Scama",
          points: [
            "<strong>Avantages</strong> : Rapide, déjà testée, panel intégré, support inclus.",
            "<strong>Prix</strong> : 50€ (basique) à 500€ (premium avec toutes les pages).",
            "<strong>Où acheter</strong> : Telegram, forums. Vérifie les feedbacks avant.",
            "<strong>ATTENTION</strong> : Certaines scamas ont des backdoors. Le vendeur recoit aussi les logs. Prends que chez des vendeurs de confiance."
          ]
        },
        {
          type: "section",
          title: "Méthode 2 : Créer soi-même",
          points: [
            "<strong>1. Copier le site original</strong> : Utilise HTTrack ou wget pour télécharger toutes les pages.",
            "<strong>2. Modifier les formulaires</strong> : Change l'action des forms pour envoyer les données vers ton panel.",
            "<strong>3. Ajouter le panel</strong> : Un simple PHP qui enregistre les données dans un fichier ou BDD.",
            "<strong>4. Ajouter l'AB</strong> : Protection anti-bot pour éviter la détection. OBLIGATOIRE.",
            "<strong>5. Tester</strong> : Vérifie que tout fonctionne avant de lancer."
          ]
        },
        {
          type: "section",
          title: "Les pages essentielles",
          points: [
            "<strong>Page de login</strong> : Identifiants (email/téléphone + mot de passe)",
            "<strong>Page carte bancaire</strong> : Numéro, date, CVV, parfois le code 3D Secure",
            "<strong>Page de vérification</strong> : Code SMS recu par la victime (pour valider)",
            "<strong>Page de confirmation</strong> : \"Merci, votre compte est sécurisé\" - pour rassurer",
            "<strong>Redirection</strong> : Renvoie vers le vrai site à la fin pour pas éveiller les soupcons"
          ]
        },
        {
          type: "warning",
          title: "Tips",
          text: "• Utilise le même favicon que l'original\n• Copie les mêmes polices et couleurs\n• Ajoute des vrais liens vers le site officiel (mentions légales, CGU...)\n• Teste sur mobile - 70% du trafic vient de là\n• Change régulièrement de domaine (ils se font flag)"
        }
      ]
    },
    4: {
      title: "Lancer une Campagne",
      duration: "25 min",
      level: "Pratique",
      description: "Configuration du sender, envoi en masse, optimisation.",
      content: [
        {
          type: "intro",
          title: "C'est parti",
          text: "T'as ton hébergeur, ta scama, ton sender et ta liste. Maintenant on lance. Je vais te montrer comment optimiser pour un max de résultats."
        },
        {
          type: "section",
          title: "Avant d'envoyer",
          points: [
            "<strong>Tester la scama</strong> : Vérifie que le panel recoit bien les logs. Fais un test toi-même.",
            "<strong>Vérifier le SSL</strong> : Le cadenas doit apparaitre dans le navigateur.",
            "<strong>Configurer le sender</strong> : Entre tes identifiants SMTP/API. Teste avec quelques envois.",
            "<strong>Préparer la letter</strong> : Le message doit être court, urgent, et avec un CTA clair."
          ]
        },
        {
          type: "section",
          title: "La Letter parfaite",
          points: [
            "<strong>Objet accrocheur</strong> : \"Action requise\", \"Votre compte sera suspendu\", \"Colis en attente\"",
            "<strong>Corps court</strong> : 2-3 phrases max. Va droit au but.",
            "<strong>Urgence</strong> : \"Dans les 24h\", \"Immédiatement\", \"Dernier rappel\"",
            "<strong>Lien camouflé</strong> : Utilise un raccourcisseur ou un domaine qui ressemble à l'original"
          ]
        },
        {
          type: "section",
          title: "Timing et Volume",
          points: [
            "<strong>Meilleurs moments</strong> : Mardi-Jeudi, 10h-12h et 14h-16h. Evite le weekend.",
            "<strong>Volume progressif</strong> : Commence par 1000, puis monte à 5000, 10000... pour pas flag.",
            "<strong>Rotation</strong> : Change de domaine/sender tous les 2-3 jours.",
            "<strong>Les logs arrivent dans les minutes/heures qui suivent</strong>. Réagis vite, les infos bancaires ont une durée de vie limitée."
          ]
        },
        {
          type: "warning",
          title: "OPSEC",
          text: "• Toujours derrière VPN + Proxy\n• Jamais ton vrai PC/téléphone\n• Paye tout en crypto\n• Te vante pas\n• Change de setup régulièrement\n\nJe suis pas responsable de ce que vous faites. Cette formation c'est pour vous montrer comment ca marche, point."
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
