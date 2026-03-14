import { Mail, AlertTriangle, Shield, Filter, Trash2, Flag, Eye } from "lucide-react";
import { Button } from "../../components/ui/button";

export const SpamPage = () => {
  const spamTypes = [
    {
      title: "Phishing Emails",
      description: "Faux emails imitant des entreprises légitimes pour voler vos identifiants.",
      examples: ["Fausse alerte bancaire", "Faux colis en attente", "Compte suspendu"],
      color: "red"
    },
    {
      title: "Scam Nigérian (419)",
      description: "Promesses d'héritage ou de gains contre des frais à payer.",
      examples: ["Prince nigérian", "Loterie gagnée", "Héritage surprise"],
      color: "yellow"
    },
    {
      title: "Spam Commercial",
      description: "Publicités non sollicitées, souvent pour des produits douteux.",
      examples: ["Médicaments", "Crypto miracle", "Régimes magiques"],
      color: "orange"
    },
    {
      title: "Sextortion",
      description: "Chantage prétendant avoir des images compromettantes.",
      examples: ["Webcam piratée", "Mot de passe révélé", "Demande de Bitcoin"],
      color: "red"
    }
  ];

  const redFlags = [
    "Urgence excessive (\"Agissez maintenant!\")",
    "Fautes d'orthographe et de grammaire",
    "Adresse email suspecte",
    "Liens raccourcis ou étranges",
    "Demande d'informations personnelles",
    "Pièces jointes inattendues",
    "Promesses trop belles pour être vraies",
    "Menaces ou intimidation"
  ];

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-950/30 via-black to-black" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-yellow-500/10 blur-3xl rounded-full" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-3 mb-6">
            <Mail className="text-yellow-500" size={28} />
            <span className="text-sm uppercase tracking-wider text-yellow-500 font-bold">
              Arnaques par Email
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Spam & <span className="text-yellow-500">Phishing</span>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-2xl mb-10">
            Chaque jour, des millions d'emails frauduleux sont envoyés. 
            Apprenez à les reconnaître instantanément.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-neutral-900 border border-neutral-800 p-6">
              <div className="text-3xl font-black text-yellow-500 mb-1">3.4B</div>
              <div className="text-sm text-neutral-400">Emails spam/jour</div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6">
              <div className="text-3xl font-black text-white mb-1">94%</div>
              <div className="text-sm text-neutral-400">Malwares via email</div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6">
              <div className="text-3xl font-black text-yellow-500 mb-1">€36K</div>
              <div className="text-sm text-neutral-400">Perte moyenne/victime</div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 p-6">
              <div className="text-3xl font-black text-white mb-1">1/99</div>
              <div className="text-sm text-neutral-400">Emails = phishing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Spam Types */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12">
            Types d'<span className="text-yellow-500">arnaques</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {spamTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-neutral-900 border border-neutral-800 p-8"
              >
                <h3 className={`text-xl font-bold mb-3 ${
                  type.color === 'red' ? 'text-red-500' :
                  type.color === 'yellow' ? 'text-yellow-500' :
                  'text-orange-500'
                }`}>
                  {type.title}
                </h3>
                <p className="text-neutral-400 mb-4">{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((ex, i) => (
                    <span key={i} className="text-xs bg-neutral-800 text-neutral-300 px-3 py-1">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-20 px-6 bg-red-950/20 border-y border-red-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <Flag className="text-red-500" size={32} />
            <h2 className="text-4xl font-black text-white">
              Les <span className="text-red-500">red flags</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {redFlags.map((flag, index) => (
              <div 
                key={index}
                className="bg-black/50 border border-red-900/30 p-5 flex items-start gap-3"
              >
                <AlertTriangle className="text-red-500 flex-shrink-0 mt-0.5" size={18} />
                <span className="text-neutral-300 text-sm">{flag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-white mb-12">
            Que faire si vous recevez un <span className="text-yellow-500">spam</span> ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 flex items-center justify-center mx-auto mb-6">
                <Eye className="text-black" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1. Ne cliquez pas</h3>
              <p className="text-neutral-400">
                Aucun lien, aucune pièce jointe. Même par curiosité.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 flex items-center justify-center mx-auto mb-6">
                <Flag className="text-black" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2. Signalez</h3>
              <p className="text-neutral-400">
                Utilisez signal-spam.fr pour contribuer à la lutte.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 flex items-center justify-center mx-auto mb-6">
                <Trash2 className="text-black" size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">3. Supprimez</h3>
              <p className="text-neutral-400">
                Effacez définitivement. Ne gardez aucune trace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpamPage;
