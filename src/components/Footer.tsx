
import { ArrowRight, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Trek & Terrain</h3>
            <p className="text-forest-100 mb-6 text-sm leading-relaxed">
              Discover the wonders of Indian mountains with our thoughtfully crafted trekking experiences, designed for adventurers of all levels.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-forest-100 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/treks" className="text-forest-100 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Treks
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-forest-100 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-forest-100 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-forest-100 hover:text-white transition-colors flex items-center">
                  <ArrowRight size={14} className="mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-forest-300" />
                <span className="text-forest-100">
                  123 Mountain View, <br />
                  Himalaya Heights, <br />
                  Uttarakhand, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-forest-300" />
                <span className="text-forest-100">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-forest-300" />
                <a href="mailto:info@trekandterrain.com" className="text-forest-100 hover:text-white transition-colors">
                  info@trekandterrain.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-forest-100 mb-4 text-sm">
              Subscribe to our newsletter for the latest trek updates and exclusive offers.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-forest-300 focus:outline-none focus:ring-2 focus:ring-forest-400"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-forest-500 hover:bg-forest-600 text-white px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-forest-800 text-center text-forest-400 text-sm">
          <p>© {currentYear} Trek & Terrain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
