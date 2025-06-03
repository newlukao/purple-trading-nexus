
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#features", label: "Recursos" },
    { href: "#trading", label: "Trading" },
    { href: "#testimonials", label: "Depoimentos" },
    { href: "#contact", label: "Contato" },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-trading-darker/95 backdrop-blur-md border-b border-trading-primary/30 shadow-lg shadow-trading-primary/10' 
          : 'bg-trading-darker/80 backdrop-blur-sm border-b border-trading-primary/20'
      }`}
    >
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 z-50">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-trading-primary to-trading-secondary rounded-lg flex items-center justify-center glow-effect">
            <span className="text-white font-bold text-sm md:text-base">NX</span>
          </div>
          <span className="text-lg md:text-xl font-bold gradient-text">NexusTrader</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-gray-300 hover:text-trading-primary transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-trading-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>
        
        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          <Button variant="ghost" className="text-gray-300 hover:text-white transition-colors duration-300">
            Logar
          </Button>
          <Button className="bg-gradient-to-r from-trading-primary to-trading-secondary hover:from-trading-secondary hover:to-trading-accent text-white px-4 lg:px-6 py-2 rounded-lg glow-effect transition-all duration-300 transform hover:scale-105">
            Começar Agora
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden z-50 p-2 text-white hover:text-trading-primary transition-colors duration-300"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-trading-darker/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-2xl text-gray-300 hover:text-trading-primary transition-all duration-300 transform ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.label}
              </button>
            ))}
            
            <div className="flex flex-col space-y-4 mt-8">
              <Button variant="ghost" className="text-xl text-gray-300 hover:text-white">
                Logar
              </Button>
              <Button className="text-xl bg-gradient-to-r from-trading-primary to-trading-secondary hover:from-trading-secondary hover:to-trading-accent text-white px-8 py-3 rounded-lg glow-effect">
                Começar Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
