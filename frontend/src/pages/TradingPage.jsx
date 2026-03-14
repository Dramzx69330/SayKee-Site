import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { BookOpen, Brain, Target, Trophy, ChevronRight, CheckCircle, XCircle, ArrowRight, Download, Gamepad2 } from "lucide-react";

export const TradingPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  
  // Quiz state
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const ebooks = [
    {
      id: "bases-trading",
      title: "Les Bases du Trading",
      description: "T'y connais rien ? Pas de stress, on part de zéro. Je t'explique tout comme si on était potes.",
      level: "Débutant",
      chapters: ["C'est quoi le trading ?", "Les différents marchés", "Ton premier trade", "Les erreurs de débutant"],
      color: "blue"
    },
    {
      id: "analyse-technique",
      title: "Analyse Technique",
      description: "Les graphiques, les chandeliers, les patterns... Tout ce qu'il faut pour lire le marché comme un pro.",
      level: "Intermédiaire",
      chapters: ["Lire un graphique", "Les chandeliers japonais", "Supports et résistances", "Les indicateurs qui marchent"],
      color: "blue"
    },
    {
      id: "gestion-risque",
      title: "Gestion du Risque",
      description: "Le truc que 90% des traders ignorent et qui les fait cramer leur compte. Spoiler : c'est le plus important.",
      level: "Tous niveaux",
      chapters: ["Le money management", "Calculer sa position", "Stop loss et take profit", "Psychologie du trader"],
      color: "blue"
    }
  ];

  const quizQuestions = [
    {
      question: "C'est quoi un 'bull market' ?",
      options: ["Un marché qui descend", "Un marché qui monte", "Un marché stable", "Un marché fermé"],
      correct: 1,
      explanation: "Bull = taureau qui charge vers le haut. Le marché monte !"
    },
    {
      question: "Le stop loss, ça sert à quoi ?",
      options: ["Gagner plus d'argent", "Limiter tes pertes", "Acheter automatiquement", "Rien du tout"],
      correct: 1,
      explanation: "Le stop loss coupe ta position si ça part mal. C'est ta ceinture de sécurité."
    },
    {
      question: "Tu mets combien de ton capital max sur un trade ?",
      options: ["50%", "25%", "1-2%", "Tout, YOLO"],
      correct: 2,
      explanation: "1-2% max par trade. C'est la règle d'or du money management."
    },
    {
      question: "Un chandelier rouge, ça veut dire quoi ?",
      options: ["Le prix a monté", "Le prix a baissé", "Le marché est fermé", "Y'a eu beaucoup de volume"],
      correct: 1,
      explanation: "Rouge = le prix de clôture est plus bas que l'ouverture. Ça a baissé."
    },
    {
      question: "C'est quoi le 'spread' ?",
      options: ["Un indicateur technique", "La différence entre achat et vente", "Un type de trade", "Le profit du trade"],
      correct: 1,
      explanation: "Le spread c'est l'écart entre le prix d'achat et de vente. C'est la commission du broker."
    }
  ];

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

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setShowQuiz(false);
  };

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-sm uppercase tracking-wider text-blue-500 font-bold mb-4 block">
              Formations Trading
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Apprends à <span className="text-blue-500">trader</span> comme un pro
            </h1>
            <p className="text-xl text-neutral-400 mb-8">
              Pas de blabla, pas de vidéos de 3h. Juste des ebooks clairs et des exercices 
              pour que tu comprennes vraiment. On y va étape par étape, tranquille.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => setShowQuiz(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 h-14 rounded-none"
              >
                <Gamepad2 className="mr-2" size={20} />
                Teste ton niveau
              </Button>
              <Button 
                onClick={() => document.getElementById('ebooks-section').scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="border-neutral-700 hover:bg-neutral-900 text-white font-bold px-8 h-14 rounded-none"
              >
                <BookOpen className="mr-2" size={20} />
                Voir les ebooks
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
                  <span className="text-blue-500 font-bold">Question {currentQuestion + 1}/{quizQuestions.length}</span>
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
                  <div className="mt-6 p-4 bg-blue-950/30 border border-blue-900/50">
                    <p className="text-blue-300 text-sm">
                      {quizQuestions[currentQuestion].explanation}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-8">
                <Trophy className="text-yellow-500 mx-auto mb-6" size={64} />
                <h2 className="text-3xl font-black text-white mb-4">Quiz terminé !</h2>
                <p className="text-5xl font-black text-blue-500 mb-4">{score}/{quizQuestions.length}</p>
                <p className="text-neutral-400 mb-8">
                  {score === quizQuestions.length ? "Parfait ! T'es déjà calé !" :
                   score >= 3 ? "Pas mal ! Tu gères les bases." :
                   "Y'a du taf, mais t'inquiète on va bosser ça ensemble."}
                </p>
                <Button onClick={resetQuiz} className="bg-blue-600 hover:bg-blue-700 rounded-none">
                  Fermer
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Ebooks Section */}
      <section id="ebooks-section" className="py-20 px-6 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              Les <span className="text-blue-500">ebooks</span>
            </h2>
            <p className="text-neutral-400 text-lg">
              Télécharge, lis, applique. C'est aussi simple que ça.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ebooks.map((ebook) => (
              <div key={ebook.id} className="bg-neutral-900 border border-neutral-800 hover:border-blue-900/50 transition-colors">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs uppercase tracking-wider font-bold px-3 py-1 ${
                      ebook.level === "Débutant" ? "bg-green-950 text-green-500" :
                      ebook.level === "Intermédiaire" ? "bg-yellow-950 text-yellow-500" :
                      "bg-blue-950 text-blue-500"
                    }`}>
                      {ebook.level}
                    </span>
                    <BookOpen className="text-blue-500" size={24} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">{ebook.title}</h3>
                  <p className="text-neutral-400 mb-6">{ebook.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {ebook.chapters.map((chapter, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-neutral-300">
                        <ChevronRight className="text-blue-500" size={14} />
                        <span>{chapter}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 rounded-none font-bold"
                    onClick={() => navigate(`/ebook/trading/${ebook.id}`)}
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

      {/* Interactive Learning */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-black text-white mb-4">
              Apprends en <span className="text-blue-500">jouant</span>
            </h2>
            <p className="text-neutral-400 text-lg">
              Des exercices interactifs pour ancrer les concepts. Parce que lire c'est bien, pratiquer c'est mieux.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 flex items-center justify-center">
                  <Brain size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Quiz Trading</h3>
                  <p className="text-neutral-400 text-sm">Teste tes connaissances</p>
                </div>
              </div>
              <p className="text-neutral-300 mb-6">
                5 questions pour voir où t'en es. Pas de jugement, c'est juste pour savoir par où commencer.
              </p>
              <Button 
                onClick={() => setShowQuiz(true)}
                className="bg-blue-600 hover:bg-blue-700 rounded-none font-bold"
              >
                Lancer le quiz
              </Button>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-blue-600 flex items-center justify-center">
                  <Target size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Simulateur de Trade</h3>
                  <p className="text-neutral-400 text-sm">Pratique sans risque</p>
                </div>
              </div>
              <p className="text-neutral-300 mb-6">
                Trade avec de l'argent fictif pour t'entraîner. Tu fais des erreurs ? Pas grave, ça coûte rien.
              </p>
              <Button 
                variant="outline"
                className="border-blue-700 hover:bg-blue-950/30 text-white rounded-none font-bold"
                onClick={() => !isLoggedIn && navigate("/login")}
              >
                {isLoggedIn ? "Accéder" : "Bientôt disponible"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-blue-950/20 border-t border-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Prêt à te lancer ?
          </h2>
          <p className="text-xl text-neutral-400 mb-10">
            Crée ton compte gratuit et accède à tous les ebooks et exercices.
          </p>
          <Button 
            onClick={() => navigate("/login")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-12 h-16 rounded-none"
          >
            Commencer maintenant
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default TradingPage;
