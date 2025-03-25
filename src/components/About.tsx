import { Award, Heart, Mountain } from 'lucide-react';

const features = [
  {
    icon: <Mountain className="h-10 w-10 text-forest-600" />,
    title: "Expert Trek Leaders",
    description: "Our trek leaders are certified professionals with extensive experience in high-altitude trekking and safety management."
  },
  {
    icon: <Heart className="h-10 w-10 text-forest-600" />,
    title: "Safety First Approach",
    description: "We prioritize your safety with comprehensive medical kits, oxygen supplies, and emergency evacuation protocols."
  },
  {
    icon: <Mountain className="h-10 w-10 text-forest-600" />,
    title: "Sustainable Trekking",
    description: "We practice and promote eco-friendly trekking with a commitment to leave no trace and support local communities."
  },
  {
    icon: <Award className="h-10 w-10 text-forest-600" />,
    title: "Inclusive Community",
    description: "Join a diverse community of nature enthusiasts who share your passion for mountains and adventure."
  }
];

const About = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-earth-100 rounded-md -z-10"></div>
            <div className="relative z-20">
              <img 
                src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80" 
                alt="Trekkers at mountain summit" 
                className="rounded-md shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-forest-100 rounded-md -z-10"></div>
          </div>

          <div>
            <h5 className="text-forest-600 font-medium mb-3 tracking-wider">ABOUT US</h5>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-6">
              Our Journey to the Mountains
            </h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Trek & Terrain was born from a deep passion for the mountains and a desire to share the transformative experience of trekking with others. We started as a small group of mountaineering enthusiasts and have evolved into a community of like-minded adventurers.
            </p>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Our mission is to make the beauty of India's diverse landscapes accessible to everyone while fostering a culture of responsible trekking. With every journey we organize, we aim to create memorable experiences that connect people with nature and themselves.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 p-2 bg-forest-50 rounded-md">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800 mb-2">{feature.title}</h3>
                    <p className="text-stone-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
