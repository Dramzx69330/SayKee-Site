import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronLeft, ChevronRight, BookOpen, Download, CheckCircle2 } from "lucide-react";
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
Tu trades des paires de devises : EUR/USD, GBP/JPY, etc. C'est le plus gros marché du monde. Ouvert 24h/24 du lundi au vendredi.

Avantages : Accessible avec peu de capital, beaucoup de liquidité
Inconvénients : Peut bouger violemment sur les news économiques

**Les Actions**
Tu achètes des parts d'entreprises : Apple, Tesla, LVMH... Le classique.

Avantages : Facile à comprendre, beaucoup d'infos disponibles
Inconvénients : Horaires limités, faut plus de capital pour démarrer

**Les Cryptos**
Bitcoin, Ethereum et compagnie. Le Far West du trading.

Avantages : Volatilité = opportunités, ouvert 24/7
Inconvénients : Très volatile, peut tout perdre vite si t'es pas prudent

**Les Indices**
CAC40, S&P500, DAX... Tu trades "le marché" en entier.

Avantages : Moins volatile que les actions individuelles, bon pour apprendre
Inconvénients : Moins de mouvements = moins d'opportunités

**Par quoi commencer ?** Je te conseille le Forex ou les indices. C'est là que t'apprends le mieux les bases.`
        },
        {
          title: "Choisir son broker",
          content: `Le broker, c'est ton intermédiaire entre toi et le marché. Choisis-le bien, c'est important.

**Les critères essentiels**

**1. La régulation**
JAMAIS un broker non régulé. En France, vérifie qu'il est enregistré à l'AMF. En Europe, cherche la régulation FCA (UK), BaFin (Allemagne), CySEC (Chypre).

Un broker régulé = tes fonds sont protégés. Un broker random de pub Instagram = tu reverras jamais ton argent.

**2. Les frais**
• Spread : La différence entre prix d'achat et de vente
• Commission : Frais fixes par trade
• Frais overnight : Si tu gardes une position la nuit

Compare les spreads sur les paires que tu veux trader. Un spread trop large te bouffe tes profits.

**3. La plateforme**
MetaTrader 4/5 c'est le standard. Facile à utiliser, plein de fonctionnalités, compatible avec les robots de trading.

Certains brokers ont leurs propres plateformes. Teste en démo avant de déposer.

**4. Le dépôt minimum**
Certains demandent 100€, d'autres 10 000€. Commence petit, tu augmenteras plus tard.

**Les brokers que je recommande**
Je vais pas te donner de noms précis parce que ça change tout le temps, mais cherche des avis récents sur des forums spécialisés. Méfie-toi des "classements" sponsorisés.

