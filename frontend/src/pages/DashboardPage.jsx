import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useSecretMode } from "../context/SecretModeContext";
import { 
  BookOpen, TrendingUp, Trophy, Clock, ArrowRight, ShoppingCart, 
  CheckCircle2, Star, Zap, Target, Award, Flame, Crown, Medal,
  ChevronRight, RotateCcw, Send, Shield, CreditCard, Package,
  Skull, Eye, Lock, Users, MessageCircle, Copy, Check, ExternalLink,
  AlertTriangle, Activity, DollarSign, Percent, Bell, Mail
} from "lucide-react";

// =====================================================
// NORMAL DASHBOARD DATA
// =====================================================
const ebooksData = {
  trading: [
    { id: "analyse-technique", title: "Analyse Technique", chapters: 6, color: "blue" },
    { id: "psychologie-trading", title: "Psychologie du Trading", chapters: 6, color: "blue" },
    { id: "gestion-risques", title: "Gestion des Risques", chapters: 6, color: "blue" }
  ],
  ecommerce: [
    { id: "lancer-boutique", title: "Lancer sa Boutique", chapters: 6, color: "emerald" },
    { id: "produits-gagnants", title: "Produits Gagnants", chapters: 6, color: "emerald" },
    { id: "facebook-ads", title: "Facebook Ads Masterclass", chapters: 6, color: "emerald" }
  ]
};

const allBadges = [
  { id: "first-ebook", name: "Premier Pas", description: "Commence ton premier ebook", icon: BookOpen, condition: (stats) => stats.startedEbooks >= 1 },
  { id: "reader", name: "Lecteur", description: "Termine 1 ebook complet", icon: CheckCircle2, condition: (stats) => stats.completedEbooks >= 1 },
  { id: "scholar", name: "Érudit", description: "Termine 3 ebooks", icon: Award, condition: (stats) => stats.completedEbooks >= 3 },
  { id: "master", name: "Maître", description: "Termine tous les ebooks", icon: Crown, condition: (stats) => stats.completedEbooks >= 6 },
  { id: "trader", name: "Trader", description: "Termine tous les ebooks Trading", icon: TrendingUp, condition: (stats) => stats.tradingCompleted >= 3 },
  { id: "entrepreneur", name: "Entrepreneur", description: "Termine tous les ebooks E-commerce", icon: ShoppingCart, condition: (stats) => stats.ecommerceCompleted >= 3 },
  { id: "checklist-starter", name: "Organisé", description: "Complète 10 items de checklist", icon: Target, condition: (stats) => stats.checklistItems >= 10 },
  { id: "checklist-master", name: "Méthodique", description: "Complète 30 items de checklist", icon: Medal, condition: (stats) => stats.checklistItems >= 30 },
  { id: "streak-3", name: "Régulier", description: "3 jours consécutifs de lecture", icon: Flame, condition: (stats) => stats.streak >= 3 },
  { id: "streak-7", name: "Déterminé", description: "7 jours consécutifs de lecture", icon: Zap, condition: (stats) => stats.streak >= 7 },
];

