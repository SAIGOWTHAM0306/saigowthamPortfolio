import React from 'react';
import { Trophy, Star, Target, Code2, Medal, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "350+ Coding Challenges",
      description: "Solved complex problems across LeetCode, CodeChef, and HackerRank platforms",
      metric: "350+",
      color: "text-blue-500"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Top 25% Performer",
      description: "Consistently ranked in top 25% on both CodeChef and LeetCode platforms",
      metric: "Top 25%",
      color: "text-yellow-500"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Oracle SQL Hackathon",
      description: "Secured 5th place among 3000+ participants in competitive programming",
      metric: "5th Place",
      color: "text-orange-500"
    },
    {
      icon: <Medal className="h-8 w-8" />,
      title: "HackerRank Badges",
      description: "Earned 4-star proficiency badges in C, Python, and Java programming",
      metric: "4-Star",
      color: "text-green-500"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Problem Solving",
      description: "Consistent track record of solving algorithmic and data structure challenges",
      metric: "Daily",
      color: "text-purple-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Competitive Programming",
      description: "Active participant in online coding competitions and hackathons",
      metric: "Active",
      color: "text-red-500"
    }
  ];

  const platforms = [
    { name: "LeetCode", problems: "200+", rank: "Top 25%" },
    { name: "CodeChef", problems: "100+", rank: "Top 25%" },
    { name: "HackerRank", problems: "50+", rank: "4-Star" }
  ];

  return (
    <section id="achievements" className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Achievements & Recognition</h2>
          <p className="body-lg text-muted-foreground max-w-2xl mx-auto">
            Highlighting my competitive programming achievements and technical accomplishments
          </p>
        </div>
        
        {/* Main Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title}
              className="card-gradient border-0 shadow-elegant hover:shadow-hover transition-smooth animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`${achievement.color} mx-auto mb-4 group-hover:scale-110 transition-bounce`}>
                  {achievement.icon}
                </div>
                
                <div className="heading-md text-primary mb-2 group-hover:text-primary-glow transition-smooth">
                  {achievement.metric}
                </div>
                
                <h3 className="font-semibold text-foreground mb-3">
                  {achievement.title}
                </h3>
                
                <p className="body-md text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Platform Statistics */}
        <div className="max-w-4xl mx-auto">
          <h3 className="heading-md text-center mb-8">Platform Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <Card 
                key={platform.name}
                className="card-gradient border-0 shadow-elegant hover:shadow-hover transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-foreground mb-3 text-lg">
                    {platform.name}
                  </h4>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Problems Solved:</span>
                      <span className="font-semibold text-primary">{platform.problems}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Ranking:</span>
                      <span className="font-semibold text-success">{platform.rank}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Achievement Summary */}
        <div className="mt-16 text-center">
          <div className="inline-block px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-primary font-semibold">
              🏆 Consistent performer with 350+ problems solved across multiple platforms
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;