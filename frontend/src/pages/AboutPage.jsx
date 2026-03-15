import { TrendingUp, Target, Users, Zap, MessageCircle, DollarSign } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

export const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-black" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
        
        <div className="max-w-7xl mx-auto relative">
          <span className="text-sm uppercase tracking-wider text-blue-500 font-bold mb-4 block">
            À propos
          </span>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Salut, moi c'est <span className="text-blue-500">Elias</span>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-2xl">
            Expert en trading et e-commerce. J'ai développé des stratégies qui fonctionnent vraiment. 
            Aujourd'hui je partage tout ce que j'ai appris, gratuitement.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 px-6 bg-gradient-to-b from-blue-950/10 to-black border-y border-blue-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1.5 tracking-tight">5+</div>
              <div className="text-xs lg:text-sm text-neutral-400 uppercase tracking-wide font-medium">Années d'expérience</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-1.5 tracking-tight">100%</div>
              <div className="text-xs lg:text-sm text-neutral-400 uppercase tracking-wide font-medium">Autodidacte</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1.5 tracking-tight">24/7</div>
              <div className="text-xs lg:text-sm text-neutral-400 uppercase tracking-wide font-medium">Support actif</div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-1.5 tracking-tight">100%</div>
              <div className="text-xs lg:text-sm text-neutral-400 uppercase tracking-wide font-medium">Gratuit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mon histoire */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-10">
            Mon <span className="text-blue-500">parcours</span>
          </h2>
          
          <div className="space-y-8 text-lg text-neutral-300 leading-relaxed">
            <p>
              <span className="text-white font-bold">J'ai commencé de zéro.</span> Pas de famille riche, 
              pas de réseau, pas de diplôme en finance. Juste un PC, une connexion internet, 
              et l'envie de comprendre comment faire de l'argent.
            </p>
            
            <p>
              J'ai testé plein de trucs. Le dropshipping, l'affiliation, le trading... 
              <span className="text-blue-500 font-bold"> J'ai fait des erreurs, j'ai perdu de l'argent, 
              mais j'ai appris.</span> Et à force de persévérer, j'ai trouvé ce qui marche vraiment.
            </p>
            
            <p>
              Après plusieurs années, j'ai généré des revenus significatifs en trading et e-commerce. 
              <span className="text-white font-bold">Pas en vendant des formations à 2000€, pas en arnaquant des débutants.</span> 
              En appliquant des stratégies qui fonctionnent vraiment.
            </p>
            
            <p>
              <span className="text-white font-bold">Pourquoi je partage tout ca gratuitement ?</span> 
              Parce que j'aurais kiffé avoir quelqu'un qui m'explique tout ca quand j'ai commencé. 
              Au lieu de ca, j'ai du tout apprendre par moi-même, en perdant du temps et de l'argent.
            </p>
            
            <p>
              Ici, <span className="text-blue-500 font-bold">pas de bullshit</span>. Pas de promesses 
              de devenir millionnaire en 30 jours. Juste des vraies stratégies, du vrai contenu, 
              et des résultats si tu bosses.
            </p>
          </div>
        </div>
      </section>

      {/* Ce que je fais */}
      <section className="py-20 px-6 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">
            Ce que je <span className="text-blue-500">propose</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="w-12 h-12 bg-blue-600 flex items-center justify-center mb-6">
                <TrendingUp size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Formation Trading</h3>
              <p className="text-neutral-400">
                Analyse technique, gestion du risque, psychologie du trader... 
                Tout ce qu'il faut pour trader comme un pro. Gratuit.
              </p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="w-12 h-12 bg-blue-600 flex items-center justify-center mb-6">
                <DollarSign size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Formation E-commerce</h3>
              <p className="text-neutral-400">
                Dropshipping, print-on-demand, Amazon FBA... Les vraies méthodes 
                pour lancer un business e-commerce rentable. Gratuit.
              </p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="w-12 h-12 bg-blue-600 flex items-center justify-center mb-6">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Communauté</h3>
              <p className="text-neutral-400">
                Rejoins +2500 personnes qui apprennent et progressent ensemble. 
                Entraide, partage, et motivation. Gratuit aussi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ma philosophie */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-10">
            Ma <span className="text-blue-500">philosophie</span>
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                <Zap size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Pas de bullshit</h3>
                <p className="text-neutral-400">
                  Je te dis ce qui marche et ce qui marche pas. Pas de promesses irréalistes, 
                  pas de "secrets" à 997€. Juste la vérité.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                <Target size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Du concret</h3>
                <p className="text-neutral-400">
                  Pas de théorie chiante. Des stratégies pratiques que tu peux appliquer 
                  direct. Je te montre exactement comment je fais.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                <Users size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Accessible à tous</h3>
                <p className="text-neutral-400">
                  Que tu sois étudiant, salarié, ou au chômage, tu peux apprendre. 
                  C'est gratuit et je t'explique tout depuis le début.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 bg-neutral-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-950/50 to-blue-900/30 border border-blue-900/50 p-10 text-center">
            <MessageCircle className="text-blue-500 mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-black text-white mb-4">
              Une question ?
            </h2>
            <p className="text-neutral-300 mb-8 text-lg">
              Tu peux me contacter directement sur Telegram. Je réponds à tout le monde.
            </p>
            <a 
              href="https://t.me/Loukra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-4 transition-colors"
            >
              <MessageCircle size={20} />
              @Loukra sur Telegram
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-white mb-8 tracking-tight">
            Prêt à <span className="text-blue-500">commencer</span> ?
          </h2>
          <p className="text-xl text-neutral-400 mb-10">
            Choisis ta formation et lance-toi. C'est gratuit, t'as rien à perdre.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/trading")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-base px-10 h-14 rounded-none"
            >
              Formation Trading
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/ecommerce")}
              className="border-blue-900 hover:bg-blue-950/30 text-white font-bold text-base px-10 h-14 rounded-none"
            >
              Formation E-commerce
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
