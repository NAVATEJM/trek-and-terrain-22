
import Hero from "@/components/Hero";
import FeaturedTreks from "@/components/FeaturedTreks";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <FeaturedTreks />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
