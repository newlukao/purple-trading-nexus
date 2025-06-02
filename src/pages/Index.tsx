
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TradingSection from "@/components/TradingSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-trading-darker">
      <Header />
      <Hero />
      <Features />
      <TradingSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
