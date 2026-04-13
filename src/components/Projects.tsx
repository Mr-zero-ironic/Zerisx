import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "@/assets/Screenshot (32).png"

function Projects() {
    const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
     const Projects = [
    {
      title: "AI Integration",
      description: "Build smarter tools for modern businesses with cutting-edge AI solutions.",
      color: "text-primary",
      href:"#",
    },
    {
 
      title: "Web Development",
      description: "Static, dynamic, and custom-coded sites that perform flawlessly.",
      color: "text-secondary",
      href:"#",
    },
    {
    
      title: "Design & Branding",
      description: "Minimal, bold, and professional visuals that make an impact.",
      color: "text-primary",
      href:"#",
    },
  ];



    return <>
        <section id="project" className="relative border-spacing-1 min-h-screen flex  flex-col items-center  overflow-hidden">
            <h2 className={`text-4xl md:text-5xl font-bold mb-10 transition-all duration-700 flex gap-4`}>
                Our Top  <h1 className="gradient-text text-clip"> Projects</h1>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {Projects.map((project, index) => {
            return (
              <Card
                key={index}
                className={`glass-card border-border hover:border-spacing-8 transition-all duration-500 hover:scale-105 `}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className={`${project.color} mb-4`}>
                    <img src={Image} alt="" />
    
                  </div>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

    </section>
    </>
}


export default Projects;