
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Mountain, Users } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { DifficultyBadge } from "@/components/TrekCard";

// Using the same trek data from Treks.tsx
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
    description: "The Valley of Flowers is a high-altitude Himalayan valley that has around 300 different varieties of alpine flowers, which appear as a bright carpet of color against the backdrop of the mountains. This UNESCO World Heritage Site is a paradise for nature lovers and photographers.",
    highlights: [
      "UNESCO World Heritage Site",
      "Over 300 species of wildflowers",
      "Pristine alpine meadows",
      "Spectacular Himalayan views",
      "Rich biodiversity"
    ]
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
    description: "Hampta Pass trek is a crossover trek that takes you from the lush green valleys of Kullu to the barren landscapes of Lahaul. This dramatic change in scenery is what makes this trek special, offering a diverse range of landscapes in a short time.",
    highlights: [
      "Dramatic change in landscape",
      "Scenic Chandratal Lake visit",
      "Crossing the 14,000 ft pass",
      "Stunning views of Lahaul Valley",
      "Beautiful river crossings"
    ]
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
    description: "Kedarkantha is a popular winter trek in the Uttarakhand Himalayas. The summit offers panoramic views of some of the highest Himalayan peaks. The trek is known for its beautiful campsites, each with their own charm and beauty.",
    highlights: [
      "Snow-covered trails in winter",
      "Stunning sunrise from the summit",
      "Beautiful campsites in clearings",
      "Pine and oak forest trails",
      "Views of Himalayan peaks"
    ]
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
    description: "Roopkund is a high altitude glacial lake situated in the lap of the Trishul massif. Famous for the hundreds of human skeletons found at the edge of the lake, it combines mystery with breathtaking Himalayan beauty.",
    highlights: [
      "The mysterious skeleton lake",
      "Alpine meadows of Ali and Bedni Bugyal",
      "Views of Mt. Trishul and Nanda Ghunti",
      "Rich local culture and traditions",
      "Challenging high-altitude trek"
    ]
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
    description: "Tarsar Marsar trek takes you to two pristine alpine lakes nestled in the meadows of Kashmir. The twin lakes are known for their almond shape and crystal clear blue waters that reflect the surrounding mountains.",
    highlights: [
      "Twin alpine lakes with turquoise waters",
      "Lush green meadows of Kashmir",
      "Pine and fir forest trails",
      "Stunning Kolahoi Glacier views",
      "Authentic Kashmiri hospitality"
    ]
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
    description: "Brahmatal is a winter wonderland trek that takes you to a high-altitude lake surrounded by snow-capped mountains. The trek offers magnificent views of Mt. Trishul and Nanda Ghunti, especially when seen from the Brahmatal Top.",
    highlights: [
      "Snow-covered winter landscape",
      "Frozen Brahmatal lake",
      "Views of major Himalayan peaks",
      "Beautiful oak and rhododendron forests",
      "Unique winter camping experience"
    ]
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
    description: "Sandakphu, the highest point in West Bengal, offers a unique opportunity to view four of the world's five highest peaks - Everest, Kanchenjunga, Lhotse, and Makalu. The trek alternates between India and Nepal, offering cultural diversity.",
    highlights: [
      "View of the 'Sleeping Buddha' formation",
      "Four of world's five highest peaks visible",
      "Cross-border trek between India and Nepal",
      "Vibrant rhododendron blooms in spring",
      "Unique Himalayan biodiversity"
    ]
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
    description: "Goechala trek takes you to the base of the mighty Kanchenjunga, the third highest peak in the world. The trek offers stunning views of 16 major Himalayan peaks and passes through the diverse landscapes of Sikkim.",
    highlights: [
      "Close view of Mt. Kanchenjunga",
      "Diverse flora and fauna of Sikkim",
      "Beautiful Samiti Lake",
      "Views of 16 major Himalayan peaks",
      "Rich Sikkimese culture and Buddhist traditions"
    ]
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
    description: "The Markha Valley trek is a classic Ladakhi trek that takes you through remote villages, high mountain passes, and vast desert landscapes. The trek offers a unique blend of natural beauty and cultural experiences.",
    highlights: [
      "Buddhist monasteries and chortens",
      "Traditional Ladakhi villages",
      "Views of Stok Kangri and Kang Yatze",
      "High passes of Gandala and Kongmaru La",
      "Homestay experience with local families"
    ]
  }
];

