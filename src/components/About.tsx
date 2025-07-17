import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with 5+ years of experience creating digital solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate full-stack developer who loves creating beautiful, 
              functional web applications. My journey in tech started with a curiosity 
              about how things work, which led me to dive deep into both frontend 
              and backend development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or enjoying a good cup of coffee 
              while sketching out my next project idea.
            </p>
          </div>
          
          <div className="grid gap-6">
            <Card className="glass-effect hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Full Stack Development</h3>
                </div>
                <p className="text-muted-foreground">
                  React, Node.js, TypeScript, and modern web technologies
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg accent-gradient flex items-center justify-center">
                    <Palette className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">UI/UX Design</h3>
                </div>
                <p className="text-muted-foreground">
                  Creating intuitive and beautiful user experiences
                </p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg subtle-gradient flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Performance Optimization</h3>
                </div>
                <p className="text-muted-foreground">
                  Building fast, scalable applications that users love
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}