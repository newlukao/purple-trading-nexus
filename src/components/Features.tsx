
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Circle, DollarSign, Code } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Análise Avançada",
      description: "IA integrada para análise de mercado em tempo real com precisão de 95%",
      gradient: "from-trading-primary to-trading-secondary"
    },
    {
      icon: Circle,
      title: "Execução Instantânea",
      description: "Ordens executadas em milissegundos para maximizar seus lucros",
      gradient: "from-trading-secondary to-trading-accent"
    },
    {
      icon: DollarSign,
      title: "Altos Retornos",
      description: "Retornos de até 95% por operação com risco controlado",
      gradient: "from-trading-accent to-trading-primary"
    },
    {
      icon: Code,
      title: "Tecnologia de Ponta",
      description: "Plataforma construída com as mais modernas tecnologias de trading",
      gradient: "from-trading-primary to-trading-accent"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Recursos <span className="gradient-text">Avançados</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nossa plataforma oferece as ferramentas mais avançadas do mercado 
            para maximizar seus resultados no trading de opções binárias.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-trading-dark/50 border-trading-primary/20 hover:border-trading-primary/50 transition-all duration-300 hover:glow-effect group"
            >
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-center">
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
