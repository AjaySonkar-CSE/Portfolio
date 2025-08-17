import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, FileText, Brain, Camera, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Text Summarization using Machine Learning",
      description: "Developed an extractive/abstractive text summarization model using advanced NLP techniques. The system processes and pre-trains on datasets like CNN/DailyMail and XSum for effective summarization tasks.",
      icon: <FileText className="w-6 h-6" />,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      technologies: ["Python", "NLP", "Machine Learning", "TensorFlow", "CNN/DailyMail Dataset"],
      features: [
        "Extractive and abstractive summarization techniques",
        "Pre-trained on large-scale datasets",
        "Optimized for various text lengths",
        "High accuracy summarization results"
      ]
    },
    {
      title: "Automated Attendance System using ML",
      description: "Built an intelligent attendance system using Machine Learning and Deep Learning with OpenCV. Features include face detection using Haar cascades and MTCNN, and face recognition with Facenet and Dlib.",
      icon: <Camera className="w-6 h-6" />,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      technologies: ["Python", "OpenCV", "Deep Learning", "Haar Cascades", "MTCNN", "Facenet"],
      features: [
        "Real-time face detection and recognition",
        "Multiple detection algorithms (Haar, MTCNN)",
        "High accuracy face recognition using Facenet",
        "Automated attendance logging system"
      ]
    },
    {
      title: "T&C Extraction Using ML",
      description: "Developed an NLP-based model to extract and classify Terms & Conditions from legal documents using TF-IDF and Logistic Regression. Significantly improved automation in legal text processing.",
      icon: <Brain className="w-6 h-6" />,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      technologies: ["Python", "NLP", "TF-IDF", "Logistic Regression", "Legal Text Processing"],
      features: [
        "Automated T&C extraction from legal documents",
        "Classification using machine learning",
        "TF-IDF vectorization for text analysis",
        "Improved legal document processing efficiency"
      ]
    },
    {
      title: "Stock Price Prediction using ML",
      description: "Built a comprehensive web-based stock price prediction system using Linear Regression. Historical stock data collected via yfinance API and preprocessed using pandas, with results visualized using Chart.js in Flask interface.",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      technologies: ["Python", "Flask", "Linear Regression", "yfinance API", "Chart.js", "Pandas"],
      features: [
        "Real-time stock data collection via yfinance API",
        "Linear regression prediction model",
        "Interactive web interface with Flask",
        "Data visualization using Chart.js"
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of innovative projects demonstrating expertise in machine learning, 
            web development, and software engineering with real-world applications.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="p-6 card-gradient border-0 shadow-lg hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${project.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <div className={project.color}>
                      {project.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">TECHNOLOGIES USED</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="px-3 py-1 bg-primary/10 text-primary border-0 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">KEY FEATURES</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* View more section */}
        <div className="text-center mt-16 animate-fade-up">
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover-lift"
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

export default Projects;