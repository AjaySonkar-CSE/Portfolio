import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, FileText, Brain, Camera, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: "01",
      title: "Text Summarization ML",
      category: "Machine Learning",
      description: "Advanced NLP model for extractive and abstractive text summarization using CNN/DailyMail datasets.",
      image: "/api/placeholder/400/300",
      technologies: ["Python", "TensorFlow", "NLP", "Deep Learning"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: "02", 
      title: "Smart Attendance System",
      category: "Computer Vision",
      description: "Automated attendance tracking using face detection and recognition with Haar cascades and MTCNN.",
      image: "/api/placeholder/400/300",
      technologies: ["OpenCV", "Python", "Face Recognition", "Deep Learning"],
      gradient: "from-green-500 to-blue-500"
    },
    {
      id: "03",
      title: "Legal T&C Extractor",
      category: "NLP & Legal Tech",
      description: "ML-based system to extract and classify Terms & Conditions from legal documents using TF-IDF.",
      image: "/api/placeholder/400/300", 
      technologies: ["Python", "TF-IDF", "Legal Processing", "Classification"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: "04",
      title: "Stock Price Predictor",
      category: "Financial ML",
      description: "Web-based stock prediction system using Linear Regression with real-time data visualization.",
      image: "/api/placeholder/400/300",
      technologies: ["Flask", "Chart.js", "yfinance", "Linear Regression"],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const categories = ["All", "Machine Learning", "Computer Vision", "Web Development", "Mobile Apps"];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20 animate-fade-up">
          <div className="inline-block px-3 sm:px-4 py-2 bg-primary/10 rounded-full mb-4 sm:mb-6">
            <span className="text-primary font-semibold text-sm sm:text-base">PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 sm:mb-8 text-gray-900">
            Digital Product Showcases
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Explore my collection of innovative projects spanning machine learning, 
            web development, and software engineering with real-world applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16 animate-fade-up px-4">
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={index === 0 ? "default" : "outline"}
              className={`rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base transition-all duration-300 ${
                index === 0 
                  ? "bg-primary text-white hover:bg-primary/90" 
                  : "text-gray-600 hover:bg-primary hover:text-white"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 px-4">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="modern-card hover-lift group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl sm:text-6xl font-bold opacity-20 mb-2">{project.id}</div>
                    <div className="text-lg sm:text-xl font-semibold">{project.category}</div>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 sm:gap-4">
                  <Button size="sm" variant="secondary" className="rounded-full text-xs sm:text-sm">
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full text-white border-white hover:bg-white hover:text-black text-xs sm:text-sm">
                    <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <Badge className="bg-primary/10 text-primary border-0 text-xs sm:text-sm">
                    {project.category}
                  </Badge>
                  <span className="text-xl sm:text-2xl font-bold text-gray-300">{project.id}</span>
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold mb-2 sm:mb-3 text-gray-900 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline"
                      className="text-xs border-gray-300 text-gray-600 hover:border-primary hover:text-primary transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More */}
        <div className="text-center animate-fade-up">
          <Button 
            size="lg"
            className="secondary-gradient text-white border-0 hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full"
            asChild
          >
            <a href="https://github.com/AjaySonkar-CSE" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;