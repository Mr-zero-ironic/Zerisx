import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, ShoppingCart, Utensils } from "lucide-react";

const projectList = [
  {
    icon: Utensils,
    title: "Restaurant Website",
    category: "Local Business",
    description:
      "A fully responsive restaurant site with menu, gallery, and reservation section. Built to attract local customers and rank on Google.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#", // replace with actual GitHub Pages URL
    color: "text-primary",
    accent: "from-primary/20 to-transparent",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Store",
    category: "Retail Business",
    description:
      "A clean product showcase site with cart UI, product filtering, and WhatsApp order integration — perfect for local retailers.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#", // replace with actual GitHub Pages URL
    color: "text-secondary",
    accent: "from-secondary/20 to-transparent",
  },
  {
    icon: Globe,
    title: "Business Portfolio",
    category: "Professional Services",
    description:
      "A modern agency-style portfolio site with services, testimonials, and contact form. Ideal for freelancers and small businesses.",
    tags: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#", // replace with actual GitHub Pages URL
    color: "text-primary",
    accent: "from-primary/20 to-transparent",
  },
];

const Projects = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="project" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "animate-fade-in" : "opacity-0 translate-y-10"
            }`}
          >
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p
            className={`text-muted-foreground text-lg transition-all duration-700 delay-100 ${
              isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
            }`}
          >
            Real websites built for real businesses
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectList.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className={`glass-card border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 flex flex-col ${
                  isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Top gradient accent */}
                <div className={`h-1 w-full rounded-t-lg bg-gradient-to-r ${project.accent} border-b border-border`} />

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
                      {project.category}
                    </span>
                    <div className={`${project.color}`}>
                      <Icon size={22} strokeWidth={1.5} />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col flex-1 gap-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Live Link */}
                  <div className="mt-auto pt-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full border border-border hover:border-primary/50 hover:text-primary transition-colors"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                    >
                      View Live Site
                      <ExternalLink size={14} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          <p className="text-muted-foreground mb-4">
            Want a website like these for your business?
          </p>
          <Button
            size="lg"
            className="bg-gradient-rise hover:opacity-90 transition-opacity"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let's Build Yours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
