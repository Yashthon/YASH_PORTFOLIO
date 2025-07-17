import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Download, X, MapPin, Phone, Mail, Calendar, Award, GraduationCap, Building, Code, Languages } from "lucide-react";

interface CVPreviewProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export default function CVPreview({ isOpen, onClose, onDownload }: CVPreviewProps) {
  const personalInfo = {
    name: "Yash Prajapati",
    title: "IT Software Engineer & Full Stack Developer",
    location: "Pune, India 411062",
    phone: "+91 9284119081",
    email: "yashprajapati@gmail.com",
    summary: "Multidisciplinary IT professional with proven success in building and scaling enterprise systems that connect business goals with technical excellence. Currently driving end-to-end Lead to Cash (L2C) process integration at Cohesity, with prior experience optimizing subscription billing and order management systems at Veritas."
  };

  const experience = [
    {
      title: "IT Software Engineer I",
      company: "Cohesity",
      location: "Pune, India",
      period: "12/2024 - Current",
      responsibilities: [
        "Leading integration of Veritas Oracle-based business processes into Cohesity's Salesforce-driven ecosystem",
        "Spearheading cross-functional collaboration initiatives to eliminate process failures and optimize system performance",
        "Implementing advanced workflow automation solutions"
      ]
    },
    {
      title: "Business Process Integrator",
      company: "Veritas",
      location: "Pune, India", 
      period: "07/2023 - 12/2024",
      responsibilities: [
        "Successfully led the integration of Veritas' oracle workflows into Cohesity's Salesforce environment",
        "Designed and implemented the Order Lifecycle Visibility system ensuring operational continuity",
        "Developed custom interface solutions significantly reducing human intervention and minimizing data entry errors"
      ]
    },
    {
      title: "Associate IT Developer",
      company: "Veritas",
      location: "Pune, India",
      period: "07/2023 - 12/2024",
      responsibilities: [
        "Designed and implemented scalable backend solutions optimizing enterprise-level order application",
        "Contributed to automation of subscription fulfillment workflows improving accuracy and reducing turnaround time",
        "Participated in sprint planning, backlog grooming, and progress tracking using JIRA"
      ]
    }
  ];

  const skills = {
    languages: ["Python", "JavaScript", "SQL", "HTML/CSS", "TypeScript", "C/C++"],
    frameworks: ["React.js", "Node.js", "Express.js", "Django", "Tailwind CSS", "Next.js"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Oracle"],
    tools: ["Git", "Docker", "Kubernetes", "Jenkins", "Postman", "Figma", "JIRA"],
    cloud: ["AWS", "Azure", "GCP"],
    other: ["REST APIs", "GraphQL", "Microservices", "CI/CD", "Agile", "Scrum"]
  };

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "MIT World Peace University",
      location: "Pune, IN-MH", 
      year: "2023",
      grade: "74.48%",
      achievement: "Best Outgoing Student"
    }
  ];

  const certifications = [
    "Google Data Analytics - Coursera (March 2024)",
    "AI for Business Leaders - Udemy (April 2024)", 
    "ChatGPT - Udemy (April 2024)",
    "Blockchain Technology - edX (September 2022)",
    "Data Science - Coursera (June 2022)",
    "Beginners to Advanced AI/SQL - Udemy (October 2021)"
  ];

  const languages = [
    { name: "English", level: "C2" },
    { name: "Gujarati", level: "C2" },
    { name: "Hindi", level: "C2" },
    { name: "Marathi", level: "C2" }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-2xl font-bold">CV Preview</DialogTitle>
          <div className="flex gap-2">
            <Button onClick={onDownload} size="sm" className="hover-glow">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
            <Button onClick={onClose} variant="ghost" size="sm">
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="cv-content bg-white text-black p-8 rounded-lg shadow-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">{personalInfo.name}</h1>
            <p className="text-xl text-gray-600 mb-4">{personalInfo.title}</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {personalInfo.location}
              </div>
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                {personalInfo.phone}
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                {personalInfo.email}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-b-2 border-gray-300 pb-1">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-b-2 border-gray-300 pb-1 flex items-center gap-2">
              <Building className="w-5 h-5" />
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-semibold text-lg">{exp.title}</h3>
                    <span className="text-sm text-gray-600 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{exp.company} - {exp.location}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm">{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-b-2 border-gray-300 pb-1 flex items-center gap-2">
              <Code className="w-5 h-5" />
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="mb-4">
                  <h3 className="font-semibold mb-2 capitalize">{category}:</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-b-2 border-gray-300 pb-1 flex items-center gap-2">
              <GraduationCap className="w-5 h-5" />
              Education
            </h2>
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-lg">{edu.degree}</h3>
                <p className="text-gray-600">{edu.institution} - {edu.location}</p>
                <p className="text-sm text-gray-600">Graduated: {edu.year} | Grade: {edu.grade}</p>
                <p className="text-sm text-blue-600 font-medium">🏆 {edu.achievement}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-3 border-b-2 border-gray-300 pb-1 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xl font-bold mb-3 border-b-2 border-gray-300 pb-1 flex items-center gap-2">
              <Languages className="w-5 h-5" />
              Languages
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {languages.map((lang) => (
                <div key={lang.name} className="text-center">
                  <p className="font-medium">{lang.name}</p>
                  <Badge variant="outline" className="text-xs">{lang.level}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}