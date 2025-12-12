import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const Contact = () => {
  const { toast } = useToast();
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Success feedback
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "animate-fade-in" : "opacity-0 translate-y-10"
            }`}>
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className={`text-muted-foreground text-lg transition-all duration-700 delay-100 ${
              isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
            }`}>
              Let's build something amazing together
            </p>
          </div>

          <form onSubmit={handleSubmit} className={`space-y-6 transition-all duration-700 delay-200 ${
            isVisible ? "animate-scale-in" : "opacity-0 scale-95"
          }`}>
            <div>
              <Input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-card border-border"
              />
            </div>

            <div>
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-card border-border"
              />
            </div>

            <div>
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-card border-border min-h-[150px]"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-rise hover:opacity-90 transition-opacity"
            >
              Send Message
              <Send className="ml-2" size={18} />
            </Button>
          </form>

          <div className={`mt-8 text-center transition-all duration-700 delay-300 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}>
            <p className="text-muted-foreground">Or reach us directly at</p>
            <a
              href="mailto:zerise.dev@gmail.com"
              className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mt-2"
            >
              <Mail size={18} />
              zerise.dev@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