**Le compte démo**
TOUJOURS commencer par un compte démo. C'est gratuit, c'est de l'argent fictif. Tu fais tes erreurs là, pas avec ton vrai argent.`
        },
        {
          title: "Ton premier trade",
          content: `Ok, passons aux choses sérieuses. Voilà comment faire ton premier trade étape par étape.

**Étape 1 : Prépare ton setup**
• Ouvre ton graphique sur la paire que tu veux trader
• Mets-toi en timeframe H1 ou H4 pour commencer
• Regarde la tendance générale : ça monte ou ça descend ?

**Étape 2 : Fais ton analyse**
• Identifie les supports et résistances (les niveaux où le prix réagit)
• Regarde si y'a des patterns de chandeliers intéressants
• Vérifie le calendrier économique (pas de news importantes qui arrivent)

**Étape 3 : Calcule ta position**
• Décide combien tu veux risquer (max 1-2% de ton capital)
• Calcule la taille de position en fonction de ton stop loss
• Exemple : Capital 1000€, risque 1% = 10€ max de perte sur ce trade

**Étape 4 : Place ton trade**
• Choisis ta taille de position (PETIT au début, genre 0.01 lot)
• Mets ton stop loss (le niveau où tu coupes si ça va mal)
• Mets ton take profit (le niveau où tu prends tes gains)
• Clique sur "Acheter" ou "Vendre"

**Étape 5 : Gère ton trade**
Là c'est le plus dur : tu fais RIEN. Tu laisses le marché faire son truc. Ton stop loss te protège. Si t'as bien fait ton analyse, le reste c'est du temps.

Ne touche PAS à ton stop loss. Ne ferme PAS le trade en panique.`
        },
        {
          title: "Les erreurs de débutant",
          content: `J'ai fait toutes ces erreurs. Toi, tu vas les éviter.

**Erreur #1 : Trader sans stop loss**
"Je vais surveiller, je couperai manuellement." Non. Tu vas pas couper. Tu vas espérer que ça remonte. Et ça va pas remonter. Mets TOUJOURS un stop loss.

**Erreur #2 : Risquer trop par trade**
Tu mets 20% de ton capital sur un trade parce que t'es "sûr de toi". Tu perds. Ton compte prend -20%. C'est la spirale de la mort.

Règle : Maximum 1-2% de ton capital par trade. MAXIMUM.

**Erreur #3 : Vouloir se refaire**
Tu perds un trade. T'es énervé. Tu reprends un trade direct pour "te refaire". Tu perds encore. C'est le tilt. Si tu perds, tu fermes ton ordi et tu reviens demain.

**Erreur #4 : Ignorer le calendrier économique**
Y'a des annonces qui font bouger le marché de 100 pips en 2 secondes. NFP, taux d'intérêt, inflation... Vérifie le calendrier AVANT de trader.

**Erreur #5 : Changer de stratégie tout le temps**
Tu testes une strat pendant 3 trades, ça marche pas, tu changes. Normal que ça marche pas : t'as pas assez de data. Une stratégie, tu la testes sur 50-100 trades minimum.

**Erreur #6 : Écouter tout le monde**
"Mon pote m'a dit que..." / "J'ai vu sur TikTok que..." Stop. Tu fais TON analyse, tu prends TES décisions.`
        },
        {
          title: "Créer sa routine de trading",
          content: `Les traders rentables ont tous une routine. C'est pas sexy mais c'est ce qui marche.

**La routine du matin (15-30 min)**

1. Check le calendrier économique de la journée
2. Regarde ce qui s'est passé pendant la nuit (surtout si tu trades le forex)
3. Analyse tes paires sur le timeframe daily
4. Note les niveaux importants de la journée
5. Décide si c'est un jour pour trader ou pas

**Pendant la session**

• Concentre-toi sur 2-3 paires max, pas 15
• Attends TES setups, pas n'importe quel mouvement
• Si y'a rien, tu trades pas. C'est ok de pas trader.
• Note chaque trade dans ton journal

**La routine du soir (10-15 min)**

1. Review tes trades de la journée
2. Note ce qui a marché et ce qui a pas marché
3. Prépare la journée du lendemain
4. Déconnecte. Le marché sera encore là demain.

**Le journal de trading**

C'est OBLIGATOIRE. Note pour chaque trade :
• Date, heure, paire, direction
• Pourquoi t'es rentré (ton raisonnement)
• Résultat (gain/perte en € et en pips)
• Screenshot du trade
• Ce que t'aurais pu faire mieux

Sans journal, tu répètes les mêmes erreurs. Avec, tu progresses vraiment.

**Les jours sans trading**

Oui, y'a des jours où faut pas trader :
• Annonces économiques majeures
• Quand t'es fatigué ou stressé
• Quand t'as une série de pertes
• Les vendredis après-midi (le marché devient bizarre)
• Pendant les fêtes (faible liquidité)`
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

• **Ligne** : Simple, juste les prix de clôture reliés. Utile pour voir la tendance globale, mais pas assez d'infos pour trader.

• **Barres (OHLC)** : Open, High, Low, Close. Plus d'infos mais moins lisible visuellement.

• **Chandeliers japonais** : Le GOAT. C'est ce qu'on utilise tous. Chaque bougie te donne 4 infos en un coup d'œil.

**Les timeframes (unités de temps)**

• **M1, M5, M15** : Pour le scalping. Très nerveux, beaucoup de bruit.
• **H1, H4** : Pour le day trading. Mon préféré, bon équilibre signal/bruit.
• **D1 (Daily)** : Pour le swing trading. Une bougie = une journée.
• **W1, MN** : Pour l'investissement long terme.

**Règle importante :** Analyse toujours en "top-down". Tu regardes d'abord le Weekly pour la tendance de fond, puis Daily, puis H4, puis H1 pour tes entrées.

**La tendance**

Y'a que 3 possibilités :
• **Haussière (bullish)** : Des hauts de plus en plus hauts, des bas de plus en plus hauts
• **Baissière (bearish)** : Des hauts de plus en plus bas, des bas de plus en plus bas
• **Range** : Le prix oscille entre deux niveaux. Pas de direction claire.

"Trend is your friend" - Tu trades AVEC la tendance, jamais contre.`
        },
        {
          title: "Les chandeliers japonais",
          content: `Les chandeliers, c'est la base. Chaque bougie te raconte une histoire.

**Anatomie d'un chandelier**

Une bougie a 4 infos :
• **Open** : Prix d'ouverture de la période
• **Close** : Prix de clôture de la période
• **High** : Plus haut atteint
• **Low** : Plus bas atteint

Le corps, c'est entre l'open et le close. Les mèches (ombres), c'est le high et le low.

• **Bougie verte/blanche** : Close > Open = le prix a monté
• **Bougie rouge/noire** : Close < Open = le prix a baissé

**Les patterns simples**

**Doji** : Petit corps, grandes mèches. Le marché hésite. Possible retournement à venir.

**Marteau (Hammer)** : Petit corps en haut, longue mèche en bas. En bas d'une tendance baissière = signal d'achat potentiel.

**Étoile filante (Shooting Star)** : L'inverse du marteau. En haut d'une tendance haussière = signal de vente potentiel.

**Engulfing (Avalement)** : Une grosse bougie qui "avale" complètement la précédente. Signal fort de retournement.

**Les patterns à plusieurs bougies**

**Morning Star** : 3 bougies. Rouge + petit doji + grosse verte. Signal haussier en bas de tendance.

**Evening Star** : L'inverse. Signal baissier en haut de tendance.

**Les 3 soldats blancs** : 3 grosses bougies vertes consécutives. Continuation haussière forte.

**Les 3 corbeaux noirs** : 3 grosses bougies rouges. Continuation baissière forte.

**Mon conseil** : Maîtrise 5-6 patterns, c'est largement suffisant. La simplicité gagne.`
        },
        {
          title: "Supports et résistances",
          content: `Les supports et résistances, c'est là où le prix réagit. C'est FONDAMENTAL.

**C'est quoi ?**

• **Support** : Un niveau où le prix a du mal à descendre en dessous. Les acheteurs défendent ce niveau.

• **Résistance** : Un niveau où le prix a du mal à monter au-dessus. Les vendeurs défendent ce niveau.

**Comment les tracer ?**

1. Zoom out sur ton graphique (Daily ou H4)
2. Cherche les niveaux où le prix a réagi PLUSIEURS fois
3. Trace une ligne horizontale
4. Plus le niveau a été testé, plus il est fort

**Les règles d'or**

• Un support cassé devient une résistance (et vice versa)
• Les chiffres ronds sont souvent des niveaux clés (1.1000, 1.2000...)
• Les anciens plus hauts/plus bas historiques sont importants
• Un niveau testé 2-3 fois est plus fiable qu'un niveau testé 1 fois

**Comment trader avec ?**

**Le rebond** : Le prix touche un support, tu achètes. Le prix touche une résistance, tu vends. Simple mais efficace.

**La cassure (breakout)** : Le prix casse un niveau avec du volume. Tu rentres dans le sens de la cassure.

**Le pullback** : Après une cassure, le prix revient tester le niveau. C'est souvent la MEILLEURE entrée.

**Les faux breakouts**

Attention : Le prix peut casser un niveau puis revenir direct. Pour éviter ça :
• Attends la clôture de la bougie (pas juste la mèche)
• Vérifie le volume
• Ou attends le pullback pour confirmer`
        },
        {
          title: "Les indicateurs techniques",
          content: `Y'a des centaines d'indicateurs. 90% sont inutiles. Voici ceux qui marchent vraiment.

**Les moyennes mobiles (MA)**

La base. Ça lisse le prix pour voir la tendance clairement.

• **SMA (Simple)** : Moyenne simple des X dernières bougies
• **EMA (Exponentielle)** : Donne plus de poids aux prix récents, plus réactive

Les plus utilisées : MA20, MA50, MA200

**Comment les utiliser :**
• Prix au-dessus de la MA = tendance haussière
• Prix en dessous = tendance baissière
• Croisement de 2 MA = signal potentiel

**Le RSI (Relative Strength Index)**

Mesure si le marché est suracheté ou survendu. Oscille entre 0 et 100.
• RSI > 70 = suracheté, possible correction
• RSI < 30 = survendu, possible rebond

**Le MACD**

Montre la force de la tendance et les retournements potentiels. Deux lignes qui se croisent + un histogramme.

**Les Bandes de Bollinger**

3 lignes qui encadrent le prix. Utile pour voir la volatilité et les excès.

**Mon setup perso**

• EMA 20 et EMA 50 pour la tendance
• RSI 14 pour les excès
• Supports/résistances horizontaux

C'est tout. Pas besoin de 15 indicateurs qui se contredisent.`
        },
        {
          title: "Les figures chartistes",
          content: `Les figures, c'est des patterns qui se répètent. Le marché a une mémoire.

**Les figures de retournement**

**Double top** : Le prix fait deux sommets au même niveau puis casse à la baisse. Signal de vente.

**Double bottom** : L'inverse. Deux creux au même niveau puis cassure haussière. Signal d'achat.

**Tête et épaules** : Une épaule gauche, une tête (plus haute), une épaule droite. Cassure de la ligne de cou = signal fort de retournement baissier.

**Tête et épaules inversée** : L'inverse, signal haussier.

**Les figures de continuation**

**Triangle ascendant** : Résistance horizontale + supports de plus en plus hauts. Cassure généralement haussière.

**Triangle descendant** : L'inverse. Cassure généralement baissière.

**Triangle symétrique** : Le prix se comprime. Cassure dans le sens de la tendance principale.

**Drapeau/Fanion** : Petite consolidation après un mouvement fort. Continuation dans le sens du mouvement initial.

**Comment trader les figures ?**

1. Identifie la figure
2. Attends la cassure (pas avant !)
3. Entre sur la cassure ou le pullback
4. Stop loss de l'autre côté de la figure
5. Objectif = la hauteur de la figure reportée

**Attention** : Les figures marchent pas à 100%. C'est des probabilités, pas des certitudes.`
        },
        {
          title: "Construire un plan de trading",
          content: `Un plan de trading, c'est ta feuille de route. Sans plan, tu gambles.

**Les éléments du plan**

**1. Ton style de trading**
Day trading ? Swing ? Scalping ? Choisis-en UN et maîtrise-le.

**2. Tes marchés**
Forex ? Actions ? Crypto ? Commence par 2-3 instruments max.

**3. Tes timeframes**
Analyse sur Daily, entrées sur H4, par exemple. Sois cohérent.

**4. Tes setups**
Liste PRÉCISE des conditions pour entrer en trade :
• Tendance haussière sur Daily
• Pullback sur support en H4
• Chandelier de retournement
• RSI < 40

**5. Ton money management**
• Risque max par trade : 1%
• Risque max par jour : 3%
• Ratio R/R minimum : 1:2

**6. Tes règles de sortie**
• Stop loss : toujours
• Take profit : sur résistance / support
• Trailing stop : après +1R de gain

**7. Tes règles personnelles**
• Pas de trading avant 9h
• Max 3 trades par jour
• Pas de trading le vendredi après-midi
• Stop si 2 pertes d'affilée

**Backteste ton plan**

Avant de trader en réel :
1. Teste ta stratégie sur l'historique (minimum 100 trades)
2. Note le taux de réussite et le ratio R/R moyen
3. Calcule l'espérance mathématique
4. Si c'est positif, passe en démo
5. Si ça marche en démo, passe en réel (petit)

Un plan, ça s'écrit, ça se teste, ça s'améliore. C'est un document vivant.`
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

**Le risque par jour/semaine**

• Max 3% de perte par jour → tu arrêtes
• Max 6% de perte par semaine → pause jusqu'à lundi
• Max 10% de perte par mois → tu réévalues tout

Ces limites te protègent de toi-même.`
        },
        {
          title: "Calculer sa position",
          content: `Calculer la bonne taille de position, c'est pas compliqué mais faut le faire à CHAQUE trade.

**La formule**

Taille de position = (Capital × Risque%) / (Stop Loss en pips × Valeur du pip)

**Exemple concret - Forex**

• Capital : 1000€
• Risque par trade : 1% = 10€
• Stop loss : 20 pips
• Paire : EUR/USD
• Valeur du pip pour 0.01 lot : environ 0.10€

Calcul : 10€ / (20 pips × 0.10€) = 10€ / 2€ = 5
→ Tu peux prendre 0.05 lot

**Exemple concret - Actions**

• Capital : 5000€
• Risque : 1% = 50€
• Prix d'entrée : 100€
• Stop loss : 95€ (5€ de risque par action)

Calcul : 50€ / 5€ = 10 actions max

**Les outils**

Y'a des calculateurs en ligne gratuits. Utilise-les systématiquement. La plupart des brokers ont aussi un calculateur intégré.

**Adapter selon le setup**

• Setup A+ (super confiant) : 2%
• Setup normal : 1%
• Setup un peu forcé : 0.5% ou tu passes

**La règle absolue**

JAMAIS augmenter la taille pour "se refaire". JAMAIS. C'est le meilleur moyen de cramer ton compte.`
        },
        {
          title: "Stop loss et take profit",
          content: `Le stop loss te sauve. Le take profit te paie. Les deux sont obligatoires.

**Le Stop Loss**

C'est ton filet de sécurité. Si le trade va contre toi, il coupe automatiquement.

**Où le placer ?**

Méthode 1 - Technique :
• Sous le dernier support (pour un achat)
• Au-dessus de la dernière résistance (pour une vente)
• Avec un peu de marge pour le "bruit" du marché

Méthode 2 - ATR :
• Utilise l'indicateur ATR (Average True Range)
• Stop = 1.5 à 2 fois l'ATR sous/au-dessus de ton entrée

**Erreurs de stop loss :**
• Trop serré → Tu te fais sortir sur le bruit
• Trop large → Tu perds trop quand ça touche
• Pas de stop → RIP ton compte
• Déplacer le stop pour "laisser respirer" → Mauvaise idée

**Le Take Profit**

C'est là où tu prends tes gains automatiquement.

**Où le placer ?**

• Sur la prochaine résistance (pour un achat)
• Sur le prochain support (pour une vente)
• À un ratio minimum de 1:2 par rapport au stop

**Stratégies avancées**

**Partial take profit** : Tu fermes 50% au premier objectif, tu laisses courir le reste.

**Trailing stop** : Le stop suit le prix quand ça va dans ton sens. Tu sécurises les gains progressivement.

**Breakeven stop** : Quand t'es à +1R, tu déplaces le stop à ton entrée. Tu peux plus perdre.`
        },
        {
          title: "La psychologie du trader",
          content: `La psychologie, c'est 80% du game. T'auras beau avoir la meilleure stratégie, si t'as pas le mental, tu perds.

**Les émotions dangereuses**

**La peur**
• Peur de perdre → Tu mets pas le trade
• Peur de rater → Tu rentres n'importe comment (FOMO)
• Peur de voir le profit disparaître → Tu coupes trop tôt

**La cupidité**
• "Je vais laisser courir, ça va monter plus"
• "Je vais doubler la position"
• Tu déplaces ton take profit de plus en plus loin

**La colère (le tilt)**
Tu perds → T'es énervé → Tu revenge trade → Tu perds plus → T'es plus énervé → Spirale infernale

**L'espoir**
Le trade est contre toi mais "ça va revenir". Tu déplaces ton stop. Tu moyennes à la baisse. Ça revient pas.

**Comment gérer ?**

**1. Accepte les pertes**
Tu vas perdre. Souvent. C'est normal. Un trade perdant, c'est pas un échec, c'est le coût du business.

**2. Suis ton plan**
T'as fait ton analyse, t'as mis ton stop et ton TP. Maintenant tu fermes le graphique.

**3. Prends des pauses**
2-3 pertes d'affilée ? Tu fermes. Tu reviens demain.

**4. Trade petit**
Si le montant te fait flipper, tu trades trop gros.

**5. Vis ta vie**
Le trading c'est pas ta vie. Si tu passes 12h par jour sur les graphiques, t'es addict, pas trader.`
        },
        {
          title: "Le journal de trading",
          content: `Le journal, c'est ton outil de progression #1. Sans journal, tu répètes les mêmes erreurs.

**Que noter ?**

Pour chaque trade :

**Avant le trade**
• Date et heure
• Instrument (paire, action...)
• Direction (achat/vente)
• Timeframe
• Pourquoi tu rentres (setup, analyse)
• Screenshot du graphique

**Pendant le trade**
• Prix d'entrée
• Stop loss
• Take profit
• Taille de position
• Risque en € et en %

**Après le trade**
• Résultat (gain/perte en € et pips)
• Screenshot de sortie
• Qu'est-ce qui a marché ?
• Qu'est-ce qui a pas marché ?
• Qu'est-ce que t'aurais fait différemment ?
• Note émotionnelle (1-10)

**Comment analyser ton journal ?**

Chaque semaine/mois, regarde :
• Ton taux de réussite
• Ton ratio R/R moyen
• Tes meilleurs setups
• Tes pires setups
• Les patterns dans tes erreurs
• Les heures où tu trades le mieux/pire

**Les outils**

• Excel/Google Sheets : Simple et efficace
• Notion : Plus visuel
• Edgewonk, Tradervue : Outils dédiés (payants)
• Un simple carnet : Ça marche aussi

L'important c'est de le faire. Le format importe peu.`
        },
        {
          title: "Survivre aux drawdowns",
          content: `Le drawdown, c'est la baisse de ton capital depuis son plus haut. Tout le monde en a. La question c'est : comment tu gères ?

**C'est quoi un drawdown normal ?**

Même les meilleurs traders ont des drawdowns de 10-20%. C'est NORMAL.

Si ta stratégie a un taux de réussite de 50% :
• 3 pertes d'affilée : probable
• 5 pertes d'affilée : possible
• 7 pertes d'affilée : rare mais ça arrive

C'est les maths, pas la malchance.

**Comment survivre ?**

**1. Réduis la taille**
Après -5% de drawdown, passe de 1% à 0.5% de risque par trade. Après -10%, passe à 0.25%. Tu protèges ce qui reste.

**2. Review ta stratégie**
Est-ce que le marché a changé ? Est-ce que tu suis ton plan ? Regarde ton journal pour trouver ce qui cloche.

**3. Prends une pause**
Parfois, la meilleure chose à faire c'est rien. Le marché sera toujours là dans une semaine.

**4. Reviens à la démo**
Pas de honte à retourner en démo pour retrouver confiance. C'est intelligent, pas faible.

**Les signaux d'alerte**

Tu dois STOP si :
• Tu trades pour te venger
• Tu augmentes tes tailles après des pertes
• Tu ignores tes règles
• Tu trades des instruments que tu connais pas
• Tu trades sous l'émotion

**La règle ultime**

Si tu perds 20% de ton capital, tu arrêtes de trader en réel. Tu retournes en démo, tu analyses tout, tu comprends ce qui s'est passé. Tu reviens que quand t'as trouvé le problème.

Le capital, ça se reconstruit. Mais faut qu'il en reste.`
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
          content: `Avant de vendre quoi que ce soit, faut savoir QUOI vendre et à QUI. C'est la base.

**C'est quoi une niche ?**

Une niche, c'est un segment de marché spécifique. Au lieu de vendre "des vêtements", tu vends "des vêtements de yoga pour femmes enceintes". Plus c'est précis, moins y'a de concurrence.

**Comment trouver LA bonne niche ?**

**1. Pars de tes centres d'intérêt**
Tu connais le fitness ? La tech ? Les animaux ? C'est plus facile de vendre un truc que tu comprends.

**2. Vérifie la demande**
• Google Trends : La tendance monte ou descend ?
• Amazon Best Sellers : Qu'est-ce qui se vend bien ?
• Réseaux sociaux : Les gens en parlent ?
• Forums et groupes Facebook : Quels problèmes les gens ont ?

**3. Analyse la concurrence**
Trop de concurrence = galère pour se démarquer
Pas de concurrence = peut-être pas de marché

Le sweet spot : De la concurrence mais pas de leader écrasant.

**4. Vérifie la marge**
Prix de vente - (Coût produit + Pub + Frais) = Ta marge

Si c'est négatif ou moins de 30%, change de produit.

**Les niches qui cartonnent**

• Animaux de compagnie (les gens dépensent sans compter)
• Bébés et maternité (idem)
• Sport et fitness (marché énorme)
• Maison et organisation
• Bien-être et self-care

**Les niches à éviter**

• Électronique complexe (SAV de fou)
• Vêtements (tailles, retours)
• Alimentaire (réglementation)
• Produits très lourds (frais de port)`
        },
        {
          title: "Shopify vs alternatives",
          content: `Y'a plusieurs plateformes pour créer ta boutique. Voici le comparatif honnête.

**Shopify**

Le leader du marché. 29$/mois minimum.

Avantages :
• Facile à utiliser, même si t'y connais rien
• Plein d'apps pour tout faire
• Support 24/7
• Checkout optimisé pour la conversion

Inconvénients :
• Frais de transaction si t'utilises pas Shopify Payments
• Ça peut devenir cher avec les apps
• T'es "locataire" de ta boutique

**WooCommerce (WordPress)**

Gratuit (mais faut payer l'hébergement).

Avantages :
• Gratuit et open source
• Tu possèdes vraiment ta boutique
• Hyper personnalisable

Inconvénients :
• Plus technique à installer
• Faut gérer l'hébergement, la sécurité
• Moins d'intégrations clé en main

**Autres options**

• **PrestaShop** : Populaire en France, gratuit, technique
• **BigCommerce** : Alternative à Shopify, moins d'apps
• **Wix eCommerce** : Simple mais limité

**Mon conseil**

Commence par Shopify. C'est le plus simple pour démarrer. Tu pourras toujours migrer après quand tu sauras ce que tu fais.

Le temps que tu passes à configurer une solution "gratuite", tu pourrais l'utiliser pour vendre.`
        },
        {
          title: "Créer ta boutique",
          content: `Ok, t'as choisi ta plateforme. Maintenant on monte la boutique.

**Le nom et le domaine**

• Court, mémorable, facile à écrire
• Vérifie que le .com est dispo (ou .fr)
• Vérifie que le nom est pas déjà pris (INPI)
• Évite les tirets et les chiffres

**La structure de ta boutique**

Pages essentielles :
• **Accueil** : Ton produit star + proposition de valeur
• **Collections/Catégories** : Si t'as plusieurs produits
• **Pages produit** : Le nerf de la guerre
• **À propos** : Ta story, pourquoi tu fais ça
• **Contact** : Email, formulaire
• **FAQ** : Les questions fréquentes
• **CGV + Mentions légales** : Obligatoire

**Le design**

• Choisis un thème propre et pro
• Moins c'est plus : pas de bordel visuel
• Mobile first : 70% de ton trafic sera sur mobile
• Vitesse : si ça charge lentement, les gens partent

**Les éléments de confiance**

Les gens achètent pas s'ils te font pas confiance :
• Avis clients (même si t'en as pas encore, prévois l'espace)
• Badges de paiement sécurisé
• Politique de retour claire
• Coordonnées visibles
• Photos pro (pas des screenshots AliExpress)

**Le checkout**

C'est là que tu perds le plus de monde :
• Le moins d'étapes possible
• Plusieurs moyens de paiement (CB, PayPal, Apple Pay)
• Frais de port clairs DÈS LE DÉBUT
• Option compte invité (pas que création de compte)`
        },
        {
          title: "Configurer les paiements",
          content: `Pas de paiement = pas de ventes. Faut bien configurer ça.

**Les solutions de paiement**

**Stripe**
• Le plus populaire
• Frais : ~1.4% + 0.25€ par transaction
• Facile à intégrer
• Accepte CB, Apple Pay, Google Pay

**PayPal**
• Connu de tous, rassure les clients
• Frais : ~2.9% + 0.35€
• Litiges plus faciles pour les clients (attention)
• À avoir EN PLUS de Stripe

**Shopify Payments**
• Si t'es sur Shopify, c'est Stripe intégré
• Pas de frais supplémentaires
• Le plus simple

**Les devises**

• Affiche les prix dans la devise de ton client
• Shopify et la plupart des plateformes le font automatiquement
• Attention aux frais de conversion

**La TVA**

En France et en Europe, tu dois collecter la TVA :
• 20% sur la plupart des produits
• Déclare-toi auprès des impôts
• Utilise un outil de facturation conforme

Si tu vends en Europe, renseigne-toi sur le guichet unique TVA (OSS).

**Les fraudes**

Ça arrive. Pour te protéger :
• Active la vérification 3D Secure
• Méfie-toi des grosses commandes de nouveaux clients
• Vérifie que l'adresse de livraison correspond
• Utilise les outils anti-fraude de ton processeur

**Conseil**

Active plusieurs moyens de paiement. Certains clients n'achètent QUE par PayPal. D'autres détestent PayPal. Donne le choix.`
        },
        {
          title: "Livraison et logistique",
          content: `La livraison, c'est souvent là que ça coince. Fais les bons choix dès le début.

**Les modèles de fulfillment**

**Dropshipping**
Tu vends, le fournisseur expédie directement au client.
• Avantage : Pas de stock, pas d'avance de trésorerie
• Inconvénient : Délais longs, qualité variable, marges réduites

**Stockage maison**
Tu gardes le stock chez toi et tu expédies toi-même.
• Avantage : Contrôle total, délais courts
• Inconvénient : Ça prend de la place, du temps

**Fulfillment center (3PL)**
Un prestataire stocke et expédie pour toi.
• Avantage : Pro, rapide, ça scale
• Inconvénient : Coûteux, minimum de commandes souvent

**Les transporteurs**

• **Colissimo** : Le classique en France
• **Mondial Relay** : Moins cher, points relais
• **Chronopost** : Express, plus cher
• **DHL, UPS** : Pour l'international

**Calculer tes frais de port**

Les options :
• **Gratuit** : Tu intègres dans le prix produit (ce que je recommande)
• **Forfait unique** : Simple à comprendre
• **Au poids/taille** : Juste mais compliqué
• **Gratuit à partir de X€** : Augmente le panier moyen

**Les retours**

En France, le client a 14 jours pour retourner (loi).
• Prévois une politique de retour claire
• Décide qui paie le retour (toi ou le client)
• Simplifie le process au maximum

**Mon conseil**

Au début, gère toi-même. Tu comprends les problèmes. Après, quand t'as du volume, externalise.`
        },
        {
          title: "Les aspects légaux",
          content: `Le légal, c'est chiant mais obligatoire. Voilà le minimum à savoir.

**Le statut juridique**

Pour démarrer, t'as plusieurs options :

**Auto-entrepreneur (micro-entreprise)**
• Le plus simple pour commencer
• Plafond : 188 700€ de CA/an (vente de marchandises)
• Cotisations : ~12.3% du CA
• Pas de TVA en dessous d'un certain seuil

**SASU/EURL**
• Plus adapté si tu scales
• Protection du patrimoine personnel
• Plus de paperasse et de frais

Mon conseil : Commence en auto-entrepreneur. Change quand t'atteins les limites.

**Les mentions obligatoires**

Sur ton site, tu DOIS avoir :
• **Mentions légales** : Ton identité, hébergeur
• **CGV** : Conditions Générales de Vente
• **Politique de confidentialité** : RGPD
• **Politique de cookies** : Bandeau + explications

Des générateurs gratuits existent en ligne. Utilise-les et personnalise.

**Le RGPD**

Tu collectes des données personnelles (email, adresse...), donc :
• Explique ce que tu fais avec les données
• Demande le consentement pour les emails marketing
• Permet aux gens de demander la suppression
• Sécurise les données

**La TVA**

• Déclare-toi à la TVA quand tu dépasses le seuil
• Collecte et reverse la TVA
• Fais des factures conformes

**Les assurances**

• RC Pro : Recommandée, pas obligatoire pour tous
• Assurance stock : Si tu gardes du stock chez toi

**Le conseil ultime**

Fais-toi aider par un comptable ou un expert. Les erreurs légales coûtent cher.`
        }
      ]
    },
    "produits-gagnants": {
      title: "Trouver des Produits Gagnants",
      author: "SayKee",
      level: "Intermédiaire",
      chapters: [
        {
          title: "Les critères d'un winner",
          content: `Tous les produits se valent pas. Voilà comment reconnaître un winner.

**Le critère #1 : Le "wow effect"**

Le produit doit faire dire "Oh c'est quoi ça ?!" ou résoudre un problème évident. Les gens achètent :
• Ce qui les impressionne
• Ce qui leur simplifie la vie
• Ce qui leur fait gagner du temps

**Les critères objectifs**

**1. La marge**
• Prix de vente > 3x le coût produit minimum
• Vise 25-40€ de prix de vente pour commencer
• En dessous de 15€, dur d'être rentable en pub

**2. La demande**
• Les gens cherchent-ils ce produit ?
• Y'a-t-il de la concurrence (= preuve de marché) ?
• La tendance est-elle stable ou montante ?

**3. La qualité**
• Le produit tient ses promesses
• Peu de retours et de plaintes
• Note fournisseur > 4.5 étoiles

**4. La facilité d'expédition**
• Léger (< 500g idéalement)
• Pas fragile
• Petit volume

**5. Le potentiel viral**
• Facile à montrer en vidéo
• Fait réagir sur les réseaux
• Partageable

**Les red flags**

Évite les produits :
• Brevetés ou avec des marques (contrefaçon)
• Avec des normes strictes (électrique, cosmétique, alimentaire)
• Saisonniers (sauf si tu sais ce que tu fais)
• Déjà ultra saturés (tu verras les mêmes pubs partout)

**Le test ultime**

Pose-toi cette question : "Est-ce que MOI j'achèterais ce produit au prix que je veux le vendre ?"

Si c'est non, passe au suivant.`
        },
        {
          title: "Où trouver des produits",
          content: `Y'a plein d'endroits pour trouver des produits. Voici mes sources préférées.

**AliExpress**

Le classique du dropshipping.
• Énorme catalogue
• Prix bas
• Délais longs (2-4 semaines en général)

Comment chercher :
• Filtre par "4 étoiles et +"
• Regarde le nombre de commandes
• Lis les avis AVEC PHOTOS
• Contacte le vendeur avant de commander

**Les agents et fournisseurs privés**

Quand tu scales, passe par un agent :
• Meilleurs prix
• Contrôle qualité
• Expédition plus rapide

CJ Dropshipping, Wiio, Eprolo... Y'en a plein.

**Amazon**

Oui, Amazon. Pour deux choses :
• Voir ce qui se vend bien (Best Sellers)
• Lire les avis pour comprendre ce que les clients veulent/détestent

**Les réseaux sociaux**

**TikTok** : Cherche #tiktokmademebuyit
**Instagram** : Suis des comptes de produits viraux
**Pinterest** : Tendances lifestyle et déco

**Les outils spy**

Des outils pour voir les pubs et produits des concurrents :
• Minea
• PiPiAds
• AdSpy

Attention : Copier bêtement marche de moins en moins. Utilise pour t'inspirer, pas pour cloner.

**Le sourcing différent**

Pour te démarquer :
• Salons professionnels
• Fabricants locaux
• Produits artisanaux
• White label (tu mets ta marque)

**Mon process**

1. Je scroll TikTok/Instagram pour les tendances
2. Je vérifie sur Google Trends
3. Je cherche sur AliExpress
4. Je commande un échantillon
5. Si c'est bien, je lance une petite campagne de test`
        },
        {
          title: "Analyser la concurrence",
          content: `Avant de te lancer, regarde ce que font les autres. C'est pas de la triche, c'est de l'intelligence.

**Trouver tes concurrents**

• Tape ton produit dans Google
• Regarde les pubs sur Facebook/Instagram
• Cherche sur Amazon
• Utilise les outils spy (Minea, etc.)

**Quoi analyser ?**

**Leur site**
• Design et UX
• Prix pratiqués
• Offres et bundles
• Arguments de vente
• Avis clients

**Leur marketing**
• Quels angles utilisent-ils ?
• Quels formats de pub ?
• Quelles audiences ciblent-ils ?
• Quelle est leur promesse principale ?

**Leur présence sociale**
• Nombre d'abonnés
• Engagement
• Type de contenu
• Fréquence de publication

**Leurs faiblesses**

C'est là que tu peux te différencier :
• Mauvais SAV ? → Mise sur le service client
• Délais longs ? → Trouve un meilleur fournisseur
• Prix élevés ? → Propose mieux
• Pas de garantie ? → Offres-en une

**L'analyse des avis**

Lis les avis négatifs des concurrents. C'est une mine d'or :
• Quelles sont les plaintes récurrentes ?
• Qu'est-ce qui manque au produit ?
• Qu'est-ce qui déçoit ?

Utilise ces infos pour améliorer ton offre.

**Ne pas copier bêtement**

L'erreur classique : voir un concurrent qui marche et copier exactement.

Problème :
• Tu arrives après
• T'as pas son budget
• T'as pas son expérience

Différencie-toi. Trouve ton angle. Y'a de la place pour tout le monde si t'apportes quelque chose de différent.`
        },
        {
          title: "Tester sans se ruiner",
          content: `Tester des produits ça coûte. Voilà comment minimiser les risques.

**Le budget test**

Pour tester UN produit correctement :
• 50-100€ en pub minimum
• 3-5 jours de test
• 1000-2000 impressions minimum

En dessous, t'as pas assez de data pour décider.

**La méthode de test**

**Phase 1 : Validation rapide (2-3 jours)**
• Une seule pub
• Une seule audience large
• Budget : 20-30€/jour
• Objectif : voir si ça génère de l'intérêt

Métriques à regarder :
• CTR (taux de clic) > 1.5% c'est bien
• CPC (coût par clic) < 1€ c'est correct
• Ajouts au panier : y'en a ou pas ?

**Phase 2 : Validation ventes (3-5 jours)**
• Si phase 1 est ok, continue
• Même budget
• Regarde les conversions

Si t'as des ventes rentables → Scale
Si t'as des ventes mais pas rentables → Optimise
Si t'as zéro vente → Stop ou change de créa

**Les signaux d'arrêt**

Coupe si après 50€ dépensés :
• CTR < 0.8%
• Aucun ajout au panier
• CPC > 2€

Le produit ou la pub marche pas. Passe au suivant.

**Combien de produits tester ?**

En moyenne, tu vas tester 10-20 produits avant d'en trouver un qui marche vraiment. C'est NORMAL.

Budget réaliste pour se lancer : 500-1000€ de test

**La règle d'or**

Coupe vite les perdants, double sur les gagnants.

Trop de débutants s'acharnent sur des produits qui marchent pas "parce qu'ils y croient". Les données mentent pas. Si ça marche pas après un vrai test, passe à autre chose.`
        },
        {
          title: "Créer une fiche produit qui vend",
          content: `Ta fiche produit, c'est ton vendeur 24/7. Elle doit convaincre sans toi.

**Le titre**

• Clair et descriptif
• Inclut le bénéfice principal
• Pas de blabla

Exemple mauvais : "Super gadget multifonction révolutionnaire"
Exemple bon : "Organisateur de câbles - Fini les fils emmêlés"

**Les images**

C'est le PLUS important.
• Photo principale sur fond blanc (pro)
• Photos lifestyle (en situation)
• Photos des détails
• Infographies avec les bénéfices
• Au moins 5-6 images

Pas de screenshots AliExpress moches. Investis dans des bonnes photos.

**La description**

Structure qui marche :

1. **Le problème** : "Tu en as marre de..."
2. **La solution** : "Ce produit..."
3. **Les bénéfices** : Liste à puces, facile à scanner
4. **Les features** : Caractéristiques techniques
5. **La preuve sociale** : Avis, témoignages
6. **L'appel à l'action** : "Commande maintenant"

**Les éléments de conversion**

• Prix barré + prix promo (crée l'urgence)
• Stock limité (vraie ou perçue)
• Livraison gratuite clairement affichée
• Garantie satisfait ou remboursé
• Badges de confiance
• Timer si promo (attention à pas en abuser)

**Les avis**

Même si t'en as pas encore :
• Importe des avis du fournisseur (traduits)
• Utilise des apps comme Loox ou Judge.me
• Demande des avis après chaque vente

**Le prix**

• Jamais en .00, utilise .99 ou .97
• Montre la "valeur" : "Valeur 89€ - Aujourd'hui 39€"
• Propose des bundles pour augmenter le panier

**Test et optimise**

Ta première fiche produit sera pas parfaite. Regarde les données :
• Taux de conversion < 1% → Problème de fiche ou de trafic
• Beaucoup d'abandons de panier → Problème au checkout ou frais cachés

Améliore en continu.`
        },
        {
          title: "Valider avant de commander du stock",
          content: `Avant de commander 500 unités, vérifie que ton produit se vend vraiment.

**L'erreur classique**

Tu trouves un produit "parfait", t'es hyper motivé, tu commandes 1000 unités pour avoir un meilleur prix... et ça se vend pas. T'es bloqué avec du stock.

**La méthode safe**

**Étape 1 : Test en dropshipping (1-2 semaines)**
Même si tu veux faire du stock après, teste d'abord en drop.
• Commande quelques unités test
• Lance des pubs
• Valide que ça se VEND

**Étape 2 : Petite commande (2-4 semaines)**
Si le test est positif :
• Commande 50-100 unités
• Stocke chez toi ou en fulfillment
• Continue les pubs
• Vérifie le taux de retour

**Étape 3 : Scale (si tout va bien)**
• Commande en plus grande quantité
• Négocie les prix
• Optimise ta logistique

**Les questions à te poser**

Avant de commander du stock :
• J'ai fait au moins 50 ventes en dropshipping ?
• Mon taux de retour est acceptable (< 5%) ?
• J'ai les moyens d'immobiliser cet argent ?
• J'ai où stocker ?
• J'ai un plan B si ça marche pas ?

**Négocier avec les fournisseurs**

Une fois validé :
• Contacte plusieurs fournisseurs
• Demande des échantillons
• Négocie sur la quantité
• Négocie sur les délais
• Vérifie les conditions de paiement

**Le calcul de stock**

Stock à commander = Ventes moyennes par jour × Délai de réapprovisionnement × 1.5

Le ×1.5 c'est ta marge de sécurité.

**Mon conseil**

Reste lean le plus longtemps possible. Le cash immobilisé en stock, c'est du cash que tu peux pas utiliser pour les pubs. En e-commerce, le trafic c'est la priorité.`
        }
      ]
    },
    "facebook-ads": {
      title: "Facebook Ads Masterclass",
      author: "SayKee",
      level: "Avancé",
      chapters: [
        {
          title: "Comprendre Facebook Ads",
          content: `Facebook Ads (Meta Ads maintenant), c'est l'arme principale du e-commerce. Maîtrise ça et t'as 80% du game.

**Comment ça marche ?**

Tu paies Facebook pour montrer tes pubs à des gens qui correspondent à tes critères. L'algorithme apprend ce qui marche et optimise.

**Les concepts de base**

**Campagne** : L'objectif global (ventes, trafic, notoriété)
**Ensemble de publicités (Ad Set)** : L'audience, le budget, le placement
**Publicité (Ad)** : Le visuel et le texte que les gens voient

**Les objectifs**

Pour l'e-commerce, utilise :
• **Ventes** (ex-Conversions) : L'objectif principal
• **Trafic** : Pour tester des audiences/créas rapidement

Oublie les autres pour l'instant.

**Le Pixel Facebook**

C'est un bout de code qui track ce que les visiteurs font sur ton site :
• Vue de page
• Ajout au panier
• Achat
• etc.

INSTALLE-LE DÈS LE PREMIER JOUR. Même si tu fais pas encore de pub. Il collecte de la data.

**Le tracking iOS14+**

Depuis iOS14, Apple limite le tracking. Ça impacte les perfs de Facebook.

Ce que tu dois faire :
• Configure l'API de conversions (CAPI)
• Vérifie ton domaine
• Priorise tes événements (8 max)
• Accepte que le tracking sera jamais parfait

**Le budget**

Minimum pour démarrer : 20-30€/jour par ad set
En dessous, l'algorithme a pas assez de data pour optimiser.

Budget test mensuel réaliste : 500-1000€

**Les métriques importantes**

• **CPM** : Coût pour 1000 impressions (10-25€ c'est normal)
• **CTR** : Taux de clic (> 1.5% c'est bien)
• **CPC** : Coût par clic (< 1€ c'est correct)
• **CPA** : Coût par achat (dépend de ta marge)
• **ROAS** : Retour sur dépense pub (> 2 c'est rentable)`
        },
        {
          title: "Créer sa première campagne",
          content: `On passe à la pratique. Voilà comment créer ta première campagne qui marche.

**La structure**

Pour commencer, garde ça simple :
• 1 campagne
• 1-3 ad sets (audiences différentes)
• 2-3 pubs par ad set

**Étape par étape**

**1. Crée la campagne**
• Objectif : Ventes
• Budget : Au niveau de l'ad set (pas CBO pour commencer)
• Optimisation : Achats

**2. Configure l'ad set**
• Budget : 20-30€/jour
• Audience : Large au début (juste pays + âge + genre)
• Placements : Automatiques ou Feed + Stories seulement
• Optimisation : Achats

**3. Crée la pub**
• Format : Vidéo de préférence (ou carrousel)
• Texte : Court, bénéfice principal, appel à l'action
• Visuel : Accrocheur, montre le produit en action

**Le texte de pub**

Structure qui marche :

Hook (accroche) : "Tu en as marre de [problème] ?"

Bénéfices : Liste les 2-3 avantages principaux

Preuve sociale : "Plus de X clients satisfaits"

Appel à l'action : "Commande maintenant et profite de -30%"

Lien : "monsite.com"

**Les erreurs à éviter**

• Trop d'audiences différentes dès le début
• Budget trop petit (< 20€/jour)
• Juger trop vite (attends 3-5 jours)
• Changer les pubs tous les jours
• Ignorer le créatif (c'est le PLUS important)

**La patience**

Facebook a besoin de temps pour apprendre. La phase d'apprentissage c'est environ 50 conversions.

Pendant cette phase :
• Les coûts sont instables
• Les perfs varient beaucoup
• C'est NORMAL

Ne touche à rien pendant 3-5 jours. Laisse l'algo faire son job.`
        },
        {
          title: "Les audiences qui marchent",
          content: `L'audience c'est à QUI tu montres ta pub. C'est crucial mais moins qu'avant.

**Les types d'audiences**

**Audience large (Broad)**
• Juste pays + âge + genre
• Tu laisses Facebook trouver les bons profils
• Marche de mieux en mieux grâce à l'IA

**Audiences par intérêts**
• Tu cibles des intérêts spécifiques (yoga, fitness, etc.)
• Utile pour des niches précises
• Peut limiter la portée

**Lookalike (similaires)**
• Facebook trouve des gens similaires à une source
• Source : tes acheteurs, tes visiteurs, etc.
• Très puissant quand t'as de la data

**Retargeting (reciblage)**
• Tu recibles les gens qui ont déjà interagi
• Visiteurs du site, ajouts au panier, etc.
• Le plus rentable en général

**Ma stratégie d'audience**

**Phase 1 : Test (budget limité)**
• 1 audience large
• 1 audience intérêt principal
• 1 lookalike si t'as de la data

**Phase 2 : Scale (quand ça marche)**
• Élargis l'audience large
• Teste d'autres intérêts
• Crée des lookalikes de tes meilleurs clients

**Les audiences de retargeting**

À créer dès le début :
• Visiteurs 7 jours (hot)
• Visiteurs 30 jours (warm)
• Ajouts au panier 7 jours (très hot)
• Acheteurs (pour exclure ou upsell)

**Le conseil contre-intuitif**

En 2024-2025, les audiences larges marchent souvent mieux que les ciblages précis. L'algorithme de Facebook est devenu très fort.

Teste toujours une audience large. Tu seras peut-être surpris.

**La taille d'audience**

• Trop petite (< 100K) : L'algo peut pas optimiser
• Trop grande (> 50M) : Ok avec du budget
• Sweet spot pour débuter : 1-10M`
        },
        {
          title: "Créer des créatifs qui convertissent",
          content: `Le créatif (visuel + texte), c'est 80% de ta performance. Tu peux avoir la meilleure audience du monde, si ton créatif est nul, ça marchera pas.

**Les formats qui marchent**

**1. UGC (User Generated Content)**
Du contenu qui ressemble à du contenu "normal", pas à une pub.
• Quelqu'un qui parle face caméra
• Unboxing
• Témoignage client
• Marche TRÈS bien en ce moment

**2. Vidéo produit**
• Montre le produit en action
• 15-30 secondes max
• Hook dans les 3 premières secondes

**3. Carrousel**
• Plusieurs images qui racontent une histoire
• Bien pour montrer les bénéfices
• Chaque slide doit donner envie de voir la suite

**4. Image statique**
• Simple mais peut marcher
• Avant/après
• Infographie bénéfices

**La structure d'une vidéo pub**

**0-3 sec : Le hook**
C'est le PLUS important. Tu dois capter l'attention immédiatement.
• Question choc
• Visuel surprenant
• "Attends, c'est quoi ça ?"

**3-15 sec : Le problème + solution**
• Identifie le problème
• Présente ton produit comme LA solution

**15-25 sec : Les bénéfices**
• Liste 2-3 avantages clés
• Montre le produit en action

**25-30 sec : L'appel à l'action**
• "Commande maintenant"
• Rappelle l'offre
• Crée l'urgence

**Les hooks qui marchent**

• "Tu savais que... ?"
• "J'ai trouvé LE truc pour..."
• "Arrête de [problème]"
• "POV : Tu découvres..."
• Visuel WTF qui intrigue

**Produire du contenu**

Options :
• Fais-le toi-même (smartphone suffit)
• Demande à des amis/famille
• Plateformes UGC (Billo, Insense)
• Micro-influenceurs

**Teste, teste, teste**

Le créatif parfait du premier coup, ça existe pas.
• Teste plusieurs hooks
• Teste plusieurs angles
• Teste plusieurs formats
• Garde ce qui marche, kill le reste`
        },
        {
          title: "Optimiser et analyser",
          content: `Lancer des pubs c'est bien. Les optimiser c'est ce qui fait la différence.

**Quand analyser ?**

• Pas avant 3 jours minimum
• Pas avant 1000 impressions
• Pas avant d'avoir dépensé au moins 50€

Avant, t'as pas assez de data.

**Les métriques clés**

**Pour valider l'intérêt**
• CTR < 1% : Le créatif accroche pas
• CTR > 2% : Très bon signal

**Pour valider la conversion**
• Taux de conversion site < 1% : Problème de landing page
• CPA > ta marge : Pas rentable

**Pour valider la rentabilité**
• ROAS < 1.5 : Tu perds de l'argent
• ROAS 2-3 : Rentable
• ROAS > 3 : Scale !

**Quoi faire selon les résultats**

**CTR bon mais pas de ventes**
→ Problème de site (prix, confiance, checkout)

**CTR mauvais mais bonnes ventes**
→ Audience trop large ou créatif pas assez accrocheur

**Tout est mauvais**
→ Change de créatif ou de produit

**Optimiser une campagne**

Ce que tu peux modifier :
• Les créatifs (le plus impactant)
• Les audiences
• Le budget
• Les placements

Ce que tu dois PAS faire :
• Modifier tous les jours
• Changer trop de variables en même temps
• Paniquer après un mauvais jour

**La règle des 72h**

Après un changement majeur, attends 72h avant de juger. L'algo a besoin de temps pour se recalibrer.

**Le reporting**

Chaque semaine, note :
• Dépense totale
• CA généré
• ROAS
• CPA moyen
• Meilleurs et pires créatifs
• Décisions pour la semaine suivante

Sans tracking rigoureux, tu pilotes à l'aveugle.`
        },
        {
          title: "Scaler ses campagnes",
          content: `T'as une campagne rentable ? Maintenant on scale. Mais attention, c'est pas juste "mettre plus de budget".

**C'est quoi scaler ?**

Augmenter ton budget tout en gardant ta rentabilité. Plus facile à dire qu'à faire.

**Les méthodes de scaling**

**1. Scaling vertical (augmenter le budget)**

La plus simple mais la plus risquée.
• Augmente de 20-30% max par jour
• Pas de doublement brutal
• L'algo a besoin de temps pour s'adapter

Exemple : 50€/jour → 60€ → 75€ → 90€...

**2. Scaling horizontal (dupliquer)**

Tu dupliques ce qui marche :
• Même pub, nouvelle audience
• Même audience, nouveau créatif
• Nouveau ad set avec les mêmes paramètres

Moins risqué car tu gardes l'original intact.

**3. Scaling par les créatifs**

Le plus durable :
• Produis plus de créatifs
• Teste de nouveaux angles
• Les gagnants s'usent, faut renouveler

Objectif : avoir toujours 3-5 créatifs qui tournent bien.

**Les erreurs de scaling**

• Doubler le budget d'un coup (ça casse tout)
• Scaler trop vite sans marge de manœuvre
• Ignorer la fatigue publicitaire
• Oublier de regarder les métriques

**La fatigue publicitaire**

Après un moment, les mêmes personnes voient ta pub en boucle. Les perfs baissent.

Signes :
• CPM qui monte
• CTR qui baisse
• Fréquence > 3

Solutions :
• Nouveaux créatifs
• Nouvelles audiences
• Pause et reprise

**Le budget de scaling**

Règle : Ne scale que si t'as 3x ton CPA en trésorerie.

Si ton CPA est 15€ et tu veux dépenser 100€/jour, t'as besoin d'au moins 3000€ de trésorerie disponible (pour les pubs + le stock + les imprévus).

**Quand arrêter de scaler**

• ROAS qui passe sous le seuil de rentabilité
• CPA qui explose
• Problèmes de stock/logistique
• Cash flow tendu

Scaler c'est bien. Scaler intelligemment c'est mieux. Parfois, stabiliser à un niveau rentable c'est la meilleure décision.`
        }
      ]
    }
  }
};

