import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone, Download, Star } from "lucide-react";
import ajayPhoto from "@/assets/ajay-photo.jpg";
import Logo from "@/components/Logo";

const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/30 blob-decoration opacity-60"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-primary/20 blob-decoration opacity-70" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/25 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      {/* Navigation */}
      <nav className="relative z-20 pt-6 pb-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a href="#about" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">About</a>
            <a href="#services" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">Services</a>
            <a href="#projects" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">Portfolio</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors text-sm lg:text-base">Contact</a>
            <Button 
              variant="secondary" 
              size="sm" 
              className="secondary-gradient text-white border-0 hover:scale-105 transition-transform text-sm"
              asChild
            >
              <a href="/Ajay_Resume.pdf" download="Ajay_Resume.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 pt-8 lg:pt-12 pb-16 lg:pb-20">
        {/* Left side - Content */}
        <div className="text-center lg:text-left space-y-6 lg:space-y-8 animate-fade-up">
          <div className="space-y-4 lg:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold text-white leading-tight">
              Hello, I'm<br />
              <span className="text-secondary-gradient">Ajay Sonkar</span> An<br />
              <span className="text-white">ML Engineer</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Computer Science student passionate about machine learning, algorithms, and building innovative digital solutions. Experienced in leading development teams and creating impactful applications.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg"
              className="secondary-gradient text-white border-0 hover:scale-105 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full"
              asChild
            >
              <a href="#contact">
                Hire Me
              </a>
            </Button>
            
            <Button 
              size="lg"
              className="bg-white/20 backdrop-blur-sm text-white border border-white/40 hover:bg-white/30 hover:border-white/60 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full"
              asChild
            >
              <a href="#about" className="flex items-center gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                Watch Intro
              </a>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 pt-6 lg:pt-8">
            {/* <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
              <div className="flex -space-x-1 sm:-space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full border-2 border-white"></div>
              </div>
              <span className="text-white font-semibold ml-2 text-sm sm:text-base">Best Customer</span>
            </div> */}
            
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-secondary fill-current" />
                <span className="text-xl sm:text-2xl font-bold text-white">10+</span>
              </div>
              <span className="text-white/80 text-sm sm:text-base">Projects Experience</span>
            </div>
          </div>
        </div>
        
        {/* Right side - Photo and Info */}
        <div className="relative animate-slide-in-right mt-8 lg:mt-0">
          {/* Main photo container */}
          <div className="relative z-10">
            <div className="w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[28rem] mx-auto relative">
              {/* Decorative background */}
              <div className="absolute inset-0 secondary-gradient rounded-full opacity-20 blur-3xl"></div>
              
              {/* Photo */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 sm:border-8 border-white/20 shadow-2xl bg-gradient-to-br from-gray-50 to-gray-100">
                <img 
                  src={ajayPhoto} 
                  alt="Ajay Sonkar - Professional Photo"
                  className="w-full h-full object-contain"
                  loading="eager"
                  onError={(e) => {
                    console.log('Image failed to load:', ajayPhoto);
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-xl animate-bounce-slow">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-primary">10+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Projects Experience</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* About info card */}
          {/* About info card */}
<div className="
  relative 
  mt-6 sm:absolute sm:bottom-[-140px] sm:right-6
  lg:right-9 lg:bottom-[-160px] 
  bg-white rounded-2xl sm:rounded-3xl 
  p-4 sm:p-6 shadow-xl 
  max-w-[90%] sm:max-w-xs 
  animate-float z-20
" style={{ animationDelay: '1s' }}>
  <div className="flex items-start gap-3 sm:gap-4">
    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full"></div>
    </div>
    <div>
      <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
        Designing Solutions, Not Just Visuals
      </h4>
      <p className="text-xs sm:text-sm text-gray-600 mb-3">
        Experienced in creating user-focused solutions with modern technologies and machine learning.
      </p>
      <div className="space-y-1 sm:space-y-2">
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary rounded-full"></div>
          <span className="text-gray-700">10+ Complete Project</span>
        </div>
      </div>
      <Button 
        size="sm" 
        className="mt-3 sm:mt-4 secondary-gradient text-white border-0 rounded-full px-4 sm:px-6 text-xs sm:text-sm w-full sm:w-auto"
      >
        <a href="#contact">
          Contact Us
        </a>
      </Button>
    </div>
  </div>
</div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;