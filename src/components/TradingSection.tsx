
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleArrowUp, CircleArrowDown, TrendingUp, DollarSign } from "lucide-react";
import TradingChart from "./TradingChart";
import { useInView } from "../hooks/useInView";

const TradingSection = () => {
  const [leftRef, leftInView] = useInView<HTMLDivElement>({ threshold: 0.3, triggerOnce: true });
  const [rightRef, rightInView] = useInView<HTMLDivElement>({ threshold: 0.3, triggerOnce: true });

  return (
    <section id="trading" className="py-12 md:py-20 bg-trading-dark/30 relative overflow-hidden">
      {/* Background Tech Elements */}
      <div className="absolute inset-0 tech-grid opacity-5"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-trading-primary/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-trading-secondary/10 rounded-full blur-3xl animate-float"></div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div 
            ref={leftRef}
            className={`order-2 lg:order-1 transition-all duration-1000 ${
              leftInView ? 'animate-fade-in' : 'opacity-0 translate-x-[-50px]'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Trading <span className="gradient-text">Inteligente</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8">
              Experimente nossa plataforma de trading com sinais precisos, 
              análise automatizada e execução instantânea. Comece com apenas $10.
            </p>
            
            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-trading-dark/40 rounded-lg backdrop-blur-sm border border-trading-primary/20 hover:border-trading-success/40 transition-all duration-300 transform hover:scale-[1.02]">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trading-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-trading-success" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white">Sinais de Alta Precisão</h3>
                  <p className="text-sm md:text-base text-gray-400">95% de precisão com nossa IA avançada</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-trading-dark/40 rounded-lg backdrop-blur-sm border border-trading-primary/20 hover:border-trading-primary/40 transition-all duration-300 transform hover:scale-[1.02]">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trading-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <CircleArrowUp className="w-5 h-5 md:w-6 md:h-6 text-trading-primary" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white">Execução Rápida</h3>
                  <p className="text-sm md:text-base text-gray-400">Ordens executadas em menos de 1 segundo</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-trading-dark/40 rounded-lg backdrop-blur-sm border border-trading-primary/20 hover:border-trading-warning/40 transition-all duration-300 transform hover:scale-[1.02]">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-trading-warning/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 md:w-6 md:h-6 text-trading-warning" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-white">Baixo Investimento Inicial</h3>
                  <p className="text-sm md:text-base text-gray-400">Comece a operar com apenas $10</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-trading-primary to-trading-secondary hover:from-trading-secondary hover:to-trading-accent text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg glow-effect transition-all duration-300 transform hover:scale-105">
              Abrir Conta Gratuita
            </Button>
          </div>
          
          {/* Right Content - Trading Interface */}
          <div 
            ref={rightRef}
            className={`order-1 lg:order-2 space-y-4 md:space-y-6 transition-all duration-1000 delay-300 ${
              rightInView ? 'animate-fade-in' : 'opacity-0 translate-x-[50px]'
            }`}
          >
            {/* Live Chart */}
            <Card className="bg-trading-dark/60 border-trading-primary/30 backdrop-blur-sm hover:border-trading-primary/50 transition-all duration-300">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-base md:text-lg">Gráfico ao Vivo</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <TradingChart />
              </CardContent>
            </Card>

            {/* Trading Interface Mockup */}
            <Card className="bg-trading-dark/60 border-trading-primary/30 backdrop-blur-sm hover:border-trading-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between text-base md:text-lg">
                  <span>EUR/USD</span>
                  <span className="text-trading-success text-sm md:text-base">+2.47%</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-xl md:text-2xl font-bold text-white">1.0847</div>
                  <div className="text-xs md:text-sm text-gray-400">Expira em 5m</div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <Button className="bg-trading-success hover:bg-trading-success/80 text-white p-4 md:p-6 rounded-lg flex flex-col items-center transition-all duration-300 transform hover:scale-105">
                    <CircleArrowUp className="w-6 h-6 md:w-8 md:h-8 mb-2" />
                    <span className="text-base md:text-lg font-bold">CALL</span>
                    <span className="text-xs md:text-sm">95% retorno</span>
                  </Button>
                  
                  <Button className="bg-trading-danger hover:bg-trading-danger/80 text-white p-4 md:p-6 rounded-lg flex flex-col items-center transition-all duration-300 transform hover:scale-105">
                    <CircleArrowDown className="w-6 h-6 md:w-8 md:h-8 mb-2" />
                    <span className="text-base md:text-lg font-bold">PUT</span>
                    <span className="text-xs md:text-sm">95% retorno</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Recent Trades */}
            <Card className="bg-trading-dark/60 border-trading-primary/30 backdrop-blur-sm hover:border-trading-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-base md:text-lg">Operações Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-2 bg-trading-success/10 rounded-lg">
                    <span className="text-gray-300 text-sm md:text-base">GBP/USD CALL</span>
                    <span className="text-trading-success font-semibold text-sm md:text-base">+$47.50</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-trading-success/10 rounded-lg">
                    <span className="text-gray-300 text-sm md:text-base">BTC/USD PUT</span>
                    <span className="text-trading-success font-semibold text-sm md:text-base">+$95.00</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-trading-success/10 rounded-lg">
                    <span className="text-gray-300 text-sm md:text-base">EUR/JPY CALL</span>
                    <span className="text-trading-success font-semibold text-sm md:text-base">+$76.25</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingSection;
