
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Mountain, Users } from 'lucide-react';

// Trek data
const treks = [
  {
    id: 1,
    title: "Valley of Flowers",
    location: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
    difficulty: "Moderate",
    duration: "6 days",
    price: "₹12,500",
    season: "July to September",
  },
  {
    id: 2,
    title: "Hampta Pass",
    location: "Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1604866830893-120e7d8d0d1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    difficulty: "Moderate - Difficult",
    duration: "5 days",
    price: "₹9,800",
    season: "June to October",
  },
  {
    id: 3,
    title: "Kedarkantha",
    location: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1594375639506-5562a783d0d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    difficulty: "Easy - Moderate",
    duration: "6 days",
    price: "₹8,500",
    season: "December to April",
  }
];

// Difficulty badge component
const DifficultyBadge = ({ level }: { level: string }) => {
  const getColor = () => {
    if (level.includes("Easy")) return "bg-green-100 text-green-800";
    if (level.includes("Moderate")) return "bg-yellow-100 text-yellow-800";
    if (level.includes("Difficult")) return "bg-red-100 text-red-800";
    return "bg-blue-100 text-blue-800";
  };

  return (
    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getColor()}`}>
      {level}
    </span>
  );
};

const FeaturedTreks = () => {
  return (
    <section className="section-padding bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h5 className="text-forest-600 font-medium mb-3 tracking-wider">POPULAR DESTINATIONS</h5>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">
            Featured Treks
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Explore our handpicked selection of the most breathtaking treks across India, each offering unique landscapes and unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treks.map((trek) => (
            <div 
              key={trek.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover-lift"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={trek.image} 
                  alt={trek.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <DifficultyBadge level={trek.difficulty} />
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-stone-500 text-sm mb-2">
                  <MapPin size={16} className="mr-1" />
                  <span>{trek.location}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-800 mb-3">
                  {trek.title}
                </h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-stone-600 text-sm">
                    <Calendar size={16} className="mr-1 text-forest-600" />
                    <span>{trek.duration}</span>
                  </div>
                  <div className="flex items-center text-stone-600 text-sm">
                    <Mountain size={16} className="mr-1 text-forest-600" />
                    <span>{trek.difficulty}</span>
                  </div>
                  <div className="flex items-center text-stone-600 text-sm">
                    <Users size={16} className="mr-1 text-forest-600" />
                    <span>8-15 people</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-stone-100">
                  <div className="font-bold text-lg text-forest-800">
                    {trek.price}
                    <span className="text-xs text-stone-500 font-normal"> / person</span>
                  </div>
                  <Link 
                    to={`/treks/${trek.id}`}
                    className="text-forest-600 hover:text-forest-800 font-medium text-sm transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/treks"
            className="inline-flex items-center justify-center text-forest-700 hover:text-forest-800 font-medium transition-colors"
          >
            View All Treks
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTreks;
