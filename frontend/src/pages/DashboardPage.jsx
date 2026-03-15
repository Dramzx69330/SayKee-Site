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

  // Announcements
  const announcements = [
    { type: "new", text: "Nouvelle méthode Amazon FR disponible", time: "Il y a 2h" },
    { type: "promo", text: "Pack Pro -20% jusqu'à dimanche", time: "Il y a 5h" },
    { type: "alert", text: "⚠️ Évitez Revolut cette semaine", time: "Il y a 1j" },
  ];

  // Service status
  const serviceStatus = [
    { name: "Logs FR", status: "available", stock: "50+" },
    { name: "Logs US", status: "available", stock: "120+" },
    { name: "CC EU", status: "low", stock: "12" },
    { name: "RDP Clean", status: "available", stock: "∞" },
    { name: "Fullz FR", status: "out", stock: "0" },
    { name: "Scama Netflix", status: "available", stock: "∞" },
  ];

  // Recent wins (fake data for display)
  const recentWins = [
    { user: "K***a", amount: "2,400€", method: "Amazon DE", time: "14:32" },
    { user: "M***x", amount: "890€", method: "PayPal FR", time: "12:15" },
    { user: "S***n", amount: "1,750€", method: "CC Shopping", time: "09:45" },
    { user: "L***o", amount: "3,200€", method: "Bank Log", time: "Hier" },
  ];

  // OPSEC tips
  const opsecTips = [
    "Toujours utiliser un RDP différent de ton IP réelle",
    "Change de user-agent à chaque session",
    "Utilise des cartes SIM prépayées anonymes",
    "Ne garde jamais de logs sur ton PC personnel",
    "VPN → RDP → Navigateur = setup de base",
    "Vérifie toujours les BINs avant d'utiliser",
  ];
  const dailyTip = opsecTips[Math.floor(currentTime.getDate() % opsecTips.length)];

  // Upcoming drops
  const upcomingDrops = [
    { name: "Méthode Binance 2025", date: "15 Jan", type: "method" },
    { name: "Logs Banque FR x500", date: "18 Jan", type: "stock" },
    { name: "Formation Crypto Cashout", date: "22 Jan", type: "formation" },
  ];

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
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                      ann.type === "new" ? "bg-green-500" :
                      ann.type === "promo" ? "bg-yellow-500" :
                      "bg-red-500"
                    }`} />
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
