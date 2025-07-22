import { Code, Github, Twitter, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code className="h-6 w-6 text-neon-cyan" />
              <span className="text-lg font-bold text-gradient">CodeGlow Hub</span>
            </div>
            <p className="text-muted-foreground text-sm">
              The most powerful online code editor with 20+ programming languages 
              and free learning resources for developers worldwide.
            </p>
            <div className="flex space-x-4">
              <Github className="h-5 w-5 text-muted-foreground hover:text-neon-cyan cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-neon-cyan cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-muted-foreground hover:text-neon-cyan cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Product</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-neon-cyan transition-colors">Code Editor</a>
              <a href="#" className="block text-muted-foreground hover:text-neon-cyan transition-colors">Languages</a>
              <a href="#" className="block text-muted-foreground hover:text-neon-cyan transition-colors">Collaboration</a>
              <a href="#" className="block text-muted-foreground hover:text-neon-cyan transition-colors">API</a>
            </div>
          </div>

          {/* Learning */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Learning</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-neon-cyan transition-colors">Free Courses</a>
              <a href="#" className="block text-muted-foreground hover:text-neon-cyan transition-colors">Tutorials</a>
              <a href="#" className="block text-muted-foreground hover:text-neon-cyan transition-colors">Code Examples</a>
              <a href="#" className="block text-muted-foreground hover:text-neon-cyan transition-colors">Community</a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Support</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-neon-cyan transition-colors">Help Center</a>
              <a href="#" className="block text-muted-foreground hover:text-neon-cyan transition-colors">Documentation</a>
              <a href="#" className="block text-muted-foreground hover:text-neon-cyan transition-colors">Contact Us</a>
              <a href="#" className="block text-muted-foreground hover:text-neon-cyan transition-colors">Bug Reports</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 CodeGlow Hub. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-destructive" />
              <span>for developers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;