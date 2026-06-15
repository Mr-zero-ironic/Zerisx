import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap, Star, Rocket } from "lucide-react";

const plans = [
  {
    icon: Zap,
    name: "Starter",
    price: "15,000",
    currency: "PKR",
    tagline: "Perfect for getting online fast",
    features: [
      "Single page website",
      "Mobile responsive design",
      "Contact form",
      "Social media links",
      "1 revision round",
      "Delivered in 5 days",
    ],
    cta: "Get Started",
    highlighted: false,
    color: "text-primary",
  },
  {
    icon: Star,
    name: "Business",
    price: "35,000",
    currency: "PKR",
    tagline: "Most popular for local businesses",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form + WhatsApp integration",
      "Google Maps embed",
      "Basic SEO setup",
      "3 revision rounds",
      "Delivered in 10 days",
      "1 month free support",
    ],
    cta: "Get Started",
    highlighted: true,
    color: "text-white",
  },
  {
    icon: Rocket,
    name: "Pro",
    price: "Custom",
    currency: "",
    tagline: "For larger or complex projects",
    features: [
      "Unlimited pages",
      "Custom design & branding",
      "E-commerce / booking system",
      "Advanced SEO",
      "CMS integration",
      "Unlimited revisions",
      "Priority delivery",
      "3 months free support",
    ],
    cta: "Let's Talk",
    highlighted: false,
    color: "text-secondary",
  },
];

const Pricing = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${
              isVisible ? "animate-fade-in" : "opacity-0 translate-y-10"
            }`}
          >
            Simple <span className="gradient-text">Pricing</span>
          </h2>
          <p
            className={`text-muted-foreground text-lg transition-all duration-700 delay-100 ${
              isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
            }`}
          >
            Honest prices. No hidden fees. No surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Card
                  className={`flex flex-col h-full transition-all duration-300 hover:scale-105 ${
                    plan.highlighted
                      ? "bg-gradient-rise border-primary shadow-lg shadow-primary/20 relative"
                      : "glass-card border-border hover:border-primary/50"
                  }`}
                >
                  {/* Popular badge */}
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-white text-black text-xs font-bold px-4 py-1 rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <CardHeader className="pb-4">
                    <div
                      className={`mb-3 ${
                        plan.highlighted ? "text-white" : plan.color
                      }`}
                    >
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <CardTitle
                      className={`text-xl mb-1 ${
                        plan.highlighted ? "text-white" : ""
                      }`}
                    >
                      {plan.name}
                    </CardTitle>
                    <p
                      className={`text-sm ${
                        plan.highlighted
                          ? "text-white/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      {plan.tagline}
                    </p>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-1 gap-6">
                    {/* Price */}
                    <div>
                      <div className="flex items-end gap-1">
                        {plan.currency && (
                          <span
                            className={`text-sm font-medium mb-1 ${
                              plan.highlighted
                                ? "text-white/80"
                                : "text-muted-foreground"
                            }`}
                          >
                            {plan.currency}
                          </span>
                        )}
                        <span
                          className={`text-4xl font-bold ${
                            plan.highlighted ? "text-white" : "text-foreground"
                          }`}
                        >
                          {plan.price}
                        </span>
                      </div>
                      {plan.price !== "Custom" && (
                        <p
                          className={`text-xs mt-1 ${
                            plan.highlighted
                              ? "text-white/60"
                              : "text-muted-foreground"
                          }`}
                        >
                          one-time payment
                        </p>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check
                            size={16}
                            className={`mt-0.5 shrink-0 ${
                              plan.highlighted
                                ? "text-white"
                                : "text-primary"
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              plan.highlighted
                                ? "text-white/90"
                                : "text-muted-foreground"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      onClick={scrollToContact}
                      className={`w-full mt-auto transition-all ${
                        plan.highlighted
                          ? "bg-white text-black hover:bg-white/90 font-semibold"
                          : "bg-gradient-rise hover:opacity-90 text-white"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p
          className={`text-center text-sm text-muted-foreground mt-10 transition-all duration-700 delay-500 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          Not sure which plan fits? Message us on WhatsApp and we'll figure it out together.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
