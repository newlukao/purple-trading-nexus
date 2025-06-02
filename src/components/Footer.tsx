
import { useInView } from "../hooks/useInView";

const Footer = () => {
  const [footerRef, footerInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <footer 
      ref={footerRef}
      className={`bg-trading-darker border-t border-trading-primary/20 py-8 md:py-12 transition-all duration-1000 ${
        footerInView ? 'animate-fade-in' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-3 md:mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-trading-primary to-trading-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NX</span>
              </div>
              <span className="text-lg md:text-xl font-bold gradient-text">NexusTrader</span>
            </div>
            <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">
              A plataforma mais avançada para trading de opções binárias.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-trading-primary/20 rounded-full flex items-center justify-center hover:bg-trading-primary/40 transition-colors cursor-pointer group">
                <span className="text-trading-primary font-bold text-xs md:text-sm group-hover:scale-110 transition-transform">f</span>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-trading-primary/20 rounded-full flex items-center justify-center hover:bg-trading-primary/40 transition-colors cursor-pointer group">
                <span className="text-trading-primary font-bold text-xs md:text-sm group-hover:scale-110 transition-transform">t</span>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-trading-primary/20 rounded-full flex items-center justify-center hover:bg-trading-primary/40 transition-colors cursor-pointer group">
                <span className="text-trading-primary font-bold text-xs md:text-sm group-hover:scale-110 transition-transform">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">Plataforma</h3>
            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
              <li><a href="#" className="hover:text-trading-primary transition-colors">Trading Web</a></li>
              <li><a href="#" className="hover:text-trading-primary transition-colors">App Mobile</a></li>
              <li><a href="#" className="hover:text-trading-primary transition-colors">API</a></li>
              <li><a href="#" className="hover:text-trading-primary transition-colors">Sinais</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">Recursos</h3>
            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
              <li><a href="#" className="hover:text-trading-primary transition-colors">Análise de Mercado</a></li>
              <li><a href="#" className="hover:text-trading-primary transition-colors">Educação</a></li>
              <li><a href="#" className="hover:text-trading-primary transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-trading-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-3 md:mb-4 text-base md:text-lg">Suporte</h3>
            <ul className="space-y-2 text-gray-400 text-sm md:text-base">
              <li><a href="#" className="hover:text-trading-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-trading-primary transition-colors">Chat ao Vivo</a></li>
              <li><a href="#" className="hover:text-trading-primary transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-trading-primary transition-colors">Status do Sistema</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-trading-primary/20 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
            © 2024 NexusTrader. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6 text-xs md:text-sm text-gray-400">
            <a href="#" className="hover:text-trading-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-trading-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-trading-primary transition-colors">Aviso de Risco</a>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 p-3 md:p-4 bg-trading-warning/10 border border-trading-warning/30 rounded-lg">
          <p className="text-trading-warning text-xs md:text-sm leading-relaxed">
            <strong>Aviso de Risco:</strong> O trading de opções binárias envolve risco significativo. 
            Você pode perder todo o seu investimento. Opere apenas com capital que pode se permitir perder.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
