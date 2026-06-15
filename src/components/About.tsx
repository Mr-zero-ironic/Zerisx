import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const About = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className={`text-4xl md:text-5xl font-bold transition-all duration-700 ${
            isVisible ? "animate-fade-in" : "opacity-0 translate-y-10"
          }`}>
            We're <span className="gradient-text">Zerisx </span>
          </h2>
          <p className={`text-lg md:text-xl text-muted-foreground leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
          }`}>
            We started from nothing — a spark of an idea, now shaping digital experiences 
            that matter. At Zerisx Tech, we blend creativity and technology to build 
            meaningful products that help businesses thrive in the digital age.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
