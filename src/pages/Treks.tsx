import { useState } from 'react';
import { MapPin, Calendar, Mountain, Users } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { DifficultyBadge } from "@/components/TrekCard";
import { 
  Pagination, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination";
import { Link } from 'react-router-dom';

// Expanded trek data with more treks
const allTreks = [
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
  },
  {
    id: 4,
    title: "Roopkund Trek",
    location: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1497106636505-e4fd6e16d74c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80",
    difficulty: "Difficult",
    duration: "8 days",
    price: "₹15,000",
    season: "May to June, September to October",
  },
  {
    id: 5,
    title: "Tarsar Marsar",
    location: "Kashmir",
    image: "https://images.unsplash.com/photo-1541789094913-f3809a8f3ba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    difficulty: "Moderate",
    duration: "7 days",
    price: "₹14,200",
    season: "July to September",
  },
  {
    id: 6,
    title: "Brahmatal Trek",
    location: "Uttarakhand",
    image: "https://images.unsplash.com/photo-1516832970803-325be2b65ff5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2835&q=80",
    difficulty: "Easy - Moderate",
    duration: "6 days",
    price: "₹9,500",
    season: "December to April",
  },
  {
    id: 7,
    title: "Sandakphu",
    location: "West Bengal",
    image: "https://images.unsplash.com/photo-1509635477266-9f3cf2d1df1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80",
    difficulty: "Moderate",
    duration: "7 days",
    price: "₹10,800",
    season: "October to May",
  },
  {
    id: 8,
    title: "Goechala",
    location: "Sikkim",
    image: "https://images.unsplash.com/photo-1585221454166-ec6439b03125?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2767&q=80",
    difficulty: "Difficult",
    duration: "11 days",
    price: "₹19,500",
    season: "April to May, October to November",
  },
  {
    id: 9,
    title: "Markha Valley",
    location: "Ladakh",
    image: "https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    difficulty: "Moderate - Difficult",
    duration: "8 days",
    price: "₹17,000",
    season: "June to September",
  }
];

const Treks = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const treksPerPage = 6;
  
  // Get current treks based on pagination
  const indexOfLastTrek = currentPage * treksPerPage;
  const indexOfFirstTrek = indexOfLastTrek - treksPerPage;
  const currentTreks = allTreks.slice(indexOfFirstTrek, indexOfLastTrek);
  const totalPages = Math.ceil(allTreks.length / treksPerPage);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-10 md:py-16 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-stone-800 mb-4">
              Explore Our Treks
            </h1>
            <p className="text-stone-600 max-w-3xl mx-auto">
              Discover breathtaking journeys through the majestic mountains and valleys of India. 
              Our carefully curated treks offer experiences for all skill levels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTreks.map((trek) => (
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

          {/* Pagination */}
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(currentPage - 1);
                      }}
                    />
                  </PaginationItem>
                )}
                
                {Array.from({ length: totalPages }).map((_, index) => {
                  const pageNumber = index + 1;
                  // Show only current page, first, last, and pages around current
                  if (
                    pageNumber === 1 || 
                    pageNumber === totalPages ||
                    (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                  ) {
                    return (
                      <PaginationItem key={pageNumber}>
                        <PaginationLink 
                          isActive={pageNumber === currentPage}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(pageNumber);
                          }}
                        >
                          {pageNumber}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  } else if (
                    (pageNumber === currentPage - 2 && currentPage > 3) ||
                    (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
                  ) {
                    return (
                      <PaginationItem key={`ellipsis-${pageNumber}`}>
                        <PaginationEllipsis />
                      </PaginationItem>
                    );
                  }
                  return null;
                })}
                
                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext 
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentPage(currentPage + 1);
                      }}
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Treks;
