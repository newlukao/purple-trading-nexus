
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-trading-darker/95 backdrop-blur-sm border-b border-trading-primary/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-trading-primary to-trading-secondary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">NX</span>
          </div>
          <span className="text-xl font-bold gradient-text">NexusTrader</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-trading-primary transition-colors">Recursos</a>
          <a href="#trading" className="text-gray-300 hover:text-trading-primary transition-colors">Trading</a>
          <a href="#testimonials" className="text-gray-300 hover:text-trading-primary transition-colors">Depoimentos</a>
          <a href="#contact" className="text-gray-300 hover:text-trading-primary transition-colors">Contato</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            Login
          </Button>
          <Button className="bg-gradient-to-r from-trading-primary to-trading-secondary hover:from-trading-secondary hover:to-trading-accent text-white px-6 py-2 rounded-lg glow-effect transition-all duration-300">
            Começar Agora
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
