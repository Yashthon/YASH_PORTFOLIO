import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Lead to Cash (L2C) Process Integration",
      description: "Spearheaded the integration of Veritas Oracle-based business processes into Cohesity's Salesforce environment, ensuring seamless operational continuity and enhanced system performance.",
      tech: ["Salesforce", "Oracle", "Process Integration", "Workflow Automation", "Enterprise Systems"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
      github: "#",
      demo: "#",
      category: "Enterprise Integration"
    },
    {
      title: "Order Lifecycle Visibility System",
      description: "Designed and implemented a comprehensive order management system providing complete visibility into the order lifecycle, significantly reducing processing time and improving accuracy.",
      tech: ["React.js", "Node.js", "Oracle", "RESTful APIs", "Data Analytics"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      github: "#",
      demo: "#",
      category: "Business Process Optimization"
    },
    {
      title: "Custom Interface Development",
      description: "Built manual order creation pages in Salesforce using Apex and high-tech details, significantly reducing human intervention and minimizing data entry errors.",
      tech: ["Salesforce", "Apex", "JavaScript", "Custom UI", "Data Validation"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop",
      github: "#",
      demo: "#",
      category: "Custom Development"
    },
    {
      title: "Subscription Fulfillment Automation",
      description: "Contributed to the automation of subscription fulfillment workflows, improving accuracy and reducing turnaround time through intelligent process automation.",
      tech: ["Python", "Automation", "Microservices", "API Integration", "Process Optimization"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop",
      github: "#",
      demo: "#",
      category: "Automation & Optimization"
    },
    {
      title: "Cross-Functional Collaboration Platform",
      description: "Worked closely with Product, Pricing, Operations, and Finance teams to establish unified understanding of enterprise and product architecture.",
      tech: ["JIRA", "Confluence", "Agile", "Cross-team Communication", "Documentation"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
      github: "#",
      demo: "#",
      category: "Team Collaboration"
    },
    {
      title: "YOLO-based Object Detection System",
      description: "Developed a method for object detection and traffic control based on artificial intelligence, utilizing YOLO-based object detection and image processing techniques.",
      tech: ["Python", "YOLO", "Computer Vision", "AI/ML", "Image Processing"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      github: "#",
      demo: "#",
      category: "AI/ML Research",
      patent: "Patent Pending - Delhi, India"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="glass-effect hover-lift animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth hover:scale-105"
                />
                <div className="absolute inset-0 hero-gradient opacity-20" />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/20 text-primary">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {project.patent && (
                  <div className="mb-4 p-3 bg-accent/10 rounded-lg">
                    <p className="text-sm text-accent font-medium">🏆 {project.patent}</p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs hover-lift transition-smooth"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button 
                    size="sm" 
                    className="flex-1 hover-glow transition-bounce"
                    disabled={project.demo === "#"}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {project.demo === "#" ? "Enterprise Project" : "Live Demo"}
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 hover-lift"
                    disabled={project.github === "#"}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {project.github === "#" ? "Private Repo" : "Code"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}