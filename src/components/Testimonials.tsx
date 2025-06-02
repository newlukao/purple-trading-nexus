
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Trader Profissional",
      content: "Em 3 meses consegui retorno de 400% do meu investimento inicial. A plataforma é excepcional!",
      profit: "+$12,450"
    },
    {
      name: "Ana Santos",
      role: "Investidora",
      content: "Nunca imaginei que trading pudesse ser tão simples. Os sinais são precisos e o suporte é excelente.",
      profit: "+$8,750"
    },
    {
      name: "Roberto Lima",
      role: "Empresário",
      content: "Diversifiquei meus investimentos com opções binárias. Resultados consistentes mês após mês.",
      profit: "+$15,200"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-trading-primary/5 to-trading-secondary/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O Que Nossos <span className="gradient-text">Traders</span> Dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Milhares de traders já transformaram suas vidas financeiras com nossa plataforma.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-trading-dark/50 border-trading-primary/20 hover:border-trading-primary/50 transition-all duration-300 hover:glow-effect"
            >
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-white font-semibold">{testimonial.name}</h3>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    </div>
                    <div className="text-trading-success font-bold text-lg">
                      {testimonial.profit}
                    </div>
                  </div>
                </div>
                
                <blockquote className="text-gray-300 italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex text-trading-primary mt-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
