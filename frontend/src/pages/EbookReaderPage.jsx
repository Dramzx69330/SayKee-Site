import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, BookOpen, Download } from "lucide-react";
import { Button } from "../components/ui/button";

// Ebook content data
const ebooksContent = {
  trading: {
    "bases-trading": {
      title: "Les Bases du Trading",
      author: "SayKee",
      level: "Débutant",
      chapters: [
        {
          title: "C'est quoi le trading ?",
          content: `Yo, bienvenue dans le game.

Le trading, c'est simple : tu achètes un truc (action, crypto, forex...) et tu le revends plus cher. Ou l'inverse : tu vends d'abord, tu rachètes moins cher après. La différence, c'est ton profit.

**Les différents types de trading :**

• **Day trading** : Tu ouvres et fermes tes positions dans la même journée. Pas de stress overnight.

• **Swing trading** : Tu gardes tes positions quelques jours/semaines. Moins intense, plus réfléchi.

• **Scalping** : Tu fais plein de petits trades rapides. Faut être réactif et avoir des nerfs solides.

• **Position trading** : Tu gardes pendant des mois. C'est presque de l'investissement.

**Mon conseil pour commencer ?** Le swing trading. C'est le meilleur équilibre entre action et réflexion. Tu stresses pas H24 mais t'apprends quand même à lire le marché.`
        },
        {
          title: "Les différents marchés",
          content: `Y'a pas qu'un seul marché, y'en a plein. Chacun a ses avantages.

**Le Forex (devises)**
Tu trades des paires de devises : EUR/USD, GBP/JPY, etc. C'est le plus gros marché du monde. Ouvert 24h/24 du lundi au vendredi. Beaucoup de liquidité, peu de gaps.

Avantages : Accessible avec peu de capital, effet de levier important
Inconvénients : Peut bouger violemment sur les news

**Les Actions**
Tu achètes des parts d'entreprises : Apple, Tesla, LVMH... Le classique.

Avantages : Facile à comprendre, beaucoup d'infos dispos
Inconvénients : Horaires limités, faut plus de capital

**Les Cryptos**
Bitcoin, Ethereum et les autres. Le Far West du trading.

Avantages : Volatilité = opportunités, ouvert 24/7
Inconvénients : Très volatile, peut tout perdre vite

**Les Indices**
CAC40, S&P500, DAX... Tu trades "le marché" en entier.

Avantages : Moins volatile que les actions individuelles
Inconvénients : Moins de mouvements = moins d'opportunités

**Par quoi commencer ?** Je te conseille le Forex ou les indices. C'est là que t'apprends le mieux les bases sans te faire défoncer.`
        },
        {
          title: "Ton premier trade",
          content: `Ok, passons aux choses sérieuses. Voilà comment faire ton premier trade.

**Étape 1 : Choisis ton broker**
C'est l'intermédiaire entre toi et le marché. Y'en a plein : eToro, XTB, IG... Prends-en un régulé (AMF en France). JAMAIS un broker random que t'as vu dans une pub Instagram.

**Étape 2 : Ouvre un compte démo**
TOUJOURS commencer en démo. C'est de l'argent fictif. Tu fais tes conneries là, pas avec ton vrai argent.

**Étape 3 : Analyse le marché**
Regarde le graphique. La tendance est haussière ou baissière ? Y'a des niveaux importants ? On verra ça en détail dans l'ebook Analyse Technique.

**Étape 4 : Place ton trade**
• Choisis ta taille de position (PETIT au début, genre 0.01 lot)
• Mets ton stop loss (le niveau où tu coupes si ça va mal)
• Mets ton take profit (le niveau où tu prends tes gains)
• Clique sur "Acheter" ou "Vendre"

**Étape 5 : Gère ton trade**
Laisse le marché faire. Touche à rien. Ton stop loss te protège. Si t'as bien fait ton analyse, le reste c'est du temps.

**La règle d'or :** Trade en démo pendant AU MOINS 1 mois avant de passer en réel. Je sais, c'est long. Mais crois-moi, ça t'évitera de cramer ton premier compte.`
        },
        {
          title: "Les erreurs de débutant",
          content: `J'ai fait toutes ces erreurs. Toi, tu vas les éviter.

**Erreur #1 : Trader sans stop loss**
"Je vais surveiller, je couperai manuellement." Non. Tu vas pas couper. Tu vas espérer que ça remonte. Et ça va pas remonter. Mets TOUJOURS un stop loss.

**Erreur #2 : Risquer trop par trade**
Tu mets 20% de ton capital sur un trade parce que t'es "sûr de toi". Tu perds. Ton compte prend -20%. Pour revenir à 0, faut faire +25%. C'est mathématique, c'est con.

Règle : Maximum 1-2% de ton capital par trade. MAXIMUM.

**Erreur #3 : Vouloir se refaire**
Tu perds un trade. T'es énervé. Tu reprends un trade direct pour "te refaire". Tu perds encore. C'est la spirale. Si tu perds, tu fermes ton ordi et tu reviens demain.

**Erreur #4 : Ignorer le calendrier économique**
Y'a des annonces qui font bouger le marché de 100 pips en 2 secondes. NFP, taux d'intérêt, inflation... Vérifie le calendrier AVANT de trader.

**Erreur #5 : Changer de stratégie tout le temps**
Tu testes une strat pendant 3 trades, ça marche pas, tu changes. Normal que ça marche pas : t'as pas assez de data. Une stratégie, tu la testes sur 50-100 trades minimum avant de juger.

**Erreur #6 : Écouter tout le monde**
"Mon pote m'a dit que..." / "J'ai vu sur TikTok que..." Stop. Tu fais TON analyse, tu prends TES décisions. Les autres, ils s'en foutent de ton compte.

Retiens ça : Le trading, c'est 20% de technique et 80% de psychologie. Le plus dur, c'est de se contrôler soi-même.`
        }
      ]
    },
    "analyse-technique": {
      title: "Analyse Technique",
      author: "SayKee",
      level: "Intermédiaire",
      chapters: [
        {
          title: "Lire un graphique",
          content: `Un graphique, c'est l'histoire du prix. Apprends à le lire et t'as déjà un avantage sur 90% des traders.

**Les types de graphiques**

• **Ligne** : Simple, juste les prix de clôture reliés. Utile pour voir la tendance globale.

• **Barres (OHLC)** : Open, High, Low, Close. Plus d'infos mais moins lisible.

• **Chandeliers japonais** : Le GOAT. C'est ce qu'on utilise tous. On verra ça en détail après.

**Les timeframes (unités de temps)**

• **M1, M5, M15** : Pour le scalping. Très nerveux.
• **H1, H4** : Pour le day trading. Mon préféré.
• **D1 (Daily)** : Pour le swing trading. Une bougie = une journée.
• **W1, MN** : Pour l'investissement long terme.

**Règle importante :** Analyse toujours en "top-down". Tu regardes d'abord le Daily pour la tendance générale, puis tu descends en H4 puis H1 pour tes entrées.

**La tendance**

Y'a que 3 possibilités :
• **Haussière (bullish)** : Des hauts de plus en plus hauts, des bas de plus en plus hauts
• **Baissière (bearish)** : Des hauts de plus en plus bas, des bas de plus en plus bas  
• **Range** : Le prix oscille entre deux niveaux. Pas de direction claire.

"Trend is your friend" - Tu trades AVEC la tendance, jamais contre. Si c'est haussier, tu cherches des achats. Si c'est baissier, tu cherches des ventes.`
        },
        {
          title: "Les chandeliers japonais",
          content: `Les chandeliers, c'est la base. Chaque bougie te raconte une histoire.

**Anatomie d'un chandelier**

Une bougie a 4 infos :
• **Open** : Prix d'ouverture
• **Close** : Prix de clôture
• **High** : Plus haut atteint
• **Low** : Plus bas atteint

Le corps, c'est entre l'open et le close. Les mèches (ombres), c'est le high et le low.

• **Bougie verte/blanche** : Close > Open = le prix a monté
• **Bougie rouge/noire** : Close < Open = le prix a baissé

**Les patterns à connaître**

**Doji** : Petit corps, grandes mèches. Le marché hésite. Possible retournement.

**Marteau (Hammer)** : Petit corps en haut, longue mèche en bas. En bas d'une tendance baissière = signal d'achat.

**Étoile filante (Shooting Star)** : L'inverse du marteau. Petit corps en bas, longue mèche en haut. En haut d'une tendance haussière = signal de vente.

**Engulfing (Avalement)** : Une grosse bougie qui "avale" la précédente. Bullish engulfing = achat. Bearish engulfing = vente.

**Les 3 soldats blancs** : 3 bougies vertes consécutives avec des corps de plus en plus grands. Signal haussier fort.

**Les 3 corbeaux noirs** : L'inverse. 3 bougies rouges. Signal baissier fort.

**Mon conseil :** Apprends pas 50 patterns. Maîtrise les 5-6 principaux et tu seras déjà bien. La simplicité gagne toujours.`
        },
        {
          title: "Supports et résistances",
          content: `Les supports et résistances, c'est là où le prix réagit. C'est FONDAMENTAL.

**C'est quoi ?**

• **Support** : Un niveau où le prix a du mal à descendre en dessous. Les acheteurs défendent ce niveau.

• **Résistance** : Un niveau où le prix a du mal à monter au-dessus. Les vendeurs défendent ce niveau.

**Comment les tracer ?**

1. Zoom out sur ton graphique (D1 ou H4)
2. Cherche les niveaux où le prix a réagi plusieurs fois
3. Trace une ligne horizontale
4. Plus le niveau a été testé, plus il est fort

**Les règles**

• Un support cassé devient une résistance (et vice versa)
• Les chiffres ronds sont souvent des niveaux clés (1.1000, 1.2000...)
• Les anciens plus hauts/plus bas sont importants

**Comment trader avec ?**

**Rebond** : Le prix touche un support, tu achètes. Le prix touche une résistance, tu vends.

**Cassure (breakout)** : Le prix casse un niveau avec du volume. Tu rentres dans le sens de la cassure.

**Pullback** : Après une cassure, le prix revient tester le niveau. C'est souvent la meilleure entrée.

**Attention :** Les faux breakouts existent. Le prix casse, tu rentres, et ça revient direct. Pour éviter ça :
• Attends la clôture de la bougie
• Vérifie le volume
• Ou attends le pullback pour confirmer`
        },
        {
          title: "Les indicateurs qui marchent",
          content: `Y'a des centaines d'indicateurs. 90% sont inutiles. Voici ceux qui marchent vraiment.

**Les moyennes mobiles (MA)**

La base. Ça lisse le prix pour voir la tendance.

• **SMA (Simple)** : Moyenne simple des X dernières bougies
• **EMA (Exponentielle)** : Donne plus de poids aux prix récents

Les plus utilisées : MA20, MA50, MA200

**Comment les utiliser :**
• Prix au-dessus de la MA = tendance haussière
• Prix en dessous = tendance baissière
• Croisement de 2 MA = signal (ex: MA20 croise MA50 vers le haut = achat)

**Le RSI (Relative Strength Index)**

Mesure si le marché est suracheté ou survendu.
• RSI > 70 = suracheté, possible correction à la baisse
• RSI < 30 = survendu, possible rebond

**Attention :** En tendance forte, le RSI peut rester en zone extrême longtemps.

**Le MACD**

Montre la force de la tendance et les retournements potentiels.
• Croisement de la ligne MACD et signal = possible entrée
• Divergence avec le prix = possible retournement

**Les Bandes de Bollinger**

3 lignes qui encadrent le prix. Utile pour voir la volatilité.
• Prix touche la bande haute = possible retournement baissier
• Prix touche la bande basse = possible retournement haussier

**Mon setup perso :**
• EMA 20 et EMA 50 pour la tendance
• RSI pour les zones de surachat/survente
• Supports/résistances en horizontal

C'est tout. Pas besoin de 15 indicateurs qui se contredisent. Keep it simple.`
        }
      ]
    },
    "gestion-risque": {
      title: "Gestion du Risque",
      author: "SayKee",
      level: "Tous niveaux",
      chapters: [
        {
          title: "Le money management",
          content: `Le money management, c'est ce qui sépare les traders qui durent de ceux qui crament leur compte en 2 semaines.

**La règle des 1-2%**

JAMAIS risquer plus de 1-2% de ton capital sur un seul trade. Jamais.

Exemple : T'as un compte de 1000€
• Risque max par trade : 10-20€
• Si tu perds 10 trades d'affilée (ça arrive), tu perds 10-20% de ton compte
• C'est récupérable. 50% de perte, c'est pas récupérable.

**Pourquoi c'est crucial ?**

Les maths sont contre toi :
• Tu perds 10% → Il te faut +11% pour revenir
• Tu perds 20% → Il te faut +25% pour revenir
• Tu perds 50% → Il te faut +100% pour revenir

Plus tu perds, plus c'est dur de revenir. Protège ton capital.

**Le ratio Risk/Reward**

Avant chaque trade, calcule :
• Combien tu risques (distance jusqu'au stop loss)
• Combien tu peux gagner (distance jusqu'au take profit)

Minimum acceptable : 1:2
Tu risques 1 pour potentiellement gagner 2.

Avec un ratio 1:2, tu peux avoir tort 60% du temps et quand même être rentable. Fais le calcul.

**Le journal de trading**

Note TOUS tes trades :
• Date, heure, paire
• Pourquoi t'es rentré
• Résultat
• Ce que t'aurais pu faire mieux

Sans journal, t'apprends pas de tes erreurs. Tu les répètes.`
        },
        {
          title: "Calculer sa position",
          content: `Calculer la bonne taille de position, c'est pas compliqué. Mais faut le faire à CHAQUE trade.

**La formule**

Taille de position = (Capital × Risque%) / (Stop Loss en pips × Valeur du pip)

**Exemple concret**

• Capital : 1000€
• Risque par trade : 1% = 10€
• Stop loss : 20 pips
• Valeur du pip pour 0.01 lot EUR/USD : environ 0.10€

Calcul : 10€ / (20 × 0.10€) = 10€ / 2€ = 5
→ Tu peux prendre 0.05 lot

**Les outils**

Y'a des calculateurs en ligne gratuits. Utilise-les :
• MyFxBook position size calculator
• Calculateur intégré de ton broker

**Adapter selon le setup**

• Setup A+ (super confiant) : Tu peux aller jusqu'à 2%
• Setup normal : 1%
• Setup un peu forcé : 0.5% ou tu passes

**Jamais, JAMAIS**

• Doubler la position pour "se refaire"
• Mettre "un peu plus" parce que t'es sûr de toi
• Ignorer le calcul "juste pour cette fois"

C'est comme ça qu'on crame un compte. Je l'ai fait. Fais pas la même erreur.`
        },
        {
          title: "Stop loss et take profit",
          content: `Le stop loss te sauve. Le take profit te paie. Les deux sont obligatoires.

**Le Stop Loss**

C'est ton filet de sécurité. Si le trade va contre toi, il coupe automatiquement à ce niveau.

**Où le placer ?**

• Sous le dernier support (pour un achat)
• Au-dessus de la dernière résistance (pour une vente)
• Avec un peu de marge pour le "bruit" du marché

**Erreurs courantes :**
• Stop trop serré → Tu te fais sortir sur le bruit
• Stop trop large → Tu perds trop quand ça touche
• Pas de stop → RIP ton compte

**Le Take Profit**

C'est là où tu prends tes gains automatiquement.

**Où le placer ?**

• Sur la prochaine résistance (pour un achat)
• Sur le prochain support (pour une vente)
• À un ratio minimum de 1:2 par rapport au stop

**Stratégies avancées**

**Take profit partiel** : Tu fermes 50% de ta position au premier objectif, tu laisses courir le reste avec un stop à breakeven.

**Trailing stop** : Le stop suit le prix quand ça va dans ton sens. Tu sécurises les gains progressivement.

**La règle d'or**

Une fois que t'as placé ton stop et ton TP, tu touches plus à rien. Le marché fait son truc. Ton job c'est d'analyser AVANT, pas de paniquer PENDANT.`
        },
        {
          title: "Psychologie du trader",
          content: `La psychologie, c'est 80% du game. T'auras beau avoir la meilleure stratégie, si t'as pas le mental, tu perds.

**Les émotions qui te tuent**

**La peur**
• Peur de perdre → Tu mets pas le trade
• Peur de rater → Tu rentres n'importe comment
• Peur de voir le profit disparaître → Tu coupes trop tôt

**La cupidité**
• "Je vais laisser courir, ça va monter plus"
• "Je vais doubler la position"
• "Je mérite ce gain"

**La colère**
• Tu perds → T'es énervé → Tu revenge trade → Tu perds plus

**L'espoir**
• Le trade est contre toi mais "ça va revenir"
• Tu déplaces ton stop loss
• Ça revient pas

**Comment gérer ?**

**1. Accepte les pertes**
Tu vas perdre. Souvent. C'est normal. Un trade perdant, c'est pas un échec, c'est le coût du business. Comme un restaurateur qui jette des ingrédients périmés.

**2. Suis ton plan**
T'as fait ton analyse, t'as mis ton stop et ton TP. Maintenant tu fermes le graphique et tu fais autre chose. Regarder le prix bouger toutes les 2 minutes, ça sert à rien.

**3. Prends des pauses**
2-3 pertes d'affilée ? Tu fermes. Tu reviens demain. Ton compte sera toujours là.

**4. Trade petit**
Quand tu risques des montants qui te font flipper, tu prends des décisions de merde. Trade des montants que tu peux perdre sans que ça te fasse mal.

**5. Vis ta vie**
Le trading c'est pas ta vie. T'as des potes, des hobbies, une famille. Si tu passes 12h par jour sur les graphiques, t'es pas un trader, t'es un addict.

**Le secret ?**

Les meilleurs traders sont les plus ennuyeux. Ils font la même chose tous les jours, sans émotion, comme des robots. L'excitation, c'est pour le casino. Le trading, c'est un business.`
        }
      ]
    }
  },
  ecommerce: {
    "lancer-boutique": {
      title: "Lancer sa Boutique",
      author: "SayKee",
      level: "Débutant",
      chapters: [
        {
          title: "Trouver ta niche",
          content: `Avant de vendre quoi que ce soit, faut savoir QUOI vendre et à QUI.

**C'est quoi une niche ?**

Une niche, c'est un segment de marché spécifique. Au lieu de vendre "des vêtements", tu vends "des vêtements de yoga pour femmes enceintes". C'est plus précis, donc moins de concurrence et des clients plus qualifiés.

**Comment trouver LA bonne niche ?**

**1. Pars de tes intérêts**
Tu connais le fitness ? La tech ? Les animaux ? C'est plus facile de vendre un truc qu'on comprend.

**2. Vérifie la demande**
• Google Trends : La tendance monte ou descend ?
• Amazon Best Sellers : Qu'est-ce qui se vend ?
• Réseaux sociaux : Les gens en parlent ?

**3. Analyse la concurrence**
Trop de concurrence = galère pour se démarquer
Pas de concurrence = peut-être pas de marché

Le sweet spot : De la concurrence mais pas de leader écrasant.

**4. Vérifie la marge**
Prix de vente - (Coût produit + Pub + Frais) = Ta marge
Si c'est négatif ou trop faible, change de produit.

**Les niches qui marchent bien**

• Santé et bien-être
• Animaux de compagnie
• Bébés et maternité
• Sport et fitness
• Maison et décoration

**Les niches à éviter**

• Tout ce qui est trop technique (électronique complexe)
• Les trucs fragiles (ça casse, ça retourne)
• Les vêtements (tailles, retours, galère)
• Les produits réglementés (cosmétiques, alimentaire)`
        }
      ]
    }
  }
};

