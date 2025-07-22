import { Code, Cpu, Database, Globe, Smartphone, Terminal } from "lucide-react";

const LanguageGrid = () => {
  const languages = [
    { name: "Python", icon: Code, description: "Data science & AI", color: "text-neon-green", bgColor: "bg-neon-green/10" },
    { name: "JavaScript", icon: Globe, description: "Web development", color: "text-neon-cyan", bgColor: "bg-neon-cyan/10" },
    { name: "Java", icon: Cpu, description: "Enterprise apps", color: "text-neon-orange", bgColor: "bg-neon-orange/10" },
    { name: "C++", icon: Terminal, description: "System programming", color: "text-neon-purple", bgColor: "bg-neon-purple/10" },
    { name: "Clojure", icon: Globe, description: "Frontend framework", color: "text-neon-cyan", bgColor: "bg-neon-cyan/10" },
    { name: "Basic", icon: Database, description: "Backend runtime", color: "text-neon-green", bgColor: "bg-neon-green/10" },
    { name: "TypeScript", icon: Code, description: "Typed JavaScript", color: "text-neon-cyan", bgColor: "bg-neon-cyan/10" },
    { name: "Go", icon: Cpu, description: "Cloud & microservices", color: "text-neon-green", bgColor: "bg-neon-green/10" },
    { name: "Rust", icon: Terminal, description: "Memory safety", color: "text-neon-orange", bgColor: "bg-neon-orange/10" },
    { name: "PHP", icon: Globe, description: "Web backend", color: "text-neon-purple", bgColor: "bg-neon-purple/10" },
    { name: "C#", icon: Cpu, description: ".NET development", color: "text-neon-purple", bgColor: "bg-neon-purple/10" },
    { name: "Swift", icon: Smartphone, description: "iOS development", color: "text-neon-orange", bgColor: "bg-neon-orange/10" },
    { name: "Kotlin", icon: Smartphone, description: "Android development", color: "text-neon-green", bgColor: "bg-neon-green/10" },
    { name: "Ruby", icon: Code, description: "Web frameworks", color: "text-neon-pink", bgColor: "bg-neon-pink/10" },
    { name: "Scala", icon: Cpu, description: "Big data processing", color: "text-neon-cyan", bgColor: "bg-neon-cyan/10" },
    { name: "R", icon: Database, description: "Statistical computing", color: "text-neon-green", bgColor: "bg-neon-green/10" },
    { name: "SQL", icon: Database, description: "Database queries", color: "text-neon-cyan", bgColor: "bg-neon-cyan/10" },
    { name: "Assembly", icon: Globe, description: "Web markup & styling", color: "text-neon-orange", bgColor: "bg-neon-orange/10" },
    { name: "Lua", icon: Smartphone, description: "Flutter development", color: "text-neon-cyan", bgColor: "bg-neon-cyan/10" },
    { name: "Perl", icon: Terminal, description: "Text processing", color: "text-neon-purple", bgColor: "bg-neon-purple/10" },
  ];

  return (
    <section id="languages" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">20+ Programming</span>{" "}
            <span className="text-neon-purple">Languages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From web development to data science, mobile apps to system programming - 
            we support all the languages you need to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {languages.map((lang, index) => (
            <div
              key={lang.name}
              className="language-card group"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`p-3 rounded-lg ${lang.bgColor} mb-4 w-fit`}>
                <lang.icon className={`h-6 w-6 ${lang.color}`} />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-neon-cyan transition-colors">
                {lang.name}
              </h3>
              <p className="text-sm text-muted-foreground">{lang.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Can't find your language? We're constantly adding more!
          </p>
          <button className="btn-neon-accent px-8 py-3">
            Request a Language
          </button>
        </div>
      </div>
    </section>
  );
};

export default LanguageGrid;
