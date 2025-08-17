import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Leadership experience and practical application of technical skills in 
            collaborative environments and competitive challenges.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2"></div>
          
          {/* Experience item */}
          <div className="relative mb-12 animate-fade-up">
            <div className="flex items-center mb-8">
              <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background shadow-lg transform md:-translate-x-1/2 flex items-center justify-center">
                <Trophy className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            
            <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8 md:text-right md:ml-auto">
              <Card className="p-6 card-gradient border-0 shadow-lg hover-lift">
                <div className="flex items-start gap-4 md:flex-row-reverse md:text-right">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Trophy className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 md:justify-end">
                      <Badge variant="secondary" className="bg-primary/10 text-primary">
                        Leadership
                      </Badge>
                      <Badge variant="outline">
                        Team Collaboration
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-heading font-semibold mb-2">
                      Team Leader
                    </h3>
                    <p className="text-primary font-medium mb-2">PHEONIX HACKATHON</p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 md:justify-end">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>Team size: 4</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>2023</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        Led a team of 4 developers in creating a comprehensive Web Application 
                        for Student Monitoring System during the hackathon competition.
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Coordinated team efforts and managed project timeline</li>
                        <li>• Designed system architecture and user interface</li>
                        <li>• Implemented key features for student data management</li>
                        <li>• Presented the solution to judges and stakeholders</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        
        {/* Skills gained section */}
        <div className="mt-16 text-center animate-fade-up">
          <h3 className="text-2xl font-heading font-semibold mb-8">Skills Developed</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center card-gradient border-0 shadow-lg hover-lift">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Team Leadership</h4>
              <p className="text-muted-foreground">
                Experience leading diverse teams and coordinating collaborative efforts
              </p>
            </Card>
            
            <Card className="p-6 text-center card-gradient border-0 shadow-lg hover-lift">
              <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Project Management</h4>
              <p className="text-muted-foreground">
                Managing timelines, resources, and deliverables in fast-paced environments
              </p>
            </Card>
            
            <Card className="p-6 text-center card-gradient border-0 shadow-lg hover-lift">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Solution Design</h4>
              <p className="text-muted-foreground">
                Architecting scalable solutions for real-world problems
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;