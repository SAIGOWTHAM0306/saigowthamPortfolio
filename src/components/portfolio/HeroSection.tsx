import React from 'react';
import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="about" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90 dark:bg-background/95" />
      
      {/* Content */}
      <div className="relative z-10 container-width text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-primary font-medium">Hello, I'm</span>
          </div>
          
          {/* Name */}
          <h1 className="heading-xl mb-6 bg-gradient-hero bg-clip-text text-transparent animate-glow">
            Sai Gowtham Animireddy
          </h1>
          
          {/* Title */}
          <div className="heading-lg text-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Computer Science Student
            <span className="block text-primary mt-2">AI/ML Specialist</span>
          </div>
          
          {/* Description */}
          <div className="body-lg text-muted-foreground max-w-3xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p>
              I'm a Computer Science student specializing in Artificial Intelligence & Machine Learning 
              (B.Tech CSE-AIML, graduating 2026). I'm experienced in Java, Spring Boot, React, Node.js/Express, 
              and ServiceNow, with hands-on expertise in AWS, Docker, and cloud-native solutions. 
              I love building full-stack applications, solving problems, and working on scalable cloud-based systems.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="portfolio-gradient text-white hover:shadow-glow transition-smooth">
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="hover:shadow-elegant transition-smooth">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <a href="https://www.linkedin.com/in/animireddy-sai-gowtham-a36ba525b/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-bounce">
              <Linkedin className="h-6 w-6" />
            </Button>
            </a>
            <a href="mailto:saigowtham9666@gmail.com">
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-bounce">
              <Mail className="h-6 w-6" />
            </Button>
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('#skills')}
            className="animate-bounce hover:scale-110 transition-bounce"
            style={{ animationDelay: '1s' }}
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;