import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "5 AI Tools That Can Change Your Workflow",
      excerpt: "Discover the latest AI innovations that are revolutionizing how we work.",
      date: "March 2025",
    },
    {
      title: "The Future of Minimalist Design",
      excerpt: "Less is more: exploring the power of simplicity in modern interfaces.",
      date: "March 2025",
    },
  ];

  return (
    <section id="blog" className="py-24 relative bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore <span className="gradient-text">Ideas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Insights on tech, design, and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="glass-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group"
            >
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {post.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                  Read More <ArrowRight className="ml-2" size={16} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
