import { useEffect } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import HomePage from "./pages/HomePage";
import SecretHomePage from "./pages/SecretHomePage";
import AboutPage from "./pages/AboutPage";
import TradingPage from "./pages/TradingPage";
import EcommercePage from "./pages/EcommercePage";
import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import ModuleDetailPage from "./pages/ModuleDetailPage";
import EbookReaderPage from "./pages/EbookReaderPage";
import ChecklistPage from "./pages/ChecklistPage";
import ResourcesPage from "./pages/ResourcesPage";
// Secret pages
import CardingPage from "./pages/secret/CardingPage";
import SpooferPage from "./pages/secret/SpooferPage";
import SpamPage from "./pages/secret/SpamPage";
import SecretAboutPage from "./pages/secret/SecretAboutPage";
import SecretModuleDetailPage from "./pages/secret/SecretModuleDetailPage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { SecretModeProvider, useSecretMode } from "./context/SecretModeContext";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Component that handles conditional homepage rendering
const ConditionalHomePage = () => {
  const { isSecretMode } = useSecretMode();
  return isSecretMode ? <SecretHomePage /> : <HomePage />;
};

function AppContent() {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          {/* Main routes */}
          <Route path="/" element={<ConditionalHomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/trading" element={<TradingPage />} />
          <Route path="/ecommerce" element={<EcommercePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/checklist" element={<ChecklistPage />} />
          <Route path="/ressources" element={<ResourcesPage />} />
          <Route path="/module/:type/:id" element={<ModuleDetailPage />} />
          <Route path="/ebook/:category/:ebookId" element={<EbookReaderPage />} />
          
          {/* Secret routes */}
          <Route path="/secret/carding" element={<CardingPage />} />
          <Route path="/secret/spoofer" element={<SpooferPage />} />
          <Route path="/secret/spam" element={<SpamPage />} />
          <Route path="/secret/about" element={<SecretAboutPage />} />
          <Route path="/secret/module/:type/:id" element={<SecretModuleDetailPage />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

function App() {
  return (
    <SecretModeProvider>
      <AppContent />
    </SecretModeProvider>
  );
}

export default App;
