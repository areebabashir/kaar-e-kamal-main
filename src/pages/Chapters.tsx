import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  MapPin, 
  Users, 
  Phone, 
  Mail, 
  Calendar,
  ArrowRight,
  Heart,
  GraduationCap,
  Shield
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Chapters = () => {
  const chapters = [
    {
      city: "Karachi",
      province: "Sindh",
      established: "2018",
      volunteers: 25,
      familiesServed: 800,
      programs: ["Education Support", "Healthcare Services", "Emergency Relief"],
      coordinator: "Fatima Ahmed",
      phone: "+92-21-1234567",
      email: "karachi@kaar-e-kamal.org",
      address: "Block 15, Gulshan-e-Iqbal, Karachi",
      highlights: ["First medical camp serving 500+ patients", "Scholarship program for 50 students", "Flood relief operations 2022"]
    },
    {
      city: "Lahore",
      province: "Punjab",
      established: "2019",
      volunteers: 30,
      familiesServed: 1000,
      programs: ["Education Support", "Community Development", "Women Empowerment"],
      coordinator: "Ahmed Hassan",
      phone: "+92-42-1234567",
      email: "lahore@kaar-e-kamal.org",
      address: "Model Town, Lahore",
      highlights: ["Vocational training center for women", "Free computer classes for 200+ students", "Monthly food distribution drives"]
    },
    {
      city: "Islamabad",
      province: "Federal Capital",
      established: "2020",
      volunteers: 20,
      familiesServed: 600,
      programs: ["Education Support", "Healthcare Services", "Skill Development"],
      coordinator: "Mariam Khan",
      phone: "+92-51-1234567",
      email: "islamabad@kaar-e-kamal.org",
      address: "Sector G-9, Islamabad",
      highlights: ["Mobile health unit serving rural areas", "IT training program", "Annual education fair"]
    },
    {
      city: "Faisalabad",
      province: "Punjab",
      established: "2020",
      volunteers: 18,
      familiesServed: 500,
      programs: ["Agriculture Support", "Microfinance", "Emergency Relief"],
      coordinator: "Ali Raza",
      phone: "+92-41-1234567",
      email: "faisalabad@kaar-e-kamal.org",
      address: "Samanabad, Faisalabad",
      highlights: ["Farmer training workshops", "Small business loans program", "Eid gift distribution"]
    },
    {
      city: "Peshawar",
      province: "Khyber Pakhtunkhwa",
      established: "2021",
      volunteers: 15,
      familiesServed: 400,
      programs: ["Education Support", "Emergency Relief", "Community Development"],
      coordinator: "Noor Ahmad",
      phone: "+92-91-1234567",
      email: "peshawar@kaar-e-kamal.org",
      address: "University Road, Peshawar",
      highlights: ["Refugee assistance program", "Girls education initiative", "Winter relief distribution"]
    },
    {
      city: "Quetta",
      province: "Balochistan",
      established: "2021",
      volunteers: 12,
      familiesServed: 300,
      programs: ["Healthcare Services", "Emergency Relief", "Water Projects"],
      coordinator: "Ayesha Baloch",
      phone: "+92-81-1234567",
      email: "quetta@kaar-e-kamal.org",
      address: "Jinnah Road, Quetta",
      highlights: ["Clean water project for 5 villages", "Mobile clinic services", "Earthquake relief operations"]
    }
  ];

  const totalStats = {
    totalChapters: chapters.length,
    totalVolunteers: chapters.reduce((sum, chapter) => sum + chapter.volunteers, 0),
    totalFamilies: chapters.reduce((sum, chapter) => sum + chapter.familiesServed, 0),
    provinces: [...new Set(chapters.map(chapter => chapter.province))].length
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-gold mb-6 gold-underline">
              OUR CHAPTERS
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Kaar-e-Kamal operates across Pakistan through dedicated chapters in major cities, 
              each led by passionate volunteers committed to serving their local communities.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-gold mb-2">{totalStats.totalChapters}</div>
                <div className="text-gray-300">Active Chapters</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-gold mb-2">{totalStats.provinces}</div>
                <div className="text-gray-300">Provinces Covered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-gold mb-2">{totalStats.totalVolunteers}+</div>
                <div className="text-gray-300">Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-gold mb-2">{totalStats.totalFamilies}+</div>
                <div className="text-gray-300">Families Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {chapters.map((chapter, index) => (
              <Card key={index} className="group hover:shadow-gold transition-all duration-300 border-2 hover:border-gold/30 overflow-hidden">
                <CardHeader className="bg-gradient-section">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="font-heading text-2xl text-secondary flex items-center gap-2">
                        <MapPin className="h-6 w-6 text-gold" />
                        {chapter.city}
                      </CardTitle>
                      <p className="text-muted-foreground mt-1">{chapter.province}</p>
                      <p className="text-sm text-gold font-semibold">Est. {chapter.established}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-heading font-bold text-gold">{chapter.familiesServed}+</div>
                      <div className="text-sm text-muted-foreground">Families Served</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6 space-y-6">
                  {/* Coordinator Info */}
                  <div className="border-l-4 border-gold pl-4">
                    <h4 className="font-semibold text-secondary">Chapter Coordinator</h4>
                    <p className="text-muted-foreground">{chapter.coordinator}</p>
                    <div className="flex flex-wrap gap-4 mt-2 text-sm">
                      <a href={`tel:${chapter.phone}`} className="flex items-center gap-1 text-gold hover:underline">
                        <Phone className="h-4 w-4" />
                        {chapter.phone}
                      </a>
                      <a href={`mailto:${chapter.email}`} className="flex items-center gap-1 text-gold hover:underline">
                        <Mail className="h-4 w-4" />
                        Contact
                      </a>
                    </div>
                  </div>

                  {/* Programs */}
                  <div>
                    <h4 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                      <Heart className="h-4 w-4 text-gold" />
                      Active Programs
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {chapter.programs.map((program, pIndex) => (
                        <span key={pIndex} className="px-3 py-1 bg-gold/10 text-gold text-sm rounded-full border border-gold/30">
                          {program}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gold/5 rounded-lg">
                      <Users className="h-6 w-6 text-gold mx-auto mb-1" />
                      <div className="font-semibold text-secondary">{chapter.volunteers}</div>
                      <div className="text-xs text-muted-foreground">Volunteers</div>
                    </div>
                    <div className="text-center p-3 bg-gold/5 rounded-lg">
                      <Calendar className="h-6 w-6 text-gold mx-auto mb-1" />
                      <div className="font-semibold text-secondary">{new Date().getFullYear() - parseInt(chapter.established) + 1}</div>
                      <div className="text-xs text-muted-foreground">Years Active</div>
                    </div>
                  </div>

                  {/* Recent Highlights */}
                  <div>
                    <h4 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                      <Shield className="h-4 w-4 text-gold" />
                      Recent Achievements
                    </h4>
                    <ul className="space-y-2">
                      {chapter.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          <ArrowRight className="h-3 w-3 text-gold mt-1 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Address */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-muted-foreground flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                      {chapter.address}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-gold text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-4">
            JOIN A CHAPTER NEAR YOU
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Interested in volunteering or starting a new chapter in your city? 
            We'd love to have you join our mission of serving communities across Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved">
              <Button size="lg" className="bg-secondary text-white hover:bg-black">
                Become a Volunteer
                <Users className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white">
                Start New Chapter
                <GraduationCap className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chapters;