export const EbookReaderPage = () => {
  const { category, ebookId } = useParams();
  const navigate = useNavigate();
  const [currentChapter, setCurrentChapter] = useState(0);

  const ebook = ebooksContent[category]?.[ebookId];

  if (!ebook) {
    return (
      <div className="min-h-screen pt-20 bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4">Ebook non trouvé</h1>
          <Button onClick={() => navigate(-1)} className="bg-blue-600 hover:bg-blue-700 rounded-none">
            Retour
          </Button>
        </div>
      </div>
    );
  }

  const chapter = ebook.chapters[currentChapter];
  const progress = ((currentChapter + 1) / ebook.chapters.length) * 100;

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Header */}
      <div className="fixed top-20 left-0 right-0 z-40 bg-black/95 backdrop-blur border-b border-neutral-800">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Retour</span>
            </button>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-neutral-400">
                Chapitre {currentChapter + 1} / {ebook.chapters.length}
              </span>
              <div className="w-32 h-2 bg-neutral-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="pt-20 pb-32">
        <div className="max-w-4xl mx-auto px-6">
          {/* Book title */}
          <div className="mb-12 pt-8">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-blue-500" size={24} />
              <span className={`text-xs uppercase tracking-wider font-bold px-3 py-1 ${
                ebook.level === "Débutant" ? "bg-green-950 text-green-500" :
                ebook.level === "Intermédiaire" ? "bg-yellow-950 text-yellow-500" :
                "bg-blue-950 text-blue-500"
              }`}>
                {ebook.level}
              </span>
            </div>
            <h1 className="text-4xl font-black text-white mb-2">{ebook.title}</h1>
            <p className="text-neutral-400">par {ebook.author}</p>
          </div>

          {/* Chapter navigation */}
          <div className="mb-8 p-4 bg-neutral-900 border border-neutral-800">
            <p className="text-sm text-neutral-400 mb-3">Chapitres</p>
            <div className="flex flex-wrap gap-2">
              {ebook.chapters.map((ch, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentChapter(index)}
                  className={`px-4 py-2 text-sm transition-colors ${
                    currentChapter === index
                      ? "bg-blue-600 text-white"
                      : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                  }`}
                >
                  {index + 1}. {ch.title}
                </button>
              ))}
            </div>
          </div>

          {/* Chapter content */}
          <div className="bg-neutral-900 border border-neutral-800 p-8 md:p-12">
            <h2 className="text-3xl font-black text-white mb-8">{chapter.title}</h2>
            <div className="prose prose-invert max-w-none">
              {chapter.content.split('\n\n').map((paragraph, index) => (
                <div key={index} className="mb-6">
                  {paragraph.startsWith('**') && paragraph.endsWith('**') ? (
                    <h3 className="text-xl font-bold text-white mb-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </h3>
                  ) : paragraph.startsWith('•') ? (
                    <div className="text-neutral-300 leading-relaxed pl-4">
                      {paragraph.split('\n').map((line, i) => (
                        <p key={i} className="mb-2">{line}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-neutral-300 leading-relaxed whitespace-pre-line">
                      {paragraph.split('**').map((part, i) => 
                        i % 2 === 1 ? <strong key={i} className="text-white">{part}</strong> : part
                      )}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
              disabled={currentChapter === 0}
              className="border-neutral-700 hover:bg-neutral-900 text-white rounded-none disabled:opacity-30"
            >
              <ChevronLeft size={20} className="mr-2" />
              Précédent
            </Button>
            
            <span className="text-neutral-400 text-sm">
              {chapter.title}
            </span>
            
            <Button
              onClick={() => {
                if (currentChapter < ebook.chapters.length - 1) {
                  setCurrentChapter(currentChapter + 1);
                } else {
                  navigate(-1);
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 rounded-none"
            >
              {currentChapter < ebook.chapters.length - 1 ? (
                <>
                  Suivant
                  <ChevronRight size={20} className="ml-2" />
                </>
              ) : (
                "Terminer"
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookReaderPage;
