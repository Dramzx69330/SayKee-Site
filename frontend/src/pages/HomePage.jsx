import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowRight, TrendingUp, ShoppingCart, Users, BookOpen, Trophy, Clock } from "lucide-react";
import { stats, testimonials } from "../mockData";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-blue-950/20 to-black py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Maîtrisez le <span className="gradient-text">Trading</span>
              <br />
              et l'<span className="gradient-text">E-commerce</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Formations interactives pour tous niveaux. Apprenez à votre rythme avec des modules vidéos, quiz et exercices pratiques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate("/login")}
                className="bg-blue-900 hover:bg-blue-800 text-lg px-8 py-6"
              >
                Commencer maintenant
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/about")}
                className="text-lg px-8 py-6 border-white/20 hover:bg-white/10"
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  {stat.icon === "users" && <Users size={40} className="text-blue-500" />}
                  {stat.icon === "book" && <BookOpen size={40} className="text-blue-500" />}
                  {stat.icon === "trophy" && <Trophy size={40} className="text-yellow-500" />}
                  {stat.icon === "clock" && <Clock size={40} className="text-blue-500" />}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos Formations</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Deux domaines d'excellence pour développer vos compétences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Trading Card */}
            <Card className="bg-gradient-to-br from-blue-950/50 to-blue-900/30 border-blue-800/50 module-card cursor-pointer" onClick={() => navigate("/trading")}>
              <CardHeader>
                <div className="w-16 h-16 bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp size={32} className="text-blue-400" />
                </div>
                <CardTitle className="text-3xl text-white">Trading</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Apprenez l'analyse technique, la gestion du risque et les stratégies de trading professionnelles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-gray-300">
                    <span className="text-blue-400 mr-2">✓</span>
                    Introduction aux marchés financiers
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-blue-400 mr-2">✓</span>
                    Analyse technique avancée
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-blue-400 mr-2">✓</span>
                    Money management et psychologie
                  </li>
                </ul>
                <Button variant="secondary" className="w-full">
                  Découvrir les formations
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            {/* E-commerce Card */}
            <Card className="bg-gradient-to-br from-yellow-950/50 to-yellow-900/30 border-yellow-800/50 module-card cursor-pointer" onClick={() => navigate("/ecommerce")}>
              <CardHeader>
                <div className="w-16 h-16 bg-yellow-900/50 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart size={32} className="text-yellow-400" />
                </div>
                <CardTitle className="text-3xl text-white">E-commerce</CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  Créez et développez votre boutique en ligne avec des stratégies marketing éprouvées
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start text-gray-300">
                    <span className="text-yellow-400 mr-2">✓</span>
                    Création de boutique en ligne
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-yellow-400 mr-2">✓</span>
                    Marketing digital et SEO
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="text-yellow-400 mr-2">✓</span>
                    Optimisation des conversions
                  </li>
                </ul>
                <Button variant="secondary" className="w-full">
                  Découvrir les formations
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing bg-blue-950/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ce que disent nos étudiants</h2>
            <p className="text-xl text-gray-400">
              Rejoignez des milliers d'étudiants satisfaits
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-card/50 backdrop-blur border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400 mb-2">
                    {"★".repeat(testimonial.rating)}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-blue-900/50 to-yellow-900/50 border-blue-800/50">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl md:text-5xl font-bold text-white mb-4">
                Prêt à commencer votre apprentissage ?
              </CardTitle>
              <CardDescription className="text-xl text-gray-200">
                Inscrivez-vous maintenant et accédez à toutes nos formations
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button
                size="lg"
                onClick={() => navigate("/login")}
                className="bg-yellow-600 hover:bg-yellow-500 text-black font-semibold text-lg px-12 py-6"
              >
                Créer mon compte gratuitement
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
