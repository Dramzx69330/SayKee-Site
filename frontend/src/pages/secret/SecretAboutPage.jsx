import { Skull, Shield, AlertTriangle, Eye, Lock, Heart } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

export const SecretAboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/30 via-black to-black" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <Skull className="text-red-500" size={28} />
            <span className="text-sm uppercase tracking-wider text-red-500 font-bold">
              Face Cachée
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Pourquoi cette <span className="text-red-500">section</span> ?
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-2xl">
            Tu as trouvé la face cachée de SayKee. Voici pourquoi elle existe.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Results Banner */}
          <div className="bg-gradient-to-r from-red-950/50 to-red-900/30 border border-red-900/50 p-10 mb-12">
            <div className="text-center">
              <div className="text-6xl md:text-7xl font-black text-white mb-2">+200 000€</div>
              <p className="text-red-500 font-bold text-lg mb-4">Générés grâce à ces méthodes</p>
              <p className="text-neutral-400 max-w-xl mx-auto">
                Comprendre comment fonctionnent les arnaques m'a permis de les éviter, 
                de protéger mon business, et de maximiser mes gains en trading et e-commerce.
              </p>
            </div>
          </div>

          <div className="space-y-8 text-lg text-neutral-300 leading-relaxed">
            <p>
              <span className="text-white font-bold">J'ai vu trop de gens se faire avoir.</span> Des proches, 
              des amis, des connaissances sur internet. Des gens intelligents qui se sont fait 
              piéger par des arnaques bien ficelées.
            </p>
            
            <p>
              Dans mon parcours en trading et e-commerce, j'ai croisé le pire. Des scammers, 
              des arnaqueurs, des gens sans scrupules qui profitent de la naïveté des autres.
              <span className="text-red-500 font-bold"> Moi, j'ai appris à les reconnaître.</span>
            </p>
            
            <div className="bg-red-950/30 border border-red-900/50 p-8 my-10">
              <p className="text-white font-bold text-xl mb-4">
                +200 000€ en évitant les pièges et en comprenant le game.
              </p>
              <p className="text-neutral-300">
                Chaque arnaque que j'ai identifiée, c'est de l'argent que j'ai gardé. Chaque technique 
                que j'ai comprise, c'est une protection de plus pour mon business. Aujourd'hui, je partage 
                tout ça gratuitement.
              </p>
            </div>
            
            <p>
              <span className="text-white font-bold">L'ignorance est ce qui permet aux escrocs de prospérer.</span> 
              Plus les gens comprennent comment fonctionnent les arnaques, moins ils se font avoir. 
              C'est mathématique.
            </p>
            
            <p>
              Cette section n'est pas là pour glorifier quoi que ce soit. Elle est là pour 
              <span className="text-red-500 font-bold"> éduquer et protéger</span>. Chaque technique 
              expliquée, chaque arnaque décortiquée, c'est une victime potentielle en moins.
            </p>
            
            <p>
              <span className="text-white font-bold">Je ne vends rien ici.</span> Pas de formation payante 
              sur "comment devenir un hacker". Juste de l'éducation gratuite pour que toi et tes proches 
              ne tombiez jamais dans le panneau.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12 text-center">
            Les <span className="text-red-500">valeurs</span> de cette section
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-950 border border-red-900/50 flex items-center justify-center mx-auto mb-6">
                <Eye className="text-red-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Transparence</h3>
              <p className="text-neutral-400">
                Expliquer clairement comment les arnaques fonctionnent, sans zone grise.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-950 border border-red-900/50 flex items-center justify-center mx-auto mb-6">
                <Shield className="text-red-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Protection</h3>
              <p className="text-neutral-400">
                Donner les outils concrets pour se défendre efficacement.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-red-950 border border-red-900/50 flex items-center justify-center mx-auto mb-6">
                <Heart className="text-red-500" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Bienveillance</h3>
              <p className="text-neutral-400">
                Pas de jugement. Tout le monde peut se faire avoir un jour.
              </p>
            </div>
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
            Explore les différentes formations et protège-toi des arnaques.
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default SecretAboutPage;