// =====================================================
// SECRET DASHBOARD COMPONENT
// =====================================================
const SecretDashboard = ({ userName }) => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
  const telegramHandle = "@Loukra";
  const telegramLink = "https://t.me/Loukra";

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const copyTelegram = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(telegramHandle);
        setCopied(true);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = telegramHandle;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
        setCopied(true);
      }
    } catch (err) {
      alert(`Copie manuelle : ${telegramHandle}`);
    }
    setTimeout(() => setCopied(false), 2000);
  };

  // =====================================================
  // DYNAMIC DATA GENERATION SYSTEM
  // =====================================================
  
  // Seeded random function for consistent results within time windows
  const seededRandom = (seed) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };

  // Get time-based seeds
  const now = currentTime.getTime();
  const tenHourSeed = Math.floor(now / (10 * 60 * 60 * 1000)); // Changes every 10h
  const hourSeed = Math.floor(now / (60 * 60 * 1000)); // Changes every hour
  const thirtyMinSeed = Math.floor(now / (30 * 60 * 1000)); // Changes every 30min

  // =====================================================
  // 100 ANNOUNCEMENTS DATABASE
  // =====================================================
  const allAnnouncements = [
    // New methods (type: "new")
    { type: "new", text: "Nouvelle méthode Amazon FR disponible" },
    { type: "new", text: "Méthode PayPal Business 2025 dropped" },
    { type: "new", text: "Update méthode Netflix - taux 95%" },
    { type: "new", text: "Nouvelle technique Revolut bypass" },
    { type: "new", text: "Méthode Uber Eats FR fonctionnelle" },
    { type: "new", text: "Drop méthode Apple Pay sans 3DS" },
    { type: "new", text: "Technique Booking.com mise à jour" },
    { type: "new", text: "Nouvelle méthode Steam Wallet" },
    { type: "new", text: "Method crypto cashout optimisée" },
    { type: "new", text: "Méthode Spotify Premium lifetime" },
    { type: "new", text: "Update méthode Amazon DE v3" },
    { type: "new", text: "Nouvelle technique bancaire EU" },
    { type: "new", text: "Méthode Zalando full guide" },
    { type: "new", text: "Drop méthode Nike SNKRS" },
    { type: "new", text: "Technique Google Pay validée" },
    { type: "new", text: "Nouvelle méthode ASOS UK" },
    { type: "new", text: "Update letter phishing v4.2" },
    { type: "new", text: "Méthode Disney+ gratuit" },
    { type: "new", text: "Nouvelle scama bancaire FR" },
    { type: "new", text: "Technique SMS spoof améliorée" },
    { type: "new", text: "Méthode Deliveroo 100% success" },
    { type: "new", text: "Drop méthode LinkedIn Premium" },
    { type: "new", text: "Nouvelle technique Twitch sub" },
    { type: "new", text: "Update méthode PSN Store" },
    { type: "new", text: "Méthode Xbox Gift Card active" },
    { type: "new", text: "Technique eBay seller verified" },
    { type: "new", text: "Nouvelle méthode Binance P2P" },
    { type: "new", text: "Drop cashout crypto anonyme" },
    { type: "new", text: "Méthode Airbnb host payout" },
    { type: "new", text: "Update scama Orange FR" },
    // Promos (type: "promo")
    { type: "promo", text: "Pack Pro -20% ce weekend" },
    { type: "promo", text: "Logs FR en promo -30%" },
    { type: "promo", text: "Formation VIP -15% jusqu'à minuit" },
    { type: "promo", text: "CC EU lot de 10 = 2 offertes" },
    { type: "promo", text: "RDP x3 mois au prix de 2" },
    { type: "promo", text: "Pack Starter -25% nouveaux" },
    { type: "promo", text: "Fullz FR promo flash -40%" },
    { type: "promo", text: "Sender + Scama bundle -20%" },
    { type: "promo", text: "Logs US premium -15%" },
    { type: "promo", text: "Mentorat 1 mois offert" },
    { type: "promo", text: "CC World Elite -10%" },
    { type: "promo", text: "Pack complet -35% limité" },
    { type: "promo", text: "Fullz DE lot x5 promo" },
    { type: "promo", text: "RDP dédié -20% ce mois" },
    { type: "promo", text: "Formation carding -25%" },
    { type: "promo", text: "Scama bank pack promo" },
    { type: "promo", text: "Logs UK fresh -30%" },
    { type: "promo", text: "CC Infinite -15% stock" },
    { type: "promo", text: "Bundle débutant -40%" },
    { type: "promo", text: "Promo fidélité -20%" },
    // Alerts (type: "alert")
    { type: "alert", text: "⚠️ Évitez Revolut cette semaine" },
    { type: "alert", text: "⚠️ N26 renforce la sécurité" },
    { type: "alert", text: "⚠️ Nouveau système anti-fraud Amazon" },
    { type: "alert", text: "⚠️ PayPal limite les nouveaux comptes" },
    { type: "alert", text: "⚠️ Wise bloque les VPN connus" },
    { type: "alert", text: "⚠️ Binance KYC renforcé" },
    { type: "alert", text: "⚠️ Apple vérifie les devices" },
    { type: "alert", text: "⚠️ Netflix détecte les VPS" },
    { type: "alert", text: "⚠️ Stripe nouveau captcha" },
    { type: "alert", text: "⚠️ Évitez les BIN 4xxx cette semaine" },
    { type: "alert", text: "⚠️ SFR renforce vérif SMS" },
    { type: "alert", text: "⚠️ Orange détecte les SIM virtuelles" },
    { type: "alert", text: "⚠️ Boursorama 2FA obligatoire" },
    { type: "alert", text: "⚠️ Free limite les eSIM" },
    { type: "alert", text: "⚠️ LCL nouveau système 3DS" },
    { type: "alert", text: "⚠️ Évitez méthode Carrefour" },
    { type: "alert", text: "⚠️ Cdiscount ban les proxies" },
    { type: "alert", text: "⚠️ Attention arnaqueurs Discord" },
    { type: "alert", text: "⚠️ Nouveau wave de ban Telegram" },
    { type: "alert", text: "⚠️ ProtonMail flag les bulk" },
    // Info (type: "info")
    { type: "info", text: "📌 Nouveau guide OPSEC disponible" },
    { type: "info", text: "📌 Tutorial sender mis à jour" },
    { type: "info", text: "📌 FAQ mise à jour sur le shop" },
    { type: "info", text: "📌 Nouveau channel Telegram VIP" },
    { type: "info", text: "📌 Guide anti-detect browser dispo" },
    { type: "info", text: "📌 Liste BIN actualisée" },
    { type: "info", text: "📌 Tuto RDP pour débutants" },
    { type: "info", text: "📌 Checklist sécurité updated" },
    { type: "info", text: "📌 Nouveau support 24/7 actif" },
    { type: "info", text: "📌 Groupe d'entraide créé" },
    // Success stories (type: "success")
    { type: "success", text: "🏆 Nouveau record: 12K€ en 24h" },
    { type: "success", text: "🏆 Membre VIP: 8K€ ce mois" },
    { type: "success", text: "🏆 Méthode Amazon = 15 hits/jour" },
    { type: "success", text: "🏆 Cashout 5K€ sans problème" },
    { type: "success", text: "🏆 Nouveau membre: premier 1K€" },
    { type: "success", text: "🏆 Record PayPal: 6K€ clean" },
    { type: "success", text: "🏆 Élève formation: 3K€ semaine 1" },
    { type: "success", text: "🏆 Crypto cashout: 20K€ safe" },
    { type: "success", text: "🏆 Méthode Booking: 4K€/semaine" },
    { type: "success", text: "🏆 CC shopping: 10 hits consécutifs" },
    // Updates (type: "update")
    { type: "update", text: "🔄 Mise à jour stock Logs FR" },
    { type: "update", text: "🔄 Nouveaux RDP US ajoutés" },
    { type: "update", text: "🔄 CC EU restockées" },
    { type: "update", text: "🔄 Fullz UK disponibles" },
    { type: "update", text: "🔄 Scama bancaire v5 dispo" },
    { type: "update", text: "🔄 Update sender SMTP" },
    { type: "update", text: "🔄 Nouveaux proxies résidentiels" },
    { type: "update", text: "🔄 Letter PayPal mise à jour" },
    { type: "update", text: "🔄 Stock Logs DE rechargé" },
    { type: "update", text: "🔄 CC Premium restockées" },
  ];

  // Select 3 random announcements based on 10h seed
  const getAnnouncements = () => {
    const shuffled = [...allAnnouncements].sort(() => seededRandom(tenHourSeed + 1) - 0.5);
    const selected = shuffled.slice(0, 3);
    const times = ["Il y a 2h", "Il y a 5h", "Il y a 8h"];
    return selected.map((ann, i) => ({ ...ann, time: times[i] }));
  };

  // =====================================================
  // DYNAMIC SERVICE STATUS
  // =====================================================
  const baseServices = [
    { name: "Logs FR", baseStock: 45, minStock: 10, maxStock: 80 },
    { name: "Logs US", baseStock: 100, minStock: 50, maxStock: 200 },
    { name: "Logs DE", baseStock: 35, minStock: 5, maxStock: 60 },
    { name: "CC EU", baseStock: 25, minStock: 0, maxStock: 50 },
    { name: "CC US", baseStock: 40, minStock: 10, maxStock: 70 },
    { name: "RDP Clean", baseStock: 999, minStock: 999, maxStock: 999, infinite: true },
    { name: "RDP Dédié", baseStock: 15, minStock: 0, maxStock: 25 },
    { name: "Fullz FR", baseStock: 20, minStock: 0, maxStock: 40 },
    { name: "Fullz US", baseStock: 30, minStock: 5, maxStock: 50 },
    { name: "Scama Bank", baseStock: 999, minStock: 999, maxStock: 999, infinite: true },
    { name: "Scama PayPal", baseStock: 999, minStock: 999, maxStock: 999, infinite: true },
    { name: "Sender SMTP", baseStock: 999, minStock: 999, maxStock: 999, infinite: true },
  ];

  const getServiceStatus = () => {
    return baseServices.slice(0, 6).map((service, index) => {
      if (service.infinite) {
        return { name: service.name, status: "available", stock: "∞" };
      }
      
      // Calculate stock variation based on hour seed
      const variation = Math.floor(seededRandom(hourSeed + index * 17) * 30) - 15;
      let stock = Math.max(0, Math.min(service.maxStock, service.baseStock + variation));
      
      // Add some randomness within the hour
      const microVariation = Math.floor(seededRandom(hourSeed * 100 + index) * 5) - 2;
      stock = Math.max(0, stock + microVariation);
      
      let status = "available";
      if (stock === 0) status = "out";
      else if (stock < 15) status = "low";
      
      return {
        name: service.name,
        status,
        stock: stock === 0 ? "0" : stock < 100 ? stock.toString() : `${stock}+`
      };
    });
  };

  // =====================================================
  // DYNAMIC RECENT WINS
  // =====================================================
  const winnerNames = [
    "A***x", "B***o", "C***a", "D***n", "E***i", "F***k", "G***r", "H***s",
    "I***a", "J***m", "K***a", "L***o", "M***x", "N***e", "O***r", "P***l",
    "Q***n", "R***y", "S***n", "T***o", "U***a", "V***k", "W***m", "X***r",
    "Y***s", "Z***a", "Al***", "Be***", "Ch***", "Da***", "Em***", "Fr***",
  ];

  const winMethods = [
    "Amazon FR", "Amazon DE", "Amazon UK", "Amazon US", "PayPal FR", "PayPal UK",
    "CC Shopping", "Bank Log", "Crypto Cash", "Binance P2P", "Booking", "Airbnb",
    "Netflix x10", "Spotify x50", "Steam Cards", "PSN Cards", "Xbox Cards",
    "Uber Eats", "Deliveroo", "eBay Seller", "Zalando", "ASOS", "Nike SNKRS",
  ];

  const getRecentWins = () => {
    const wins = [];
    for (let i = 0; i < 4; i++) {
      const seed = thirtyMinSeed + i * 7;
      const nameIndex = Math.floor(seededRandom(seed) * winnerNames.length);
      const methodIndex = Math.floor(seededRandom(seed + 1) * winMethods.length);
      const amount = Math.floor(seededRandom(seed + 2) * 4500) + 500;
      
      const hour = Math.floor(seededRandom(seed + 3) * 12) + 8;
      const minute = Math.floor(seededRandom(seed + 4) * 60);
      const timeStr = i === 3 ? "Hier" : `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      
      wins.push({
        user: winnerNames[nameIndex],
        amount: `${amount.toLocaleString('fr-FR')}€`,
        method: winMethods[methodIndex],
        time: timeStr
      });
    }
    return wins;
  };

  // =====================================================
  // DYNAMIC UPCOMING DROPS
  // =====================================================
  const dropNames = [
    { name: "Méthode Binance 2025", type: "method" },
    { name: "Logs Banque FR x500", type: "stock" },
    { name: "Formation Crypto Cashout", type: "formation" },
    { name: "Méthode Amazon Prime Day", type: "method" },
    { name: "CC World Elite Batch", type: "stock" },
    { name: "Tutorial Anti-Detect Pro", type: "formation" },
    { name: "Méthode PayPal Business", type: "method" },
    { name: "Fullz DE Premium x200", type: "stock" },
    { name: "Masterclass Carding", type: "formation" },
    { name: "Méthode Revolut Bypass", type: "method" },
    { name: "RDP Résidentiel EU", type: "stock" },
    { name: "Formation OPSEC Avancé", type: "formation" },
    { name: "Méthode Steam Unlimited", type: "method" },
    { name: "Logs UK Banking x300", type: "stock" },
    { name: "Tutorial Sender Pro", type: "formation" },
    { name: "Méthode Booking Refund", type: "method" },
    { name: "CC Infinite Batch", type: "stock" },
    { name: "Formation Cashout Crypto", type: "formation" },
    { name: "Méthode Nike Bot", type: "method" },
    { name: "Fullz US SSN x100", type: "stock" },
  ];

  const getUpcomingDrops = () => {
    const drops = [];
    const today = new Date(currentTime);
    
    for (let i = 0; i < 3; i++) {
      const seed = tenHourSeed + i * 13;
      const dropIndex = Math.floor(seededRandom(seed) * dropNames.length);
      const daysAhead = Math.floor(seededRandom(seed + 1) * 14) + 2 + (i * 5);
      
      const dropDate = new Date(today);
      dropDate.setDate(dropDate.getDate() + daysAhead);
      const dateStr = dropDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
      
      drops.push({
        ...dropNames[dropIndex],
        date: dateStr
      });
    }
    return drops;
  };

  // =====================================================
  // OPSEC TIPS (30 tips, changes daily)
  // =====================================================
  const opsecTips = [
    "Toujours utiliser un RDP différent de ton IP réelle",
    "Change de user-agent à chaque session",
    "Utilise des cartes SIM prépayées anonymes",
    "Ne garde jamais de logs sur ton PC personnel",
    "VPN → RDP → Navigateur = setup de base",
    "Vérifie toujours les BINs avant d'utiliser",
    "Utilise un MAC address spoofer",
    "Ne réutilise jamais les mêmes emails",
    "Chiffre toujours tes communications",
    "Utilise des wallets crypto différents pour chaque opération",
    "Ne parle jamais de tes activités sur ton tel principal",
    "Change de RDP après chaque grosse opération",
    "Utilise Tails OS pour les opérations sensibles",
    "Ne te connecte jamais depuis ton domicile",
    "Vérifie les leaks de tes emails régulièrement",
    "Utilise des proxies résidentiels, pas datacenter",
    "Ne garde pas d'historique de conversation",
    "Paye toujours en crypto pour tes outils",
    "Utilise un gestionnaire de mots de passe offline",
    "Change tes pseudos régulièrement",
    "Ne fais jamais confiance aux inconnus",
    "Vérifie toujours les feedbacks avant d'acheter",
    "Utilise des machines virtuelles jetables",
    "Ne clique jamais sur des liens suspects",
    "Garde tes outils sur une clé USB chiffrée",
    "Utilise des DNS sécurisés (pas ceux de ton FAI)",
    "Désactive WebRTC sur ton navigateur",
    "Ne te vante jamais de tes gains",
    "Utilise des emails temporaires pour les tests",
    "Fais des pauses régulières pour éviter les patterns",
  ];
  
  const dailyTip = opsecTips[Math.floor(currentTime.getDate() % opsecTips.length)];

  // Generate dynamic data
  const announcements = getAnnouncements();
  const serviceStatus = getServiceStatus();
  const recentWins = getRecentWins();
  const upcomingDrops = getUpcomingDrops();

  const getStatusColor = (status) => {
    switch(status) {
      case "available": return "bg-green-500";
      case "low": return "bg-yellow-500";
      case "out": return "bg-red-500";
      default: return "bg-neutral-500";
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case "available": return "Dispo";
      case "low": return "Stock bas";
      case "out": return "Rupture";
      default: return "N/A";
    }
  };

  const getAnnouncementColor = (type) => {
    switch(type) {
      case "new": return "bg-green-500";
      case "promo": return "bg-yellow-500";
      case "alert": return "bg-red-500";
      case "info": return "bg-blue-500";
      case "success": return "bg-purple-500";
      case "update": return "bg-cyan-500";
      default: return "bg-neutral-500";
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Header */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 border-b border-red-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/30 via-black to-black" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/20 blur-3xl rounded-full" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-600 flex items-center justify-center">
                <Skull size={24} className="text-white" />
              </div>
              <div>
                <p className="text-neutral-500 text-xs sm:text-sm">Bienvenue dans l'ombre</p>
                <h1 className="text-xl sm:text-2xl font-black text-white">
                  {userName}
                </h1>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-neutral-500 text-xs">Heure locale</p>
                <p className="text-white font-mono text-lg">
                  {currentTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 sm:py-3 transition-colors text-sm"
              >
                <Send size={16} />
                <span className="hidden sm:inline">Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            
            {/* Announcements */}
            <div className="bg-neutral-900 border border-neutral-800">
              <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bell size={18} className="text-red-500" />
                  <h2 className="font-bold text-white">Annonces</h2>
                </div>
                <span className="text-xs text-neutral-500">Actualités</span>
              </div>
              <div className="divide-y divide-neutral-800">
                {announcements.map((ann, i) => (
                  <div key={i} className="p-4 flex items-start gap-3 hover:bg-neutral-800/50 transition-colors">
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getAnnouncementColor(ann.type)}`} />
                    <div className="flex-1">
                      <p className="text-white text-sm">{ann.text}</p>
                      <p className="text-neutral-500 text-xs mt-1">{ann.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Status */}
            <div className="bg-neutral-900 border border-neutral-800">
              <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity size={18} className="text-red-500" />
                  <h2 className="font-bold text-white">Statut des Services</h2>
                </div>
                <span className="text-xs text-green-500 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  En ligne
                </span>
              </div>
              <div className="p-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {serviceStatus.map((service, i) => (
                  <div key={i} className="bg-neutral-800/50 p-3 flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-medium">{service.name}</p>
                      <p className="text-neutral-500 text-xs">Stock: {service.stock}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block w-2 h-2 rounded-full ${getStatusColor(service.status)}`} />
                      <p className={`text-xs mt-1 ${
                        service.status === "available" ? "text-green-500" :
                        service.status === "low" ? "text-yellow-500" :
                        "text-red-500"
                      }`}>{getStatusText(service.status)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t border-neutral-800">
                <Button
                  onClick={() => navigate("/secret/shop")}
                  className="w-full bg-red-600 hover:bg-red-700 rounded-none font-bold"
                >
                  Voir le Shop
                  <ChevronRight size={18} className="ml-2" />
                </Button>
              </div>
            </div>

            {/* Recent Wins */}
            <div className="bg-neutral-900 border border-neutral-800">
              <div className="p-4 border-b border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <DollarSign size={18} className="text-green-500" />
                  <h2 className="font-bold text-white">Derniers Succès</h2>
                </div>
                <span className="text-xs text-neutral-500">Communauté</span>
              </div>
              <div className="divide-y divide-neutral-800">
                {recentWins.map((win, i) => (
                  <div key={i} className="p-4 flex items-center justify-between hover:bg-neutral-800/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-950 flex items-center justify-center">
                        <Trophy size={14} className="text-green-500" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{win.user}</p>
                        <p className="text-neutral-500 text-xs">{win.method}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-green-500 font-bold">{win.amount}</p>
                      <p className="text-neutral-500 text-xs">{win.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 sm:space-y-6">
            
            {/* OPSEC Tip */}
            <div className="bg-gradient-to-br from-red-950/50 to-neutral-900 border border-red-900/50 p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-3">
                <Shield size={18} className="text-red-500" />
                <h3 className="font-bold text-white text-sm">Tip OPSEC du jour</h3>
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">
                💡 {dailyTip}
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-neutral-900 border border-neutral-800 p-4 sm:p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-600 flex items-center justify-center">
                  <Send size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white font-bold">Contact Direct</p>
                  <p className="text-neutral-500 text-xs">Réponse rapide garantie</p>
                </div>
              </div>
              <div className="space-y-2">
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 transition-colors text-sm"
                >
                  <Send size={16} />
                  Ouvrir Telegram
                </a>
                <button
                  onClick={copyTelegram}
                  className="flex items-center justify-center gap-2 w-full bg-neutral-800 hover:bg-neutral-700 text-white py-3 border border-neutral-700 transition-colors text-sm"
                >
                  {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                  {copied ? "Copié !" : telegramHandle}
                </button>
              </div>
            </div>

            {/* Upcoming Drops */}
            <div className="bg-neutral-900 border border-neutral-800">
              <div className="p-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-yellow-500" />
                  <h3 className="font-bold text-white">Prochains Drops</h3>
                </div>
              </div>
              <div className="p-4 space-y-3">
                {upcomingDrops.map((drop, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-neutral-800/50">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 flex items-center justify-center ${
                        drop.type === "method" ? "bg-purple-950" :
                        drop.type === "stock" ? "bg-green-950" :
                        "bg-blue-950"
                      }`}>
                        {drop.type === "method" ? <Eye size={14} className="text-purple-500" /> :
                         drop.type === "stock" ? <Package size={14} className="text-green-500" /> :
                         <BookOpen size={14} className="text-blue-500" />}
                      </div>
                      <p className="text-white text-sm">{drop.name}</p>
                    </div>
                    <span className="text-neutral-500 text-xs">{drop.date}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-neutral-900 border border-neutral-800 p-4">
              <p className="text-neutral-500 text-xs mb-3">Navigation rapide</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => navigate("/secret/carding")}
                  className="p-3 bg-neutral-800 hover:bg-red-950/50 transition-colors text-left"
                >
                  <CreditCard size={16} className="text-red-500 mb-1" />
                  <p className="text-white text-xs font-medium">Carding</p>
                </button>
                <button
                  onClick={() => navigate("/secret/spam")}
                  className="p-3 bg-neutral-800 hover:bg-red-950/50 transition-colors text-left"
                >
                  <Mail size={16} className="text-orange-500 mb-1" />
                  <p className="text-white text-xs font-medium">Spam</p>
                </button>
                <button
                  onClick={() => navigate("/secret/spoofer")}
                  className="p-3 bg-neutral-800 hover:bg-red-950/50 transition-colors text-left"
                >
                  <Shield size={16} className="text-purple-500 mb-1" />
                  <p className="text-white text-xs font-medium">Spoofer</p>
                </button>
                <button
                  onClick={() => navigate("/secret/shop")}
                  className="p-3 bg-neutral-800 hover:bg-red-950/50 transition-colors text-left"
                >
                  <ShoppingCart size={16} className="text-green-500 mb-1" />
                  <p className="text-white text-xs font-medium">Shop</p>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Warning */}
      <section className="py-4 px-4 sm:px-6 bg-red-950/20 border-t border-red-900/30">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2">
          <AlertTriangle className="text-red-500 flex-shrink-0" size={14} />
          <p className="text-red-300/70 text-xs text-center">
            Utilisation à tes risques. Reste safe, reste discret.
          </p>
        </div>
      </section>
    </div>
  );
};

