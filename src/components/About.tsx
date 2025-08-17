import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Trophy, Users } from "lucide-react";

const About = () => {
  const achievements = [
    {
      number: "30+",
      label: "Complete Project",
      description: "Successfully delivered projects across various domains"
    },
    {
      number: "4+",
      label: "Years of Experience", 
      description: "Continuous learning and professional development"
    },
    {
      number: "1",
      label: "Hackathon Win",
      description: "Team leadership in competitive programming"
    }
  ];

  const workingProcess = [
    {
      step: "01",
      title: "Business Planning",
      description: "Understanding requirements and defining project scope with clear objectives and deliverables.",
      icon: <Trophy className="w-8 h-8" />,
      color: "bg-blue-500"
    },
    {
      step: "02", 
      title: "Design Strategy",
      description: "Creating comprehensive design solutions that align with business goals and user needs.",
      icon: <GraduationCap className="w-8 h-8" />,
      color: "bg-purple-500"
    },
    {
      step: "03",
      title: "Grow Your Business",
      description: "Implementing scalable solutions that drive growth and deliver measurable results.",
      icon: <Users className="w-8 h-8" />,
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-up">
            <div>
              <div className="inline-block px-3 sm:px-4 py-2 bg-primary/10 rounded-full mb-4 sm:mb-6">
                <span className="text-primary font-semibold text-sm sm:text-base">ABOUT ME</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 sm:mb-6 text-gray-900">
                Designing Solutions, Not Just Visuals
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                I'm a Computer Science student with a passion for creating innovative digital solutions. 
                My expertise spans machine learning, full-stack development, and mobile applications, 
                with a focus on delivering user-centric experiences that solve real-world problems.
              </p>
            </div>

            {/* Personal Details */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="text-gray-700 text-sm sm:text-base">Born: May 10, 2002</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="text-gray-700 text-sm sm:text-base">Location: India</span>
                </div>
              </div>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="text-gray-700 text-sm sm:text-base">CSE Student (2025)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="text-gray-700 text-sm sm:text-base">Team Leader</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              {achievements.map((achievement, index) => (
                <div key={achievement.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{achievement.label}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Working Process */}
          <div className="space-y-6 lg:space-y-8 animate-slide-in-right">
            <div className="text-center lg:text-left">
              <div className="inline-block px-3 sm:px-4 py-2 bg-secondary/10 rounded-full mb-4 sm:mb-6">
                <span className="text-secondary font-semibold text-sm sm:text-base">PROCESS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 sm:mb-6 text-gray-900">
                My Working Process
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {workingProcess.map((process, index) => (
                <Card key={process.step} className="p-4 sm:p-6 modern-card hover-lift">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 ${process.color} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <div className="text-white">
                        <div className="w-6 h-6 sm:w-8 sm:h-8">
                          {process.icon}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                        <span className="text-2xl sm:text-3xl font-bold text-gray-300">{process.step}</span>
                        <h4 className="text-lg sm:text-xl font-bold text-gray-900">{process.title}</h4>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{process.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-24 animate-fade-up">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-heading font-bold mb-6 text-gray-900">
              Educational Background
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Education */}
            <Card className="p-8 modern-card hover-lift">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/30 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Bachelor of Technology</h4>
                  <p className="text-primary font-semibold mb-2">Computer Science & Engineering</p>
                  <p className="text-gray-600 mb-3">
                    Chhattisgarh Swami Vivekanand Technical University (CSVTU)
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Graduating: 2025</span>
                    <span>•</span>
                    <span>Current SPI: 6.62</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Previous Education */}
            <Card className="p-8 modern-card hover-lift">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/30 rounded-2xl flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-secondary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Higher Secondary Education</h4>
                  <p className="text-secondary font-semibold mb-2">PCM with Information Technology</p>
                  <p className="text-gray-600 mb-3">
                    Govt. High Sec. School Pandariya
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Completed: 2020</span>
                    <span>•</span>
                    <span>Percentage: 52.8%</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;