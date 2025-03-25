
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Mountain, Users } from 'lucide-react';

export type TrekData = {
  id: number;
  title: string;
  location: string;
  image: string;
  difficulty: string;
  duration: string;
  price: string;
  season: string;
};

// Difficulty badge component
export const DifficultyBadge = ({ level }: { level: string }) => {
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

const TrekCard = ({ trek }: { trek: TrekData }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover-lift">
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
  );
};

export default TrekCard;
