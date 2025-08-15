import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Users, Award, MapPin, Clock } from 'lucide-react';

const About = () => {
  const timeline = [
    {
      year: "2018",
      title: "Foundation Established",
      description: "Kaar-e-Kamal Welfare Foundation was founded with a vision to serve underprivileged communities."
    },
    {
      year: "2019",
      title: "First Education Program",
      description: "Launched our first scholarship program, supporting 50 students in their educational journey."
    },
    {
      year: "2020",
      title: "Healthcare Initiative",
      description: "Started free medical camps and health awareness programs during the pandemic."
    },
    {
      year: "2021",
      title: "Emergency Relief Operations",
      description: "Responded to natural disasters, providing aid to flood-affected communities."
    },
    {
      year: "2022",
      title: "Expansion Across Pakistan",
      description: "Extended our reach to 40+ cities, touching thousands of lives."
    },
    {
      year: "2023",
      title: "Community Development Focus",
      description: "Launched skill development and women empowerment programs."
    },
    {
      year: "2024",
      title: "60+ Cities Coverage",
      description: "Achieved nationwide presence, serving communities across Pakistan with 100+ volunteers."
    }
  ];

  const teamMember = {
    name: "Chief Executive Officer",
    role: "Leadership Team",
    description: "Leading Kaar-e-Kamal with vision, dedication, and commitment to transforming lives across Pakistan through compassionate welfare initiatives.",
    image: "/lovable-uploads/22a1526c-0c26-44f6-b7c3-8fe4ab4914e1.png"
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-heading font-bold text-white mb-6">
              ABOUT <span className="text-gold">KAAR-E-KAMAL</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A welfare foundation dedicated to empowering communities with dignity, 
              compassion, and sustainable development across Pakistan.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gold/10 p-8 rounded-lg border-l-4 border-gold">
                <Target className="h-12 w-12 text-gold mb-4" />
                <h3 className="text-2xl font-heading font-bold text-secondary mb-4 gold-underline">
                  OUR MISSION
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To empower underprivileged communities across Pakistan by providing comprehensive 
                  welfare services including education, healthcare, emergency relief, and community 
                  development programs. We strive to create sustainable positive change while 
                  preserving human dignity and fostering self-reliance.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-secondary/5 p-8 rounded-lg border-l-4 border-secondary">
                <Eye className="h-12 w-12 text-secondary mb-4" />
                <h3 className="text-2xl font-heading font-bold text-secondary mb-4 gold-underline">
                  OUR VISION
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To build a Pakistan where every individual has access to basic human rights 
                  including quality education, healthcare, and opportunities for growth. We 
                  envision communities that are self-sufficient, empowered, and thriving with 
                  dignity and hope for a better future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4 gold-underline">
              OUR CORE VALUES
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every action and decision in our mission to serve humanity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-gold transition-all duration-300 scale-hover">
              <CardHeader>
                <div className="text-gold mb-4">
                  <Users className="h-12 w-12 mx-auto" />
                </div>
                <CardTitle className="font-heading text-xl">Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every action is driven by empathy and genuine care for those we serve, 
                  treating everyone with kindness and respect.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-gold transition-all duration-300 scale-hover">
              <CardHeader>
                <div className="text-gold mb-4">
                  <Award className="h-12 w-12 mx-auto" />
                </div>
                <CardTitle className="font-heading text-xl">Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Transparency and honesty in all our operations, ensuring trust and 
                  accountability to our beneficiaries and donors.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-gold transition-all duration-300 scale-hover">
              <CardHeader>
                <div className="text-gold mb-4">
                  <Target className="h-12 w-12 mx-auto" />
                </div>
                <CardTitle className="font-heading text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Commitment to delivering high-quality programs and services that create 
                  lasting positive impact in communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gold mb-4">
              OUR JOURNEY
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From humble beginnings to nationwide impact - the milestones that shaped our mission
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gold"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-secondary z-10"></div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 ml-12 md:ml-0' : 'md:pl-12 ml-12 md:ml-0'
                  }`}>
                    <Card className="bg-white/10 border-gold/30 text-white">
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <div className="text-gold font-heading font-bold text-2xl">{item.year}</div>
                          <Clock className="h-5 w-5 text-gold" />
                        </div>
                        <CardTitle className="text-gold font-heading">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4 gold-underline">
              LEADERSHIP TEAM
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dedicated leaders committed to serving humanity and building a better Pakistan
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="overflow-hidden hover:shadow-gold transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={teamMember.image} 
                    alt={teamMember.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-5 w-5 text-gold mr-2" />
                    <span className="text-sm text-muted-foreground">{teamMember.role}</span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-secondary mb-4">
                    {teamMember.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {teamMember.description}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;