// =====================================================
// NORMAL DASHBOARD COMPONENT
// =====================================================
const NormalDashboard = ({ userName }) => {
  const navigate = useNavigate();
  const [ebookProgress, setEbookProgress] = useState({});
  const [checklistProgress, setChecklistProgress] = useState({});
  const [stats, setStats] = useState({
    startedEbooks: 0,
    completedEbooks: 0,
    tradingCompleted: 0,
    ecommerceCompleted: 0,
    checklistItems: 0,
    streak: 0,
    totalChaptersRead: 0
  });
  const [earnedBadges, setEarnedBadges] = useState([]);

  useEffect(() => {
    // Load ebook progress from localStorage
    const savedProgress = localStorage.getItem("saykee-ebook-progress");
    const progress = savedProgress ? JSON.parse(savedProgress) : {};
    setEbookProgress(progress);

    // Load checklist progress
    const savedChecklist = localStorage.getItem("saykee-checklist");
    const checklist = savedChecklist ? JSON.parse(savedChecklist) : {};
    setChecklistProgress(checklist);

    // Calculate stats
    calculateStats(progress, checklist);
  }, []);

  const calculateStats = (progress, checklist) => {
    let startedEbooks = 0;
    let completedEbooks = 0;
    let tradingCompleted = 0;
    let ecommerceCompleted = 0;
    let totalChaptersRead = 0;

    ebooksData.trading.forEach(ebook => {
      const ebookProg = progress[`trading-${ebook.id}`] || {};
      const chaptersRead = Object.values(ebookProg).filter(v => v === true).length;
      totalChaptersRead += chaptersRead;
      if (chaptersRead > 0) startedEbooks++;
      if (chaptersRead >= ebook.chapters) {
        completedEbooks++;
        tradingCompleted++;
      }
    });

    ebooksData.ecommerce.forEach(ebook => {
      const ebookProg = progress[`ecommerce-${ebook.id}`] || {};
      const chaptersRead = Object.values(ebookProg).filter(v => v === true).length;
      totalChaptersRead += chaptersRead;
      if (chaptersRead > 0) startedEbooks++;
      if (chaptersRead >= ebook.chapters) {
        completedEbooks++;
        ecommerceCompleted++;
      }
    });

    const checklistItems = Object.values(checklist).filter(v => v === true).length;

    const lastVisit = localStorage.getItem("saykee-last-visit");
    const today = new Date().toDateString();
    let streak = parseInt(localStorage.getItem("saykee-streak") || "0");
    
    if (lastVisit !== today) {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      if (lastVisit === yesterday) {
        streak++;
      } else if (lastVisit) {
        streak = 1;
      } else {
        streak = 1;
      }
      localStorage.setItem("saykee-streak", streak.toString());
      localStorage.setItem("saykee-last-visit", today);
    }

    const newStats = {
      startedEbooks,
      completedEbooks,
      tradingCompleted,
      ecommerceCompleted,
      checklistItems,
      streak,
      totalChaptersRead
    };

    setStats(newStats);
    const earned = allBadges.filter(badge => badge.condition(newStats));
    setEarnedBadges(earned);
  };

  const getEbookProgressPercent = (category, ebookId) => {
    const key = `${category}-${ebookId}`;
    const progress = ebookProgress[key] || {};
    const chaptersRead = Object.values(progress).filter(v => v === true).length;
    const ebook = ebooksData[category].find(e => e.id === ebookId);
    return ebook ? Math.round((chaptersRead / ebook.chapters) * 100) : 0;
  };

  const resetProgress = () => {
    if (window.confirm("Tu veux vraiment réinitialiser toute ta progression ? Cette action est irréversible.")) {
      localStorage.removeItem("saykee-ebook-progress");
      localStorage.removeItem("saykee-checklist");
      localStorage.removeItem("saykee-streak");
      setEbookProgress({});
      setChecklistProgress({});
      calculateStats({}, {});
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 border-b border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-4xl font-black text-white mb-2">
                Yo <span className="text-blue-500">{userName}</span> ! 👋
              </h1>
              <p className="text-neutral-400 text-sm sm:text-base">
                {stats.streak > 0 ? `🔥 ${stats.streak} jour${stats.streak > 1 ? 's' : ''} de suite sur SayKee !` : "C'est parti pour apprendre !"}
              </p>
            </div>
            <button
              onClick={resetProgress}
              className="flex items-center gap-2 text-neutral-500 hover:text-red-500 transition-colors text-sm self-start sm:self-auto"
            >
              <RotateCcw size={16} />
              Reset
            </button>
          </div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="bg-neutral-900 border border-neutral-800 p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 flex items-center justify-center">
                  <BookOpen size={16} className="text-white sm:w-5 sm:h-5" />
                </div>
                <span className="text-neutral-400 text-xs sm:text-sm">Ebooks lus</span>
              </div>
              <p className="text-2xl sm:text-4xl font-black text-white">{stats.completedEbooks}<span className="text-neutral-600 text-lg sm:text-2xl">/6</span></p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-600 flex items-center justify-center">
                  <CheckCircle2 size={16} className="text-white sm:w-5 sm:h-5" />
                </div>
                <span className="text-neutral-400 text-xs sm:text-sm">Chapitres</span>
              </div>
              <p className="text-2xl sm:text-4xl font-black text-white">{stats.totalChaptersRead}<span className="text-neutral-600 text-lg sm:text-2xl">/36</span></p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-600 flex items-center justify-center">
                  <Target size={16} className="text-white sm:w-5 sm:h-5" />
                </div>
                <span className="text-neutral-400 text-xs sm:text-sm">Checklist</span>
              </div>
              <p className="text-2xl sm:text-4xl font-black text-white">{stats.checklistItems}<span className="text-neutral-600 text-lg sm:text-2xl">/42</span></p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-4 sm:p-6">
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 flex items-center justify-center">
                  <Trophy size={16} className="text-white sm:w-5 sm:h-5" />
                </div>
                <span className="text-neutral-400 text-xs sm:text-sm">Badges</span>
              </div>
              <p className="text-2xl sm:text-4xl font-black text-white">{earnedBadges.length}<span className="text-neutral-600 text-lg sm:text-2xl">/10</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* Ebooks Progress */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-neutral-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-black text-white mb-6 sm:mb-8">
            Ta progression <span className="text-blue-500">ebooks</span>
          </h2>

          {/* Trading */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="text-blue-500" size={20} />
              <h3 className="text-lg font-bold text-white">Trading</h3>
              <span className="text-neutral-500 text-sm">({stats.tradingCompleted}/3 complétés)</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
              {ebooksData.trading.map(ebook => {
                const percent = getEbookProgressPercent("trading", ebook.id);
                const isComplete = percent === 100;
                return (
                  <div 
                    key={ebook.id}
                    onClick={() => navigate(`/ebook/trading/${ebook.id}`)}
                    className={`bg-neutral-900 border p-4 cursor-pointer transition-all hover:border-blue-700 ${
                      isComplete ? "border-blue-600 bg-blue-950/20" : "border-neutral-800"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-white text-sm sm:text-base">{ebook.title}</h4>
                      {isComplete && <CheckCircle2 className="text-blue-500" size={18} />}
                    </div>
                    <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden mb-2">
                      <div 
                        className="h-full bg-blue-600 transition-all duration-500"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">{Math.round(percent * ebook.chapters / 100)}/{ebook.chapters} chapitres</span>
                      <span className={isComplete ? "text-blue-500 font-bold" : "text-neutral-400"}>{percent}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* E-commerce */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart className="text-emerald-500" size={20} />
              <h3 className="text-lg font-bold text-white">E-commerce</h3>
              <span className="text-neutral-500 text-sm">({stats.ecommerceCompleted}/3 complétés)</span>
            </div>
            <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
              {ebooksData.ecommerce.map(ebook => {
                const percent = getEbookProgressPercent("ecommerce", ebook.id);
                const isComplete = percent === 100;
                return (
                  <div 
                    key={ebook.id}
                    onClick={() => navigate(`/ebook/ecommerce/${ebook.id}`)}
                    className={`bg-neutral-900 border p-4 cursor-pointer transition-all hover:border-emerald-700 ${
                      isComplete ? "border-emerald-600 bg-emerald-950/20" : "border-neutral-800"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-white text-sm sm:text-base">{ebook.title}</h4>
                      {isComplete && <CheckCircle2 className="text-emerald-500" size={18} />}
                    </div>
                    <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden mb-2">
                      <div 
                        className="h-full bg-emerald-600 transition-all duration-500"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-500">{Math.round(percent * ebook.chapters / 100)}/{ebook.chapters} chapitres</span>
                      <span className={isComplete ? "text-emerald-500 font-bold" : "text-neutral-400"}>{percent}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-black text-white mb-6 sm:mb-8">
            Tes <span className="text-yellow-500">badges</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {allBadges.map(badge => {
              const isEarned = earnedBadges.find(b => b.id === badge.id);
              const IconComponent = badge.icon;
              return (
                <div 
                  key={badge.id}
                  className={`p-4 sm:p-6 text-center transition-all ${
                    isEarned 
                      ? "bg-yellow-950/30 border border-yellow-800" 
                      : "bg-neutral-900 border border-neutral-800 opacity-50"
                  }`}
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-3 flex items-center justify-center ${
                    isEarned ? "bg-yellow-600" : "bg-neutral-800"
                  }`}>
                    <IconComponent size={24} className={isEarned ? "text-white" : "text-neutral-600"} />
                  </div>
                  <h4 className={`font-bold text-sm sm:text-base mb-1 ${isEarned ? "text-yellow-500" : "text-neutral-600"}`}>
                    {badge.name}
                  </h4>
                  <p className="text-xs text-neutral-500">{badge.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-neutral-900/30 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-black text-white mb-6 sm:mb-8">
            Actions <span className="text-blue-500">rapides</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <button
              onClick={() => navigate("/trading")}
              className="flex items-center gap-3 p-4 bg-blue-950/30 border border-blue-900/50 hover:border-blue-700 transition-colors text-left"
            >
              <TrendingUp className="text-blue-500 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-white text-sm sm:text-base">Ebooks Trading</h4>
                <p className="text-xs text-neutral-400">Apprends à trader</p>
              </div>
              <ChevronRight className="text-neutral-600 ml-auto" size={20} />
            </button>

            <button
              onClick={() => navigate("/ecommerce")}
              className="flex items-center gap-3 p-4 bg-emerald-950/30 border border-emerald-900/50 hover:border-emerald-700 transition-colors text-left"
            >
              <ShoppingCart className="text-emerald-500 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-white text-sm sm:text-base">Ebooks E-commerce</h4>
                <p className="text-xs text-neutral-400">Lance ta boutique</p>
              </div>
              <ChevronRight className="text-neutral-600 ml-auto" size={20} />
            </button>

            <button
              onClick={() => navigate("/checklist")}
              className="flex items-center gap-3 p-4 bg-yellow-950/30 border border-yellow-900/50 hover:border-yellow-700 transition-colors text-left"
            >
              <Target className="text-yellow-500 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-white text-sm sm:text-base">Checklist</h4>
                <p className="text-xs text-neutral-400">Suis ta roadmap</p>
              </div>
              <ChevronRight className="text-neutral-600 ml-auto" size={20} />
            </button>

            <button
              onClick={() => navigate("/ressources")}
              className="flex items-center gap-3 p-4 bg-purple-950/30 border border-purple-900/50 hover:border-purple-700 transition-colors text-left"
            >
              <Star className="text-purple-500 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-white text-sm sm:text-base">Ressources</h4>
                <p className="text-xs text-neutral-400">Outils recommandés</p>
              </div>
              <ChevronRight className="text-neutral-600 ml-auto" size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// =====================================================
// MAIN DASHBOARD PAGE
// =====================================================
export const DashboardPage = () => {
  const navigate = useNavigate();
  const { isSecretMode } = useSecretMode();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    const name = localStorage.getItem("userName") || "Champion";
    setUserName(name);
  }, [navigate]);

  if (!userName) return null;

  return isSecretMode ? (
    <SecretDashboard userName={userName} />
  ) : (
    <NormalDashboard userName={userName} />
  );
};

export default DashboardPage;
