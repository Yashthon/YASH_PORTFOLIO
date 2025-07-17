import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Settings, Layers, Globe } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "C/C++"],
      color: "hero-gradient",
      icon: Code
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Express.js", "Django", "Next.js", "Tailwind CSS"],
      color: "accent-gradient",
      icon: Layers
    },
    {
      title: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Oracle", "Redis"],
      color: "subtle-gradient",
      icon: Database
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins", "CI/CD"],
      color: "hero-gradient",
      icon: Cloud
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "JIRA", "Postman", "Figma", "Salesforce", "Microservices"],
      color: "accent-gradient",
      icon: Settings
    },
    {
      title: "Web Technologies",
      skills: ["REST APIs", "GraphQL", "WebSockets", "OAuth", "JWT", "Webhooks"],
      color: "subtle-gradient",
      icon: Globe
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 subtle-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="glass-effect hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="text-sm hover-lift transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}