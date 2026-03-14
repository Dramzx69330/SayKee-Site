import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">SayKee</h3>
            <p className="text-gray-400 text-sm">
              Votre partenaire pour réussir dans le trading et l'e-commerce.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white text-sm">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white text-sm">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/trading" className="text-gray-400 hover:text-white text-sm">
                  Formations Trading
                </Link>
              </li>
              <li>
                <Link to="/ecommerce" className="text-gray-400 hover:text-white text-sm">
                  Formations E-commerce
                </Link>
              </li>
            </ul>
          </div>

          {/* Formations */}
          <div>
            <h4 className="text-white font-semibold mb-4">Formations</h4>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">Analyse Technique</li>
              <li className="text-gray-400 text-sm">Gestion du Risque</li>
              <li className="text-gray-400 text-sm">Marketing Digital</li>
              <li className="text-gray-400 text-sm">Optimisation des Conversions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400 text-sm">
                <Mail size={16} className="mr-2" />
                contact@saykee.com
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Phone size={16} className="mr-2" />
                +33 1 23 45 67 89
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <MapPin size={16} className="mr-2" />
                Paris, France
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SayKee - Tous droits réservés. Créé par Elias Benguezzou
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
