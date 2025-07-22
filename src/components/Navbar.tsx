import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, BookOpen } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Code className="h-8 w-8 text-neon-cyan" />
              <div className="absolute inset-0 h-8 w-8 text-neon-cyan animate-pulse-glow"></div>
            </div>
            <span className="text-xl font-bold text-gradient">TryCodeNow</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#editor" className="text-foreground hover:text-neon-cyan transition-colors">
              Code Editor
            </a>
            <a href="#languages" className="text-foreground hover:text-neon-cyan transition-colors">
              Languages
            </a>
            <a href="#courses" className="text-foreground hover:text-neon-cyan transition-colors">
              Free Courses
            </a>
            <a href="#features" className="text-foreground hover:text-neon-cyan transition-colors">
              Features
            </a>
            <Button variant="outline" className="btn-neon">
              Start Coding
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-neon-cyan"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 border border-border">
              <a href="#editor" className="block px-3 py-2 text-foreground hover:text-neon-cyan transition-colors">
                Code Editor
              </a>
              <a href="#languages" className="block px-3 py-2 text-foreground hover:text-neon-cyan transition-colors">
                Languages
              </a>
              <a href="#courses" className="block px-3 py-2 text-foreground hover:text-neon-cyan transition-colors">
                Free Courses
              </a>
              <a href="#features" className="block px-3 py-2 text-foreground hover:text-neon-cyan transition-colors">
                Features
              </a>
              <div className="px-3 py-2">
                <Button variant="outline" className="btn-neon w-full">
                  Start Coding
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
