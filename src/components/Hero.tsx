import { Button } from "@/components/ui/button";
import { ArrowDown, Play } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import { useInView } from "../hooks/useInView";

const Hero = () => {
  const [heroRef, heroInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  const [statsRef, statsInView] = useInView<HTMLDivElement>({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="absolute top-10 md:top-20 left-4 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-trading-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 md:bottom-20 right-4 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-trading-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-trading-accent rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-trading-primary rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-trading-secondary/50 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-4 pt-16 md:pt-20 text-center relative z-10">
        <div 
          ref={heroRef}
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            heroInView ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-tight text-purple-500">
            Domine o Mercado de{" "}
            <span className="gradient-text block sm:inline">Opções Binárias</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto px-4">
            Plataforma avançada de trading com tecnologia de ponta. 
            Lucre até <span className="text-trading-success font-bold text-lg md:text-2xl">95%</span> por operação 
            com nossa IA de análise de mercado.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-trading-primary to-trading-secondary hover:from-trading-secondary hover:to-trading-accent text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg glow-effect transition-all duration-300 animate-pulse-glow transform hover:scale-105"
            >
              <Play className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Começar Trading Agora
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-trading-primary text-trading-primary hover:bg-trading-primary hover:text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Demonstração
            </Button>
          </div>
          
          {/* Enhanced Trading Stats */}
          <div 
            ref={statsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto px-4 transition-all duration-1000 delay-300 ${
              statsInView ? 'animate-fade-in' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="text-center p-4 bg-trading-dark/30 rounded-lg backdrop-blur-sm border border-trading-primary/20 hover:border-trading-primary/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
                <AnimatedCounter end={95} suffix="%" />
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Taxa de Sucesso</div>
            </div>
            <div className="text-center p-4 bg-trading-dark/30 rounded-lg backdrop-blur-sm border border-trading-primary/20 hover:border-trading-primary/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
                $<AnimatedCounter end={1} />M+
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Volume Diário</div>
            </div>
            <div className="text-center p-4 bg-trading-dark/30 rounded-lg backdrop-blur-sm border border-trading-primary/20 hover:border-trading-primary/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">
                <AnimatedCounter end={50} />K+
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Traders Ativos</div>
            </div>
            <div className="text-center p-4 bg-trading-dark/30 rounded-lg backdrop-blur-sm border border-trading-primary/20 hover:border-trading-primary/50 transition-all duration-300 transform hover:scale-105">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">24/7</div>
              <div className="text-xs sm:text-sm text-gray-400">Suporte</div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-trading-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
