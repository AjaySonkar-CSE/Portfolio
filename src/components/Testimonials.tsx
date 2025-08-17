import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Team Member",
      company: "Phoenix Hackathon",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Working with Ajay was incredible. His leadership during the hackathon and technical expertise in machine learning helped our team build an outstanding student monitoring system."
    },
    {
      id: 2,
      name: "Priya Singh", 
      role: "Project Collaborator",
      company: "University Project",
      avatar: "/api/placeholder/64/64",
      rating: 5,
      text: "Ajay's deep understanding of algorithms and problem-solving approach is remarkable. His ability to explain complex concepts and lead development teams is truly impressive."
    },
    {
      id: 3,
      name: "Dr. Sharma",
      role: "Faculty Mentor",
      company: "CSVTU",
      avatar: "/api/placeholder/64/64", 
      rating: 5,
      text: "One of the most dedicated students I've mentored. Ajay consistently delivers high-quality projects and shows exceptional skills in both machine learning and software development."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-primary font-semibold">TESTIMONIALS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-heading font-bold mb-8 text-gray-900">
            What People Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Feedback from teammates, collaborators, and mentors who have worked with me 
            on various projects and academic endeavors.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="p-8 modern-card hover-lift relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-primary font-medium">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid md:grid-cols-4 gap-8 animate-fade-up">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">30+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-secondary mb-2">4+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">15+</div>
            <div className="text-gray-600">Technologies Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;