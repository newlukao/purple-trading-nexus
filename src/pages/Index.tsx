
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TradingSection from "@/components/TradingSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-trading-darker relative overflow-x-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <TradingSection />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
