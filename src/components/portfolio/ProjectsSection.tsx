import React from 'react';
import { ExternalLink, Github, Code, Database, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Student Management System",
      description: "A comprehensive system for managing student records, courses, and academic information with CRUD operations and advanced filtering capabilities.",
      techStack: ["Java", "JDBC", "MySQL", "Swing"],
      githubLink: "#",
      icon: <Database className="h-6 w-6" />,
      color: "text-blue-500"
    },
    {
      title: "Serverless Three-Tier Web App",
      description: "Scalable serverless architecture supporting 1000+ concurrent users with auto-scaling capabilities and real-time data processing.",
      techStack: ["AWS Lambda", "API Gateway", "DynamoDB", "React"],
      githubLink: "#",
      icon: <Cloud className="h-6 w-6" />,
      color: "text-green-500"
    },
    {
      title: "AI Text Summarizer App",
      description: "Intelligent text summarization application using advanced NLP models to generate concise summaries from large documents.",
      techStack: ["Node.js", "Hugging Face API", "Express", "React"],
      githubLink: "#",
      icon: <Code className="h-6 w-6" />,
      color: "text-purple-500"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Featured Projects</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects demonstrating full-stack development and cloud expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="card-gradient border-0 shadow-elegant hover:shadow-hover transition-smooth animate-slide-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className={`${project.color} group-hover:scale-110 transition-bounce`}>
                    {project.icon}
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="h-8 w-8 opacity-70 hover:opacity-100 transition-smooth"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="h-8 w-8 opacity-70 hover:opacity-100 transition-smooth"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="heading-md group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="body-md text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-2 py-1 rounded text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* More Projects CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover:shadow-elegant transition-smooth">
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;