const TrekDetail = () => {
  const { trekId } = useParams();
  const trek = allTreks.find(t => t.id === Number(trekId));
  
  if (!trek) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-serif font-bold text-stone-800 mb-4">Trek Not Found</h1>
            <p className="text-stone-600 mb-8">We couldn't find the trek you're looking for.</p>
            <Link 
              to="/treks"
              className="inline-flex items-center text-forest-600 hover:text-forest-800 font-medium"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to All Treks
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="bg-stone-50">
        {/* Hero Image */}
        <div className="relative h-[40vh] md:h-[60vh] w-full">
          <img 
            src={trek.image} 
            alt={trek.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
            <div className="container mx-auto">
              <div className="flex items-center text-white text-sm mb-2">
                <MapPin size={16} className="mr-1" />
                <span>{trek.location}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                {trek.title}
              </h1>
              <div className="flex flex-wrap gap-4">
                <DifficultyBadge level={trek.difficulty} />
                <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {trek.duration}
                </div>
                <div className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {trek.season}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
                  <h2 className="text-2xl font-serif font-bold text-stone-800 mb-4">Overview</h2>
                  <p className="text-stone-600 mb-6">
                    {trek.description}
                  </p>
                  
                  <h3 className="text-xl font-serif font-bold text-stone-800 mb-3">Trek Highlights</h3>
                  <ul className="space-y-2 mb-6">
                    {trek.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-forest-600 mr-2">•</span>
                        <span className="text-stone-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <h3 className="text-xl font-serif font-bold text-stone-800 mb-3">Trek Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center p-4 bg-stone-50 rounded-lg">
                      <Calendar size={20} className="text-forest-600 mr-3" />
                      <div>
                        <p className="text-sm text-stone-500">Duration</p>
                        <p className="font-medium text-stone-800">{trek.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-stone-50 rounded-lg">
                      <Mountain size={20} className="text-forest-600 mr-3" />
                      <div>
                        <p className="text-sm text-stone-500">Difficulty</p>
                        <p className="font-medium text-stone-800">{trek.difficulty}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-stone-50 rounded-lg">
                      <MapPin size={20} className="text-forest-600 mr-3" />
                      <div>
                        <p className="text-sm text-stone-500">Location</p>
                        <p className="font-medium text-stone-800">{trek.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-stone-50 rounded-lg">
                      <Users size={20} className="text-forest-600 mr-3" />
                      <div>
                        <p className="text-sm text-stone-500">Group Size</p>
                        <p className="font-medium text-stone-800">8-15 people</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg shadow-sm sticky top-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-serif font-bold text-forest-800 mb-1">
                      {trek.price}
                    </h3>
                    <p className="text-stone-500">per person</p>
                  </div>
                  
                  <div className="bg-stone-50 p-4 rounded-lg mb-6">
                    <h4 className="font-medium text-stone-800 mb-2">Best Season</h4>
                    <p className="text-stone-600">{trek.season}</p>
                  </div>
                  
                  <a 
                    href="#" 
                    className="block w-full bg-forest-600 hover:bg-forest-700 text-white text-center py-3 px-4 rounded-lg font-medium transition-colors"
                  >
                    Book This Trek
                  </a>
                  
                  <div className="mt-6 text-center">
                    <Link 
                      to="/treks"
                      className="inline-flex items-center text-forest-600 hover:text-forest-800 font-medium"
                    >
                      <ArrowLeft size={18} className="mr-2" />
                      Back to All Treks
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default TrekDetail;
