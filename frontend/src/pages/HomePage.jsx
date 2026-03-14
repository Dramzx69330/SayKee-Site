import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ArrowRight, TrendingUp, ShoppingCart, Target, Zap, Brain, BarChart3, Users, BookOpen } from "lucide-react";
import { stats } from "../mockData";

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

      {/* Why Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              Pourquoi SayKee ?
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl">
              Pas de bullshit. Juste ce qui marche.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 p-10">
              <div className="w-12 h-12 bg-blue-500 flex items-center justify-center mb-6">
                <Target size={24} className="text-black" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">100% Gratuit</h3>
              <p className="text-neutral-400 leading-relaxed">
                Pas de vente, pas d'arnaque. Tout le contenu est accessible gratuitement. 
                Je partage ce que j'utilise réellement.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-10">
              <div className="w-12 h-12 bg-emerald-500 flex items-center justify-center mb-6">
                <Brain size={24} className="text-black" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Méthodes testées</h3>
              <p className="text-neutral-400 leading-relaxed">
                Chaque stratégie enseignée est utilisée quotidiennement pour générer 
                entre 10 et 45k€ par mois.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-10">
              <div className="w-12 h-12 bg-white flex items-center justify-center mb-6">
                <Zap size={24} className="text-black" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Sans théorie inutile</h3>
              <p className="text-neutral-400 leading-relaxed">
                Zéro blabla. Que du concret et du pratique. Tu appliques, tu vois 
                les résultats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-neutral-900/30">
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

      {/* Learning Path Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              Comment ça marche
            </h2>
            <p className="text-xl text-neutral-400">
              Simple et direct
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="text-8xl font-black text-neutral-900 absolute -top-6 -left-2">01</div>
              <div className="relative pt-12">
                <h3 className="text-2xl font-black text-white mb-4">Inscris-toi</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Crée ton compte gratuitement. Pas de carte bancaire, pas de bullshit.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-8xl font-black text-neutral-900 absolute -top-6 -left-2">02</div>
              <div className="relative pt-12">
                <h3 className="text-2xl font-black text-white mb-4">Apprends</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Suis les modules à ton rythme. Vidéos, quiz, exercices pratiques.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-8xl font-black text-neutral-900 absolute -top-6 -left-2">03</div>
              <div className="relative pt-12">
                <h3 className="text-2xl font-black text-white mb-4">Applique</h3>
                <p className="text-neutral-400 leading-relaxed">
                  Utilise ce que tu apprends immédiatement. C'est là que ça compte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-32 px-6 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl font-black text-white mb-4 tracking-tight">
              Mes résultats
            </h2>
            <p className="text-xl text-neutral-400">
              Voilà ce que JE fais. Maintenant c'est ton tour.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Revenue Card */}
            <div className="bg-neutral-900 border border-neutral-800 p-10">
              <div className="text-sm uppercase tracking-wider text-neutral-500 font-bold mb-3">
                Revenus mensuels
              </div>
              <div className="text-5xl font-black text-white mb-2">
                10-45k€
              </div>
              <div className="text-neutral-400 text-sm">
                Entre trading et e-commerce
              </div>
            </div>

            {/* Trading Card */}
            <div className="bg-neutral-900 border border-neutral-800 p-10">
              <div className="text-sm uppercase tracking-wider text-neutral-500 font-bold mb-3">
                Trading
              </div>
              <div className="text-5xl font-black text-blue-500 mb-2">
                Actif
              </div>
              <div className="text-neutral-400 text-sm">
                Analyse technique + gestion risque
              </div>
            </div>

            {/* E-commerce Card */}
            <div className="bg-neutral-900 border border-neutral-800 p-10">
              <div className="text-sm uppercase tracking-wider text-neutral-500 font-bold mb-3">
                E-commerce
              </div>
              <div className="text-5xl font-black text-emerald-500 mb-2">
                Actif
              </div>
              <div className="text-neutral-400 text-sm">
                Marketing + scaling boutiques
              </div>
            </div>
          </div>

          <div className="mt-16 bg-neutral-900 border border-neutral-800 p-10">
            <div className="max-w-3xl">
              <p className="text-xl text-white font-bold mb-4">
                Pourquoi m'écouter ?
              </p>
              <p className="text-neutral-300 leading-relaxed mb-4">
                Je ne vends rien. Ces formations sont gratuites. Je partage ce que j'utilise 
                au quotidien pour générer 10-45k€/mois - pas de théorie, juste ce qui marche.
              </p>
              <p className="text-neutral-300 leading-relaxed">
                Tu veux les mêmes résultats ? Applique ce que j'enseigne. Simple.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
              C'est pour toi si...
            </h2>
            <p className="text-xl text-neutral-400">
              Pas de prérequis, juste de la motivation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 p-10">
              <div className="flex items-start gap-4 mb-6">
                <Users size={24} className="text-blue-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Tu débutes de zéro</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Pas de problème. Les formations partent de la base. Tu comprends les 
                    concepts avant d'attaquer le concret.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-10">
              <div className="flex items-start gap-4 mb-6">
                <BarChart3 size={24} className="text-emerald-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Tu veux progresser</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Déjà actif mais tu stagnes ? Les modules avancés vont débloquer 
                    ton niveau supérieur.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-10">
              <div className="flex items-start gap-4 mb-6">
                <BookOpen size={24} className="text-white flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Tu cherches du concret</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Marre de la théorie sans application ? Ici c'est 100% pratique et 
                    stratégies testées.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-10">
              <div className="flex items-start gap-4 mb-6">
                <Target size={24} className="text-blue-500 flex-shrink-0 mt-1" strokeWidth={2.5} />
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Tu veux des résultats</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    Pas là pour perdre du temps ? Parfait. Applique ce que tu apprends 
                    et tu verras les résultats.
                  </p>
                </div>
              </div>
            </div>
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
