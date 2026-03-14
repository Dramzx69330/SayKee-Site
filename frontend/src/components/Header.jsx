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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="text-2xl font-black text-white tracking-tight">
              SAYKEE
            </div>
            <button className="w-10 h-10 flex items-center justify-center hover:opacity-80 transition-opacity">
              <img 
                src="https://www.nicepng.com/png/detail/368-3689055_hsbcs-visa-platinum-credit-card-hsbc-cash-rewards.png" 
                alt="Icon" 
                className="w-full h-full object-contain"
              />
            </button>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <Link to="/" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
              Accueil
            </Link>
            <Link to="/about" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
              À propos
            </Link>
            <Link to="/trading" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
              Trading
            </Link>
            <Link to="/ecommerce" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
              E-commerce
            </Link>
            <Link to="/contact" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <Button onClick={() => navigate("/dashboard")} variant="ghost" className="text-neutral-400 hover:text-white hover:bg-neutral-900 font-semibold">
                  Dashboard
                </Button>
                <Button onClick={handleLogout} variant="outline" className="border-neutral-700 hover:bg-neutral-900 text-white font-semibold rounded-none">
                  Déconnexion
                </Button>
              </>
            ) : (
              <Button onClick={() => navigate("/login")} className="bg-white hover:bg-neutral-100 text-black font-bold rounded-none">
                Se connecter
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-neutral-800">
            <nav className="flex flex-col gap-6">
              <Link
                to="/"
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                to="/trading"
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Trading
              </Link>
              <Link
                to="/ecommerce"
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                E-commerce
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              {isLoggedIn ? (
                <>
                  <Button onClick={() => { navigate("/dashboard"); setIsMenuOpen(false); }} variant="ghost" className="w-full justify-start font-semibold">
                    Dashboard
                  </Button>
                  <Button onClick={handleLogout} variant="outline" className="w-full font-semibold rounded-none">
                    Déconnexion
                  </Button>
                </>
              ) : (
                <Button onClick={() => { navigate("/login"); setIsMenuOpen(false); }} className="w-full bg-white hover:bg-neutral-100 text-black font-bold rounded-none">
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
