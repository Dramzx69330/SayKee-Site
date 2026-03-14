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
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-white">
            SayKee
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Accueil
            </Link>
            <Link to="/about" className="text-sm text-zinc-400 hover:text-white transition-colors">
              À propos
            </Link>
            <Link to="/trading" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Trading
            </Link>
            <Link to="/ecommerce" className="text-sm text-zinc-400 hover:text-white transition-colors">
              E-commerce
            </Link>
            <Link to="/contact" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Button onClick={() => navigate("/dashboard")} variant="ghost" className="text-zinc-400 hover:text-white hover:bg-zinc-900">
                  Dashboard
                </Button>
                <Button onClick={handleLogout} variant="outline" className="border-zinc-700 hover:bg-zinc-900 text-white">
                  Déconnexion
                </Button>
              </>
            ) : (
              <Button onClick={() => navigate("/login")} className="bg-white hover:bg-zinc-200 text-black font-semibold">
                Se connecter
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-800">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/about"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                to="/trading"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Trading
              </Link>
              <Link
                to="/ecommerce"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                E-commerce
              </Link>
              <Link
                to="/contact"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              {isLoggedIn ? (
                <>
                  <Button onClick={() => { navigate("/dashboard"); setIsMenuOpen(false); }} variant="ghost" className="w-full justify-start">
                    Dashboard
                  </Button>
                  <Button onClick={handleLogout} variant="outline" className="w-full">
                    Déconnexion
                  </Button>
                </>
              ) : (
                <Button onClick={() => { navigate("/login"); setIsMenuOpen(false); }} className="w-full bg-white hover:bg-zinc-200 text-black">
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
