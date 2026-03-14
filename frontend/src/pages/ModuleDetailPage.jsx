import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Play, FileText, HelpCircle, CheckCircle, Clock, ArrowLeft } from "lucide-react";
import { tradingModules, ecommerceModules, quizQuestions } from "../mockData";
import { toast } from "sonner";

export const ModuleDetailPage = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const [module, setModule] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    // Find the module
    const modules = type === "trading" ? tradingModules : ecommerceModules;
    const foundModule = modules.find((m) => m.id === parseInt(id));
    setModule(foundModule);
  }, [type, id, navigate]);

  if (!module) {
    return null;
  }

  const getModuleIcon = (lessonType) => {
    switch (lessonType) {
      case "video":
        return <Play size={20} className="text-blue-400" />;
      case "article":
        return <FileText size={20} className="text-green-400" />;
      case "quiz":
        return <HelpCircle size={20} className="text-yellow-400" />;
      case "exercise":
        return <FileText size={20} className="text-purple-400" />;
      default:
        return <Play size={20} />;
    }
  };

  const handleLessonClick = (lesson) => {
    setCurrentLesson(lesson);
    setShowQuizResults(false);
    setQuizAnswers({});
  };

  const handleQuizAnswer = (questionId, answerIndex) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionId]: answerIndex
    });
  };

  const submitQuiz = () => {
    const questions = quizQuestions[type];
    let correct = 0;
    questions.forEach((q) => {
      if (quizAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    const score = Math.round((correct / questions.length) * 100);
    setQuizScore(score);
    setShowQuizResults(true);

    if (score >= 70) {
      toast.success(`Bravo ! Vous avez obtenu ${score}% au quiz.`);
    } else {
      toast.error(`Score : ${score}%. Révisez le cours et réessayez.`);
    }
  };

  const markAsComplete = () => {
    toast.success("Module marqué comme complété !");
    // In real app, would update backend
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-black via-blue-950/20 to-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="ghost"
            onClick={() => navigate(`/${type}`)}
            className="mb-4 text-gray-400 hover:text-white"
          >
            <ArrowLeft className="mr-2" size={16} />
            Retour aux formations
          </Button>

          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={module.image}
              alt={module.title}
              className="w-full md:w-80 h-48 object-cover rounded-lg"
            />
            <div className="flex-1">
              <Badge className="mb-3 bg-blue-900/50 text-blue-300 border-blue-700">
                {module.level}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{module.title}</h1>
              <p className="text-xl text-gray-300 mb-4">{module.description}</p>
              <div className="flex items-center text-gray-400 mb-4">
                <Clock size={20} className="mr-2" />
                {module.duration}
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Progression</span>
                  <span className="text-blue-400">{module.progress}%</span>
                </div>
                <Progress value={module.progress} className="h-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Lessons Sidebar */}
            <div className="lg:col-span-1">
              <Card className="bg-card/50 backdrop-blur border-blue-800/50 sticky top-20">
                <CardHeader>
                  <CardTitle className="text-white">Contenu du module</CardTitle>
                  <CardDescription className="text-gray-300">
                    {module.modules.length} leçons
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="lessons">
                      <AccordionTrigger className="text-white">
                        Toutes les leçons
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {module.modules.map((lesson) => (
                            <button
                              key={lesson.id}
                              onClick={() => handleLessonClick(lesson)}
                              className={`w-full text-left p-3 rounded-lg border transition-colors ${
                                currentLesson?.id === lesson.id
                                  ? "bg-blue-900/50 border-blue-700"
                                  : "bg-black/30 border-white/10 hover:bg-white/5"
                              }`}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex items-start gap-2 flex-1">
                                  {getModuleIcon(lesson.type)}
                                  <div>
                                    <div className="text-sm text-white font-medium">
                                      {lesson.name}
                                    </div>
                                    <div className="text-xs text-gray-400">
                                      {lesson.duration}
                                    </div>
                                  </div>
                                </div>
                                {lesson.completed && (
                                  <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                                )}
                              </div>
                            </button>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <Button
                    className="w-full mt-4 bg-green-700 hover:bg-green-600"
                    onClick={markAsComplete}
                  >
                    <CheckCircle className="mr-2" size={16} />
                    Marquer comme complété
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {currentLesson ? (
                <Card className="bg-card/50 backdrop-blur border-blue-800/50">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {getModuleIcon(currentLesson.type)}
                      <Badge variant="outline" className="border-white/20">
                        {currentLesson.type === "video" && "Vidéo"}
                        {currentLesson.type === "article" && "Article"}
                        {currentLesson.type === "quiz" && "Quiz"}
                        {currentLesson.type === "exercise" && "Exercice"}
                      </Badge>
                    </div>
                    <CardTitle className="text-3xl text-white">
                      {currentLesson.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {currentLesson.type === "video" && (
                      <div>
                        <div className="bg-black/50 rounded-lg aspect-video flex items-center justify-center mb-6">
                          <div className="text-center">
                            <Play size={64} className="mx-auto mb-4 text-blue-400" />
                            <p className="text-gray-400">Vidéo : {currentLesson.name}</p>
                            <p className="text-sm text-gray-500 mt-2">Durée : {currentLesson.duration}</p>
                          </div>
                        </div>
                        <div className="prose prose-invert max-w-none">
                          <p className="text-gray-300">
                            Cette vidéo vous présente les concepts clés de {currentLesson.name.toLowerCase()}.
                            Prenez des notes et n'hésitez pas à mettre en pause pour bien assimiler les informations.
                          </p>
                        </div>
                      </div>
                    )}

                    {currentLesson.type === "article" && (
                      <div className="prose prose-invert max-w-none">
                        <p className="text-gray-300 text-lg mb-4">
                          Bienvenue dans cette leçon sur {currentLesson.name.toLowerCase()}.
                        </p>
                        <h3 className="text-white text-xl font-semibold mb-3">Introduction</h3>
                        <p className="text-gray-300 mb-4">
                          Dans cette leçon approfondie, nous allons explorer les concepts fondamentaux et les applications pratiques.
                          Vous apprendrez des techniques éprouvées et des stratégies que vous pourrez appliquer immédiatement.
                        </p>
                        <h3 className="text-white text-xl font-semibold mb-3">Points clés</h3>
                        <ul className="text-gray-300 space-y-2 mb-4">
                          <li>Comprendre les fondamentaux théoriques</li>
                          <li>Analyser des cas pratiques réels</li>
                          <li>Appliquer les meilleures pratiques</li>
                          <li>Éviter les erreurs courantes</li>
                        </ul>
                        <p className="text-gray-300">
                          Prenez le temps de bien assimiler chaque concept avant de passer à la suite.
                        </p>
                      </div>
                    )}

                    {currentLesson.type === "quiz" && (
                      <div>
                        <p className="text-gray-300 mb-6">
                          Testez vos connaissances avec ce quiz. Vous devez obtenir au moins 70% pour valider cette leçon.
                        </p>

                        <div className="space-y-6">
                          {quizQuestions[type]?.map((question, qIndex) => (
                            <Card key={question.id} className="bg-black/30 border-white/10">
                              <CardHeader>
                                <CardTitle className="text-lg text-white">
                                  Question {qIndex + 1}
                                </CardTitle>
                                <CardDescription className="text-gray-300 text-base">
                                  {question.question}
                                </CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-2">
                                  {question.options.map((option, oIndex) => (
                                    <button
                                      key={oIndex}
                                      onClick={() => handleQuizAnswer(question.id, oIndex)}
                                      disabled={showQuizResults}
                                      className={`w-full text-left p-4 rounded-lg border transition-colors ${
                                        showQuizResults
                                          ? oIndex === question.correctAnswer
                                            ? "bg-green-900/30 border-green-700"
                                            : quizAnswers[question.id] === oIndex
                                            ? "bg-red-900/30 border-red-700"
                                            : "bg-black/20 border-white/10"
                                          : quizAnswers[question.id] === oIndex
                                          ? "bg-blue-900/50 border-blue-700"
                                          : "bg-black/20 border-white/10 hover:bg-white/5"
                                      }`}
                                    >
                                      <div className="flex items-center">
                                        <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
                                          quizAnswers[question.id] === oIndex
                                            ? "border-blue-500 bg-blue-500"
                                            : "border-gray-500"
                                        }`}>
                                          {quizAnswers[question.id] === oIndex && (
                                            <div className="w-3 h-3 bg-white rounded-full" />
                                          )}
                                        </div>
                                        <span className="text-gray-200">{option}</span>
                                      </div>
                                    </button>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>

                        {!showQuizResults ? (
                          <Button
                            onClick={submitQuiz}
                            disabled={Object.keys(quizAnswers).length !== quizQuestions[type]?.length}
                            className="w-full mt-6 bg-blue-900 hover:bg-blue-800"
                            size="lg"
                          >
                            Valider le quiz
                          </Button>
                        ) : (
                          <Card className={`mt-6 ${quizScore >= 70 ? "bg-green-900/30 border-green-700" : "bg-red-900/30 border-red-700"}`}>
                            <CardContent className="pt-6 text-center">
                              <h3 className="text-2xl font-bold text-white mb-2">
                                Score : {quizScore}%
                              </h3>
                              <p className="text-gray-300 mb-4">
                                {quizScore >= 70
                                  ? "Félicitations ! Vous avez réussi le quiz."
                                  : "Vous devez obtenir au moins 70% pour valider."}
                              </p>
                              <Button
                                onClick={() => {
                                  setShowQuizResults(false);
                                  setQuizAnswers({});
                                }}
                                variant="outline"
                              >
                                Réessayer
                              </Button>
                            </CardContent>
                          </Card>
                        )}
                      </div>
                    )}

                    {currentLesson.type === "exercise" && (
                      <div>
                        <div className="bg-blue-950/30 border border-blue-800/50 rounded-lg p-6 mb-6">
                          <h3 className="text-white text-xl font-semibold mb-3">
                            Exercice pratique
                          </h3>
                          <p className="text-gray-300 mb-4">
                            Mettez en pratique ce que vous avez appris avec cet exercice guidé.
                          </p>
                          <p className="text-gray-300">
                            Suivez les étapes ci-dessous et appliquez les concepts étudiés dans les leçons précédentes.
                          </p>
                        </div>
                        <div className="space-y-4">
                          <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                            <h4 className="text-white font-semibold mb-2">Étape 1</h4>
                            <p className="text-gray-300">Analysez le contexte et identifiez les objectifs</p>
                          </div>
                          <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                            <h4 className="text-white font-semibold mb-2">Étape 2</h4>
                            <p className="text-gray-300">Appliquez les techniques apprises</p>
                          </div>
                          <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                            <h4 className="text-white font-semibold mb-2">Étape 3</h4>
                            <p className="text-gray-300">Évaluez vos résultats et ajustez si nécessaire</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-card/50 backdrop-blur border-blue-800/50">
                  <CardContent className="py-16 text-center">
                    <Play size={64} className="mx-auto text-gray-500 mb-4" />
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      Commencez votre apprentissage
                    </h3>
                    <p className="text-gray-400">
                      Sélectionnez une leçon dans la liste pour commencer
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModuleDetailPage;
