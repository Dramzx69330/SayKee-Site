import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { useSecretMode } from "../context/SecretModeContext";
import { 
  BookOpen, TrendingUp, Trophy, Clock, ArrowRight, ShoppingCart, 
  CheckCircle2, Star, Zap, Target, Award, Flame, Crown, Medal,
  ChevronRight, RotateCcw, Send, Shield, CreditCard, Package,
  Skull, Eye, Lock, Users, MessageCircle, Copy, Check, ExternalLink,
  AlertTriangle, Activity, DollarSign, Percent
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
  
  const telegramHandle = "@Loukra";
  const telegramLink = "https://t.me/Loukra";

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

  const quickStats = [
    { label: "Formations", value: "3", icon: BookOpen, color: "red" },
    { label: "Méthodes", value: "10+", icon: Eye, color: "orange" },
    { label: "Taux réussite", value: "95%", icon: Percent, color: "green" },
    { label: "Support", value: "24/7", icon: MessageCircle, color: "purple" }
  ];

  const services = [
    { name: "Pack Starter", price: "50€", icon: Package, desc: "Scama + Letter" },
    { name: "Pack Pro", price: "150€", icon: Zap, desc: "RDP + Sender + Support", popular: true },
    { name: "Pack VIP", price: "500€", icon: Crown, desc: "Formation + Mentorat" },
    { name: "Logs/CC", price: "DM", icon: CreditCard, desc: "FR/EU/US disponibles" }
  ];

  return (
    <div className="min-h-screen pt-20 bg-black">
      {/* Hero */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 relative overflow-hidden border-b border-red-900/30">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-black" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 blur-3xl rounded-full" />
        
        <div className="max-w-6xl mx-auto relative">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Skull className="text-red-500" size={20} />
                <span className="text-xs uppercase tracking-wider text-red-500 font-bold">
                  Face Cachée
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white mb-2">
                Bienvenue <span className="text-red-500">{userName}</span>
              </h1>
              <p className="text-neutral-400 text-sm sm:text-base">
                Prêt à passer au niveau supérieur ?
              </p>
            </div>
            
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-4 sm:px-6 py-3 transition-colors self-start"
            >
              <Send size={18} />
              Contact Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {quickStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-neutral-900 border border-neutral-800 p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center ${
                      stat.color === "red" ? "bg-red-600" :
                      stat.color === "orange" ? "bg-orange-600" :
                      stat.color === "green" ? "bg-green-600" :
                      "bg-purple-600"
                    }`}>
                      <IconComponent size={16} className="text-white sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-neutral-400 text-xs sm:text-sm">{stat.label}</span>
                  </div>
                  <p className="text-2xl sm:text-4xl font-black text-white">{stat.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-red-950/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-black text-white mb-6 sm:mb-8">
            Mes <span className="text-red-500">Services</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className={`relative bg-neutral-900 border p-4 sm:p-6 transition-all hover:border-red-700 ${
                    service.popular ? "border-red-600" : "border-neutral-800"
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-2 right-4">
                      <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5">
                        HOT
                      </span>
                    </div>
                  )}
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mb-3 ${
                    service.popular ? "bg-red-600" : "bg-neutral-800"
                  }`}>
                    <IconComponent size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-white text-sm sm:text-base">{service.name}</h3>
                  <p className="text-red-500 font-black text-lg sm:text-xl mb-1">{service.price}</p>
                  <p className="text-neutral-500 text-xs sm:text-sm">{service.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-center">
            <Button
              onClick={() => navigate("/secret/shop")}
              className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-none"
            >
              Voir tous les détails
              <ChevronRight size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Card */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-red-950/50 to-neutral-900 border border-red-900/50 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                  Une question ? Un projet ?
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base">
                  DM moi sur Telegram, je réponds vite.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 transition-colors"
                >
                  <Send size={18} />
                  {telegramHandle}
                </a>
                <button
                  onClick={copyTelegram}
                  className="flex items-center justify-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white font-bold px-6 py-3 border border-neutral-700 transition-colors"
                >
                  {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                  {copied ? "Copié !" : "Copier"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 bg-neutral-900/30 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-black text-white mb-6 sm:mb-8">
            Accès <span className="text-red-500">rapide</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <button
              onClick={() => navigate("/secret/shop")}
              className="flex items-center gap-3 p-4 bg-red-950/30 border border-red-900/50 hover:border-red-700 transition-colors text-left"
            >
              <ShoppingCart className="text-red-500 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-white text-sm sm:text-base">Shop</h4>
                <p className="text-xs text-neutral-400">Tous mes services</p>
              </div>
              <ChevronRight className="text-neutral-600 ml-auto" size={20} />
            </button>

            <button
              onClick={() => navigate("/secret/carding")}
              className="flex items-center gap-3 p-4 bg-orange-950/30 border border-orange-900/50 hover:border-orange-700 transition-colors text-left"
            >
              <CreditCard className="text-orange-500 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-white text-sm sm:text-base">Carding</h4>
                <p className="text-xs text-neutral-400">Formation complète</p>
              </div>
              <ChevronRight className="text-neutral-600 ml-auto" size={20} />
            </button>

            <button
              onClick={() => navigate("/secret/spam")}
              className="flex items-center gap-3 p-4 bg-yellow-950/30 border border-yellow-900/50 hover:border-yellow-700 transition-colors text-left"
            >
              <Send className="text-yellow-500 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-white text-sm sm:text-base">Spam</h4>
                <p className="text-xs text-neutral-400">Techniques & outils</p>
              </div>
              <ChevronRight className="text-neutral-600 ml-auto" size={20} />
            </button>

            <button
              onClick={() => navigate("/secret/spoofer")}
              className="flex items-center gap-3 p-4 bg-purple-950/30 border border-purple-900/50 hover:border-purple-700 transition-colors text-left"
            >
              <Shield className="text-purple-500 flex-shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-white text-sm sm:text-base">Spoofer</h4>
                <p className="text-xs text-neutral-400">Anonymat total</p>
              </div>
              <ChevronRight className="text-neutral-600 ml-auto" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="py-6 px-4 sm:px-6 bg-red-950/30 border-t border-red-900/50">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-3">
          <AlertTriangle className="text-red-500 flex-shrink-0" size={18} />
          <p className="text-red-300/80 text-xs sm:text-sm text-center">
            Contenu éducatif uniquement. L'utilisation de ces connaissances est sous ta responsabilité.
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
