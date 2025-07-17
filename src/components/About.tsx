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
            Multidisciplinary IT professional with expertise in enterprise systems and business process integration
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate IT Software Engineer with proven success in building and scaling 
              enterprise systems that bridge business goals with technical excellence. Currently at 
              Cohesity, I drive end-to-end Lead to Cash (L2C) process integration, leveraging my 
              expertise in Salesforce and Oracle-based business processes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My journey includes optimizing subscription billing and order management systems at 
              Veritas, where I developed custom interface solutions and automated fulfillment 
              workflows. I'm passionate about eliminating process failures through cross-functional 
              collaboration and implementing advanced workflow automation solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Beyond enterprise systems, I've contributed to AI research with a patent-pending 
              YOLO-based object detection system for traffic control. When I'm not coding, you can 
              find me exploring emerging technologies, contributing to open-source projects, or 
              mentoring fellow developers in the tech community.
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