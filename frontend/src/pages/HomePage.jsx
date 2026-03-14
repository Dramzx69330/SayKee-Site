import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight, TrendingUp, ShoppingCart } from "lucide-react";
import { stats, testimonials } from "../mockData";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-16 bg-black">
      {/* Hero Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="text-sm uppercase tracking-wider text-neutral-500 font-medium">
                Rejoignez +2,500 étudiants actifs
              </span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-8 text-white leading-[0.95] tracking-tighter">
              Maîtrisez le<br/>trading et<br/>l'e-commerce
            </h1>
            
            <p className="text-xl text-neutral-400 mb-12 max-w-2xl leading-relaxed">
              Formations complètes créées par des professionnels. Apprenez l'analyse technique, 
              le marketing digital et les stratégies qui fonctionnent vraiment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => navigate("/login")}
                className="bg-white hover:bg-neutral-100 text-black font-bold text-base px-10 h-14 rounded-none"
              >
                Commencer maintenant
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/about")}
                className="px-10 h-14 border-neutral-700 hover:bg-neutral-900 text-white rounded-none font-semibold"
              >
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-sm uppercase tracking-wide text-neutral-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-spacing px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              Nos formations
            </h2>
            <p className="text-xl text-neutral-400">
              Deux expertises complémentaires
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Trading Card */}
            <div
              onClick={() => navigate("/trading")}
              className="group relative bg-neutral-900 border border-neutral-800 p-12 cursor-pointer card-hover overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-3xl"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-blue-500 flex items-center justify-center">
                    <TrendingUp size={24} className="text-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-3xl font-black text-white">Trading</h3>
                </div>
                
                <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                  Analyse technique, gestion du risque et stratégies de trading. 
                  Du débutant au professionnel.
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-3 text-neutral-300">
                    <div className="w-1 h-1 bg-blue-500 mt-2.5 flex-shrink-0"></div>
                    <span>Marchés financiers et instruments</span>
                  </div>
                  <div className="flex items-start gap-3 text-neutral-300">
                    <div className="w-1 h-1 bg-blue-500 mt-2.5 flex-shrink-0"></div>
                    <span>Analyse technique avancée</span>
                  </div>
                  <div className="flex items-start gap-3 text-neutral-300">
                    <div className="w-1 h-1 bg-blue-500 mt-2.5 flex-shrink-0"></div>
                    <span>Money management et psychologie</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-blue-500 font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                  <span>Explorer</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                </div>
              </div>
            </div>

            {/* E-commerce Card */}
            <div
              onClick={() => navigate("/ecommerce")}
              className="group relative bg-neutral-900 border border-neutral-800 p-12 cursor-pointer card-hover overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-3xl"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-emerald-500 flex items-center justify-center">
                    <ShoppingCart size={24} className="text-black" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-3xl font-black text-white">E-commerce</h3>
                </div>
                
                <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
                  Création, marketing et croissance. Lancez et scalez votre 
                  boutique en ligne.
                </p>
                
                <div className="space-y-4 mb-10">
                  <div className="flex items-start gap-3 text-neutral-300">
                    <div className="w-1 h-1 bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                    <span>Setup et lancement boutique</span>
                  </div>
                  <div className="flex items-start gap-3 text-neutral-300">
                    <div className="w-1 h-1 bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                    <span>Marketing digital et acquisition</span>
                  </div>
                  <div className="flex items-start gap-3 text-neutral-300">
                    <div className="w-1 h-1 bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                    <span>Optimisation et scaling</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-emerald-500 font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                  <span>Explorer</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl font-black text-white mb-4 tracking-tight">
              Retours d'étudiants
            </h2>
            <p className="text-xl text-neutral-400">
              Ce qu'ils ont appris avec SayKee
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-neutral-900 border border-neutral-800 p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 object-cover"
                  />
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-neutral-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-neutral-300 leading-relaxed">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-black text-white mb-8 tracking-tight">
            Prêt à<br/>commencer ?
          </h2>
          <p className="text-xl text-neutral-400 mb-12">
            Rejoignez +2,500 étudiants qui transforment leur vie
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/login")}
            className="bg-white hover:bg-neutral-100 text-black font-bold text-lg px-14 h-16 rounded-none"
          >
            Commencer gratuitement
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
