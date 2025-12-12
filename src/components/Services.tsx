import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Palette } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Services = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const services = [
    {
      icon: Brain,
      title: "AI Integration",
      description: "Build smarter tools for modern businesses with cutting-edge AI solutions.",
      color: "text-primary",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Static, dynamic, and custom-coded sites that perform flawlessly.",
      color: "text-secondary",
    },
    {
      icon: Palette,
      title: "Design & Branding",
      description: "Minimal, bold, and professional visuals that make an impact.",
      color: "text-primary",
    },
  ];

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
            isVisible ? "animate-fade-in" : "opacity-0 translate-y-10"
          }`}>
            What We <span className="gradient-text">Do</span>
          </h2>
          <p className={`text-muted-foreground text-lg transition-all duration-700 delay-100 ${
            isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
          }`}>
            Transforming ideas into digital reality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className={`glass-card border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 ${
                  isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className={`${service.color} mb-4`}>
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
