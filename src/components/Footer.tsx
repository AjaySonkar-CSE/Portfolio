import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Personal Info */}
          <div className="space-y-3 sm:space-y-4">
            <Logo size="lg" />
            <p className="text-primary-foreground/80 leading-relaxed text-sm sm:text-base">
              Full Stack Developer & ML Engineer passionate about creating 
              innovative solutions with modern technologies.
            </p>
            <div className="space-y-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>ajaysonkar2044@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>+91 7489166470</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-1 sm:space-y-2">
              <a 
                href="#about" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base"
              >
                About Me
              </a>
              <a 
                href="#skills" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base"
              >
                Skills
              </a>
              <a 
                href="#experience" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base"
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm sm:text-base"
              >
                Contact
              </a>
            </nav>
          </div>
          
          {/* Social Links */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold">Connect With Me</h4>
            <div className="flex gap-3 sm:gap-4">
              <a 
                href="https://linkedin.com/in/ajay-sonkar" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="https://github.com/AjaySonkar-CSE" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="mailto:ajaysonkar2044@gmail.com"
                className="p-2 sm:p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
            <p className="text-xs sm:text-sm text-primary-foreground/60 leading-relaxed">
              Always open to discussing new opportunities, interesting projects, 
              or collaborations. Let's build something amazing together!
            </p>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-primary-foreground/60 text-center sm:text-left">
              © {currentYear} Ajay Sonkar. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm text-primary-foreground/60 flex items-center gap-1">
              Made with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" /> and modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;