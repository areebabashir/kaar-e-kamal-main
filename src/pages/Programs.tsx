import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  GraduationCap, 
  Heart, 
  Shield, 
  Users, 
  BookOpen, 
  Stethoscope,
  Home,
  Briefcase,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Education Support",
      description: "Comprehensive educational programs providing scholarships, school supplies, and learning resources to underprivileged children across Pakistan.",
      features: [
        "Monthly scholarships for deserving students",
        "School supplies and uniforms distribution",
        "Computer literacy programs",
        "Teacher training workshops",
        "Adult literacy classes"
      ],
      stats: {
        beneficiaries: "500+ Students",
        locations: "35+ Cities",
        investment: "2M+ PKR"
      },
      color: "bg-blue-500"
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Healthcare Services",
      description: "Free medical services, health awareness campaigns, and emergency medical assistance for communities lacking access to quality healthcare.",
      features: [
        "Free medical camps and consultations",
        "Medicine distribution programs",
        "Health awareness workshops",
        "Emergency medical assistance",
        "Mental health support services"
      ],
      stats: {
        beneficiaries: "10,000+ Patients",
        locations: "45+ Cities",
        investment: "3M+ PKR"
      },
      color: "bg-red-500"
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Emergency Relief",
      description: "Rapid response during natural disasters and emergencies, providing immediate aid including food, shelter, and essential supplies.",
      features: [
        "Flood and disaster relief operations",
        "Emergency food distribution",
        "Temporary shelter arrangements",
        "Clean water supply systems",
        "Rehabilitation support"
      ],
      stats: {
        beneficiaries: "5,000+ Families",
        locations: "25+ Districts",
        investment: "4M+ PKR"
      },
      color: "bg-green-500"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Community Development",
      description: "Sustainable development programs focused on skill building, women empowerment, and creating long-term positive community change.",
      features: [
        "Vocational training programs",
        "Women empowerment workshops",
        "Small business development support",
        "Community infrastructure projects",
        "Youth leadership programs"
      ],
      stats: {
        beneficiaries: "2,000+ Individuals",
        locations: "30+ Communities",
        investment: "1.5M+ PKR"
      },
      color: "bg-purple-500"
    }
  ];

  const subPrograms = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Digital Literacy",
      description: "Teaching computer and internet skills to bridge the digital divide"
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Preventive Care",
      description: "Health screenings and vaccination drives in remote areas"
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Housing Support",
      description: "Helping families rebuild homes after natural disasters"
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Employment Training",
      description: "Job skills training and placement assistance programs"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-heading font-bold text-white mb-6">
              OUR <span className="text-gold">PROGRAMS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive welfare initiatives designed to address the diverse needs 
              of Pakistani communities with sustainable, dignified solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <div key={index} className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:flex items-center gap-12`}>
                <div className="lg:w-1/2">
                  <Card className="h-full hover:shadow-gold transition-all duration-300 scale-hover border-2 hover:border-gold/30">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="text-gold">
                          {program.icon}
                        </div>
                        <div>
                          <CardTitle className="font-heading text-2xl">{program.title}</CardTitle>
                          <div className="text-gold font-semibold text-sm">{program.stats.beneficiaries}</div>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 mb-6">
                        {program.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-3 bg-gold/10 rounded-lg">
                          <div className="font-semibold text-secondary text-sm">{program.stats.beneficiaries}</div>
                          <div className="text-xs text-muted-foreground">Beneficiaries</div>
                        </div>
                        <div className="text-center p-3 bg-gold/10 rounded-lg">
                          <div className="font-semibold text-secondary text-sm">{program.stats.locations}</div>
                          <div className="text-xs text-muted-foreground">Locations</div>
                        </div>
                        <div className="text-center p-3 bg-gold/10 rounded-lg">
                          <div className="font-semibold text-secondary text-sm">{program.stats.investment}</div>
                          <div className="text-xs text-muted-foreground">Investment</div>
                        </div>
                      </div>
                      
                      <Button className="btn-hero w-full group">
                        Support This Program
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:w-1/2 mt-8 lg:mt-0">
                  <div className="bg-gradient-gold p-8 rounded-lg text-black">
                    <h3 className="text-2xl font-heading font-bold mb-4">Program Impact</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-black/20 pb-2">
                        <span className="font-medium">Active Beneficiaries:</span>
                        <span className="font-bold">{program.stats.beneficiaries}</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-black/20 pb-2">
                        <span className="font-medium">Coverage Area:</span>
                        <span className="font-bold">{program.stats.locations}</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-black/20 pb-2">
                        <span className="font-medium">Total Investment:</span>
                        <span className="font-bold">{program.stats.investment}</span>
                      </div>
                      <div className="pt-4">
                        <p className="text-sm leading-relaxed">
                          This program has created lasting positive change in communities across Pakistan, 
                          providing hope and opportunities for a better future.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub Programs */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4 gold-underline">
              SPECIALIZED INITIATIVES
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Focused programs addressing specific community needs with targeted solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subPrograms.map((program, index) => (
              <Card key={index} className="text-center hover:shadow-gold transition-all duration-300 scale-hover border-2 hover:border-gold/30">
                <CardHeader>
                  <div className="text-gold mb-4">
                    {program.icon}
                  </div>
                  <CardTitle className="font-heading text-lg">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold text-gold mb-6">
            JOIN OUR MISSION
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Your support can help us expand these vital programs and reach even more communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold text-black hover:bg-gold-dark">
              Donate to Programs
              <Heart className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-gold text-gold hover:bg-gold hover:text-black">
              Volunteer With Us
              <Users className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;