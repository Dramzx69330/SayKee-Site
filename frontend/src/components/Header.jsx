import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useSecretMode } from "../context/SecretModeContext";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const { isSecretMode, toggleSecretMode } = useSecretMode();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    navigate("/");
  };

  // Navigation normale
  const normalNavLinks = [
    { to: "/", label: "Accueil" },
    { to: "/about", label: "À propos" },
    { to: "/trading", label: "Trading" },
    { to: "/ecommerce", label: "E-commerce" },
    { to: "/contact", label: "Contact" },
  ];

  // Navigation secrète
  const secretNavLinks = [
    { to: "/", label: "Accueil" },
    { to: "/secret/carding", label: "Formation Carding" },
    { to: "/secret/spoofer", label: "Spoofer" },
    { to: "/secret/spam", label: "Spam" },
    { to: "/secret/about", label: "À propos" },
  ];

  const navLinks = isSecretMode ? secretNavLinks : normalNavLinks;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-500 ${
      isSecretMode 
        ? "bg-black/90 border-red-900/50" 
        : "bg-black/70 border-neutral-800"
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className={`text-2xl font-black tracking-tight transition-all duration-500 ${
              isSecretMode ? "text-red-500" : "text-white"
            }`}>
              SAYKEE
            </div>
            <button 
              onClick={(e) => {
                e.preventDefault();
                toggleSecretMode();
              }}
              className={`text-xs opacity-30 hover:opacity-100 transition-all duration-300 ${
                isSecretMode 
                  ? "hover:scale-150" 
                  : "hover:scale-125"
              }`}
              data-testid="secret-mode-toggle"
              title=""
            >
              •
            </button>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.to} 
                to={link.to} 
                className={`text-sm font-medium transition-colors duration-300 ${
                  isSecretMode 
                    ? "text-neutral-400 hover:text-red-500" 
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Button 
                  onClick={() => navigate("/dashboard")} 
                  variant="ghost" 
                  className={`font-semibold ${
                    isSecretMode 
                      ? "text-neutral-400 hover:text-red-500 hover:bg-red-950/30" 
                      : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                  }`}
                >
                  Dashboard
                </Button>
                <Button 
                  onClick={handleLogout} 
                  variant="outline" 
                  className={`font-semibold rounded-none ${
                    isSecretMode 
                      ? "border-red-900 hover:bg-red-950/30 text-white" 
                      : "border-neutral-700 hover:bg-neutral-900 text-white"
                  }`}
                >
                  Déconnexion
                </Button>
              </>
            ) : (
              <Button 
                onClick={() => navigate("/login")} 
                className={`font-bold rounded-none ${
                  isSecretMode 
                    ? "bg-red-600 hover:bg-red-700 text-white" 
                    : "bg-white hover:bg-neutral-100 text-black"
                }`}
              >
                Se connecter
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${isSecretMode ? "text-red-500" : "text-white"}`}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden py-6 border-t transition-colors duration-500 ${
            isSecretMode ? "border-red-900/50" : "border-neutral-800"
          }`}>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors ${
                    isSecretMode 
                      ? "text-neutral-400 hover:text-red-500" 
                      : "text-neutral-400 hover:text-white"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {isLoggedIn ? (
                <>
                  <Button 
                    onClick={() => { navigate("/dashboard"); setIsMenuOpen(false); }} 
                    variant="ghost" 
                    className="w-full justify-start font-semibold"
                  >
                    Dashboard
                  </Button>
                  <Button 
                    onClick={handleLogout} 
                    variant="outline" 
                    className="w-full font-semibold rounded-none"
                  >
                    Déconnexion
                  </Button>
                </>
              ) : (
                <Button 
                  onClick={() => { navigate("/login"); setIsMenuOpen(false); }} 
                  className={`w-full font-bold rounded-none ${
                    isSecretMode 
                      ? "bg-red-600 hover:bg-red-700 text-white" 
                      : "bg-white hover:bg-neutral-100 text-black"
                  }`}
                >
                  Se connecter
                </Button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
