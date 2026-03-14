import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";
import { BookOpen, TrendingUp, Trophy, Clock, ArrowRight } from "lucide-react";
import { tradingModules, ecommerceModules, mockUser } from "../mockData";

export const DashboardPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [allModules, setAllModules] = useState([]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    const userName = localStorage.getItem("userName") || "Utilisateur";
    setUser({ ...mockUser, name: userName });

    // Combine and filter modules with progress
    const combined = [...tradingModules, ...ecommerceModules]
      .filter((module) => module.progress > 0)
      .slice(0, 3);
    setAllModules(combined);
  }, [navigate]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black via-blue-950/20 to-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Bienvenue, <span className="gradient-text">{user.name}</span> !
          </h1>
          <p className="text-xl text-gray-300">
            Continuez votre apprentissage et atteignez vos objectifs
          </p>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-blue-950/80 to-blue-900/50 border-blue-800/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <BookOpen size={24} className="text-blue-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white mb-1">{user.completedModules}</div>
              <p className="text-gray-300 text-sm">Modules complétés</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-950/80 to-yellow-900/50 border-yellow-800/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <TrendingUp size={24} className="text-yellow-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white mb-1">{user.inProgressModules}</div>
              <p className="text-gray-300 text-sm">En cours</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-950/80 to-green-900/50 border-green-800/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Trophy size={24} className="text-green-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white mb-1">{user.totalPoints}</div>
              <p className="text-gray-300 text-sm">Points gagnés</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-950/80 to-purple-900/50 border-purple-800/50">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Clock size={24} className="text-purple-400" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-white mb-1">45h</div>
              <p className="text-gray-300 text-sm">Temps d'apprentissage</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Continue Learning Section */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Continuer l'apprentissage</h2>
          </div>

          {allModules.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allModules.map((module) => (
                <Card
                  key={module.id}
                  className="bg-card/50 backdrop-blur border-blue-800/50 module-card cursor-pointer"
                  onClick={() => navigate(`/module/${module.id < 10 ? 'trading' : 'ecommerce'}/${module.id}`)}
                >
                  <CardHeader>
                    <img
                      src={module.image}
                      alt={module.title}
                      className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <CardTitle className="text-white">{module.title}</CardTitle>
                    <CardDescription className="text-gray-300 text-sm">
                      {module.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Progression</span>
                        <span className="text-blue-400">{module.progress}%</span>
                      </div>
                      <Progress value={module.progress} className="h-2" />
                    </div>
                    <Button className="w-full bg-blue-900 hover:bg-blue-800">
                      Continuer
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="bg-card/50 backdrop-blur border-blue-800/50">
              <CardContent className="py-12 text-center">
                <BookOpen size={48} className="mx-auto text-gray-500 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Aucun module en cours
                </h3>
                <p className="text-gray-400 mb-6">
                  Commencez une formation pour voir votre progression ici
                </p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={() => navigate("/trading")} className="bg-blue-900 hover:bg-blue-800">
                    Formations Trading
                  </Button>
                  <Button onClick={() => navigate("/ecommerce")} className="bg-yellow-700 hover:bg-yellow-600">
                    Formations E-commerce
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Explore More Section */}
      <section className="section-spacing bg-blue-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Explorer plus de formations</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-950/50 to-blue-900/30 border-blue-800/50 module-card cursor-pointer" onClick={() => navigate("/trading")}>
              <CardHeader>
                <Badge className="w-fit bg-blue-900/50 text-blue-300 border-blue-700">3 formations</Badge>
                <CardTitle className="text-2xl text-white mt-2">Trading</CardTitle>
                <CardDescription className="text-gray-300">
                  Maîtrisez les marchés financiers et le trading professionnel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">
                  Voir toutes les formations
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-950/50 to-yellow-900/30 border-yellow-800/50 module-card cursor-pointer" onClick={() => navigate("/ecommerce")}>
              <CardHeader>
                <Badge className="w-fit bg-yellow-900/50 text-yellow-300 border-yellow-700">3 formations</Badge>
                <CardTitle className="text-2xl text-white mt-2">E-commerce</CardTitle>
                <CardDescription className="text-gray-300">
                  Lancez et développez votre boutique en ligne avec succès
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="secondary" className="w-full">
                  Voir toutes les formations
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
