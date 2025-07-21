import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download, Eye } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCVPreview = () => {
    const event = new CustomEvent('openCVPreview');
    window.dispatchEvent(event);
  };

  const handleCVDownload = () => {
    const event = new CustomEvent('downloadCV');
    window.dispatchEvent(event);
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
            Hi, I'm <span className="accent-gradient bg-clip-text text-transparent">Yash</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Software Engineer 1 & Salesforce Developer | Full Stack Developer
          </p>
          <p className="text-lg mb-12 text-primary-foreground/70 max-w-xl mx-auto">
            Multidisciplinary IT professional with expertise in building scalable enterprise systems 
            and driving end-to-end business process integrations
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
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

          {/* CV Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="sm"
              variant="secondary"
              className="hover-lift transition-smooth"
              onClick={handleCVPreview}
            >
              <Eye className="w-4 h-4 mr-2" />
              Preview CV
            </Button>
            <Button 
              size="sm"
              variant="secondary"
              className="hover-lift transition-smooth"
              onClick={handleCVDownload}
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/Yashthon" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-glow transition-smooth hover-lift"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/yashprajapati99/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-glow transition-smooth hover-lift"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:yashhprajaapati@gmail.com"
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