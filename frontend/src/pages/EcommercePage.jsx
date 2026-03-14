import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Clock, Play, FileText, HelpCircle, ArrowRight } from "lucide-react";
import { ecommerceModules } from "../mockData";

export const EcommercePage = () => {
  const navigate = useNavigate();
  const [modules] = useState(ecommerceModules);
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const getModuleIcon = (type) => {
    switch (type) {
      case "video":
        return <Play size={16} />;
      case "article":
        return <FileText size={16} />;
      case "quiz":
        return <HelpCircle size={16} />;
      case "exercise":
        return <FileText size={16} />;
      default:
        return <Play size={16} />;
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Débutant":
        return "bg-green-900/50 text-green-300 border-green-700";
      case "Intermédiaire":
        return "bg-yellow-900/50 text-yellow-300 border-yellow-700";
      case "Avancé":
        return "bg-red-900/50 text-red-300 border-red-700";
      default:
        return "bg-gray-900/50 text-gray-300 border-gray-700";
    }
  };

  const handleModuleClick = (moduleId) => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      navigate(`/module/ecommerce/${moduleId}`);
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-yellow-950/20 to-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Formations <span className="gradient-text">E-commerce</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Lancez et développez votre boutique en ligne avec nos formations complètes : création, marketing digital, SEO et optimisation des conversions.
            </p>
            {!isLoggedIn && (
              <Button
                size="lg"
                onClick={() => navigate("/login")}
                className="bg-yellow-700 hover:bg-yellow-600"
              >
                Commencer gratuitement
                <ArrowRight className="ml-2" size={20} />
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module) => (
              <Card
                key={module.id}
                className="bg-card/50 backdrop-blur border-yellow-800/50 module-card cursor-pointer"
                onClick={() => handleModuleClick(module.id)}
              >
                <CardHeader className="pb-4">
                  <img
                    src={module.image}
                    alt={module.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getLevelColor(module.level)}>
                      {module.level}
                    </Badge>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Clock size={16} className="mr-1" />
                      {module.duration}
                    </div>
                  </div>
                  <CardTitle className="text-white text-2xl">{module.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    {module.modules.map((subModule) => (
                      <div
                        key={subModule.id}
                        className="flex items-center justify-between text-sm"
                      >
                        <div className="flex items-center text-gray-300">
                          {getModuleIcon(subModule.type)}
                          <span className="ml-2">{subModule.name}</span>
                        </div>
                        <span className="text-gray-500">{subModule.duration}</span>
                      </div>
                    ))}
                  </div>

                  {isLoggedIn && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">Progression</span>
                        <span className="text-yellow-400">{module.progress}%</span>
                      </div>
                      <Progress value={module.progress} className="h-2" />
                    </div>
                  )}

                  <Button
                    className="w-full bg-yellow-700 hover:bg-yellow-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleModuleClick(module.id);
                    }}
                  >
                    {isLoggedIn ? "Continuer" : "Commencer"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why E-commerce Section */}
      <section className="section-spacing bg-yellow-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Pourquoi se lancer dans l'e-commerce ?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur border-yellow-800/50">
              <CardHeader>
                <CardTitle className="text-white">Opportunité de marché</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Le e-commerce est en pleine croissance. C'est le moment idéal pour lancer votre boutique en ligne.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-yellow-800/50">
              <CardHeader>
                <CardTitle className="text-white">Faibles coûts de démarrage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Contrairement à un magasin physique, l'e-commerce nécessite peu d'investissement initial.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-yellow-800/50">
              <CardHeader>
                <CardTitle className="text-white">Portée mondiale</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Vendez vos produits dans le monde entier, 24h/24 et 7j/7, sans limites géographiques.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommercePage;
