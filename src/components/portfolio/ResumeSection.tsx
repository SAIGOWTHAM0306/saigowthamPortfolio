import React from 'react';
import { Download, FileText, Eye, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ResumeSection = () => {
  const handleDownloadResume = () => {
    // In a real implementation, this would trigger a download of the actual resume PDF
    console.log('Downloading resume...');
    // window.open('/path-to-resume.pdf', '_blank');
  };

  const handleViewResume = () => {
    // In a real implementation, this would open the resume in a new tab
    console.log('Viewing resume...');
    // window.open('/path-to-resume.pdf', '_blank');
  };

  return (
    <section id="resume" className="section-padding">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Resume</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Download or view my complete professional resume with detailed experience and skills
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="card-gradient border-0 shadow-elegant hover:shadow-hover transition-smooth animate-fade-in">
            <CardContent className="p-8 text-center">
              {/* Resume Icon */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-12 w-12 text-primary" />
              </div>
              
              {/* Title */}
              <h3 className="heading-md mb-4">Professional Resume</h3>
              
              {/* Description */}
              <p className="body-md text-muted-foreground mb-8 leading-relaxed">
                Get a comprehensive overview of my professional experience, technical skills, 
                education, certifications, and achievements in a well-formatted PDF document.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {/* Download Button */}
                <Button 
                  size="lg" 
                  onClick={handleDownloadResume}
                  className="portfolio-gradient text-white hover:shadow-glow transition-smooth"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF
                </Button>
                
                {/* View Button */}
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleViewResume}
                  className="hover:shadow-elegant transition-smooth"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  View Online
                </Button>
              </div>
              
              {/* Resume Highlights */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="font-semibold text-primary mb-1">2026</div>
                  <div className="text-sm text-muted-foreground">Graduation</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-primary mb-1">6+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-primary mb-1">3+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-primary mb-1">350+</div>
                  <div className="text-sm text-muted-foreground">Problems Solved</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Resume last updated: December 2024 • 
              <a href="#" className="text-primary hover:underline ml-1">
                Request latest version
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;