import React from 'react';
import { Calendar, MapPin, Building, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceSection = () => {
  const experience = {
    company: "Technical Hub",
    position: "AWS Development Trainee",
    duration: "June 2024 – May 2025",
    location: "Remote",
    achievements: [
      "Deployed 2+ AWS serverless apps supporting 1K+ users",
      "Built auto-scaling systems with Terraform, ensuring 99.9% uptime", 
      "Automated CI/CD with Jenkins, cutting deployment time by 40%"
    ]
  };

  return (
    <section id="experience" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Professional Experience</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in building scalable cloud solutions and automation systems
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="card-gradient border-0 shadow-elegant hover:shadow-hover transition-smooth animate-fade-in">
            <CardContent className="p-8">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="heading-md text-primary mb-2">{experience.position}</h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Building className="h-4 w-4 mr-2" />
                    <span className="font-medium">{experience.company}</span>
                  </div>
                </div>
                
                <div className="lg:text-right">
                  <div className="flex items-center text-muted-foreground mb-1">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
              
              {/* Achievements */}
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-success" />
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {experience.achievements.map((achievement, index) => (
                    <li 
                      key={index}
                      className="flex items-start animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span className="body-md text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Tech Stack Used */}
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {["AWS Lambda", "API Gateway", "DynamoDB", "Terraform", "Jenkins", "Docker"].map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-success/10 text-success border border-success/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;