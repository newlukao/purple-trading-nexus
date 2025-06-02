
const Footer = () => {
  return (
    <footer className="bg-trading-darker border-t border-trading-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-trading-primary to-trading-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NX</span>
              </div>
              <span className="text-xl font-bold gradient-text">NexusTrader</span>
            </div>
            <p className="text-gray-400 mb-4">
              A plataforma mais avançada para trading de opções binárias.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-trading-primary/20 rounded-full flex items-center justify-center hover:bg-trading-primary/40 transition-colors cursor-pointer">
                <span className="text-trading-primary font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-trading-primary/20 rounded-full flex items-center justify-center hover:bg-trading-primary/40 transition-colors cursor-pointer">
                <span className="text-trading-primary font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-trading-primary/20 rounded-full flex items-center justify-center hover:bg-trading-primary/40 transition-colors cursor-pointer">
                <span className="text-trading-primary font-bold">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Plataforma</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-trading-primary transition-colors">Trading Web</a></li>
              <li><a href="#" className="hover:text-trading-primary transition-colors">App Mobile</a></li>
              <li><a href="#" className="hover:text-trading-primary transition-colors">API</a></li>
              <li><a href="#" className="hover:text-trading-primary transition-colors">Sinais</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-trading-primary transition-colors">Análise de Mercado</a></li>
              <li><a href="#" className="hover:text-trading-primary transition-colors">Educação</a></li>
              <li><a href="#" className="hover:text-trading-primary transition-colors">Webinars</a></li>
              <li><a href="#" className="hover:text-trading-primary transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-trading-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-trading-primary transition-colors">Chat ao Vivo</a></li>
              <li><a href="#" className="hover:text-trading-primary transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-trading-primary transition-colors">Status do Sistema</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-trading-primary/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 NexusTrader. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-trading-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-trading-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-trading-primary transition-colors">Aviso de Risco</a>
          </div>
        </div>
        
        <div className="mt-8 p-4 bg-trading-warning/10 border border-trading-warning/30 rounded-lg">
          <p className="text-trading-warning text-sm">
            <strong>Aviso de Risco:</strong> O trading de opções binárias envolve risco significativo. 
            Você pode perder todo o seu investimento. Opere apenas com capital que pode se permitir perder.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
