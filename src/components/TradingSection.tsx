import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleArrowUp, CircleArrowDown, TrendingUp, DollarSign } from "lucide-react";

const TradingSection = () => {
  return (
    <section id="trading" className="py-20 bg-trading-dark/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trading <span className="gradient-text">Inteligente</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experimente nossa plataforma de trading com sinais precisos, 
              análise automatizada e execução instantânea. Comece com apenas $10.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-trading-success/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-trading-success" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Sinais de Alta Precisão</h3>
                  <p className="text-gray-400">95% de precisão com nossa IA avançada</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-trading-primary/20 rounded-full flex items-center justify-center">
                  <CircleArrowUp className="w-6 h-6 text-trading-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Execução Rápida</h3>
                  <p className="text-gray-400">Ordens executadas em menos de 1 segundo</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-trading-warning/20 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-trading-warning" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Baixo Investimento Inicial</h3>
                  <p className="text-gray-400">Comece a operar com apenas $10</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-trading-primary to-trading-secondary hover:from-trading-secondary hover:to-trading-accent text-white px-8 py-4 text-lg rounded-lg glow-effect">
              Abrir Conta Gratuita
            </Button>
          </div>
          
          <div className="space-y-6">
            {/* Trading Interface Mockup */}
            <Card className="bg-trading-dark border-trading-primary/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  <span>EUR/USD</span>
                  <span className="text-trading-success">+2.47%</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-2xl font-bold text-white">1.0847</div>
                  <div className="text-sm text-gray-400">Expira em 5m</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <Button className="bg-trading-success hover:bg-trading-success/80 text-white p-6 rounded-lg flex flex-col items-center">
                    <CircleArrowUp className="w-8 h-8 mb-2" />
                    <span className="text-lg font-bold">CALL</span>
                    <span className="text-sm">95% retorno</span>
                  </Button>
                  
                  <Button className="bg-trading-danger hover:bg-trading-danger/80 text-white p-6 rounded-lg flex flex-col items-center">
                    <CircleArrowDown className="w-8 h-8 mb-2" />
                    <span className="text-lg font-bold">PUT</span>
                    <span className="text-sm">95% retorno</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Recent Trades */}
            <Card className="bg-trading-dark border-trading-primary/30">
              <CardHeader>
                <CardTitle className="text-white">Operações Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">GBP/USD CALL</span>
                    <span className="text-trading-success">+$47.50</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">BTC/USD PUT</span>
                    <span className="text-trading-success">+$95.00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">EUR/JPY CALL</span>
                    <span className="text-trading-success">+$76.25</span>
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
