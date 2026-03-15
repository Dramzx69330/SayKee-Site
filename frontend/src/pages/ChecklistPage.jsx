import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { CheckCircle2, Circle, Trophy, ArrowRight, RotateCcw, Sparkles, BookOpen, ShoppingCart, TrendingUp } from "lucide-react";

const checklistData = {
  ecommerce: {
    title: "E-commerce",
    color: "emerald",
    icon: ShoppingCart,
    sections: [
      {
        title: "Préparation",
        items: [
          { id: "ec-1", text: "Définir mon budget de démarrage", tip: "Prévois minimum 500-1000€ pour les tests pub" },
          { id: "ec-2", text: "Choisir ma niche", tip: "Passion + demande + marge = bonne niche" },
          { id: "ec-3", text: "Analyser la concurrence", tip: "Regarde ce qui marche, trouve ton angle" },
          { id: "ec-4", text: "Valider l'idée avec Google Trends", tip: "Tendance stable ou montante = bon signe" }
        ]
      },
      {
        title: "Création boutique",
        items: [
          { id: "ec-5", text: "Créer mon compte Shopify (ou autre)", tip: "14 jours d'essai gratuit sur Shopify" },
          { id: "ec-6", text: "Acheter mon nom de domaine", tip: "Court, mémorable, en .com ou .fr" },
          { id: "ec-7", text: "Choisir et configurer mon thème", tip: "Simple et pro, pas de bordel visuel" },
          { id: "ec-8", text: "Créer les pages légales (CGV, mentions)", tip: "Obligatoire ! Utilise des générateurs" },
          { id: "ec-9", text: "Configurer les paiements (Stripe/PayPal)", tip: "Les deux pour maximiser les conversions" }
        ]
      },
      {
        title: "Produits",
        items: [
          { id: "ec-10", text: "Trouver 3-5 produits potentiels", tip: "Wow effect + marge > 3x coût" },
          { id: "ec-11", text: "Commander des échantillons", tip: "JAMAIS vendre sans avoir testé" },
          { id: "ec-12", text: "Créer des fiches produits optimisées", tip: "Photos pro + bénéfices + preuve sociale" },
          { id: "ec-13", text: "Configurer la livraison", tip: "Intègre les frais dans le prix = livraison gratuite" }
        ]
      },
      {
        title: "Marketing",
        items: [
          { id: "ec-14", text: "Installer le Pixel Facebook", tip: "Fais-le AVANT de lancer les pubs" },
          { id: "ec-15", text: "Créer mon Business Manager", tip: "business.facebook.com" },
          { id: "ec-16", text: "Préparer 2-3 créatifs pub", tip: "Vidéo UGC > images statiques" },
          { id: "ec-17", text: "Lancer ma première campagne test", tip: "20-30€/jour, audience large" },
          { id: "ec-18", text: "Analyser et optimiser", tip: "Attends 3-5 jours avant de juger" }
        ]
      },
      {
        title: "Scale",
        items: [
          { id: "ec-19", text: "Identifier mes produits gagnants", tip: "ROAS > 2 = on scale" },
          { id: "ec-20", text: "Augmenter le budget progressivement", tip: "+20-30% max par jour" },
          { id: "ec-21", text: "Diversifier les créatifs", tip: "La fatigue pub arrive vite" },
          { id: "ec-22", text: "Optimiser le panier moyen", tip: "Bundles, upsells, cross-sells" }
        ]
      }
    ]
  },
  trading: {
    title: "Trading",
    color: "blue",
    icon: TrendingUp,
    sections: [
      {
        title: "Les bases",
        items: [
          { id: "tr-1", text: "Comprendre les différents marchés", tip: "Forex, actions, crypto, indices" },
          { id: "tr-2", text: "Choisir mon style de trading", tip: "Swing trading pour commencer" },
          { id: "tr-3", text: "Apprendre à lire un graphique", tip: "Chandeliers japonais = la base" },
          { id: "tr-4", text: "Comprendre les timeframes", tip: "Analyse top-down : Weekly → Daily → H4" }
        ]
      },
      {
        title: "Analyse technique",
        items: [
          { id: "tr-5", text: "Maîtriser supports et résistances", tip: "Le plus important en analyse technique" },
          { id: "tr-6", text: "Apprendre 5-6 patterns de chandeliers", tip: "Doji, marteau, engulfing..." },
          { id: "tr-7", text: "Configurer mes indicateurs", tip: "EMA 20/50 + RSI, c'est suffisant" },
          { id: "tr-8", text: "Identifier les tendances", tip: "Trend is your friend" }
        ]
      },
      {
        title: "Money management",
        items: [
          { id: "tr-9", text: "Définir mon risque par trade (1-2%)", tip: "JAMAIS plus, même si t'es sûr" },
          { id: "tr-10", text: "Calculer mes tailles de position", tip: "Utilise un calculateur" },
          { id: "tr-11", text: "Toujours utiliser un stop loss", tip: "Pas de stop = pas de trade" },
          { id: "tr-12", text: "Viser ratio R/R minimum 1:2", tip: "Risque 1 pour gagner 2" }
        ]
      },
      {
        title: "Préparation",
        items: [
          { id: "tr-13", text: "Choisir un broker régulé", tip: "AMF, FCA, CySEC..." },
          { id: "tr-14", text: "Ouvrir un compte démo", tip: "Minimum 1-2 mois avant le réel" },
          { id: "tr-15", text: "Créer mon plan de trading", tip: "Écrit, précis, testable" },
          { id: "tr-16", text: "Préparer mon journal de trading", tip: "Excel, Notion, ou papier" }
        ]
      },
      {
        title: "Pratique",
        items: [
          { id: "tr-17", text: "Faire 50+ trades en démo", tip: "Pas de raccourci, faut pratiquer" },
          { id: "tr-18", text: "Analyser mes résultats", tip: "Taux de réussite, R/R moyen" },
          { id: "tr-19", text: "Créer ma routine quotidienne", tip: "Check calendrier, analyse, review" },
          { id: "tr-20", text: "Passer en réel (petit capital)", tip: "Seulement si démo profitable" }
        ]
      }
    ]
  }
};

