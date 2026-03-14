import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-3xl font-bold">
              <span className="text-white">Say</span>
              <span className="text-green-500 group-hover:text-green-400 transition-colors">Kee</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="px-4 py-2 text-gray-300 hover:text-white font-medium transition-colors rounded-lg hover:bg-white/5">
              Accueil
            </Link>
            <Link to="/about" className="px-4 py-2 text-gray-300 hover:text-white font-medium transition-colors rounded-lg hover:bg-white/5">
              À propos
            </Link>
            <Link to="/trading" className="px-4 py-2 text-gray-300 hover:text-white font-medium transition-colors rounded-lg hover:bg-white/5">
              Trading
            </Link>
            <Link to="/ecommerce" className="px-4 py-2 text-gray-300 hover:text-white font-medium transition-colors rounded-lg hover:bg-white/5">
              E-commerce
            </Link>
            <Link to="/contact" className="px-4 py-2 text-gray-300 hover:text-white font-medium transition-colors rounded-lg hover:bg-white/5">
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {isLoggedIn ? (
              <>
                <Button onClick={() => navigate("/dashboard")} variant="ghost" className="hover:bg-white/5">
                  Dashboard
                </Button>
                <Button onClick={handleLogout} variant="outline" className="border-white/10 hover:bg-white/5">
                  Déconnexion
                </Button>
              </>
            ) : (
              <Button onClick={() => navigate("/login")} className="bg-green-600 hover:bg-green-500 text-black font-semibold">
                Se connecter
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/5 animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-1">
              <Link
                to="/"
                className="px-4 py-3 text-gray-300 hover:text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/about"
                className="px-4 py-3 text-gray-300 hover:text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                to="/trading"
                className="px-4 py-3 text-gray-300 hover:text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Trading
              </Link>
              <Link
                to="/ecommerce"
                className="px-4 py-3 text-gray-300 hover:text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                E-commerce
              </Link>
              <Link
                to="/contact"
                className="px-4 py-3 text-gray-300 hover:text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              {isLoggedIn ? (
                <>
                  <Button onClick={() => { navigate("/dashboard"); setIsMenuOpen(false); }} variant="ghost" className="w-full justify-start hover:bg-white/5">
                    Dashboard
                  </Button>
                  <Button onClick={handleLogout} variant="outline" className="w-full border-white/10 hover:bg-white/5">
                    Déconnexion
                  </Button>
                </>
              ) : (
                <Button onClick={() => { navigate("/login"); setIsMenuOpen(false); }} className="w-full bg-green-600 hover:bg-green-500 text-black font-semibold mt-2">
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
