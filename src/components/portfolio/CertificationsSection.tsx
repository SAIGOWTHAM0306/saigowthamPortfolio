import React from 'react';
import { Award, Cloud, Code, Server, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      icon: <Cloud className="h-6 w-6" />,
      color: "text-orange-500",
      category: "Cloud"
    },
    {
      title: "ServiceNow CSA & Application Developer",
      issuer: "ServiceNow",
      icon: <Server className="h-6 w-6" />,
      color: "text-green-500", 
      category: "Platform"
    },
    {
      title: "Java Programming",
      issuer: "Certiport",
      icon: <Code className="h-6 w-6" />,
      color: "text-red-500",
      category: "Programming"
    },
    {
      title: "Python Programming",
      issuer: "Certiport",
      icon: <Code className="h-6 w-6" />,
      color: "text-blue-500",
      category: "Programming"
    },
    {
      title: "HTML & CSS",
      issuer: "Certiport",
      icon: <Code className="h-6 w-6" />,
      color: "text-purple-500",
      category: "Web Development"
    },
    {
      title: "Postman API Fundamentals",
      issuer: "Postman",
      icon: <Database className="h-6 w-6" />,
      color: "text-teal-500",
      category: "API Development"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Cloud": "bg-orange-500/10 text-orange-500 border-orange-500/20",
      "Platform": "bg-green-500/10 text-green-500 border-green-500/20",
      "Programming": "bg-blue-500/10 text-blue-500 border-blue-500/20",
      "Web Development": "bg-purple-500/10 text-purple-500 border-purple-500/20",
      "API Development": "bg-teal-500/10 text-teal-500 border-teal-500/20"
    };
    return colors[category as keyof typeof colors] || "bg-primary/10 text-primary border-primary/20";
  };

  return (
    <section id="certifications" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Certifications</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications validating my expertise across various technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="card-gradient border-0 shadow-elegant hover:shadow-hover transition-smooth animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`${cert.color} group-hover:scale-110 transition-bounce`}>
                    {cert.icon}
                  </div>
                  <Award className="h-5 w-5 text-primary opacity-50 group-hover:opacity-100 transition-smooth" />
                </div>
                
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                  {cert.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {cert.issuer}
                </p>
                
                <Badge 
                  variant="outline" 
                  className={`text-xs ${getCategoryColor(cert.category)}`}
                >
                  {cert.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-fade-in">
            <div className="heading-lg text-primary mb-2">6+</div>
            <div className="text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="heading-lg text-primary mb-2">3</div>
            <div className="text-muted-foreground">Cloud Platforms</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="heading-lg text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Programming Languages</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="heading-lg text-primary mb-2">2+</div>
            <div className="text-muted-foreground">Years Learning</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;