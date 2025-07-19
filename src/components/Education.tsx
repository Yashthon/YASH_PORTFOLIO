import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, California, USA",
      year: "2023 - 2024",
      grade: "92.54%",
      achievement: "Distinction",
      description: "Advanced computer science program focusing on artificial intelligence, machine learning, and distributed systems.",
      highlights: [
        "Specialized in Machine Learning and AI",
        "Research in Distributed Computing",
        "Teaching Assistant for undergraduate courses",
        "Published research papers in top-tier conferences"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "MIT World Peace University",
      location: "Pune, Maharashtra, India",
      year: "2020 - 2023",
      grade: "72.54%",
      achievement: "Best Outgoing Student",
      description: "Comprehensive computer science program covering algorithms, data structures, software engineering, and modern web technologies.",
      highlights: [
        "Specialized in Full Stack Development",
        "Participated in multiple hackathons and coding competitions",
        "Led student tech community initiatives",
        "Completed capstone project on enterprise system integration"
      ]
    }
  ];

  const certifications = [
    {
      name: "Google Data Analytics",
      issuer: "Coursera",
      date: "March 2024",
      description: "Comprehensive data analytics program covering data collection, processing, analysis, and visualization",
      skills: ["Data Analysis", "SQL", "Tableau", "R Programming", "Data Visualization"]
    },
    {
      name: "AI for Business Leaders",
      issuer: "Udemy",
      date: "April 2024",
      description: "Strategic understanding of AI implementation in business contexts",
      skills: ["AI Strategy", "Machine Learning", "Business Intelligence", "Digital Transformation"]
    },
    {
      name: "Advanced ChatGPT",
      issuer: "Udemy",
      date: "April 2024",
      description: "Advanced techniques for leveraging AI in software development and business processes",
      skills: ["Prompt Engineering", "AI Integration", "Automation", "NLP"]
    },
    {
      name: "Blockchain Technology",
      issuer: "edX",
      date: "September 2022",
      description: "Fundamentals of blockchain technology and cryptocurrency development",
      skills: ["Blockchain", "Smart Contracts", "Cryptocurrency", "Distributed Systems"]
    },
    {
      name: "Data Science Fundamentals",
      issuer: "Coursera",
      date: "June 2022",
      description: "Statistical analysis, machine learning, and data visualization techniques",
      skills: ["Python", "Machine Learning", "Statistics", "Data Mining"]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 subtle-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Education & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic foundation and continuous learning journey in technology
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" />
              Academic Education
            </h3>
            
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="glass-effect hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.year}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="mb-2">
                        {edu.grade}
                      </Badge>
                      <div className="flex items-center gap-1 text-sm text-primary">
                        <Award className="w-4 h-4" />
                        {edu.achievement}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div>
                    <h5 className="font-medium mb-2">Key Highlights:</h5>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Professional Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="glass-effect hover-lift animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-semibold">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer} • {cert.date}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {cert.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="outline" 
                          className="text-xs hover-lift transition-smooth"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}