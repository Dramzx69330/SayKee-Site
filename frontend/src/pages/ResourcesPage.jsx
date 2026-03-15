import { useState } from "react";
import { ExternalLink, ShoppingCart, TrendingUp, Palette, Mail, Search, Video, CreditCard, Truck, BarChart3, Shield, BookOpen, Wrench, Star } from "lucide-react";

const resources = {
  ecommerce: {
    title: "E-commerce",
    color: "emerald",
    categories: [
      {
        name: "Plateformes e-commerce",
        icon: ShoppingCart,
        tools: [
          {
            name: "Shopify",
            description: "La plateforme #1 pour créer ta boutique. Simple, puissant, parfait pour débuter.",
            url: "https://www.shopify.com",
            tag: "Recommandé",
            tagColor: "emerald"
          },
          {
            name: "WooCommerce",
            description: "Plugin WordPress gratuit. Plus technique mais tu possèdes vraiment ta boutique.",
            url: "https://woocommerce.com",
            tag: "Gratuit",
            tagColor: "blue"
          },
          {
            name: "PrestaShop",
            description: "Solution française, open source. Populaire en Europe.",
            url: "https://www.prestashop.com",
            tag: "Gratuit",
            tagColor: "blue"
          }
        ]
      },
      {
        name: "Recherche de produits",
        icon: Search,
        tools: [
          {
            name: "Minea",
            description: "L'outil spy ultime. Trouve les produits et pubs qui cartonnent.",
            url: "https://minea.com",
            tag: "Recommandé",
            tagColor: "emerald"
          },
          {
            name: "AliExpress",
            description: "La source principale pour le dropshipping. Énorme catalogue.",
            url: "https://www.aliexpress.com",
            tag: "Gratuit",
            tagColor: "blue"
          },
          {
            name: "CJ Dropshipping",
            description: "Agent dropshipping avec meilleurs délais et prix que AliExpress direct.",
            url: "https://cjdropshipping.com",
            tag: "Populaire",
            tagColor: "yellow"
          }
        ]
      },
      {
        name: "Publicité",
        icon: BarChart3,
        tools: [
          {
            name: "Meta Business Suite",
            description: "Gère tes pubs Facebook et Instagram. L'outil essentiel.",
            url: "https://business.facebook.com",
            tag: "Essentiel",
            tagColor: "emerald"
          },
          {
            name: "TikTok Ads",
            description: "La pub TikTok explose. CPM bas et audience jeune.",
            url: "https://ads.tiktok.com",
            tag: "Tendance",
            tagColor: "yellow"
          },
          {
            name: "Google Ads",
            description: "Search et Shopping ads. Parfait pour les recherches d'intention.",
            url: "https://ads.google.com",
            tag: "Avancé",
            tagColor: "blue"
          }
        ]
      },
      {
        name: "Design & Créatifs",
        icon: Palette,
        tools: [
          {
            name: "Canva",
            description: "Design facile même sans compétences. Templates pro inclus.",
            url: "https://www.canva.com",
            tag: "Recommandé",
            tagColor: "emerald"
          },
          {
            name: "CapCut",
            description: "Montage vidéo gratuit et puissant. Parfait pour les créas TikTok.",
            url: "https://www.capcut.com",
            tag: "Gratuit",
            tagColor: "blue"
          },
          {
            name: "Figma",
            description: "Design pro. Plus complexe mais résultats top.",
            url: "https://www.figma.com",
            tag: "Pro",
            tagColor: "yellow"
          }
        ]
      },
      {
        name: "Email Marketing",
        icon: Mail,
        tools: [
          {
            name: "Klaviyo",
            description: "Le meilleur pour l'e-commerce. Intégration Shopify parfaite.",
            url: "https://www.klaviyo.com",
            tag: "Recommandé",
            tagColor: "emerald"
          },
          {
            name: "Mailchimp",
            description: "Simple et gratuit pour commencer. Limité mais suffisant au début.",
            url: "https://mailchimp.com",
            tag: "Gratuit",
            tagColor: "blue"
          }
        ]
      },
      {
        name: "Paiements",
        icon: CreditCard,
        tools: [
          {
            name: "Stripe",
            description: "Le standard pour les paiements en ligne. Fiable et complet.",
            url: "https://stripe.com",
            tag: "Essentiel",
            tagColor: "emerald"
          },
          {
            name: "PayPal",
            description: "Rassure les clients. À avoir en complément de Stripe.",
            url: "https://www.paypal.com",
            tag: "Essentiel",
            tagColor: "emerald"
          }
        ]
      },
      {
        name: "Livraison",
        icon: Truck,
        tools: [
          {
            name: "Sendcloud",
            description: "Gère tous tes transporteurs depuis une seule interface.",
            url: "https://www.sendcloud.com",
            tag: "Recommandé",
            tagColor: "emerald"
          },
          {
            name: "Mondial Relay",
            description: "Livraison en point relais. Moins cher, les clients adorent.",
            url: "https://www.mondialrelay.fr",
            tag: "Populaire",
            tagColor: "yellow"
          }
        ]
      }
    ]
  },
  trading: {
    title: "Trading",
    color: "blue",
    categories: [
      {
        name: "Brokers recommandés",
        icon: Shield,
        tools: [
          {
            name: "Note importante",
            description: "Choisis TOUJOURS un broker régulé (AMF, FCA, CySEC). Vérifie sur le site du régulateur. Les brokers de pubs Instagram sont souvent des arnaques.",
            url: null,
            tag: "⚠️ Important",
            tagColor: "red"
          }
        ]
      },
      {
        name: "Plateformes de trading",
        icon: TrendingUp,
        tools: [
          {
            name: "MetaTrader 4/5",
            description: "Le standard de l'industrie. Gratuit, complet, compatible avec tous les brokers.",
            url: "https://www.metatrader4.com",
            tag: "Essentiel",
            tagColor: "blue"
          },
          {
            name: "TradingView",
            description: "Les meilleurs graphiques du marché. Analyse technique de fou.",
            url: "https://www.tradingview.com",
            tag: "Recommandé",
            tagColor: "blue"
          },
          {
            name: "cTrader",
            description: "Alternative moderne à MT4/5. Interface plus clean.",
            url: "https://ctrader.com",
            tag: "Populaire",
            tagColor: "yellow"
          }
        ]
      },
      {
        name: "Analyse & News",
        icon: BarChart3,
        tools: [
          {
            name: "Investing.com",
            description: "Calendrier économique, news, analyses. Tout en un.",
            url: "https://www.investing.com",
            tag: "Gratuit",
            tagColor: "blue"
          },
          {
            name: "Forex Factory",
            description: "Le calendrier économique de référence pour le Forex.",
            url: "https://www.forexfactory.com",
            tag: "Essentiel",
            tagColor: "blue"
          },
          {
            name: "Myfxbook",
            description: "Analyse tes performances, compare avec d'autres traders.",
            url: "https://www.myfxbook.com",
            tag: "Gratuit",
            tagColor: "blue"
          }
        ]
      },
      {
        name: "Journal de trading",
        icon: BookOpen,
        tools: [
          {
            name: "Notion",
            description: "Crée ton propre journal de trading personnalisé. Templates dispo.",
            url: "https://www.notion.so",
            tag: "Gratuit",
            tagColor: "blue"
          },
          {
            name: "Edgewonk",
            description: "Journal de trading dédié avec stats avancées. Payant mais puissant.",
            url: "https://edgewonk.com",
            tag: "Pro",
            tagColor: "yellow"
          },
          {
            name: "Google Sheets",
            description: "Simple et efficace. Crée ton propre tableau de suivi.",
            url: "https://sheets.google.com",
            tag: "Gratuit",
            tagColor: "blue"
          }
        ]
      },
      {
        name: "Outils de calcul",
        icon: Wrench,
        tools: [
          {
            name: "Calculateur de position",
            description: "Calcule ta taille de position en fonction de ton risque. Indispensable.",
            url: "https://www.myfxbook.com/forex-calculators/position-size",
            tag: "Essentiel",
            tagColor: "blue"
          },
          {
            name: "Calculateur de pip",
            description: "Calcule la valeur du pip pour chaque paire.",
            url: "https://www.myfxbook.com/forex-calculators/pip-calculator",
            tag: "Gratuit",
            tagColor: "blue"
          }
        ]
      },
      {
        name: "Formation continue",
        icon: Video,
        tools: [
          {
            name: "Babypips",
            description: "La meilleure ressource gratuite pour apprendre le Forex. En anglais.",
            url: "https://www.babypips.com",
            tag: "Gratuit",
            tagColor: "blue"
          },
          {
            name: "YouTube",
            description: "Plein de contenu gratuit. Attention aux vendeurs de rêve.",
            url: "https://www.youtube.com",
            tag: "Gratuit",
            tagColor: "blue"
          }
        ]
      }
    ]
  }
};

