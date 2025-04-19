
import { Instagram, Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappMessage = encodeURIComponent("Hi, I am interested in knowing about the trek....");

  return (
    <footer className="bg-forest-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Trek & Terrain</h3>
            <p className="text-forest-100 mb-6 text-sm leading-relaxed">
              Discover the wonders of Indian mountains with our thoughtfully crafted trekking experiences, designed for adventurers of all levels.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/trek_and_terrain?igsh=aWJmZmsyd2Y4d3Ro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={`https://wa.me/918555079052?text=${whatsappMessage}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <MessageSquare size={18} />
              </a>
              <a 
                href="mailto:trekandterrain@gmail.com"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/treks" className="text-forest-100 hover:text-white transition-colors flex items-center">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-forest-100 hover:text-white transition-colors flex items-center">
                  About Us
                </Link>
              </li>
              <li>
                <a 
                  href="https://wa.me/916303986469?text=Hi%20I%20am%20interested%20in%20knowing%20about%20the%20trek...."
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-forest-100 hover:text-white transition-colors flex items-center"
                >
                  Contact
                </a>
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
                  IndraNagar, Nacharam, <br />
                  Telengana-500076, <br />
                  Hyderabad, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-forest-300" />
                <span className="text-forest-100">+91 8555079052</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-forest-300" />
                <a href="mailto:trekandterrain@gmail.com" className="text-forest-100 hover:text-white transition-colors">
                  trekandterrain@gmail.com
                </a>
              </li>
            </ul>
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
