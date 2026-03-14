# SayKee - Product Requirements Document

## Original Problem Statement
Site web pour "SayKee" - plateforme de formation gratuite en trading et e-commerce. Design moderne, dark mode, ton confiant/arrogant reflétant le succès du créateur (10-45k€/mois).

## Target Audience
- Débutants à avancés en trading/e-commerce
- Personnes cherchant des formations gratuites et pratiques

## Core Requirements
1. **Pages principales** : Accueil, À propos, Trading, E-commerce, Contact
2. **Système complet** : Inscription/connexion + suivi de progression
3. **Ton** : Confiant, direct, résultats orientés
4. **Design** : Dark mode moderne/élégant/impactant

---

## What's Been Implemented

### 14 Mars 2026 - Face Cachée Feature
- **Bouton clown 🤡** dans le header qui déclenche le mode secret
- **Page SecretHomePage** avec thème rouge/noir pour sensibilisation aux arnaques
- **Transition fluide** entre mode normal et mode secret
- **Contenu éducatif** : Types d'arnaques (Carding, Phishing, Faux sites, Usurpation), section "Mon parcours", conseils de protection, ressources utiles

### Précédemment implémenté
- Structure frontend React multi-pages
- Design dark mode approuvé sur HomePage
- Contenu homepage avec ton "arrogant" (sections Mes résultats, Pourquoi SayKee, etc.)
- Header avec navigation responsive
- Footer

---

## Code Architecture
```
/app
├── backend/
│   ├── server.py (FastAPI - basique)
│   └── .env
└── frontend/
    ├── src/
    │   ├── context/
    │   │   └── SecretModeContext.jsx (NEW)
    │   ├── components/
    │   │   ├── Header.jsx (updated with secret mode toggle)
    │   │   └── Footer.jsx
    │   ├── pages/
    │   │   ├── HomePage.jsx
    │   │   ├── SecretHomePage.jsx (NEW - face cachée)
    │   │   ├── AboutPage.jsx
    │   │   ├── TradingPage.jsx
    │   │   ├── EcommercePage.jsx
    │   │   ├── ContactPage.jsx
    │   │   ├── LoginPage.jsx
    │   │   └── DashboardPage.jsx
    │   └── App.js (updated with SecretModeProvider)
    └── package.json
```

---

## Prioritized Backlog

### P0 - Haute priorité
1. **Appliquer le design approuvé à toutes les pages**
   - AboutPage, TradingPage, EcommercePage, ContactPage, LoginPage, DashboardPage
   - Utiliser le même style dark mode que HomePage

### P1 - Moyenne priorité  
2. **Backend & Authentification**
   - MongoDB models: users, courses, modules, user_progress
   - API endpoints: /api/auth/register, /api/auth/login
   - Connexion frontend au backend

3. **Système de cours**
   - CRUD API pour courses et modules
   - Suivi de progression utilisateur
   - Remplacer données mockées par données live

### P2 - Basse priorité
4. **Contenu de la face cachée**
   - Ajouter plus de détails sur le parcours personnel
   - Enrichir les sections de sensibilisation

5. **Améliorations UX**
   - Animations de transition plus élaborées
   - Responsive design affiné

---

## Technical Notes
- **Frontend**: React, Tailwind CSS, shadcn/ui, React Router
- **Backend**: FastAPI, MongoDB
- **État global**: SecretModeContext pour la face cachée

## Mocked Data
- Toutes les données sont actuellement mockées dans le frontend
- Pas de backend fonctionnel pour l'authentification/cours
