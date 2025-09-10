import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "saigowtham9666@gmail.com",
      href: "mailto:saigowtham9666@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      value: "Connect with me",
      href: "#",
      color: "text-blue-600"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "View my code",
      href: "#", 
      color: "text-gray-600"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Get In Touch</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="heading-md mb-6">Let's Connect</h3>
              <p className="body-md text-muted-foreground mb-8 leading-relaxed">
                Whether you have a project in mind, want to discuss opportunities, 
                or simply want to connect, I'd love to hear from you. Feel free to 
                reach out through any of the channels below.
              </p>
            </div>
            
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  className="flex items-center p-4 rounded-lg bg-background border border-border hover:shadow-elegant transition-smooth animate-slide-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${contact.color} mr-4 group-hover:scale-110 transition-bounce`}>
                    {contact.icon}
                  </div>
                  <div>
                    <div className="font-medium text-foreground group-hover:text-primary transition-smooth">
                      {contact.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {contact.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Quick Stats */}
            <Card className="card-gradient border-0 shadow-elegant animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4">Quick Facts</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="font-medium text-primary">Within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Availability:</span>
                    <span className="font-medium text-success">Open to opportunities</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Time Zone:</span>
                    <span className="font-medium text-foreground">IST (GMT+5:30)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="card-gradient border-0 shadow-elegant hover:shadow-hover transition-smooth animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5 text-primary" />
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full portfolio-gradient text-white hover:shadow-glow transition-smooth"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;