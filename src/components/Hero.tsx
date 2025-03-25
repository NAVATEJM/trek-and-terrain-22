
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
          backgroundPosition: 'center 30%'
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h5 className="text-white/90 font-medium mb-3 tracking-wider">EXPLORE THE UNEXPLORED</h5>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Discover Your Next <br />Adventure With Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl leading-relaxed">
            Journey through stunning landscapes and challenge yourself with our carefully curated treks across India's most beautiful mountains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/treks" 
              className="bg-forest-600 hover:bg-forest-700 text-white px-6 py-3 rounded-md transition-all duration-300 font-medium text-center flex items-center justify-center gap-2 group"
            >
              Explore Treks
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/about" 
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 px-6 py-3 rounded-md transition-all duration-300 font-medium text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-float">
        <div className="w-8 h-14 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
