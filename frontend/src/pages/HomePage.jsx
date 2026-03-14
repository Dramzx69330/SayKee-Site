import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight, TrendingUp, ShoppingCart, Minus } from "lucide-react";
import { stats, testimonials } from "../mockData";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16 bg-zinc-950">
      {/* Hero Section - Plus naturel */}
      <section className="py-24 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <span className="text-sm text-zinc-400 font-medium">+2,500 étudiants</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-[1.1] tracking-tight">
            Maîtrisez le trading<br/>et l'e-commerce
          </h1>
          
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
            Formation pratique et complète pour réussir dans le trading et l'e-commerce. 
            Apprenez avec des professionnels qui ont fait leurs preuves.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => navigate("/login")}
              className="bg-white hover:bg-zinc-200 text-black font-semibold px-8 h-12"
            >
              Commencer gratuitement
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/about")}
              className="px-8 h-12 border-zinc-700 hover:bg-zinc-900 text-white"
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section - Minimal */}
      <section className="py-16 px-4 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Plus brut */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Nos formations
            </h2>
            <p className="text-lg text-zinc-400">
              Deux domaines d'excellence pour développer vos compétences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Trading Card - Design plus simple */}
            <div
              onClick={() => navigate("/trading")}
              className="group border border-zinc-800 hover:border-zinc-700 p-10 cursor-pointer transition-all bg-zinc-900/50"
            >
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp size={24} className="text-blue-500" />
                <h3 className="text-2xl font-bold text-white">Trading</h3>
              </div>
              
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Apprenez l'analyse technique, la gestion du risque et les stratégies 
                de trading professionnelles.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-zinc-300">
                  <Minus size={16} className="mt-1 text-blue-500 flex-shrink-0" />
                  <span>Introduction aux marchés financiers</span>
                </div>
                <div className="flex items-start gap-3 text-zinc-300">
                  <Minus size={16} className="mt-1 text-blue-500 flex-shrink-0" />
                  <span>Analyse technique avancée</span>
                </div>
                <div className="flex items-start gap-3 text-zinc-300">
                  <Minus size={16} className="mt-1 text-blue-500 flex-shrink-0" />
                  <span>Money management et psychologie</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-blue-500 font-medium group-hover:gap-3 transition-all">
                <span>Découvrir</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* E-commerce Card */}
            <div
              onClick={() => navigate("/ecommerce")}
              className="group border border-zinc-800 hover:border-zinc-700 p-10 cursor-pointer transition-all bg-zinc-900/50"
            >
              <div className="flex items-center gap-3 mb-8">
                <ShoppingCart size={24} className="text-emerald-500" />
                <h3 className="text-2xl font-bold text-white">E-commerce</h3>
              </div>
              
              <p className="text-zinc-400 mb-8 leading-relaxed">
                Créez et développez votre boutique en ligne avec des stratégies 
                marketing éprouvées.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3 text-zinc-300">
                  <Minus size={16} className="mt-1 text-emerald-500 flex-shrink-0" />
                  <span>Création de boutique en ligne</span>
                </div>
                <div className="flex items-start gap-3 text-zinc-300">
                  <Minus size={16} className="mt-1 text-emerald-500 flex-shrink-0" />
                  <span>Marketing digital et SEO</span>
                </div>
                <div className="flex items-start gap-3 text-zinc-300">
                  <Minus size={16} className="mt-1 text-emerald-500 flex-shrink-0" />
                  <span>Optimisation des conversions</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-emerald-500 font-medium group-hover:gap-3 transition-all">
                <span>Découvrir</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Plus simple */}
      <section className="py-24 px-4 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-3">
              Témoignages
            </h2>
            <p className="text-lg text-zinc-400">
              Ce que disent nos étudiants
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="border border-zinc-800 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                    <div className="text-xs text-zinc-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimaliste */}
      <section className="py-32 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-zinc-400 mb-10">
            Rejoignez +2,500 étudiants
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/login")}
            className="bg-white hover:bg-zinc-200 text-black font-semibold px-10 h-12"
          >
            Commencer gratuitement
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
