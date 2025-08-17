import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Smartphone, Brain, Globe, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern frameworks and technologies including React, Node.js, and Python.",
      gradient: "bg-gradient-to-br from-blue-500/10 to-blue-600/20",
      iconColor: "text-blue-600"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Developing intelligent systems using advanced ML algorithms, neural networks, and data science techniques.",
      gradient: "bg-gradient-to-br from-purple-500/10 to-purple-600/20",
      iconColor: "text-purple-600"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Creating native and cross-platform mobile applications with modern development tools and frameworks.",
      gradient: "bg-gradient-to-br from-green-500/10 to-green-600/20",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-semibold">SERVICES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8">
            Expertise Service! Let's check it out
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Specialized in creating innovative digital solutions with cutting-edge technologies. 
            From machine learning algorithms to full-stack applications, I deliver excellence in every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`p-8 modern-card hover-lift group cursor-pointer ${service.gradient}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-6">
                <div className={`w-16 h-16 ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <div className={service.iconColor}>
                    {service.icon}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

                {/* Skills Section */}
        <div className="text-center animate-fade-up">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-8 md:mb-12 text-gray-900">
            Technical <span className="text-gradient">Expertise</span>
          </h3>
          
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 px-4">
            {/* HTML */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
              <span className="font-bold text-gray-900 text-base md:text-lg text-left sm:text-left">HTML</span>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex-1 sm:w-48 md:w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <span className="font-bold text-gray-900 min-w-[2.5rem] sm:min-w-[3rem] text-right text-sm md:text-base">90%</span>
              </div>
            </div>

            {/* CSS */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
              <span className="font-bold text-gray-900 text-base md:text-lg text-left sm:text-left">CSS</span>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex-1 sm:w-48 md:w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <span className="font-bold text-gray-900 min-w-[2.5rem] sm:min-w-[3rem] text-right text-sm md:text-base">90%</span>
              </div>
            </div>

            {/* JavaScript */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
              <span className="font-bold text-gray-900 text-base md:text-lg text-left sm:text-left">JavaScript</span>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex-1 sm:w-48 md:w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full" style={{ width: '50%' }}></div>
                </div>
                <span className="font-bold text-gray-900 min-w-[2.5rem] sm:min-w-[3rem] text-right text-sm md:text-base">50%</span>
              </div>
            </div>

            {/* MongoDB */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
              <span className="font-bold text-gray-900 text-base md:text-lg text-left sm:text-left">MongoDB</span>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex-1 sm:w-48 md:w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full" style={{ width: '10%' }}></div>
                </div>
                <span className="font-bold text-gray-900 min-w-[2.5rem] sm:min-w-[3rem] text-right text-sm md:text-base">10%</span>
              </div>
            </div>

            {/* Java */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
              <span className="font-bold text-gray-900 text-base md:text-lg text-left sm:text-left">Java</span>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex-1 sm:w-48 md:w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <span className="font-bold text-gray-900 min-w-[2.5rem] sm:min-w-[3rem] text-right text-sm md:text-base">90%</span>
              </div>
            </div>

            {/* Python */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
              <span className="font-bold text-gray-900 text-base md:text-lg text-left sm:text-left">Python</span>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex-1 sm:w-48 md:w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <span className="font-bold text-gray-900 min-w-[2.5rem] sm:min-w-[3rem] text-right text-sm md:text-base">90%</span>
              </div>
            </div>

            {/* ReactJS */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
              <span className="font-bold text-gray-900 text-base md:text-lg text-left sm:text-left">ReactJS</span>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex-1 sm:w-48 md:w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full" style={{ width: '50%' }}></div>
                </div>
                <span className="font-bold text-gray-900 min-w-[2.5rem] sm:min-w-[3rem] text-right text-sm md:text-base">50%</span>
              </div>
            </div>

            {/* Express Node */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
              <span className="font-bold text-gray-900 text-base md:text-lg text-left sm:text-left">Express Node</span>
              <div className="flex items-center gap-2 sm:gap-4">
                <div className="flex-1 sm:w-48 md:w-64 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full" style={{ width: '50%' }}></div>
                </div>
                <span className="font-bold text-gray-900 min-w-[2.5rem] sm:min-w-[3rem] text-right text-sm md:text-base">50%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;