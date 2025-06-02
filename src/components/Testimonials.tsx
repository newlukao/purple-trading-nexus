
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "../hooks/useInView";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [cardsRef, cardsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Trader Profissional",
      content: "Em 3 meses consegui retorno de 400% do meu investimento inicial. A plataforma é excepcional!",
      profit: "+$12,450",
      avatar: "CS"
    },
    {
      name: "Ana Santos",
      role: "Investidora",
      content: "Nunca imaginei que trading pudesse ser tão simples. Os sinais são precisos e o suporte é excelente.",
      profit: "+$8,750",
      avatar: "AS"
    },
    {
      name: "Roberto Lima",
      role: "Empresário",
      content: "Diversifiquei meus investimentos com opções binárias. Resultados consistentes mês após mês.",
      profit: "+$15,200",
      avatar: "RL"
    },
    {
      name: "Marina Costa",
      role: "Desenvolvedora",
      content: "A tecnologia por trás da plataforma é impressionante. Interface intuitiva e resultados fantásticos.",
      profit: "+$9,850",
      avatar: "MC"
    },
    {
      name: "Paulo Ferreira",
      role: "Consultor Financeiro",
      content: "Recomendo para todos os meus clientes. Transparência total e lucros consistentes.",
      profit: "+$18,300",
      avatar: "PF"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push({ ...testimonials[index], index });
    }
    return result;
  };

  return (
    <section id="testimonials" className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-trading-primary/5 to-trading-secondary/5"></div>
      <div className="absolute top-20 left-10 w-40 h-40 bg-trading-accent/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-trading-primary/10 rounded-full blur-3xl animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            titleInView ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            O Que Nossos <span className="gradient-text">Traders</span> Dizem
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Milhares de traders já transformaram suas vidas financeiras com nossa plataforma.
          </p>
        </div>
        
        {/* Desktop View */}
        <div className="hidden md:block">
          <div 
            ref={cardsRef}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            {getVisibleTestimonials().map((testimonial, displayIndex) => (
              <Card 
                key={`${testimonial.index}-${displayIndex}`}
                className={`bg-trading-dark/50 border-trading-primary/20 hover:border-trading-primary/50 transition-all duration-500 hover:glow-effect backdrop-blur-sm transform hover:scale-105 ${
                  cardsInView ? 'animate-fade-in' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  animationDelay: cardsInView ? `${displayIndex * 100}ms` : '0ms'
                }}
              >
                <CardContent className="p-4 md:p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-trading-primary to-trading-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold text-sm md:text-base">{testimonial.name}</h3>
                          <p className="text-gray-400 text-xs md:text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="text-trading-success font-bold text-base md:text-lg">
                        {testimonial.profit}
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-300 italic text-sm md:text-base leading-relaxed mb-4">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex text-trading-primary">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-sm md:text-base">★</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative">
          <Card className="bg-trading-dark/50 border-trading-primary/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-trading-primary to-trading-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{testimonials[currentIndex].name}</h3>
                      <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                  <div className="text-trading-success font-bold text-lg">
                    {testimonials[currentIndex].profit}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-gray-300 italic leading-relaxed mb-4">
                "{testimonials[currentIndex].content}"
              </blockquote>
              
              <div className="flex text-trading-primary mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button 
                  onClick={prevTestimonial}
                  className="p-2 bg-trading-primary/20 rounded-full hover:bg-trading-primary/40 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-trading-primary" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-trading-primary' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextTestimonial}
                  className="p-2 bg-trading-primary/20 rounded-full hover:bg-trading-primary/40 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-trading-primary" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
