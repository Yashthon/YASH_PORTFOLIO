import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "IT Software Engineer I",
      company: "Cohesity",
      location: "Pune, India",
      period: "12/2024 - Current",
      description: "Leading integration of Veritas Oracle-based business processes into Cohesity's Salesforce-driven ecosystem. Spearheading cross-functional collaboration initiatives to eliminate process failures and optimize system performance.",
      achievements: [
        "Integrating Veritas workflows into Cohesity's Salesforce environment",
        "Eliminating process failures through cross-functional collaboration",
        "Implementing advanced workflow automation solutions"
      ],
      technologies: ["Salesforce", "Oracle", "Process Integration", "Workflow Automation"],
      type: "current"
    },
    {
      title: "Business Process Integrator",
      company: "Veritas",
      location: "Pune, India",
      period: "07/2023 - 12/2024",
      description: "Successfully led the integration of Veritas' oracle workflows into Cohesity's Salesforce environment, ensuring operational continuity and performance optimization.",
      achievements: [
        "Led integration of oracle workflows into Salesforce environment",
        "Designed and implemented Order Lifecycle Visibility system",
        "Developed custom interface solutions reducing human intervention",
        "Minimized data entry errors through automation"
      ],
      technologies: ["Oracle", "Salesforce", "System Integration", "Process Automation"],
      type: "previous"
    },
    {
      title: "Associate IT Developer",
      company: "Veritas",
      location: "Pune, India",
      period: "07/2023 - 12/2024",
      description: "Designed and implemented scalable backend solutions optimizing enterprise-level order applications with focus on automation and performance.",
      achievements: [
        "Designed scalable backend solutions for enterprise applications",
        "Automated subscription fulfillment workflows",
        "Improved accuracy and reduced turnaround time",
        "Participated in sprint planning and backlog grooming using JIRA"
      ],
      technologies: ["Backend Development", "Automation", "JIRA", "Agile"],
      type: "previous"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in building scalable enterprise systems and driving business process integrations
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-12`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                
                <div className="flex-1 pl-12 md:pl-0">
                  <Card 
                    className={`glass-effect hover-lift animate-fade-in ${
                      exp.type === 'current' ? 'border-primary/50 shadow-primary/10' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <Building className="w-4 h-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:items-end gap-2">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                      </div>
                      
                      {exp.type === 'current' && (
                        <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/30">
                          Current Position
                        </Badge>
                      )}
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="secondary" 
                            className="text-xs hover-lift transition-smooth"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}