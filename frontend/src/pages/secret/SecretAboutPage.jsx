import { Skull, Shield, TrendingUp, Users, MessageCircle, Zap, Award } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

export const SecretAboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black to-black" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-red-500/10 blur-3xl rounded-full" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <Skull className="text-red-500" size={28} />
            <span className="text-sm uppercase tracking-wider text-red-500 font-bold">
              Qui je suis
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Yo, c'est <span className="text-red-500">Dora</span>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-2xl">
            J'ai fais +200 000€ en 1 an. Pas en vendant des formations à 2000€, pas en arnaquant des gens. 
            En comprenant le game et en appliquant les bonnes méthodes.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-red-950/20 border-y border-red-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">+200K€</div>
              <div className="text-sm text-neutral-400">Générés en 1 an</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-red-500 mb-2">100%</div>
              <div className="text-sm text-neutral-400">Autodidacte</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">0€</div>
              <div className="text-sm text-neutral-400">Formation payante</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black text-red-500 mb-2">24/7</div>
              <div className="text-sm text-neutral-400">Dans le game</div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-10">
            Mon <span className="text-red-500">parcours</span>
          </h2>
          
          <div className="space-y-8 text-lg text-neutral-300 leading-relaxed">
            <p>
              <span className="text-white font-bold">J'ai commencé de zéro.</span> Pas de famille riche, 
              pas de contacts, pas de réseau. Juste un PC et la volonté de comprendre comment ca marche.
            </p>
            
            <p>
              J'ai testé plein de trucs. Le trading, le e-commerce, et ouais... j'ai aussi exploré 
              le côté sombre. <span className="text-red-500 font-bold">Je connais les deux mondes.</span> 
              C'est pour ca que je peux t'en parler.
            </p>
            
            <div className="bg-gradient-to-r from-red-950/50 to-red-900/30 border border-red-900/50 p-8 my-10">
              <div className="text-4xl font-black text-white mb-4">+200 000€ en 1 an</div>
              <p className="text-neutral-300">
                C'est pas de la chance. C'est des heures à apprendre, tester, échouer, recommencer. 
                J'ai compris comment le système marche et j'ai joué avec les règles.
              </p>
            </div>
            
            <p>
              <span className="text-white font-bold">Pourquoi je partage tout ca ?</span> 
              Parce que j'aurais kiffé avoir quelqu'un qui m'explique tout ca quand j'ai commencé. 
              Au lieu de ca j'ai du tout apprendre par moi-même, en faisant des erreurs.
            </p>
            
            <p>
              Cette section c'est pour ceux qui veulent comprendre le game. Pas pour les juger, 
              pas pour les encourager à faire des conneries. Juste pour <span className="text-red-500 font-bold">montrer comment ca marche</span>.
            </p>
            
            <p>
              Si t'es la pour apprendre et évoluer, t'es au bon endroit. Si t'es la pour critiquer, 
              la porte est la 👉🚪
            </p>
          </div>
        </div>
      </section>

      {/* What I do */}
      <section className="py-20 px-6 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">
            Ce que je <span className="text-red-500">propose</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center mb-6">
                <TrendingUp size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Formations Gratuites</h3>
              <p className="text-neutral-400">
                Tout ce que je partage ici est gratuit. Pas de formation à 997€, pas de upsell, 
                pas de bullshit. Juste du contenu brut.
              </p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center mb-6">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Accompagnement</h3>
              <p className="text-neutral-400">
                Si t'as des questions ou tu veux aller plus loin, tu peux me contacter directement. 
                Je réponds à tout le monde.
              </p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center mb-6">
                <Zap size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Services</h3>
              <p className="text-neutral-400">
                Je propose aussi des services pour ceux qui veulent aller plus vite. 
                Tout est dans les formations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-950/50 to-red-900/30 border border-red-900/50 p-10 text-center">
            <MessageCircle className="text-red-500 mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-black text-white mb-4">
              Une question ? Un projet ?
            </h2>
            <p className="text-neutral-300 mb-8 text-lg">
              Contacte moi directement sur Telegram, je réponds vite.
            </p>
            <a 
              href="https://t.me/Loukra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-4 transition-colors"
            >
              <MessageCircle size={20} />
              @Loukra sur Telegram
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-neutral-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-white mb-8 tracking-tight">
            Ready to <span className="text-red-500">learn</span> ?
          </h2>
          <p className="text-xl text-neutral-400 mb-10">
            Choisis ta formation et commence maintenant. C'est gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/secret/carding")}
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-base px-10 h-14 rounded-none"
            >
              Formation Carding
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/secret/spam")}
              className="border-red-900 hover:bg-red-950/30 text-white font-bold text-base px-10 h-14 rounded-none"
            >
              Formation Spam
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/secret/spoofer")}
              className="border-red-900 hover:bg-red-950/30 text-white font-bold text-base px-10 h-14 rounded-none"
            >
              Formation Spoofer
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecretAboutPage;
