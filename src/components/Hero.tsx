import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Hi, I'm <span className="accent-gradient bg-clip-text text-transparent">Alex</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg mb-12 text-primary-foreground/70 max-w-xl mx-auto">
            I create beautiful, functional web applications and digital experiences 
            that bring ideas to life
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="hover-glow transition-bounce"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass-effect hover-lift"
              onClick={() => scrollToSection('contact')}
            >
              Let's Connect
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-glow transition-smooth hover-lift"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-glow transition-smooth hover-lift"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:contact@example.com"
              className="text-primary-foreground/60 hover:text-primary-glow transition-smooth hover-lift"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-primary-foreground/60 hover:text-primary-glow transition-smooth"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}