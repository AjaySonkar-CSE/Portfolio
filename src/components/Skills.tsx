import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Smartphone, Globe, Brain, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      skills: ["Java with DSA", "Python", "HTML & CSS", "XML", "Kotlin"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Globe className="w-6 h-6" />,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      skills: ["Pandas", "NumPy", "TensorFlow"]
    },
    {
      title: "Technologies",
      icon: <Brain className="w-6 h-6" />,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      skills: ["Machine Learning", "Data Science (Basic)"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      skills: ["Git", "Android Studio", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Proficient in a diverse range of programming languages, frameworks, and technologies 
            with hands-on experience in building real-world applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="p-6 card-gradient border-0 shadow-lg hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-lg ${category.bgColor}`}>
                  <div className={category.color}>
                    {category.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    {category.title}
                  </h3>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 bg-primary/10 text-primary border-0 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional skills section */}
        <div className="mt-16 text-center animate-fade-up">
          <h3 className="text-2xl font-heading font-semibold mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "Data Structures & Algorithms",
              "Object-Oriented Programming", 
              "Machine Learning",
              "Web Development",
              "Mobile App Development",
              "Database Management",
              "API Development",
              "Version Control",
              "Team Leadership",
              "Problem Solving"
            ].map((competency) => (
              <div 
                key={competency}
                className="px-6 py-3 bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300 hover-lift"
              >
                <span className="font-medium text-foreground">{competency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;