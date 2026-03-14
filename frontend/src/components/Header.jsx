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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold gradient-text">SayKee</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white font-medium">
              Accueil
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white font-medium">
              À propos
            </Link>
            <Link to="/trading" className="text-gray-300 hover:text-white font-medium">
              Trading
            </Link>
            <Link to="/ecommerce" className="text-gray-300 hover:text-white font-medium">
              E-commerce
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white font-medium">
              Contact
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <Button onClick={() => navigate("/dashboard")} variant="ghost">
                  Dashboard
                </Button>
                <Button onClick={handleLogout} variant="outline">
                  Déconnexion
                </Button>
              </>
            ) : (
              <Button onClick={() => navigate("/login")} className="bg-blue-900 hover:bg-blue-800">
                Se connecter
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                to="/trading"
                className="text-gray-300 hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Trading
              </Link>
              <Link
                to="/ecommerce"
                className="text-gray-300 hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                E-commerce
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              {isLoggedIn ? (
                <>
                  <Button onClick={() => { navigate("/dashboard"); setIsMenuOpen(false); }} variant="ghost" className="w-full">
                    Dashboard
                  </Button>
                  <Button onClick={handleLogout} variant="outline" className="w-full">
                    Déconnexion
                  </Button>
                </>
              ) : (
                <Button onClick={() => { navigate("/login"); setIsMenuOpen(false); }} className="w-full bg-blue-900 hover:bg-blue-800">
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
