import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight, TrendingUp, ShoppingCart, Check } from "lucide-react";
import { stats, testimonials } from "../mockData";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section - Clean & Minimal */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full mb-8">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <span className="text-sm font-medium text-gray-700">Rejoignez +2,500 étudiants</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
              Maîtrisez le trading
              <br />
              et l'e-commerce
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              Formation pratique et complète pour réussir dans le trading et l'e-commerce. 
              Apprenez avec des professionnels qui ont fait leurs preuves.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => navigate("/login")}
                className="bg-black hover:bg-gray-800 text-white font-semibold text-lg px-8 h-14"
              >
                Commencer gratuitement
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/about")}
                className="text-lg px-8 h-14 border-gray-300 hover:bg-gray-50"
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Clean Cards */}
      <section className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Nos formations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deux domaines d'excellence pour développer vos compétences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Trading Card */}
            <div
              onClick={() => navigate("/trading")}
              className="group bg-white border border-gray-200 rounded-xl p-8 md:p-10 cursor-pointer hover:border-gray-900 transition-all module-card"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp size={24} className="text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Trading</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Apprenez l'analyse technique, la gestion du risque et les stratégies 
                de trading professionnelles.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700">
                  <Check size={20} className="mr-3 text-gray-900 flex-shrink-0" />
                  <span>Introduction aux marchés financiers</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Check size={20} className="mr-3 text-gray-900 flex-shrink-0" />
                  <span>Analyse technique avancée</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Check size={20} className="mr-3 text-gray-900 flex-shrink-0" />
                  <span>Money management et psychologie</span>
                </div>
              </div>
              
              <div className="flex items-center text-gray-900 font-semibold group-hover:gap-3 gap-2 transition-all">
                Découvrir les formations
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* E-commerce Card */}
            <div
              onClick={() => navigate("/ecommerce")}
              className="group bg-white border border-gray-200 rounded-xl p-8 md:p-10 cursor-pointer hover:border-gray-900 transition-all module-card"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                <ShoppingCart size={24} className="text-white" />
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">E-commerce</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Créez et développez votre boutique en ligne avec des stratégies 
                marketing éprouvées.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center text-gray-700">
                  <Check size={20} className="mr-3 text-gray-900 flex-shrink-0" />
                  <span>Création de boutique en ligne</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Check size={20} className="mr-3 text-gray-900 flex-shrink-0" />
                  <span>Marketing digital et SEO</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Check size={20} className="mr-3 text-gray-900 flex-shrink-0" />
                  <span>Optimisation des conversions</span>
                </div>
              </div>
              
              <div className="flex items-center text-gray-900 font-semibold group-hover:gap-3 gap-2 transition-all">
                Découvrir les formations
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ce que disent nos étudiants
            </h2>
            <p className="text-xl text-gray-600">
              Des résultats concrets de personnes comme vous
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{testimonial.content}</p>
                <div className="flex text-gray-900 text-sm">
                  {"★".repeat(testimonial.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Rejoignez des milliers d'étudiants qui transforment leur vie 
            grâce au trading et l'e-commerce
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/login")}
            className="bg-black hover:bg-gray-800 text-white font-semibold text-xl px-12 h-16"
          >
            Commencer gratuitement
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