const tagColors = {
  emerald: "bg-emerald-950 text-emerald-500 border-emerald-800",
  blue: "bg-blue-950 text-blue-500 border-blue-800",
  yellow: "bg-yellow-950 text-yellow-500 border-yellow-800",
  red: "bg-red-950 text-red-500 border-red-800"
};

export const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState("ecommerce");
  const currentData = resources[activeTab];

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero */}
      <section className="py-10 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <Wrench className={activeTab === "trading" ? "text-blue-500" : "text-emerald-500"} size={20} />
            <span className={`text-xs sm:text-sm uppercase tracking-wider font-bold ${activeTab === "trading" ? "text-blue-500" : "text-emerald-500"}`}>
              Boîte à outils
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight">
            Les <span className={activeTab === "trading" ? "text-blue-500" : "text-emerald-500"}>outils</span> que j'utilise
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 mb-6 sm:mb-8 max-w-2xl">
            Pas de bullshit, juste les outils qui marchent vraiment. Je les utilise au quotidien.
          </p>

          {/* Tabs */}
          <div className="flex gap-2 sm:gap-4 mb-8 sm:mb-12">
            <button
              onClick={() => setActiveTab("ecommerce")}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 font-bold transition-all text-sm sm:text-base ${
                activeTab === "ecommerce"
                  ? "bg-emerald-600 text-white"
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
              }`}
            >
              <ShoppingCart size={18} />
              <span className="hidden xs:inline">E-commerce</span>
              <span className="xs:hidden">E-com</span>
            </button>
            <button
              onClick={() => setActiveTab("trading")}
              className={`flex items-center gap-1 sm:gap-2 px-3 sm:px-6 py-2 sm:py-3 font-bold transition-all text-sm sm:text-base ${
                activeTab === "trading"
                  ? "bg-blue-600 text-white"
                  : "bg-neutral-800 text-neutral-400 hover:bg-neutral-700"
              }`}
            >
              <TrendingUp size={18} />
              Trading
            </button>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
          {currentData.categories.map((category, catIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={catIndex}>
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center ${activeTab === "trading" ? "bg-blue-600" : "bg-emerald-600"}`}>
                    <IconComponent size={16} className="text-white sm:w-5 sm:h-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">{category.name}</h2>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="bg-neutral-900 border border-neutral-800 p-4 sm:p-6 hover:border-neutral-700 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
                        <h3 className="text-base sm:text-lg font-bold text-white">{tool.name}</h3>
                        {tool.tag && (
                          <span className={`text-xs px-2 py-1 border flex-shrink-0 ${tagColors[tool.tagColor]}`}>
                            {tool.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-neutral-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                        {tool.description}
                      </p>
                      {tool.url && (
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                            activeTab === "trading" ? "text-blue-500 hover:text-blue-400" : "text-emerald-500 hover:text-emerald-400"
                          }`}
                        >
                          Visiter <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-neutral-900/50 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-neutral-500 text-xs sm:text-sm">
            <Star className="inline mr-1 sm:mr-2" size={12} />
            Ces recommandations sont basées sur mon expérience personnelle. Je ne suis affilié à aucun de ces outils.
            Fais toujours tes propres recherches avant de t'engager.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
