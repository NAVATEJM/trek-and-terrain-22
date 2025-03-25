
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="font-serif text-2xl font-bold text-forest-800">Trek & Terrain</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-stone-800 hover:text-forest-700 transition-colors font-medium"
          >
            Home
          </Link>
          <Link 
            to="/treks" 
            className="text-stone-800 hover:text-forest-700 transition-colors font-medium"
          >
            Treks
          </Link>
          <Link 
            to="/about" 
            className="text-stone-800 hover:text-forest-700 transition-colors font-medium"
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="text-stone-800 hover:text-forest-700 transition-colors font-medium"
          >
            Contact
          </Link>
          <Link 
            to="/register" 
            className="bg-forest-600 hover:bg-forest-700 text-white px-5 py-2 rounded-md transition-all duration-300 font-medium"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-stone-800" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full pt-20 px-6 space-y-8">
          <Link 
            to="/" 
            className="text-stone-800 hover:text-forest-700 transition-colors text-lg font-medium py-2 border-b border-stone-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/treks" 
            className="text-stone-800 hover:text-forest-700 transition-colors text-lg font-medium py-2 border-b border-stone-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Treks
          </Link>
          <Link 
            to="/about" 
            className="text-stone-800 hover:text-forest-700 transition-colors text-lg font-medium py-2 border-b border-stone-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="text-stone-800 hover:text-forest-700 transition-colors text-lg font-medium py-2 border-b border-stone-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/register" 
            className="bg-forest-600 hover:bg-forest-700 text-white px-5 py-3 rounded-md transition-all duration-300 font-medium text-center mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
