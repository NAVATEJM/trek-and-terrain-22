
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm py-3">
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/f81f4baf-9008-4e89-9951-6f1a2ddd4f54.png"
            alt="Trek & Terrain Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-serif text-2xl font-bold text-forest-800">Trek & Terrain</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
