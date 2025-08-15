import React from 'react';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  GraduationCap, 
  Heart, 
  Shield, 
  Users, 
  ArrowRight, 
  Quote,
  Star 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const programs = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Education Support",
      description: "Providing quality education opportunities and scholarships to underprivileged children across Pakistan.",
      stats: "500+ Students"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Healthcare Services",
      description: "Free medical camps, health awareness programs, and emergency medical assistance for communities in need.",
      stats: "10,000+ Treatments"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Emergency Relief",
      description: "Rapid response during natural disasters, providing food, shelter, and essential supplies to affected families.",
      stats: "50+ Relief Operations"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Development",
      description: "Empowering local communities through skill development, women's empowerment, and sustainable livelihood programs.",
      stats: "200+ Communities"
    }
  ];

  const testimonials = [
    {
      name: "Fatima Khan",
      location: "Karachi",
      text: "Kaar-e-Kamal helped my daughter get quality education. Today she's pursuing her medical degree.",
      rating: 5
    },
    {
      name: "Ahmed Ali",
      location: "Lahore",
      text: "During the floods, they were the first to reach our village with food and medical supplies. We'll never forget their kindness.",
      rating: 5
    },
    {
      name: "Mariam Shah",
      location: "Islamabad",
      text: "The vocational training program helped me start my own business. Now I can support my family independently.",
      rating: 5
    }
  ];

  return (
    <div>
      <HeroSection />

      {/* Programs Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4 gold-underline">
              OUR PROGRAMS
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive welfare programs designed to address the diverse needs of Pakistani communities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="group hover:shadow-gold transition-all duration-300 scale-hover border-2 hover:border-gold/30">
                <CardHeader className="text-center">
                  <div className="text-gold mb-4 group-hover:scale-110 transition-transform">
                    {program.icon}
                  </div>
                  <CardTitle className="font-heading text-xl">{program.title}</CardTitle>
                  <div className="text-gold font-semibold text-sm">{program.stats}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-4">{program.description}</p>
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-gold group-hover:text-black transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/programs">
              <Button size="lg" className="btn-hero">
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gold mb-4">
              OUR IMPACT IN NUMBERS
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real change measured through the lives we've touched and communities we've empowered
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-heading font-bold text-gold mb-2 counter">60+</div>
              <div className="text-gray-300">Cities Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-heading font-bold text-gold mb-2 counter">3,000+</div>
              <div className="text-gray-300">Families Helped</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-heading font-bold text-gold mb-2 counter">100+</div>
              <div className="text-gray-300">Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-heading font-bold text-gold mb-2 counter">5M+</div>
              <div className="text-gray-300">PKR Distributed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4 gold-underline">
              SUCCESS STORIES
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from the communities and individuals whose lives have been transformed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-gold transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="text-gold h-8 w-8 mb-4" />
                  <p className="text-muted-foreground mb-6 italic">{testimonial.text}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-secondary">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                    <div className="flex space-x-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gold fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/stories">
              <Button variant="outline" size="lg" className="btn-outline-hero">
                Read More Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-4xl font-heading font-bold text-gold mb-6">
                  MESSAGE FROM OUR CEO
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    "At Kaar-e-Kamal, we believe that every individual deserves dignity, opportunity, and hope. Our mission goes beyond charity—we aim to create sustainable change that empowers communities across Pakistan."
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    "Through our comprehensive programs in education, healthcare, emergency relief, and community development, we've witnessed the transformation of thousands of lives. But our work is far from over."
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    "I invite you to join us in this noble mission. Together, we can build a Pakistan where every family has access to basic necessities and every child has the opportunity to dream and achieve."
                  </p>
                  <div className="pt-4">
                    <p className="text-gold font-semibold text-lg">Muhammad Ali Khan</p>
                    <p className="text-gray-400">Chief Executive Officer</p>
                    <p className="text-gray-400">Kaar-e-Kamal Welfare Foundation</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 text-center">
                <div className="relative inline-block">
                  <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-gold shadow-2xl">
                    <img 
                      src="/lovable-uploads/22a1526c-0c26-44f6-b7c3-8fe4ab4914e1.png" 
                      alt="Muhammad Ali Khan - CEO of Kaar-e-Kamal Welfare Foundation"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4">
            READY TO MAKE A DIFFERENCE?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of compassionate individuals who are helping us build a better Pakistan, one community at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate">
              <Button size="lg" className="bg-secondary text-white hover:bg-black">
                Donate Now
                <Heart className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white">
                Become a Volunteer
                <Users className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;