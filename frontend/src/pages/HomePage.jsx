import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight, TrendingUp, ShoppingCart, Check, Star } from "lucide-react";
import { stats, testimonials } from "../mockData";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative bg-black py-20 md:py-32 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-black to-black"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
              <Star size={16} className="text-blue-400" fill="currentColor" />
              <span className="text-sm font-semibold text-blue-400">Rejoignez +2,500 étudiants</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              Maîtrisez le trading
              <br />
              et l'e-commerce
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-2xl">
              Formation pratique et complète pour réussir dans le trading et l'e-commerce. 
              Apprenez avec des professionnels qui ont fait leurs preuves.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => navigate("/login")}
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg px-8 h-14"
              >
                Commencer gratuitement
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/about")}
                className="text-lg px-8 h-14 border-white/20 hover:bg-white/5 text-white"
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white/5 py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-spacing bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nos formations
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Deux domaines d'excellence pour développer vos compétences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Trading Card */}
            <div
              onClick={() => navigate("/trading")}
              className="group bg-white/5 border-2 border-blue-500/20 hover:border-blue-500 rounded-2xl p-8 md:p-10 cursor-pointer transition-all module-card backdrop-blur-sm"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp size={28} className="text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">Trading</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Apprenez l'analyse technique, la gestion du risque et les stratégies 
                de trading professionnelles.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Check size={14} className="text-blue-400" />
                  </div>
                  <span>Introduction aux marchés financiers</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Check size={14} className="text-blue-400" />
                  </div>
                  <span>Analyse technique avancée</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Check size={14} className="text-blue-400" />
                  </div>
                  <span>Money management et psychologie</span>
                </div>
              </div>
              
              <div className="flex items-center text-blue-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                Découvrir les formations
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* E-commerce Card */}
            <div
              onClick={() => navigate("/ecommerce")}
              className="group bg-white/5 border-2 border-green-500/20 hover:border-green-500 rounded-2xl p-8 md:p-10 cursor-pointer transition-all module-card backdrop-blur-sm"
            >
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShoppingCart size={28} className="text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-white mb-4">E-commerce</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Créez et développez votre boutique en ligne avec des stratégies 
                marketing éprouvées.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Check size={14} className="text-green-400" />
                  </div>
                  <span>Création de boutique en ligne</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Check size={14} className="text-green-400" />
                  </div>
                  <span>Marketing digital et SEO</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <Check size={14} className="text-green-400" />
                  </div>
                  <span>Optimisation des conversions</span>
                </div>
              </div>
              
              <div className="flex items-center text-green-400 font-semibold group-hover:gap-3 gap-2 transition-all">
                Découvrir les formations
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ce que disent nos étudiants
            </h2>
            <p className="text-xl text-gray-400">
              Des résultats concrets de personnes comme vous
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:shadow-2xl transition-all backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-500/30"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">{testimonial.content}</p>
                <div className="flex text-yellow-500 text-sm">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Rejoignez des milliers d'étudiants qui transforment leur vie 
            grâce au trading et l'e-commerce
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/login")}
            className="bg-white hover:bg-gray-100 text-blue-600 font-semibold text-xl px-12 h-16"
          >
            Commencer gratuitement
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