export const EbookReaderPage = () => {
  const { category, ebookId } = useParams();
  const navigate = useNavigate();
  const [currentChapter, setCurrentChapter] = useState(0);
  const [readChapters, setReadChapters] = useState({});

  const ebook = ebooksContent[category]?.[ebookId];

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem("saykee-ebook-progress");
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      const ebookKey = `${category}-${ebookId}`;
      if (progress[ebookKey]) {
        setReadChapters(progress[ebookKey]);
      }
    }
  }, [category, ebookId]);

  // Save progress to localStorage
  const saveProgress = (chapterIndex) => {
    const savedProgress = localStorage.getItem("saykee-ebook-progress");
    const progress = savedProgress ? JSON.parse(savedProgress) : {};
    const ebookKey = `${category}-${ebookId}`;
    
    if (!progress[ebookKey]) {
      progress[ebookKey] = {};
    }
    progress[ebookKey][chapterIndex] = true;
    
    localStorage.setItem("saykee-ebook-progress", JSON.stringify(progress));
    setReadChapters(prev => ({ ...prev, [chapterIndex]: true }));
  };

  // Mark current chapter as read after viewing
  useEffect(() => {
    if (ebook) {
      const timer = setTimeout(() => {
        saveProgress(currentChapter);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentChapter, ebook]);

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
  const accentColor = category === "trading" ? "blue" : "emerald";

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
              <span className="hidden sm:inline">Retour</span>
            </button>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-neutral-400">
                {currentChapter + 1} / {ebook.chapters.length}
              </span>
              <div className="w-24 sm:w-32 h-2 bg-neutral-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-300 ${accentColor === "blue" ? "bg-blue-600" : "bg-emerald-600"}`}
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
          <div className="mb-8 pt-8">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className={accentColor === "blue" ? "text-blue-500" : "text-emerald-500"} size={24} />
              <span className={`text-xs uppercase tracking-wider font-bold px-3 py-1 ${
                ebook.level === "Débutant" ? "bg-green-950 text-green-500" :
                ebook.level === "Intermédiaire" ? "bg-yellow-950 text-yellow-500" :
                ebook.level === "Avancé" ? "bg-red-950 text-red-500" :
                accentColor === "blue" ? "bg-blue-950 text-blue-500" : "bg-emerald-950 text-emerald-500"
              }`}>
                {ebook.level}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">{ebook.title}</h1>
            <p className="text-neutral-400">par {ebook.author}</p>
          </div>

          {/* Chapter navigation */}
          <div className="mb-8 p-4 bg-neutral-900 border border-neutral-800">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm text-neutral-400">Chapitres</p>
              <p className="text-xs text-neutral-500">
                {Object.keys(readChapters).length}/{ebook.chapters.length} lus
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {ebook.chapters.map((ch, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentChapter(index)}
                  className={`px-3 py-2 text-xs sm:text-sm transition-colors flex items-center gap-1 ${
                    currentChapter === index
                      ? accentColor === "blue" ? "bg-blue-600 text-white" : "bg-emerald-600 text-white"
                      : readChapters[index]
                        ? accentColor === "blue" ? "bg-blue-950 text-blue-400 border border-blue-800" : "bg-emerald-950 text-emerald-400 border border-emerald-800"
                        : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                  }`}
                >
                  {readChapters[index] && currentChapter !== index && (
                    <CheckCircle2 size={12} className="flex-shrink-0" />
                  )}
                  <span className="truncate max-w-[100px] sm:max-w-[150px]">
                    {index + 1}. {ch.title.length > 15 ? ch.title.substring(0, 15) + "..." : ch.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Chapter content */}
          <div className="bg-neutral-900 border border-neutral-800 p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">{chapter.title}</h2>
            <div className="prose prose-invert max-w-none">
              {chapter.content.split('\n\n').map((paragraph, index) => (
                <div key={index} className="mb-6">
                  {paragraph.startsWith('**') && paragraph.endsWith('**') && !paragraph.includes('\n') ? (
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
              <ChevronLeft size={20} className="mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Précédent</span>
            </Button>
            
            <span className="text-neutral-400 text-xs sm:text-sm text-center max-w-[150px] sm:max-w-none truncate">
              {chapter.title}
            </span>
            
            <Button
              onClick={() => {
                saveProgress(currentChapter); // Mark current as read
                if (currentChapter < ebook.chapters.length - 1) {
                  setCurrentChapter(currentChapter + 1);
                  window.scrollTo(0, 0);
                } else {
                  navigate(-1);
                }
              }}
              className={`rounded-none ${accentColor === "blue" ? "bg-blue-600 hover:bg-blue-700" : "bg-emerald-600 hover:bg-emerald-700"}`}
            >
              {currentChapter < ebook.chapters.length - 1 ? (
                <>
                  <span className="hidden sm:inline">Suivant</span>
                  <ChevronRight size={20} className="ml-1 sm:ml-2" />
                </>
              ) : (
                <>
                  <CheckCircle2 size={18} className="mr-1 sm:mr-2" />
                  <span>Terminer</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookReaderPage;
