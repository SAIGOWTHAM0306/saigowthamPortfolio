import React from 'react';
import { Code, Database, Brain, Wrench, BookOpen, Server } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "SQL", "HTML", "CSS", "C++"],
      color: "text-blue-500"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Databases", 
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
      color: "text-green-500"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI/ML",
      skills: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Keras", "Deep Learning"],
      color: "text-purple-500"
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "Frameworks",
      skills: ["Spring Boot", "React", "Angular", "Bootstrap"],
      color: "text-orange-500"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Tools",
      skills: ["Git", "Postman", "Docker", "Kubernetes", "Jenkins", "Terraform", "ServiceNow"],
      color: "text-red-500"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Core Subjects",
      skills: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Networking"],
      color: "text-teal-500"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Technical Skills</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="card-gradient border-0 shadow-elegant hover:shadow-hover transition-smooth animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`${category.color} mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="heading-md">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-smooth"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;