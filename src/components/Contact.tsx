import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "ajaysonkar2044@gmail.com",
      link: "mailto:ajaysonkar2044@gmail.com",
      gradient: "from-blue-500/10 to-blue-600/20",
      iconColor: "text-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+91 7489166470",
      link: "tel:+917489166470",
      gradient: "from-green-500/10 to-green-600/20",
      iconColor: "text-green-600"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn", 
      content: "ajay-sonkar",
      link: "https://www.linkedin.com/in/ajay-sonkar-354376317",
      gradient: "from-blue-600/10 to-blue-700/20",
      iconColor: "text-blue-700"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      content: "AjaySonkar-CSE",
      link: "https://github.com/AjaySonkar-CSE",
      gradient: "from-gray-700/10 to-gray-800/20",
      iconColor: "text-gray-800"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20 animate-fade-up">
          <div className="inline-block px-3 sm:px-4 py-2 bg-primary/10 rounded-full mb-4 sm:mb-6">
            <span className="text-primary font-semibold text-sm sm:text-base">CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 sm:mb-8 text-gray-900">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to start your next project or discuss opportunities? 
            I'd love to hear from you and explore how we can work together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left side - Contact Info */}
          <div className="space-y-6 sm:space-y-8 animate-fade-up">
            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4 sm:mb-6 text-gray-900">Let's Work Together</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to chat about 
                technology and innovation, I'm always excited to connect with like-minded individuals.
              </p>
            </div>
            
            <div className="grid gap-4 sm:gap-6">
              {contactInfo.map((info, index) => (
                <Card 
                  key={info.title}
                  className={`p-4 sm:p-6 modern-card hover-lift group cursor-pointer bg-gradient-to-br ${info.gradient}`}
                  onClick={() => window.open(info.link, '_blank')}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                      <div className={info.iconColor}>
                        <div className="w-5 h-5 sm:w-6 sm:h-6">
                          {info.icon}
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors text-sm sm:text-base">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base">{info.content}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Location Card */}
            <Card className="p-4 sm:p-6 modern-card bg-gradient-to-br from-orange-500/10 to-orange-600/20">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-sm">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Location</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Currently based in India<br />
                    Available for remote work and relocation
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Right side - Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="p-6 sm:p-8 modern-card">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-3 sm:mb-4 text-gray-900">Send me a message</h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </div>
              
              <form className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 sm:mb-3 text-gray-700">
                      Your Name
                    </label>
                    <Input 
                      id="name"
                      placeholder="Enter your name"
                      className="h-10 sm:h-12 bg-gray-50 border-gray-200 focus:border-primary rounded-xl text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 sm:mb-3 text-gray-700">
                      Email Address
                    </label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="h-10 sm:h-12 bg-gray-50 border-gray-200 focus:border-primary rounded-xl text-sm sm:text-base"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2 sm:mb-3 text-gray-700">
                    Subject
                  </label>
                  <Input 
                    id="subject"
                    placeholder="What's this about?"
                    className="h-10 sm:h-12 bg-gray-50 border-gray-200 focus:border-primary rounded-xl text-sm sm:text-base"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 sm:mb-3 text-gray-700">
                    Message
                  </label>
                  <Textarea 
                    id="message"
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                    className="bg-gray-50 border-gray-200 focus:border-primary rounded-xl resize-none text-sm sm:text-base"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full secondary-gradient text-white border-0 hover:scale-105 transition-all duration-300 h-12 sm:h-14 text-base sm:text-lg font-semibold rounded-xl"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;