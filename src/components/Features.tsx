import { Zap, Shield, Users, Cloud, Palette, BookOpen } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Execution",
      description: "Run your code instantly with our optimized cloud infrastructure. No setup, no waiting.",
      color: "text-neon-cyan",
      bgColor: "bg-neon-cyan/10"
    },
    {
      icon: Shield,
      title: "Secure Environment",
      description: "Your code runs in isolated containers with enterprise-grade security and privacy protection.",
      color: "text-neon-green",
      bgColor: "bg-neon-green/10"
    },
    {
      icon: Users,
      title: "Collaboration Tools",
      description: "Share your code, collaborate in real-time, and learn together with our community features.",
      color: "text-neon-purple",
      bgColor: "bg-neon-purple/10"
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Access your projects from anywhere. Automatic syncing keeps your work safe and up-to-date.",
      color: "text-neon-orange",
      bgColor: "bg-neon-orange/10"
    },
    {
      icon: Palette,
      title: "Customizable Interface",
      description: "Personalize your coding environment with themes, layouts, and productivity extensions.",
      color: "text-neon-pink",
      bgColor: "bg-neon-pink/10"
    },
    {
      icon: BookOpen,
      title: "Free Learning Resources",
      description: "Access hundreds of tutorials, examples, and interactive courses to master programming.",
      color: "text-neon-cyan",
      bgColor: "bg-neon-cyan/10"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-secondary">Powerful Features</span>{" "}
            <span className="text-neon">for Developers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to code, learn, and build amazing projects - 
            all in one powerful online platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`p-3 rounded-lg ${feature.bgColor} mb-6 w-fit group-hover:scale-110 transition-transform`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-neon-cyan transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 p-6 rounded-xl bg-card border border-border">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
            <span className="text-foreground font-medium">Ready to start coding?</span>
            <button className="btn-neon px-6 py-2">
              Launch Editor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;