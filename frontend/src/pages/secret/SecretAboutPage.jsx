import { Skull, TrendingUp, Users, MessageCircle, Zap, DollarSign, Target } from "lucide-react";
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
            +200 000€ en 1 an. J'ai fais ca pendant un moment dans ma vie. 
            Aujourd'hui je partage ce que je sais.
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
              <div className="text-4xl md:text-5xl font-black text-white mb-2">0</div>
              <div className="text-sm text-neutral-400">Formation suivie</div>
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
              <span className="text-white font-bold">J'ai commencé de zéro.</span> Pas de thunes, 
              pas de réseau, rien. Juste un PC et l'envie de m'en sortir. J'ai découvert ce monde 
              par hasard et j'ai compris que y'avait moyen de faire de l'argent.
            </p>
            
            <p>
              J'ai tout appris par moi-même. Le spam, le carding, les allos, les spoof... 
              <span className="text-red-500 font-bold"> J'ai tout testé.</span> J'ai fait des erreurs, 
              j'ai perdu de l'argent, mais j'ai appris.
            </p>
            
            <div className="bg-gradient-to-r from-red-950/50 to-red-900/30 border border-red-900/50 p-8 my-10">
              <div className="text-4xl font-black text-white mb-4">+200 000€ en 1 an</div>
              <p className="text-neutral-300">
                C'est ce que j'ai généré à mon pic. Pas en vendant des formations bidons, 
                pas en arnaquant des débutants. En appliquant ce que je savais.
              </p>
            </div>
            
            <p>
              <span className="text-white font-bold">Pourquoi je partage tout ca maintenant ?</span> 
              Parce que j'ai décidé de passer à autre chose. Mais tout ce que j'ai appris, 
              ca serait con de le garder pour moi.
            </p>
            
            <p>
              Ici je vous montre comment ca marche. <span className="text-red-500 font-bold">Pas de bullshit, 
              pas de morale.</span> Juste les techniques, le matos, et comment faire.
            </p>
            
            <p>
              Ce que vous en faites après, c'est votre problème. Moi je suis la pour partager, 
              pas pour vous tenir la main.
            </p>
          </div>
        </div>
      </section>

      {/* What I did */}
      <section className="py-20 px-6 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">
            Ce que j'ai <span className="text-red-500">fait</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center mb-6">
                <DollarSign size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Spam & Phishing</h3>
              <p className="text-neutral-400">
                Des campagnes de spam, des scamas, de la récup de logs. 
                J'ai monté des opérations qui ont généré des dizaines de milliers d'euros.
              </p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center mb-6">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Allos & Spoof</h3>
              <p className="text-neutral-400">
                Des allos bancaires, du spoof call, de la récup de codes. 
                J'ai perfectionné les techniques jusqu'à avoir un taux de conversion de ouf.
              </p>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <div className="w-12 h-12 bg-red-600 flex items-center justify-center mb-6">
                <TrendingUp size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Carding & Décaisse</h3>
              <p className="text-neutral-400">
                De l'achat avec des CC, du décaisse, des drops. 
                J'ai compris comment le système marche et comment l'exploiter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I offer now */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-10">
            Ce que je <span className="text-red-500">propose</span> maintenant
          </h2>
          
          <div className="space-y-6">
            <div className="bg-neutral-900 border border-neutral-800 p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center flex-shrink-0">
                <Zap size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Formations Gratuites</h3>
                <p className="text-neutral-400">
                  Tout ce que tu vois ici c'est gratuit. Je vends pas de formation à 500€. 
                  Je partage ce que je sais, point.
                </p>
              </div>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center flex-shrink-0">
                <Users size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Vente de Matos</h3>
                <p className="text-neutral-400">
                  Si t'as besoin de matos (scama, sender, NL, etc.) je peux te fournir. 
                  Les prix sont dans les formations.
                </p>
              </div>
            </div>
            
            <div className="bg-neutral-900 border border-neutral-800 p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center flex-shrink-0">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Accompagnement</h3>
                <p className="text-neutral-400">
                  Si t'as des questions ou tu veux que je t'aide sur un truc précis, 
                  tu me contact sur Telegram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 bg-neutral-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-950/50 to-red-900/30 border border-red-900/50 p-10 text-center">
            <MessageCircle className="text-red-500 mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-black text-white mb-4">
              Tu veux me parler ?
            </h2>
            <p className="text-neutral-300 mb-8 text-lg">
              Telegram c'est le plus simple. Je réponds à tout le monde.
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
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black text-white mb-8 tracking-tight">
            Prêt à <span className="text-red-500">apprendre</span> ?
          </h2>
          <p className="text-xl text-neutral-400 mb-10">
            Choisis ta formation et commence. C'est gratuit.
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
