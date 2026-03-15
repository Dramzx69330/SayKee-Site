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
      title: "Introduction au Spoofing Call",
      duration: "10 min",
      level: "Débutant",
      description: "Qu'est-ce que le caller ID spoofing ? Comment ça fonctionne et pourquoi c'est utilisé.",
      content: [
        {
          type: "intro",
          title: "C'est quoi le Spoof Call ?",
          text: "Le Caller ID Spoofing permet de modifier le numéro qui s'affiche sur le téléphone de la personne que tu appelles. Au lieu de voir ton vrai numéro, elle voit celui que tu as choisi. C'est utilisé pour se faire passer pour une banque, un service client, ou n'importe quel numéro."
        },
        {
          type: "section",
          title: "Comment ça marche ?",
          points: [
            "<strong>Le principe</strong> : Quand tu appelles quelqu'un, ton opérateur envoie ton numéro (Caller ID) au réseau. Avec le spoofing, tu utilises un service tiers qui remplace ce numéro par celui de ton choix avant que l'appel arrive.",
            "<strong>Les protocoles</strong> : La plupart des services utilisent le protocole VoIP (Voice over IP) ou SIP (Session Initiation Protocol) pour modifier les informations d'appel.",
            "<strong>Légalité</strong> : Le spoofing en soi n'est pas illégal dans tous les pays. C'est l'utilisation frauduleuse (arnaque, usurpation) qui est punie par la loi."
          ]
        },
        {
          type: "section",
          title: "Pourquoi c'est utilisé ?",
          points: [
            "<strong>Allo bancaire</strong> : Se faire passer pour la banque de la victime pour récupérer des codes de validation",
            "<strong>Arnaque support</strong> : Appeler en se faisant passer pour Microsoft, Apple, etc.",
            "<strong>Récupération d'infos</strong> : Social engineering pour obtenir des données personnelles",
            "<strong>Harcèlement</strong> : Appeler sans être tracé (attention : illégal)",
            "<strong>Business légitime</strong> : Certaines entreprises l'utilisent pour afficher leur numéro principal"
          ]
        },
        {
          type: "warning",
          title: "Attention",
          text: "Cette formation est à but éducatif. L'utilisation du spoofing pour frauder ou harceler est un délit pénal grave passible de prison. Sois responsable."
        }
      ]
    },
    2: {
      title: "Les Outils de Spoof",
      duration: "20 min",
      level: "Intermédiaire",
      description: "Applications, services et méthodes pour changer ton numéro affiché lors d'un appel.",
      content: [
        {
          type: "intro",
          title: "Les différentes solutions",
          text: "Il existe plusieurs façons de spoofer un numéro : des applications mobiles, des services web, ou des solutions plus techniques avec SIP. Voici les principales options disponibles."
        },
        {
          type: "section",
          title: "Applications Mobile",
          points: [
            "<strong>SpoofCard</strong> : L'app la plus connue. Dispo sur iOS et Android. Tu achètes des crédits et tu peux choisir le numéro à afficher. Voice changer intégré. ~2€/appel.",
            "<strong>SpoofTel</strong> : Service web + app. Fonctionne dans 80+ pays. Interface simple, paiement en crypto possible.",
            "<strong>Dingtone</strong> : App gratuite qui donne des numéros virtuels US/Canada. Pas vraiment du spoof mais utile pour avoir un numéro jetable.",
            "<strong>TextNow / TextFree</strong> : Numéros virtuels gratuits. Limité aux US/Canada mais pratique pour les SMS."
          ]
        },
        {
          type: "section",
          title: "Numéros Virtuels",
          points: [
            "<strong>Hushed</strong> : Numéros temporaires dans 60+ pays. ~5€/mois par numéro. Peut recevoir appels et SMS.",
            "<strong>Burner</strong> : Numéros jetables US. Tu peux les \"brûler\" (supprimer) quand tu veux.",
            "<strong>MySudo</strong> : Plusieurs identités avec numéros différents. Très propre pour compartimenter.",
            "<strong>OnOff</strong> : App française, numéros FR virtuels. Bien pour séparer pro/perso."
          ]
        },
        {
          type: "section",
          title: "Solutions Pro / Techniques",
          points: [
            "<strong>VoIP Providers</strong> : Twilio, Plivo, Vonage permettent de configurer le Caller ID via API. Plus technique mais plus flexible.",
            "<strong>SIP Trunking</strong> : Avec un softphone (Zoiper, Linphone) et un trunk SIP, tu peux configurer n'importe quel Caller ID.",
            "<strong>PBX Personnel</strong> : Asterisk, FreePBX te donnent un contrôle total sur tes appels sortants."
          ]
        },
        {
          type: "warning",
          title: "Conseil",
          text: "Pour débuter, SpoofCard ou SpoofTel sont les plus simples. Pour du volume ou plus de contrôle, passe sur du VoIP/SIP."
        }
      ]
    },
    3: {
      title: "Techniques Avancées",
      duration: "25 min",
      level: "Avancé",
      description: "Voice changer, numéros virtuels, SIP trunking et configuration pro.",
      content: [
        {
          type: "intro",
          title: "Aller plus loin",
          text: "Une fois les bases maîtrisées, voici les techniques avancées pour un setup pro : changer ta voix, configurer ton propre système SIP, et gérer plusieurs lignes."
        },
        {
          type: "section",
          title: "Voice Changer (Changeur de voix)",
          points: [
            "<strong>Pourquoi ?</strong> : Changer ta voix te rend encore plus difficile à identifier. Utile pour te faire passer pour une femme/homme ou une personne âgée.",
            "<strong>Apps intégrées</strong> : SpoofCard a un voice changer intégré (homme, femme, pitch up/down).",
            "<strong>Logiciels PC</strong> : Voicemod, Clownfish, MorphVOX. Tu les configures et ils modifient ta voix en temps réel.",
            "<strong>Hardware</strong> : Certains utilisent des pédales d'effet pour guitare qui modifient la voix en live."
          ]
        },
        {
          type: "section",
          title: "Setup SIP Complet",
          points: [
            "<strong>1. Choisir un provider SIP</strong> : Localphone, Anveo, VoIP.ms proposent des trunks SIP pas chers avec modification du Caller ID.",
            "<strong>2. Installer un softphone</strong> : Zoiper (gratuit) ou Bria (payant mais pro). Configure tes identifiants SIP.",
            "<strong>3. Configurer le Caller ID</strong> : Dans les paramètres du trunk ou du softphone, entre le numéro que tu veux afficher.",
            "<strong>4. Tester</strong> : Appelle-toi ou un pote pour vérifier que le bon numéro s'affiche."
          ]
        },
        {
          type: "section",
          title: "Multi-lignes et Rotation",
          points: [
            "<strong>Plusieurs numéros</strong> : Avec un PBX (Asterisk/FreePBX), tu peux avoir 10, 20, 100 lignes différentes.",
            "<strong>Rotation automatique</strong> : Configure une rotation pour que chaque appel sorte avec un numéro différent.",
            "<strong>Géolocalisation</strong> : Choisis des numéros locaux selon la région de ta cible (un 01 pour Paris, 04 pour le Sud, etc.).",
            "<strong>Enregistrement</strong> : Configure l'enregistrement des appels pour review (attention à la légalité)."
          ]
        },
        {
          type: "warning",
          title: "Setup recommandé",
          text: "VPN → Softphone Zoiper → Trunk SIP (VoIP.ms) → Caller ID personnalisé. C'est propre, pas cher, et tu contrôles tout."
        }
      ]
    },
    4: {
      title: "OPSEC & Sécurité",
      duration: "15 min",
      level: "Essentiel",
      description: "Comment rester anonyme, éviter le traçage et protéger ton identité.",
      content: [
        {
          type: "intro",
          title: "La sécurité avant tout",
          text: "Spoofer un numéro ne te rend pas invisible. Les opérateurs et les autorités peuvent remonter à toi si tu n'es pas prudent. Voici les règles OPSEC à suivre."
        },
        {
          type: "section",
          title: "Règles de base OPSEC",
          points: [
            "<strong>Jamais depuis ton tel perso</strong> : Utilise toujours un téléphone dédié ou un service VoIP. Ton numéro IMEI et ta SIM sont traçables.",
            "<strong>VPN obligatoire</strong> : Si tu utilises un service web ou VoIP, passe par un VPN no-log (Mullvad, IVPN). Ton IP est loguée sinon.",
            "<strong>Paiement anonyme</strong> : Utilise des cryptos ou des cartes prépayées pour payer les services de spoof.",
            "<strong>Pas de patterns</strong> : Ne fais pas 50 appels d'affilée vers le même type de cible. Varie.",
            "<strong>Compartimente</strong> : Un numéro/service = un usage. Ne mélange pas."
          ]
        },
        {
          type: "section",
          title: "Ce qui peut te griller",
          points: [
            "<strong>Ton IP réelle</strong> : Si tu utilises un service web sans VPN, ton IP est loguée chez eux.",
            "<strong>Les métadonnées</strong> : Durée d'appel, fréquence, destinations... ça crée un profil.",
            "<strong>Ta voix</strong> : Même spoofée, ta voix peut être analysée et reconnue. Utilise un voice changer.",
            "<strong>Tes habitudes</strong> : Toujours les mêmes heures, mêmes cibles, même script = pattern détectable.",
            "<strong>Les plaintes</strong> : Si ta cible porte plainte, les autorités peuvent demander les logs aux providers."
          ]
        },
        {
          type: "section",
          title: "Setup Anonyme Recommandé",
          points: [
            "<strong>Téléphone</strong> : Smartphone Android acheté cash, sans compte Google, avec VPN.",
            "<strong>SIM</strong> : SIM prépayée anonyme ou eSIM virtuelle (pas de vérification d'identité).",
            "<strong>Service</strong> : VoIP payé en crypto, ou SpoofCard via VPN.",
            "<strong>Localisation</strong> : Ne fais jamais d'appels depuis chez toi ou ton lieu de travail.",
            "<strong>Durée</strong> : Limite tes sessions. Change régulièrement de setup."
          ]
        },
        {
          type: "warning",
          title: "Remember",
          text: "Le spoofing laisse TOUJOURS des traces quelque part. La question c'est : combien d'efforts les autorités vont mettre pour te retrouver ? Plus t'es prudent, moins t'es intéressant à tracer. Stay safe."
        }
      ]
    }
  },
  spam: {
    1: {
      title: "Introduction au Spam",
      duration: "10 min",
      level: "Débutant",
      description: "C'est quoi le spam ? Comment ça marche et pourquoi c'est efficace pour récupérer des données.",
      content: [
        {
          type: "intro",
          title: "C'est quoi le Spam ?",
          text: "Le spam, c'est l'envoi massif de messages (emails, SMS, appels) à des milliers de personnes en même temps. L'objectif ? Qu'un pourcentage clique sur ton lien et entre ses infos sur ta fausse page (scama). Même avec 1% de taux de conversion, sur 100 000 envois t'as 1000 victimes potentielles."
        },
        {
          type: "section",
          title: "Comment ça fonctionne ?",
          points: [
            "<strong>1. Tu crées une scama</strong> : Une fausse page qui ressemble à l'original (banque, Netflix, La Poste, etc.)",
            "<strong>2. Tu achètes une liste</strong> : Des numéros de téléphone (NL) ou des emails (ML) en masse",
            "<strong>3. Tu envoies en masse</strong> : Via un sender (SMTP pour emails, API SMS pour textos)",
            "<strong>4. Les victimes cliquent</strong> : Elles pensent que c'est vrai et entrent leurs infos",
            "<strong>5. Tu récupères les logs</strong> : Identifiants, CB, codes de validation, etc."
          ]
        },
        {
          type: "section",
          title: "Pourquoi c'est efficace ?",
          points: [
            "<strong>Volume</strong> : Plus t'envoies, plus t'as de chances. C'est un jeu de nombres.",
            "<strong>Urgence</strong> : Les messages créent un sentiment d'urgence (compte bloqué, colis en attente...)",
            "<strong>Confiance</strong> : Les gens font confiance aux marques connues qu'on imite",
            "<strong>Facilité</strong> : Pas besoin de skills techniques avancés pour commencer",
            "<strong>Anonymat</strong> : Bien configuré, c'est quasi impossible à tracer"
          ]
        },
        {
          type: "warning",
          title: "Lexique rapide",
          text: "Scama = Fausse page de phishing\nLetter = Template du message envoyé\nSender = Outil d'envoi en masse\nNL = NumList (liste de numéros)\nML = MailList (liste d'emails)\nLog = Identifiants récupérés\nPanel = Interface pour voir les logs reçus"
        }
      ]
    },
    2: {
      title: "Le Matériel Nécessaire",
      duration: "20 min",
      level: "Intermédiaire",
      description: "Hébergeur, NDD, scama, sender, numlist... tout ce qu'il te faut pour lancer une campagne.",
      content: [
        {
          type: "intro",
          title: "Le Setup Complet",
          text: "Pour lancer une campagne de spam efficace, tu as besoin de plusieurs éléments. Voici la liste complète avec les recommandations et les prix moyens."
        },
        {
          type: "section",
          title: "1. Infrastructure",
          points: [
            "<strong>Hébergeur</strong> : Prends un Plesk offshore (Russie, Moldavie, etc.). ~15-30€/mois. Évite OVH/Ionos, ils coupent vite.",
            "<strong>Nom de domaine (NDD)</strong> : NameSilo ou Njalla (acceptent crypto). ~10€/an. Choisis un nom crédible : verif-compte.com, secure-banque.fr...",
            "<strong>Certificat SSL</strong> : Let's Encrypt gratuit ou Cloudflare. Le HTTPS est obligatoire pour être crédible.",
            "<strong>Email Yandex</strong> : Crée une adresse sur mail.yandex.com pour gérer tes domaines."
          ]
        },
        {
          type: "section",
          title: "2. Contenu",
          points: [
            "<strong>Scama</strong> : La fausse page. Tu peux l'acheter (50-250€) ou la faire toi-même. Elle doit être identique à l'originale.",
            "<strong>Letter</strong> : Le template du message. Doit être convaincant et pas trop flag par les filtres anti-spam.",
            "<strong>Panel</strong> : L'interface où tu reçois les logs. Souvent intégré à la scama.",
            "<strong>AB (Anti-Bot)</strong> : Protection contre les scanners et les bots qui détectent les scamas."
          ]
        },
        {
          type: "section",
          title: "3. Envoi",
          points: [
            "<strong>Sender SMS</strong> : API comme Twilio, MessageBird (avec compte vérifié), ou sender privé. ~5€/10K SMS.",
            "<strong>Sender Mail</strong> : SMTP Amazon SES, SendGrid, ou SMTP privé. ~50-250€ pour un bon setup.",
            "<strong>NumList (NL)</strong> : Liste de numéros FR. ~10€/10K numéros. Vérifie la qualité (numéros actifs).",
            "<strong>MailList (ML)</strong> : Liste d'emails. ~5€/10K emails. Les emails .fr convertissent mieux."
          ]
        },
        {
          type: "warning",
          title: "Budget total estimé",
          text: "Setup de base : ~100-200€\nSetup pro : ~500-1000€\n\nLe retour sur investissement peut être x10 à x100 si bien fait. Mais attention aux risques légaux."
        }
      ]
    },
    3: {
      title: "Créer une Scama",
      duration: "30 min",
      level: "Avancé",
      description: "Comment créer une page de phishing convaincante qui imite parfaitement l'original.",
      content: [
        {
          type: "intro",
          title: "L'art de la Scama",
          text: "La scama est le cœur de ta campagne. Si elle est mal faite, personne ne va entrer ses infos. Elle doit être une copie parfaite de l'original, avec quelques ajouts pour récupérer un maximum de données."
        },
        {
          type: "section",
          title: "Méthode 1 : Acheter une Scama",
          points: [
            "<strong>Avantages</strong> : Rapide, déjà testée, panel intégré, support inclus.",
            "<strong>Prix</strong> : 50€ (basique) à 500€ (premium avec toutes les pages).",
            "<strong>Où acheter</strong> : Telegram, forums spécialisés. Vérifie les feedbacks avant.",
            "<strong>Attention</strong> : Certaines scamas ont des backdoors. Le vendeur reçoit aussi les logs."
          ]
        },
        {
          type: "section",
          title: "Méthode 2 : Créer soi-même",
          points: [
            "<strong>1. Copier le site original</strong> : Utilise HTTrack ou wget pour télécharger toutes les pages.",
            "<strong>2. Modifier les formulaires</strong> : Change l'action des forms pour envoyer les données vers ton panel.",
            "<strong>3. Ajouter le panel</strong> : Un simple PHP qui enregistre les données dans un fichier ou BDD.",
            "<strong>4. Ajouter l'AB</strong> : Protection anti-bot pour éviter la détection.",
            "<strong>5. Tester</strong> : Vérifie que tout fonctionne avant de lancer."
          ]
        },
        {
          type: "section",
          title: "Les pages essentielles",
          points: [
            "<strong>Page de login</strong> : Identifiants (email/téléphone + mot de passe)",
            "<strong>Page carte bancaire</strong> : Numéro, date, CVV, parfois le code 3D Secure",
            "<strong>Page de vérification</strong> : Code SMS reçu par la victime (pour valider)",
            "<strong>Page de confirmation</strong> : \"Merci, votre compte est sécurisé\" - pour rassurer la victime",
            "<strong>Redirection</strong> : Renvoie vers le vrai site à la fin pour pas éveiller les soupçons"
          ]
        },
        {
          type: "warning",
          title: "Tips Pro",
          text: "• Utilise le même favicon que l'original\n• Copie les mêmes polices et couleurs\n• Ajoute des vrais liens vers le site officiel (mentions légales, CGU...)\n• Teste sur mobile - 70% du trafic vient de là\n• Change régulièrement de domaine (ils se font flag)"
        }
      ]
    },
    4: {
      title: "Lancer une Campagne",
      duration: "25 min",
      level: "Pratique",
      description: "Configuration du sender, envoi en masse, et optimisation du taux de conversion.",
      content: [
        {
          type: "intro",
          title: "Go Time",
          text: "T'as ton hébergeur, ta scama, ton sender et ta liste. Maintenant on lance. Voici comment optimiser ta campagne pour un maximum de résultats."
        },
        {
          type: "section",
          title: "Préparer l'envoi",
          points: [
            "<strong>Tester la scama</strong> : Vérifie que le panel reçoit bien les logs. Fais un test toi-même.",
            "<strong>Vérifier le SSL</strong> : Le cadenas doit apparaître dans le navigateur.",
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
            "<strong>Lien camouflé</strong> : Utilise un raccourcisseur ou un domaine qui ressemble à l'original",
            "<strong>Signature pro</strong> : Logo, adresse, numéro de service client (faux)"
          ]
        },
        {
          type: "section",
          title: "Timing et Volume",
          points: [
            "<strong>Meilleurs moments</strong> : Mardi-Jeudi, 10h-12h et 14h-16h. Évite le weekend.",
            "<strong>Volume progressif</strong> : Commence par 1000, puis monte à 5000, 10000... pour pas flag.",
            "<strong>Rotation</strong> : Change de domaine/sender tous les 2-3 jours.",
            "<strong>Segmentation</strong> : Adapte le message selon la cible (banque = clients banque, etc.)"
          ]
        },
        {
          type: "section",
          title: "Après l'envoi",
          points: [
            "<strong>Monitore le panel</strong> : Les logs arrivent dans les minutes/heures qui suivent.",
            "<strong>Réagis vite</strong> : Les infos bancaires ont une durée de vie limitée (codes 3DS).",
            "<strong>Analyse les stats</strong> : Taux d'ouverture, taux de clic, taux de conversion.",
            "<strong>Optimise</strong> : Si ça marche pas, change la letter, la cible, ou le timing."
          ]
        },
        {
          type: "warning",
          title: "OPSEC Rappel",
          text: "• Toujours derrière VPN + Proxy\n• Ne jamais utiliser ton vrai PC/téléphone\n• Paye tout en crypto\n• Ne te vante pas\n• Change de setup régulièrement\n• Les gros volumes attirent l'attention"
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
