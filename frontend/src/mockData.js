// Mock data pour SayKee

export const tradingModules = [
  {
    id: 1,
    title: "Introduction au Trading",
    description: "Comprendre les bases des marchés financiers et du trading",
    duration: "2 heures",
    level: "Débutant",
    progress: 0,
    modules: [
      { id: 1, name: "Qu'est-ce que le trading ?", type: "video", duration: "15min", completed: false },
      { id: 2, name: "Les différents marchés financiers", type: "article", duration: "20min", completed: false },
      { id: 3, name: "Quiz : Les bases du trading", type: "quiz", duration: "10min", completed: false }
    ],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80"
  },
  {
    id: 2,
    title: "Analyse Technique",
    description: "Maîtriser les outils d'analyse graphique et les indicateurs",
    duration: "4 heures",
    level: "Intermédiaire",
    progress: 0,
    modules: [
      { id: 1, name: "Les chandeliers japonais", type: "video", duration: "25min", completed: false },
      { id: 2, name: "Support et résistance", type: "video", duration: "30min", completed: false },
      { id: 3, name: "Indicateurs techniques (RSI, MACD)", type: "article", duration: "35min", completed: false },
      { id: 4, name: "Pratique : Analyser un graphique", type: "exercise", duration: "45min", completed: false }
    ],
    image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80"
  },
  {
    id: 3,
    title: "Gestion du Risque",
    description: "Protéger votre capital et optimiser vos gains",
    duration: "3 heures",
    level: "Intermédiaire",
    progress: 0,
    modules: [
      { id: 1, name: "Money management", type: "video", duration: "30min", completed: false },
      { id: 2, name: "Stop loss et take profit", type: "video", duration: "25min", completed: false },
      { id: 3, name: "Psychologie du trader", type: "article", duration: "20min", completed: false },
      { id: 4, name: "Quiz final", type: "quiz", duration: "15min", completed: false }
    ],
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=800&q=80"
  }
];

export const ecommerceModules = [
  {
    id: 1,
    title: "Créer sa boutique en ligne",
    description: "De l'idée au lancement de votre e-commerce",
    duration: "3 heures",
    level: "Débutant",
    progress: 0,
    modules: [
      { id: 1, name: "Choisir sa niche", type: "video", duration: "20min", completed: false },
      { id: 2, name: "Plateformes e-commerce", type: "article", duration: "25min", completed: false },
      { id: 3, name: "Créer son premier produit", type: "exercise", duration: "40min", completed: false },
      { id: 4, name: "Quiz : Bases du e-commerce", type: "quiz", duration: "10min", completed: false }
    ],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
  },
  {
    id: 2,
    title: "Marketing Digital",
    description: "Attirer et convertir vos clients",
    duration: "4 heures",
    level: "Intermédiaire",
    progress: 0,
    modules: [
      { id: 1, name: "SEO pour e-commerce", type: "video", duration: "30min", completed: false },
      { id: 2, name: "Publicité Facebook & Instagram", type: "video", duration: "35min", completed: false },
      { id: 3, name: "Email marketing", type: "article", duration: "25min", completed: false },
      { id: 4, name: "Stratégie de contenu", type: "video", duration: "30min", completed: false }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: 3,
    title: "Optimisation des Conversions",
    description: "Maximiser vos ventes et votre chiffre d'affaires",
    duration: "3 heures",
    level: "Avancé",
    progress: 0,
    modules: [
      { id: 1, name: "UX/UI pour convertir", type: "video", duration: "25min", completed: false },
      { id: 2, name: "A/B Testing", type: "article", duration: "20min", completed: false },
      { id: 3, name: "Analytics et KPIs", type: "video", duration: "30min", completed: false },
      { id: 4, name: "Cas pratique complet", type: "exercise", duration: "50min", completed: false }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    role: "Trader indépendante",
    content: "Grâce à SayKee, j'ai appris les bases du trading en quelques semaines. Les formations sont claires et très pratiques.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
  },
  {
    id: 2,
    name: "Thomas Martin",
    role: "Propriétaire e-commerce",
    content: "J'ai lancé ma boutique en ligne après avoir suivi les formations e-commerce. Mon CA a triplé en 6 mois !",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "Étudiante en finance",
    content: "Formation complète et progressive. J'ai pu appliquer immédiatement ce que j'apprenais. Excellent investissement !",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
  }
];

export const quizQuestions = {
  trading: [
    {
      id: 1,
      question: "Qu'est-ce qu'un support en analyse technique ?",
      options: [
        "Un niveau de prix où l'actif a tendance à rebondir",
        "Un indicateur de volume",
        "Une moyenne mobile",
        "Un outil de gestion du risque"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      question: "Que signifie 'RSI' ?",
      options: [
        "Relative Support Index",
        "Relative Strength Index",
        "Real Stock Investment",
        "Risk Safety Indicator"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "Quel pourcentage de votre capital devriez-vous risquer par trade ?",
      options: [
        "10-20%",
        "5-10%",
        "1-2%",
        "Plus de 20%"
      ],
      correctAnswer: 2
    }
  ],
  ecommerce: [
    {
      id: 1,
      question: "Qu'est-ce que le SEO ?",
      options: [
        "Social Email Optimization",
        "Search Engine Optimization",
        "Sales Event Organization",
        "Secure E-commerce Option"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "Quel est le taux de conversion moyen d'un e-commerce ?",
      options: [
        "15-20%",
        "10-15%",
        "5-10%",
        "2-3%"
      ],
      correctAnswer: 3
    },
    {
      id: 3,
      question: "Qu'est-ce qu'un 'Call to Action' (CTA) ?",
      options: [
        "Un appel téléphonique client",
        "Un bouton incitant à l'action",
        "Un type de publicité",
        "Un service client"
      ],
      correctAnswer: 1
    }
  ]
};

export const stats = [
  { label: "Étudiants actifs", value: "2,500+", icon: "users" },
  { label: "Formations disponibles", value: "50+", icon: "book" },
  { label: "Taux de réussite", value: "94%", icon: "trophy" },
  { label: "Heures de contenu", value: "200+", icon: "clock" }
];

export const mockUser = {
  id: 1,
  name: "Utilisateur Demo",
  email: "demo@saykee.com",
  joinedDate: "2024-01-15",
  completedModules: 5,
  inProgressModules: 3,
  totalPoints: 1250
};
