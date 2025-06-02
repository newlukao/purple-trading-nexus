
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-trading-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-trading-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 pt-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Domine o Mercado de{" "}
            <span className="gradient-text">Opções Binárias</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Plataforma avançada de trading com tecnologia de ponta. 
            Lucre até <span className="text-trading-success font-bold">95%</span> por operação 
            com nossa IA de análise de mercado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-trading-primary to-trading-secondary hover:from-trading-secondary hover:to-trading-accent text-white px-8 py-4 text-lg rounded-lg glow-effect transition-all duration-300 animate-pulse-glow">
              Começar Trading Agora
            </Button>
            <Button size="lg" variant="outline" className="border-trading-primary text-trading-primary hover:bg-trading-primary hover:text-white px-8 py-4 text-lg rounded-lg transition-all duration-300">
              Ver Demo Gratuita
            </Button>
          </div>
          
          {/* Trading Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">95%</div>
              <div className="text-gray-400">Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">$1M+</div>
              <div className="text-gray-400">Volume Diário</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">50K+</div>
              <div className="text-gray-400">Traders Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">24/7</div>
              <div className="text-gray-400">Suporte</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-trading-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
