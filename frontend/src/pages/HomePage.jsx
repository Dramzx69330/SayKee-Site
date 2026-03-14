import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight, TrendingUp, ShoppingCart, Zap, Target, BarChart3 } from "lucide-react";
import { stats, testimonials } from "../mockData";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16 relative">
      {/* Hero Section - Asymmetric Layout */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
                <span className="text-green-400 text-sm font-mono">🚀 +2,500 étudiants actifs</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none">
                Devenez
                <br />
                <span className="gradient-text">expert</span>
                <br />
                en trading
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-xl leading-relaxed">
                Formation pratique et sans bullshit. Apprenez le trading et l'e-commerce avec des pros qui ont fait leurs preuves.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => navigate("/login")}
                  className="bg-green-600 hover:bg-green-500 text-black font-bold text-lg px-8 py-6 h-auto group"
                >
                  Commencer maintenant
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/about")}
                  className="text-lg px-8 py-6 h-auto border-white/10 hover:bg-white/5"
                >
                  Découvrir SayKee
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group"
                >
                  <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Bento Grid Style */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Deux domaines,
              <br />
              <span className="gradient-text">un seul objectif</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Maîtrisez le trading et l'e-commerce pour générer des revenus en ligne
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Trading Card */}
            <div
              onClick={() => navigate("/trading")}
              className="group relative bg-gradient-to-br from-green-500/10 via-transparent to-transparent border border-white/10 rounded-3xl p-8 md:p-12 cursor-pointer overflow-hidden hover:border-green-500/30 transition-all"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <TrendingUp size={32} className="text-green-400" />
                </div>
                
                <h3 className="text-4xl font-bold mb-4">Trading</h3>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  Analyse technique, gestion du risque, psychologie. Tout ce qu'il faut pour trader comme un pro.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-300">
                    <Zap size={18} className="mr-2 text-green-400" />
                    <span>Stratégies rentables testées</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Target size={18} className="mr-2 text-green-400" />
                    <span>Risk management avancé</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <BarChart3 size={18} className="mr-2 text-green-400" />
                    <span>Analyse technique complète</span>
                  </div>
                </div>
                
                <div className="flex items-center text-green-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                  Voir les formations
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            {/* E-commerce Card */}
            <div
              onClick={() => navigate("/ecommerce")}
              className="group relative bg-gradient-to-br from-orange-500/10 via-transparent to-transparent border border-white/10 rounded-3xl p-8 md:p-12 cursor-pointer overflow-hidden hover:border-orange-500/30 transition-all"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShoppingCart size={32} className="text-orange-400" />
                </div>
                
                <h3 className="text-4xl font-bold mb-4">E-commerce</h3>
                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  De zéro à 10k/mois. Créez, lancez et scalez votre boutique en ligne avec les bonnes méthodes.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center text-gray-300">
                    <Zap size={18} className="mr-2 text-orange-400" />
                    <span>Marketing qui convertit</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Target size={18} className="mr-2 text-orange-400" />
                    <span>SEO et acquisition clients</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <BarChart3 size={18} className="mr-2 text-orange-400" />
                    <span>Optimisation conversions</span>
                  </div>
                </div>
                
                <div className="flex items-center text-orange-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                  Voir les formations
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Horizontal Scroll */}
      <section className="section-spacing bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-5xl font-bold mb-4">
              Ils ont réussi avec <span className="gradient-text">SayKee</span>
            </h2>
            <p className="text-xl text-gray-400">
              Des résultats concrets, pas des promesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-green-500/30"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400 font-mono">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
                <div className="flex text-green-400 mt-4 text-sm">
                  {"★".repeat(testimonial.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-green-500/10 via-transparent to-orange-500/10 border border-white/10 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Prêt à passer
                <br />
                <span className="gradient-text">à l'action ?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Rejoignez +2,500 étudiants qui transforment leur vie grâce au trading et l'e-commerce
              </p>
              <Button
                size="lg"
                onClick={() => navigate("/login")}
                className="bg-green-600 hover:bg-green-500 text-black font-bold text-xl px-12 py-7 h-auto"
              >
                Commencer gratuitement
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
