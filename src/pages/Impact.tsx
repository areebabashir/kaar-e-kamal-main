import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  MapPin, 
  Heart, 
  GraduationCap, 
  Stethoscope,
  Home,
  TrendingUp,
  Award,
  Star,
  Quote
} from 'lucide-react';

const Impact = () => {
  const impactStats = [
    {
      icon: <Users className="h-8 w-8" />,
      number: "3,000+",
      label: "Families Supported",
      description: "Direct beneficiaries across all programs"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      number: "60+",
      label: "Cities Covered",
      description: "Nationwide presence from Karachi to Khyber"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      number: "100+",
      label: "Active Volunteers",
      description: "Dedicated individuals serving communities"
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      number: "500+",
      label: "Students Educated",
      description: "Children receiving educational support"
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      number: "10,000+",
      label: "Medical Treatments",
      description: "Free healthcare services provided"
    },
    {
      icon: <Home className="h-8 w-8" />,
      number: "50+",
      label: "Emergency Relief Operations",
      description: "Disaster response and rehabilitation"
    }
  ];

  const successStories = [
    {
      title: "Empowering Through Education",
      location: "Lahore, Punjab",
      story: "Young Fatima from a low-income family in Lahore received a scholarship through our education program. Today, she's pursuing her medical degree and dreams of becoming a doctor to serve her community.",
      impact: "1 life transformed, 1 future doctor",
      image: "🎓"
    },
    {
      title: "Healthcare in Remote Villages",
      location: "Skardu, Gilgit-Baltistan",
      story: "Our mobile medical camps reached the remote village of Skardu where residents had no access to healthcare. We provided free consultations and medicines to over 300 families.",
      impact: "300+ families received medical care",
      image: "🏥"
    },
    {
      title: "Flood Relief Operations",
      location: "Sindh Province",
      story: "During the 2022 floods, our emergency response team reached affected areas within 24 hours, providing food, clean water, and temporary shelter to displaced families.",
      impact: "1,000+ families received emergency aid",
      image: "🏠"
    },
    {
      title: "Women's Empowerment",
      location: "Faisalabad, Punjab",
      story: "Mariam learned tailoring skills through our vocational training program. She now runs her own business, supporting her family and employing three other women from her community.",
      impact: "4 women economically empowered",
      image: "✂️"
    }
  ];

  const programImpact = [
    {
      program: "Education Support",
      achievements: [
        "500+ scholarships awarded",
        "50+ schools supported with supplies",
        "95% student retention rate",
        "200+ adult literacy graduates"
      ],
      color: "border-blue-500"
    },
    {
      program: "Healthcare Services",
      achievements: [
        "150+ medical camps conducted",
        "10,000+ patients treated",
        "500+ surgeries facilitated",
        "80+ health awareness sessions"
      ],
      color: "border-red-500"
    },
    {
      program: "Emergency Relief",
      achievements: [
        "50+ disaster response operations",
        "5,000+ families assisted",
        "200+ temporary shelters built",
        "1M+ liters of clean water provided"
      ],
      color: "border-green-500"
    },
    {
      program: "Community Development",
      achievements: [
        "300+ individuals trained",
        "100+ small businesses supported",
        "50+ women's groups formed",
        "30+ community projects completed"
      ],
      color: "border-purple-500"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-heading font-bold text-white mb-6">
              OUR <span className="text-gold">IMPACT</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Measuring the real difference we make in communities across Pakistan through 
              comprehensive welfare programs and dedicated service.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4 gold-underline">
              IMPACT BY NUMBERS
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quantified results of our dedication to serving Pakistani communities with compassion and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-gold transition-all duration-300 scale-hover border-2 hover:border-gold/30">
                <CardHeader>
                  <div className="text-gold mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-heading font-bold text-secondary counter mb-2">
                    {stat.number}
                  </div>
                  <CardTitle className="font-heading text-xl text-gold">{stat.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Impact */}
      <section className="py-20 bg-gold text-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-4">
              NATIONWIDE PRESENCE
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              From bustling urban centers to remote rural villages, our impact spans across Pakistan
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-heading font-bold mb-2">15+</div>
              <div className="font-medium">Punjab Cities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-heading font-bold mb-2">20+</div>
              <div className="font-medium">Sindh Cities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-heading font-bold mb-2">12+</div>
              <div className="font-medium">KPK Cities</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-heading font-bold mb-2">13+</div>
              <div className="font-medium">Balochistan Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program-wise Impact */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4 gold-underline">
              PROGRAM ACHIEVEMENTS
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Detailed impact across each of our core welfare programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programImpact.map((program, index) => (
              <Card key={index} className={`border-l-4 ${program.color} hover:shadow-gold transition-all duration-300`}>
                <CardHeader>
                  <CardTitle className="font-heading text-xl text-secondary flex items-center">
                    <Award className="h-6 w-6 text-gold mr-2" />
                    {program.program}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {program.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-2">
                        <Star className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4 gold-underline">
              SUCCESS STORIES
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real stories of transformation and hope from communities we've served
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-gold transition-all duration-300 overflow-hidden">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{story.image}</div>
                    <div>
                      <CardTitle className="font-heading text-xl text-secondary">{story.title}</CardTitle>
                      <div className="flex items-center text-gold text-sm mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {story.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="h-6 w-6 text-gold/30 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground leading-relaxed mb-4 pl-4">{story.story}</p>
                  </div>
                  <div className="bg-gold/10 p-3 rounded-lg">
                    <div className="flex items-center text-gold text-sm font-semibold">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Impact: {story.impact}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gold mb-4">
              LOOKING AHEAD
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our vision for expanding impact and reaching more communities in need
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-gold mb-4">100+</div>
              <h3 className="text-xl font-heading font-semibold mb-2">Cities Target</h3>
              <p className="text-gray-300 text-sm">Expanding to reach every major city in Pakistan</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-gold mb-4">10,000+</div>
              <h3 className="text-xl font-heading font-semibold mb-2">Families Goal</h3>
              <p className="text-gray-300 text-sm">Supporting more families with comprehensive services</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-gold mb-4">500+</div>
              <h3 className="text-xl font-heading font-semibold mb-2">Volunteer Network</h3>
              <p className="text-gray-300 text-sm">Building a stronger network of community volunteers</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;