export const ChecklistPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ecommerce");
  const [checkedItems, setCheckedItems] = useState({});
  const [expandedTip, setExpandedTip] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("saykee-checklist");
    if (saved) {
      setCheckedItems(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("saykee-checklist", JSON.stringify(checkedItems));
  }, [checkedItems]);

  const toggleItem = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const resetChecklist = (type) => {
    const newChecked = { ...checkedItems };
    checklistData[type].sections.forEach(section => {
      section.items.forEach(item => {
        delete newChecked[item.id];
      });
    });
    setCheckedItems(newChecked);
  };

  const getProgress = (type) => {
    const data = checklistData[type];
    const totalItems = data.sections.reduce((acc, section) => acc + section.items.length, 0);
    const checkedCount = data.sections.reduce((acc, section) => {
      return acc + section.items.filter(item => checkedItems[item.id]).length;
    }, 0);
    return { checked: checkedCount, total: totalItems, percentage: Math.round((checkedCount / totalItems) * 100) };
  };

  const currentData = checklistData[activeTab];
  const progress = getProgress(activeTab);
  const IconComponent = currentData.icon;

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="text-yellow-500" size={24} />
            <span className="text-sm uppercase tracking-wider text-yellow-500 font-bold">
              Checklist Interactive
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Ta roadmap vers le <span className={activeTab === "trading" ? "text-blue-500" : "text-emerald-500"}>succès</span>
          </h1>
          <p className="text-lg text-neutral-400 mb-8">
            Coche chaque étape au fur et à mesure. Ta progression est sauvegardée automatiquement.
          </p>

          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab("ecommerce")}
              className={`flex items-center gap-2 px-6 py-3 font-bold transition-all ${
                activeTab === "ecommerce"
                  ? "bg-emerald-600 text-white"
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
              }`}
            >
              <ShoppingCart size={20} />
              E-commerce
            </button>
            <button
              onClick={() => setActiveTab("trading")}
              className={`flex items-center gap-2 px-6 py-3 font-bold transition-all ${
                activeTab === "trading"
                  ? "bg-blue-600 text-white"
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
              }`}
            >
              <TrendingUp size={20} />
              Trading
            </button>
          </div>

          {/* Progress bar */}
          <div className="bg-neutral-900 border border-neutral-800 p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <IconComponent className={activeTab === "trading" ? "text-blue-500" : "text-emerald-500"} size={24} />
                <span className="text-white font-bold text-lg">{currentData.title}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-neutral-400">
                  {progress.checked}/{progress.total} complétés
                </span>
                <button
                  onClick={() => resetChecklist(activeTab)}
                  className="text-neutral-500 hover:text-red-500 transition-colors"
                  title="Réinitialiser"
                >
                  <RotateCcw size={18} />
                </button>
              </div>
            </div>
            <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-500 ${activeTab === "trading" ? "bg-blue-600" : "bg-emerald-600"}`}
                style={{ width: `${progress.percentage}%` }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm text-neutral-500">Progression</span>
              <span className={`text-sm font-bold ${activeTab === "trading" ? "text-blue-500" : "text-emerald-500"}`}>
                {progress.percentage}%
              </span>
            </div>

            {progress.percentage === 100 && (
              <div className="mt-4 p-4 bg-yellow-950/30 border border-yellow-900/50 flex items-center gap-3">
                <Trophy className="text-yellow-500" size={24} />
                <span className="text-yellow-300 font-bold">Félicitations ! Tu as complété toute la checklist ! 🎉</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Checklist sections */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {currentData.sections.map((section, sectionIndex) => {
            const sectionChecked = section.items.filter(item => checkedItems[item.id]).length;
            const sectionTotal = section.items.length;
            const isComplete = sectionChecked === sectionTotal;

            return (
              <div key={sectionIndex} className="bg-neutral-900 border border-neutral-800">
                <div className={`p-4 border-b border-neutral-800 flex items-center justify-between ${
                  isComplete ? (activeTab === "trading" ? "bg-blue-950/30" : "bg-emerald-950/30") : ""
                }`}>
                  <div className="flex items-center gap-3">
                    {isComplete ? (
                      <CheckCircle2 className={activeTab === "trading" ? "text-blue-500" : "text-emerald-500"} size={20} />
                    ) : (
                      <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                        activeTab === "trading" ? "border-blue-500 text-blue-500" : "border-emerald-500 text-emerald-500"
                      }`}>
                        {sectionIndex + 1}
                      </span>
                    )}
                    <h3 className="text-white font-bold">{section.title}</h3>
                  </div>
                  <span className="text-sm text-neutral-400">
                    {sectionChecked}/{sectionTotal}
                  </span>
                </div>
                <div className="p-4 space-y-3">
                  {section.items.map((item) => (
                    <div key={item.id}>
                      <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full flex items-start gap-3 p-3 bg-neutral-800/50 hover:bg-neutral-800 transition-colors text-left"
                      >
                        {checkedItems[item.id] ? (
                          <CheckCircle2 className={`mt-0.5 flex-shrink-0 ${activeTab === "trading" ? "text-blue-500" : "text-emerald-500"}`} size={20} />
                        ) : (
                          <Circle className="mt-0.5 flex-shrink-0 text-neutral-600" size={20} />
                        )}
                        <div className="flex-1">
                          <span className={`${
                            checkedItems[item.id] ? "text-neutral-500 line-through" : "text-white"
                          }`}>
                            {item.text}
                          </span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedTip(expandedTip === item.id ? null : item.id);
                          }}
                          className={`text-xs px-2 py-1 transition-colors ${
                            expandedTip === item.id
                              ? (activeTab === "trading" ? "bg-blue-600 text-white" : "bg-emerald-600 text-white")
                              : "bg-neutral-700 text-neutral-400 hover:text-white"
                          }`}
                        >
                          Tip
                        </button>
                      </button>
                      {expandedTip === item.id && (
                        <div className={`ml-8 mt-2 p-3 text-sm ${
                          activeTab === "trading" ? "bg-blue-950/30 border-l-2 border-blue-600 text-blue-300" : "bg-emerald-950/30 border-l-2 border-emerald-600 text-emerald-300"
                        }`}>
                          💡 {item.tip}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className={`py-16 px-6 border-t ${activeTab === "trading" ? "bg-blue-950/20 border-blue-900/30" : "bg-emerald-950/20 border-emerald-900/30"}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-black text-white mb-4">
            Besoin d'aide sur une étape ?
          </h2>
          <p className="text-neutral-400 mb-6">
            Consulte les ebooks pour des explications détaillées sur chaque point.
          </p>
          <Button
            onClick={() => navigate(activeTab === "trading" ? "/trading" : "/ecommerce")}
            className={`font-bold px-8 h-12 rounded-none ${activeTab === "trading" ? "bg-blue-600 hover:bg-blue-700" : "bg-emerald-600 hover:bg-emerald-700"}`}
          >
            <BookOpen className="mr-2" size={18} />
            Voir les ebooks {currentData.title}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ChecklistPage;
