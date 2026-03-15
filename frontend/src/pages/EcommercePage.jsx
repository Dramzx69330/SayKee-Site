import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { BookOpen, Brain, ShoppingCart, Trophy, ChevronRight, CheckCircle, XCircle, ArrowRight, Download, Gamepad2, Package, TrendingUp, Calculator, X } from "lucide-react";

export const EcommercePage = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
  // Quiz state
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Product finder game
  const [showProductGame, setShowProductGame] = useState(false);
  const [productStep, setProductStep] = useState(0);
  const [productResult, setProductResult] = useState(null);

  // Margin calculator state
  const [showCalculator, setShowCalculator] = useState(false);
  const [calcValues, setCalcValues] = useState({
    productCost: "",
    shippingCost: "",
    sellingPrice: "",
    adCostPerSale: "",
    transactionFee: "2.9"
  });

  const calculateMargin = () => {
    const productCost = parseFloat(calcValues.productCost) || 0;
    const shippingCost = parseFloat(calcValues.shippingCost) || 0;
    const sellingPrice = parseFloat(calcValues.sellingPrice) || 0;
    const adCostPerSale = parseFloat(calcValues.adCostPerSale) || 0;
    const transactionFeePercent = parseFloat(calcValues.transactionFee) || 0;

    const transactionFee = (sellingPrice * transactionFeePercent) / 100;
    const totalCost = productCost + shippingCost + adCostPerSale + transactionFee;
    const netMargin = sellingPrice - totalCost;
    const marginPercent = sellingPrice > 0 ? (netMargin / sellingPrice) * 100 : 0;
    const roi = totalCost > 0 ? (netMargin / totalCost) * 100 : 0;

    return {
      transactionFee: transactionFee.toFixed(2),
      totalCost: totalCost.toFixed(2),
      netMargin: netMargin.toFixed(2),
      marginPercent: marginPercent.toFixed(1),
      roi: roi.toFixed(1),
      isProfitable: netMargin > 0,
      rating: marginPercent >= 40 ? "excellent" : marginPercent >= 25 ? "good" : marginPercent >= 10 ? "okay" : "bad"
    };
  };

  const margin = calculateMargin();

  const ebooks = [
    {
      id: "lancer-boutique",
      title: "Lancer sa Boutique",
      description: "De zéro à ta première vente. Je te montre tout : choix de niche, création de boutique, paiements, livraison et aspects légaux. Le guide complet pour démarrer sans bullshit.",
      level: "Débutant",
      chapters: ["Trouver ta niche", "Shopify vs alternatives", "Créer ta boutique", "Configurer les paiements", "Livraison et logistique", "Les aspects légaux"],
      color: "emerald"
    },
    {
      id: "produits-gagnants",
      title: "Trouver des Produits Gagnants",
      description: "Le secret c'est le produit. Je te donne mes méthodes exactes pour trouver des winners. Les critères, où chercher, comment analyser la concurrence et tester sans te ruiner.",
      level: "Intermédiaire",
      chapters: ["Les critères d'un winner", "Où trouver des produits", "Analyser la concurrence", "Tester sans se ruiner", "Créer une fiche produit qui vend", "Valider avant de commander du stock"],
      color: "emerald"
    },
    {
      id: "facebook-ads",
      title: "Facebook Ads Masterclass",
      description: "Les pubs Facebook, c'est l'arme fatale du e-commerce. Structure de campagne, audiences, créatifs qui convertissent et techniques de scaling. Tout ce que j'aurais voulu savoir au début.",
      level: "Avancé",
      chapters: ["Comprendre Facebook Ads", "Créer sa première campagne", "Les audiences qui marchent", "Créer des créatifs qui convertissent", "Optimiser et analyser", "Scaler ses campagnes"],
      color: "emerald"
    }
  ];

  const quizQuestions = [
    {
      question: "C'est quoi le dropshipping ?",
      options: ["Vendre ses propres produits", "Vendre sans stock", "Acheter en gros", "Vendre sur Amazon"],
      correct: 1,
      explanation: "Tu vends, le fournisseur expédie direct au client. Zéro stock, zéro galère."
    },
    {
      question: "Le CPM en pub, ça veut dire quoi ?",
      options: ["Coût par Message", "Coût pour Mille impressions", "Clics par Minute", "Conversions par Mois"],
      correct: 1,
      explanation: "CPM = Coût pour 1000 impressions. C'est ce que tu paies pour être vu."
    },
    {
      question: "C'est quoi un bon taux de conversion ?",
      options: ["0.1%", "1-3%", "10%", "50%"],
      correct: 1,
      explanation: "Entre 1 et 3%, t'es dans la moyenne. Au-dessus de 3%, t'es un boss."
    },
    {
      question: "AOV, ça veut dire quoi ?",
      options: ["Average Order Value", "All Online Views", "Ads Optimization Value", "Account Overview"],
      correct: 0,
      explanation: "Average Order Value = panier moyen. Plus il est haut, plus tu gagnes."
    },
    {
      question: "Pour tester un produit, tu mets combien en pub ?",
      options: ["10€", "50-100€", "500€", "1000€"],
      correct: 1,
      explanation: "50-100€ c'est le sweet spot pour avoir assez de data sans te ruiner."
    }
  ];

  const productQuestions = [
    {
      question: "Tu veux vendre quoi ?",
      options: [
        { label: "Gadgets & Tech", value: "tech" },
        { label: "Mode & Accessoires", value: "fashion" },
        { label: "Maison & Déco", value: "home" },
        { label: "Sport & Fitness", value: "sport" }
      ]
    },
    {
      question: "Ta cible principale ?",
      options: [
        { label: "18-25 ans", value: "young" },
        { label: "25-35 ans", value: "adult" },
        { label: "35-50 ans", value: "mature" },
        { label: "Tout le monde", value: "all" }
      ]
    },
    {
      question: "Ton budget pub pour démarrer ?",
      options: [
        { label: "Moins de 100€", value: "low" },
        { label: "100-500€", value: "medium" },
        { label: "500€+", value: "high" },
        { label: "Je sais pas encore", value: "unknown" }
      ]
    }
  ];

  const productResults = {
    tech: "Les gadgets tech marchent bien avec les 18-35 ans. Focus sur les produits qui résolvent un problème du quotidien. Évite les trucs trop chers au début.",
    fashion: "La mode c'est top mais ultra concurrentiel. Trouve un angle unique (éco-responsable, streetwear, minimaliste). Les accessoires ont souvent de meilleures marges.",
    home: "La déco maison, c'est un marché en or. Les gens veulent des trucs uniques. Mise sur Pinterest et Facebook pour le trafic.",
    sport: "Le fitness c'est evergreen. Les gens achètent toute l'année. Focus sur les accessoires plutôt que les vêtements au début."
  };

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    if (index === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const handleProductAnswer = (value) => {
    if (productStep === 0) {
      setProductResult(value);
    }
    
    if (productStep < productQuestions.length - 1) {
      setProductStep(productStep + 1);
    } else {
      setProductStep(-1); // Show result
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowQuiz(false);
  };

  const resetProductGame = () => {
    setProductStep(0);
    setProductResult(null);
    setShowProductGame(false);
  };

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-sm uppercase tracking-wider text-emerald-500 font-bold mb-4 block">
              Formations E-commerce
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Lance ta <span className="text-emerald-500">boutique</span> en ligne
            </h1>
            <p className="text-xl text-neutral-400 mb-8">
              Dropshipping, print on demand, marque... Peu importe ton modèle, je te montre comment 
              faire tes premières ventes. Concrètement, sans bullshit.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => setShowQuiz(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 h-14 rounded-none"
              >
                <Gamepad2 className="mr-2" size={20} />
                Teste ton niveau
              </Button>
              <Button 
                onClick={() => setShowProductGame(true)}
                variant="outline"
                className="border-neutral-700 hover:bg-neutral-900 text-white font-bold px-8 h-14 rounded-none"
              >
                <Package className="mr-2" size={20} />
                Trouve ta niche
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Modal */}
      {showQuiz && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="bg-neutral-900 border border-neutral-800 max-w-2xl w-full p-8">
            {!showResult ? (
              <>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-emerald-500 font-bold">Question {currentQuestion + 1}/{quizQuestions.length}</span>
                  <span className="text-neutral-400">Score: {score}</span>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-8">
                  {quizQuestions[currentQuestion].question}
                </h2>
                
                <div className="space-y-4">
                  {quizQuestions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => selectedAnswer === null && handleAnswer(index)}
                      disabled={selectedAnswer !== null}
                      className={`w-full p-4 text-left transition-all ${
                        selectedAnswer === null 
                          ? "bg-neutral-800 hover:bg-neutral-700 text-white" 
                          : selectedAnswer === index
                            ? index === quizQuestions[currentQuestion].correct
                              ? "bg-green-900 text-green-300 border border-green-700"
                              : "bg-red-900 text-red-300 border border-red-700"
                            : index === quizQuestions[currentQuestion].correct
                              ? "bg-green-900 text-green-300 border border-green-700"
                              : "bg-neutral-800 text-neutral-500"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {selectedAnswer !== null && index === quizQuestions[currentQuestion].correct && (
                          <CheckCircle className="text-green-500" size={20} />
                        )}
                        {selectedAnswer === index && index !== quizQuestions[currentQuestion].correct && (
                          <XCircle className="text-red-500" size={20} />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                
                {selectedAnswer !== null && (
                  <div className="mt-6 p-4 bg-emerald-950/30 border border-emerald-900/50">
                    <p className="text-emerald-300 text-sm">
                      {quizQuestions[currentQuestion].explanation}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <Trophy className="text-yellow-500 mx-auto mb-6" size={64} />
                <h2 className="text-3xl font-black text-white mb-4">Quiz terminé !</h2>
                <p className="text-5xl font-black text-emerald-500 mb-4">{score}/{quizQuestions.length}</p>
                <p className="text-neutral-400 mb-8">
                  {score === quizQuestions.length ? "T'es prêt à scaler ! 🚀" :
                   score >= 3 ? "Tu connais les bases, on peut aller plus loin." :
                   "T'inquiète, les ebooks sont là pour ça."}
                </p>
                <Button onClick={resetQuiz} className="bg-emerald-600 hover:bg-emerald-700 rounded-none">
                  Fermer
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Product Finder Modal */}
      {showProductGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div className="bg-neutral-900 border border-neutral-800 max-w-2xl w-full p-8">
            {productStep >= 0 ? (
              <>
                <div className="flex justify-between items-center mb-8">
                  <span className="text-emerald-500 font-bold">Étape {productStep + 1}/{productQuestions.length}</span>
                  <button onClick={resetProductGame} className="text-neutral-400 hover:text-white">✕</button>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-8">
                  {productQuestions[productStep].question}
                </h2>
                
                <div className="grid grid-cols-2 gap-4">
                  {productQuestions[productStep].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleProductAnswer(option.value)}
                      className="p-6 bg-neutral-800 hover:bg-emerald-900/30 hover:border-emerald-700 border border-neutral-700 text-white font-medium transition-all"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="py-8">
                <Package className="text-emerald-500 mx-auto mb-6" size={64} />
                <h2 className="text-3xl font-black text-white mb-6 text-center">Mon conseil</h2>
                <div className="bg-emerald-950/30 border border-emerald-900/50 p-6 mb-8">
                  <p className="text-neutral-300 leading-relaxed">
                    {productResults[productResult]}
                  </p>
                </div>
                <div className="text-center">
                  <Button onClick={resetProductGame} className="bg-emerald-600 hover:bg-emerald-700 rounded-none">
                    Fermer
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Margin Calculator Modal */}
      {showCalculator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 overflow-y-auto">
          <div className="bg-neutral-900 border border-neutral-800 max-w-2xl w-full p-8 my-8">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <Calculator className="text-emerald-500" size={24} />
                <h2 className="text-2xl font-bold text-white">Calculateur de Marge</h2>
              </div>
              <button onClick={() => setShowCalculator(false)} className="text-neutral-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <p className="text-neutral-400 mb-6">
              Entre tes chiffres pour voir si ton produit est rentable.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Coût du produit (€)</label>
                <input
                  type="number"
                  value={calcValues.productCost}
                  onChange={(e) => setCalcValues({...calcValues, productCost: e.target.value})}
                  placeholder="Ex: 8"
                  className="w-full bg-neutral-800 border border-neutral-700 text-white p-3 focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Frais de livraison (€)</label>
                <input
                  type="number"
                  value={calcValues.shippingCost}
                  onChange={(e) => setCalcValues({...calcValues, shippingCost: e.target.value})}
                  placeholder="Ex: 3"
                  className="w-full bg-neutral-800 border border-neutral-700 text-white p-3 focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Prix de vente (€)</label>
                <input
                  type="number"
                  value={calcValues.sellingPrice}
                  onChange={(e) => setCalcValues({...calcValues, sellingPrice: e.target.value})}
                  placeholder="Ex: 29.99"
                  className="w-full bg-neutral-800 border border-neutral-700 text-white p-3 focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-neutral-400 mb-2">Coût pub par vente (€)</label>
                <input
                  type="number"
                  value={calcValues.adCostPerSale}
                  onChange={(e) => setCalcValues({...calcValues, adCostPerSale: e.target.value})}
                  placeholder="Ex: 10"
                  className="w-full bg-neutral-800 border border-neutral-700 text-white p-3 focus:border-emerald-500 focus:outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-neutral-400 mb-2">Frais de transaction (%)</label>
                <input
                  type="number"
                  value={calcValues.transactionFee}
                  onChange={(e) => setCalcValues({...calcValues, transactionFee: e.target.value})}
                  placeholder="2.9"
                  step="0.1"
                  className="w-full bg-neutral-800 border border-neutral-700 text-white p-3 focus:border-emerald-500 focus:outline-none"
                />
                <p className="text-xs text-neutral-500 mt-1">Stripe ~2.9%, PayPal ~3.4%</p>
              </div>
            </div>

            {/* Results */}
            <div className="border-t border-neutral-800 pt-6">
              <h3 className="text-lg font-bold text-white mb-4">Résultats</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-neutral-800 p-4">
                  <p className="text-sm text-neutral-400">Coût total</p>
                  <p className="text-2xl font-bold text-white">{margin.totalCost}€</p>
                </div>
                <div className="bg-neutral-800 p-4">
                  <p className="text-sm text-neutral-400">Frais transaction</p>
                  <p className="text-2xl font-bold text-white">{margin.transactionFee}€</p>
                </div>
                <div className={`p-4 ${margin.isProfitable ? "bg-emerald-950/50 border border-emerald-800" : "bg-red-950/50 border border-red-800"}`}>
                  <p className="text-sm text-neutral-400">Marge nette</p>
                  <p className={`text-2xl font-bold ${margin.isProfitable ? "text-emerald-500" : "text-red-500"}`}>
                    {margin.netMargin}€
                  </p>
                </div>
                <div className={`p-4 ${margin.isProfitable ? "bg-emerald-950/50 border border-emerald-800" : "bg-red-950/50 border border-red-800"}`}>
                  <p className="text-sm text-neutral-400">Marge %</p>
                  <p className={`text-2xl font-bold ${margin.isProfitable ? "text-emerald-500" : "text-red-500"}`}>
                    {margin.marginPercent}%
                  </p>
                </div>
              </div>

              {/* Verdict */}
              <div className={`p-4 ${
                margin.rating === "excellent" ? "bg-emerald-950/30 border border-emerald-800" :
                margin.rating === "good" ? "bg-green-950/30 border border-green-800" :
                margin.rating === "okay" ? "bg-yellow-950/30 border border-yellow-800" :
                "bg-red-950/30 border border-red-800"
              }`}>
                <p className="font-bold mb-2 text-white">
                  {margin.rating === "excellent" ? "🚀 Excellent !" :
                   margin.rating === "good" ? "✅ Bon produit" :
                   margin.rating === "okay" ? "⚠️ Marges serrées" :
                   "❌ Pas rentable"}
                </p>
                <p className="text-sm text-neutral-300">
                  {margin.rating === "excellent" ? "Marge > 40%. T'as trouvé un winner potentiel. Lance les tests !" :
                   margin.rating === "good" ? "Marge entre 25-40%. Correct pour commencer, tu pourras optimiser." :
                   margin.rating === "okay" ? "Marge entre 10-25%. Ça peut marcher mais attention aux imprévus." :
                   margin.isProfitable ? "Marge < 10%. Trop serré, un pépin et t'es dans le rouge." :
                   "Tu perds de l'argent à chaque vente. Revois tes prix ou change de produit."}
                </p>
              </div>

              <div className="mt-4 text-xs text-neutral-500">
                💡 Tip : Vise minimum 30% de marge pour avoir de la marge de manœuvre.
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button onClick={() => setShowCalculator(false)} className="bg-emerald-600 hover:bg-emerald-700 rounded-none">
                Fermer
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Ebooks Section */}
      <section className="py-20 px-6 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              Les <span className="text-emerald-500">ebooks</span>
            </h2>
            <p className="text-neutral-400 text-lg">
              Tout ce que j'aurais aimé savoir quand j'ai commencé. Sans langue de bois.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ebooks.map((ebook) => (
              <div key={ebook.id} className="bg-neutral-900 border border-neutral-800 hover:border-emerald-900/50 transition-colors">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs uppercase tracking-wider font-bold px-3 py-1 ${
                      ebook.level === "Débutant" ? "bg-green-950 text-green-500" :
                      ebook.level === "Intermédiaire" ? "bg-yellow-950 text-yellow-500" :
                      "bg-red-950 text-red-500"
                    }`}>
                      {ebook.level}
                    </span>
                    <BookOpen className="text-emerald-500" size={24} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{ebook.title}</h3>
                  <p className="text-neutral-400 mb-6">{ebook.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {ebook.chapters.map((chapter, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-neutral-300">
                        <ChevronRight className="text-emerald-500" size={14} />
                        <span>{chapter}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-emerald-600 hover:bg-emerald-700 rounded-none font-bold"
                    onClick={() => navigate(`/ebook/ecommerce/${ebook.id}`)}
                  >
                    <Download className="mr-2" size={18} />
                    Lire l'ebook
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              Outils <span className="text-emerald-500">interactifs</span>
            </h2>
            <p className="text-neutral-400 text-lg">
              Des mini-outils pour t'aider à démarrer plus vite.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-emerald-600 flex items-center justify-center">
                  <Brain size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Quiz E-commerce</h3>
                  <p className="text-neutral-400 text-sm">Teste tes connaissances</p>
                </div>
              </div>
              <p className="text-neutral-300 mb-6">
                Tu connais les bases ? On va voir ça en 5 questions.
              </p>
              <Button 
                onClick={() => setShowQuiz(true)}
                className="w-full bg-emerald-600 hover:bg-emerald-700 rounded-none font-bold"
              >
                Lancer le quiz
              </Button>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-emerald-600 flex items-center justify-center">
                  <Package size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Trouve ta Niche</h3>
                  <p className="text-neutral-400 text-sm">Mini-guide interactif</p>
                </div>
              </div>
              <p className="text-neutral-300 mb-6">
                Réponds à 3 questions et je te donne des pistes concrètes.
              </p>
              <Button 
                onClick={() => setShowProductGame(true)}
                className="w-full bg-emerald-600 hover:bg-emerald-700 rounded-none font-bold"
              >
                Commencer
              </Button>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-emerald-600 flex items-center justify-center">
                  <Calculator size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Calculateur de Marge</h3>
                  <p className="text-neutral-400 text-sm">Calcule ta rentabilité</p>
                </div>
              </div>
              <p className="text-neutral-300 mb-6">
                Vérifie si ton produit est rentable avant de te lancer.
              </p>
              <Button 
                onClick={() => setShowCalculator(true)}
                className="w-full bg-emerald-600 hover:bg-emerald-700 rounded-none font-bold"
              >
                Calculer ma marge
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-emerald-950/20 border-t border-emerald-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Prêt à lancer ta boutique ?
          </h2>
          <p className="text-xl text-neutral-400 mb-10">
            Crée ton compte gratuit et accède à tous les ebooks et outils.
          </p>
          <Button 
            onClick={() => navigate("/login")}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg px-12 h-16 rounded-none"
          >
            Commencer maintenant
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default EcommercePage;
