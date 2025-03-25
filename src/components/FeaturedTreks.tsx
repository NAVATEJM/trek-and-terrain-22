
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import TrekCard, { TrekData } from './TrekCard';

// Featured trek data
const featuredTreks: TrekData[] = [
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
          {featuredTreks.map((trek) => (
            <TrekCard key={trek.id} trek={trek} />
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
