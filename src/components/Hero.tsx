import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, BookOpen, Zap } from "lucide-react";

const Hero = () => {
  const [currentCode, setCurrentCode] = useState(0);
  
  const codeExamples = [
    {
      language: "Python",
      code: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))  # Output: 55`,
      color: "text-neon-green"
    },
    {
      language: "JavaScript",
      code: `const fetchUserData = async (userId) => {
    try {
        const response = await fetch(\`/api/users/\${userId}\`);
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
};`,
      color: "text-neon-cyan"
    },
    {
      language: "C++",
      code: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    
    for (const auto& num : numbers) {
        std::cout << num * 2 << " ";
    }
    return 0;
}`,
      color: "text-neon-purple"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCode((prev) => (prev + 1) % codeExamples.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 animated-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-cyan/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-green/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient">Code</span>{" "}
                <span className="text-neon">without</span>{" "}
                <span className="text-gradient-secondary">limits</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Experience the most powerful online code editor with support for 20+ programming languages.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-neon text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                Start Coding Now
              </Button>
              <Button size="lg" variant="outline" className="btn-neon-secondary text-lg px-8 py-4">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Courses
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Zap className="h-4 w-4 text-neon-cyan" />
                <span>Instant execution</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-neon-green rounded-full"></span>
                <span>20+ Languages</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-neon-purple rounded-full"></span>
                <span>Secured</span>
              </div>
            </div>
          </div>

          {/* Right Content - Code Preview */}
          <div className="relative">
            <div className="code-preview border-2 border-neon-cyan/30 shadow-lg">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-destructive rounded-full"></div>
                  <div className="w-3 h-3 bg-neon-orange rounded-full"></div>
                  <div className="w-3 h-3 bg-neon-green rounded-full"></div>
                </div>
                <span className={`text-sm font-medium ${codeExamples[currentCode].color}`}>
                  {codeExamples[currentCode].language}
                </span>
              </div>
              <pre className="text-foreground text-sm leading-relaxed overflow-hidden">
                <code>{codeExamples[currentCode].code}</code>
              </pre>
            </div>
            
            {/* Animated indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {codeExamples.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentCode ? 'bg-neon-cyan' : 'bg-border'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
