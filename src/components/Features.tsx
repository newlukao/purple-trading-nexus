
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, CircleArrowUp, DollarSign, Search } from "lucide-react";
import { useInView } from "../hooks/useInView";

const Features = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const features = [
    {
      icon: TrendingUp,
      title: "Análise Avançada",
      description: "IA integrada para análise de mercado em tempo real com precisão de 95%",
      gradient: "from-trading-primary to-trading-secondary",
      delay: "0ms"
    },
    {
      icon: CircleArrowUp,
      title: "Execução Instantânea",
      description: "Ordens executadas em milissegundos para maximizar seus lucros",
      gradient: "from-trading-secondary to-trading-accent",
      delay: "100ms"
    },
    {
      icon: DollarSign,
      title: "Altos Retornos",
      description: "Retornos de até 95% por operação com risco controlado",
      gradient: "from-trading-accent to-trading-primary",
      delay: "200ms"
    },
    {
      icon: Search,
      title: "Tecnologia de Ponta",
      description: "Plataforma construída com as mais modernas tecnologias de trading",
      gradient: "from-trading-primary to-trading-accent",
      delay: "300ms"
    }
  ];

  return (
    <section id="features" className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-trading-secondary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-trading-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            titleInView ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Recursos <span className="gradient-text">Avançados</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Nossa plataforma oferece as ferramentas mais avançadas do mercado 
            para maximizar seus resultados no trading de opções binárias.
          </p>
        </div>
        
        <div 
          ref={featuresRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`bg-trading-dark/50 border-trading-primary/20 hover:border-trading-primary/50 transition-all duration-500 hover:glow-effect group backdrop-blur-sm transform hover:scale-105 ${
                featuresInView ? 'animate-fade-in' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                animationDelay: featuresInView ? feature.delay : '0ms',
                transitionDelay: feature.delay 
              }}
            >
              <CardHeader className="text-center p-4 md:p-6">
                <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-trading-primary/20`}>
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <CardTitle className="text-white text-lg md:text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 md:p-6 pt-0">
                <CardDescription className="text-gray-300 text-center text-sm md:text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
