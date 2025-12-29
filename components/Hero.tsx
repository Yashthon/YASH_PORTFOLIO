import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download, Eye } from "lucide-react";
import { downloadCV } from "@/utils/downloadCV";
import CanvasBackground from "./CanvasBackground";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCVPreview = () => {
    window.dispatchEvent(new CustomEvent("openCVPreview"));
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-neutral-950">
      {/* Animated Physics Background */}
      <CanvasBackground />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col justify-center min-h-screen">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
          Hi, I'm <span className="accent-gradient bg-clip-text text-transparent">Yash</span>
        </h1>

        <p className="text-xl md:text-2xl mb-6 text-primary-foreground/80">
          SDE 1 & Salesforce Developer at Cohesity
        </p>

        <p className="text-lg mb-10 text-primary-foreground/70">
          Certified Salesforce Administrator and multidisciplinary IT professional
          building scalable enterprise systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button size="lg" onClick={() => scrollToSection("projects")}>
            View My Work
          </Button>

          <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
            Let's Connect
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button size="sm" variant="secondary" onClick={handleCVPreview}>
            <Eye className="w-4 h-4 mr-2" /> Preview CV
          </Button>

          <Button size="sm" variant="secondary" onClick={downloadCV}>
            <Download className="w-4 h-4 mr-2" /> Download CV
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <a href="https://github.com/Yashthon" target="_blank">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/yashprajapati99/" target="_blank">
            <Linkedin size={28} />
          </a>
          <a href="mailto:yashhprajaapati@gmail.com">
            <Mail size={28} />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button onClick={() => scrollToSection("about")}>
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}