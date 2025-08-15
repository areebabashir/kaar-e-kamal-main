import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Heart, 
  Users, 
  HandHeart, 
  DollarSign,
  Clock,
  MapPin,
  Mail,
  Phone,
  CheckCircle,
  Gift
} from 'lucide-react';

const GetInvolved = () => {
  const [donationForm, setDonationForm] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    program: '',
    message: ''
  });

  const [volunteerForm, setVolunteerForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    skills: '',
    availability: '',
    experience: '',
    motivation: ''
  });

  const donationOptions = [
    {
      amount: "500",
      impact: "Provides school supplies for 1 student for a month",
      icon: "📚"
    },
    {
      amount: "2000",
      impact: "Funds medical treatment for 1 patient",
      icon: "💊"
    },
    {
      amount: "5000",
      impact: "Emergency relief package for 1 family",
      icon: "🏠"
    },
    {
      amount: "10000",
      impact: "Sponsors complete education for 1 student for a year",
      icon: "🎓"
    }
  ];

  const volunteerOpportunities = [
    {
      title: "Medical Camp Assistant",
      description: "Help organize and manage free medical camps in rural areas",
      requirements: ["Medical background preferred", "Available on weekends", "Transportation"],
      commitment: "4-6 hours/month"
    },
    {
      title: "Education Coordinator",
      description: "Support educational programs and tutor students",
      requirements: ["Teaching experience", "Strong communication skills", "Passion for education"],
      commitment: "8-10 hours/month"
    },
    {
      title: "Emergency Response Team",
      description: "Assist in disaster relief and emergency operations",
      requirements: ["Physical fitness", "Flexible schedule", "Team player"],
      commitment: "On-call basis"
    },
    {
      title: "Community Outreach",
      description: "Help identify families in need and conduct awareness programs",
      requirements: ["Local language skills", "Social work background", "Good networking"],
      commitment: "6-8 hours/month"
    }
  ];

  const waysToDonate = [
    {
      title: "One-Time Donation",
      description: "Make an immediate impact with a single contribution",
      icon: <Heart className="h-8 w-8" />,
      benefits: ["Immediate impact", "Tax deductible", "Choose specific program"]
    },
    {
      title: "Monthly Giving",
      description: "Become a sustaining donor with regular monthly contributions",
      icon: <HandHeart className="h-8 w-8" />,
      benefits: ["Consistent support", "Budget-friendly", "Greater long-term impact"]
    },
    {
      title: "Corporate Sponsorship",
      description: "Partner with us for CSR initiatives and employee engagement",
      icon: <DollarSign className="h-8 w-8" />,
      benefits: ["Brand visibility", "Employee volunteering", "Custom programs"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-heading font-bold text-white mb-6">
              GET <span className="text-gold">INVOLVED</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of compassionate individuals making a real difference in Pakistani communities. 
              Every contribution, big or small, creates lasting positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4 gold-underline">
              WAYS TO MAKE A DIFFERENCE
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose how you'd like to contribute to our mission of empowering communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {waysToDonate.map((way, index) => (
              <Card key={index} className="text-center hover:shadow-gold transition-all duration-300 scale-hover border-2 hover:border-gold/30">
                <CardHeader>
                  <div className="text-gold mb-4">
                    {way.icon}
                  </div>
                  <CardTitle className="font-heading text-xl">{way.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{way.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {way.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center justify-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-gold flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="btn-hero w-full">Choose This Option</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Donation Form */}
            <div>
              <h3 className="text-3xl font-heading font-bold text-secondary mb-6 gold-underline">
                MAKE A DONATION
              </h3>
              <p className="text-muted-foreground mb-8">
                Your generous contribution directly supports our programs and helps us reach more families in need.
              </p>

              <Card className="hover:shadow-gold transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-gold">
                    <Gift className="h-6 w-6 mr-2" />
                    Donation Form
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="donor-name">Full Name</Label>
                      <Input
                        id="donor-name"
                        value={donationForm.name}
                        onChange={(e) => setDonationForm({...donationForm, name: e.target.value})}
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="donor-email">Email</Label>
                      <Input
                        id="donor-email"
                        type="email"
                        value={donationForm.email}
                        onChange={(e) => setDonationForm({...donationForm, email: e.target.value})}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="donor-phone">Phone Number</Label>
                      <Input
                        id="donor-phone"
                        value={donationForm.phone}
                        onChange={(e) => setDonationForm({...donationForm, phone: e.target.value})}
                        placeholder="+92 XXX XXXXXXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="donation-amount">Donation Amount (PKR)</Label>
                      <Input
                        id="donation-amount"
                        type="number"
                        value={donationForm.amount}
                        onChange={(e) => setDonationForm({...donationForm, amount: e.target.value})}
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="donation-program">Preferred Program</Label>
                    <select 
                      id="donation-program"
                      className="w-full p-2 border border-input rounded-md"
                      value={donationForm.program}
                      onChange={(e) => setDonationForm({...donationForm, program: e.target.value})}
                    >
                      <option value="">Select a program</option>
                      <option value="education">Education Support</option>
                      <option value="healthcare">Healthcare Services</option>
                      <option value="emergency">Emergency Relief</option>
                      <option value="community">Community Development</option>
                      <option value="general">General Fund</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="donation-message">Message (Optional)</Label>
                    <Textarea
                      id="donation-message"
                      value={donationForm.message}
                      onChange={(e) => setDonationForm({...donationForm, message: e.target.value})}
                      placeholder="Share why you're supporting our cause"
                      rows={3}
                    />
                  </div>

                  <Button className="btn-hero w-full" size="lg">
                    <Heart className="mr-2 h-5 w-5" />
                    Proceed to Payment
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Donation Impact */}
            <div>
              <h4 className="text-2xl font-heading font-bold text-secondary mb-6">
                YOUR IMPACT
              </h4>
              
              <div className="grid gap-4 mb-8">
                {donationOptions.map((option, index) => (
                  <Card key={index} className="cursor-pointer hover:shadow-gold transition-all duration-300 hover:border-gold/30">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{option.icon}</div>
                        <div className="flex-1">
                          <div className="font-semibold text-gold">PKR {option.amount}</div>
                          <div className="text-sm text-muted-foreground">{option.impact}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-gold/10 p-6 rounded-lg border border-gold/30">
                <h5 className="font-heading font-bold text-secondary mb-3">Why Your Donation Matters</h5>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                    <span>100% of donations go directly to programs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                    <span>Transparent reporting on fund utilization</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                    <span>Regular updates on program impact</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-gold mt-1 flex-shrink-0" />
                    <span>Tax-deductible receipts provided</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Volunteer Opportunities */}
            <div>
              <h3 className="text-3xl font-heading font-bold text-secondary mb-6 gold-underline">
                VOLUNTEER OPPORTUNITIES
              </h3>
              <p className="text-muted-foreground mb-8">
                Join our team of dedicated volunteers and make a direct impact in your community.
              </p>

              <div className="space-y-6">
                {volunteerOpportunities.map((opportunity, index) => (
                  <Card key={index} className="hover:shadow-gold transition-all duration-300 border-l-4 border-gold">
                    <CardHeader>
                      <CardTitle className="font-heading text-lg text-secondary">{opportunity.title}</CardTitle>
                      <p className="text-muted-foreground text-sm">{opportunity.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h6 className="font-semibold text-secondary mb-2">Requirements:</h6>
                        <ul className="space-y-1">
                          {opportunity.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="text-sm text-muted-foreground flex items-start space-x-2">
                              <CheckCircle className="h-3 w-3 text-gold mt-1 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center text-gold text-sm">
                        <Clock className="h-4 w-4 mr-2" />
                        Time Commitment: {opportunity.commitment}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Volunteer Form */}
            <div>
              <h4 className="text-2xl font-heading font-bold text-secondary mb-6">
                VOLUNTEER APPLICATION
              </h4>

              <Card className="hover:shadow-gold transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-gold">
                    <Users className="h-6 w-6 mr-2" />
                    Join Our Team
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="volunteer-name">Full Name</Label>
                      <Input
                        id="volunteer-name"
                        value={volunteerForm.name}
                        onChange={(e) => setVolunteerForm({...volunteerForm, name: e.target.value})}
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="volunteer-email">Email</Label>
                      <Input
                        id="volunteer-email"
                        type="email"
                        value={volunteerForm.email}
                        onChange={(e) => setVolunteerForm({...volunteerForm, email: e.target.value})}
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="volunteer-phone">Phone Number</Label>
                      <Input
                        id="volunteer-phone"
                        value={volunteerForm.phone}
                        onChange={(e) => setVolunteerForm({...volunteerForm, phone: e.target.value})}
                        placeholder="+92 XXX XXXXXXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="volunteer-city">City</Label>
                      <Input
                        id="volunteer-city"
                        value={volunteerForm.city}
                        onChange={(e) => setVolunteerForm({...volunteerForm, city: e.target.value})}
                        placeholder="Your city"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="volunteer-skills">Skills & Expertise</Label>
                    <Input
                      id="volunteer-skills"
                      value={volunteerForm.skills}
                      onChange={(e) => setVolunteerForm({...volunteerForm, skills: e.target.value})}
                      placeholder="e.g., Teaching, Medical, Social Work"
                    />
                  </div>

                  <div>
                    <Label htmlFor="volunteer-availability">Availability</Label>
                    <select 
                      id="volunteer-availability"
                      className="w-full p-2 border border-input rounded-md"
                      value={volunteerForm.availability}
                      onChange={(e) => setVolunteerForm({...volunteerForm, availability: e.target.value})}
                    >
                      <option value="">Select availability</option>
                      <option value="weekdays">Weekdays</option>
                      <option value="weekends">Weekends</option>
                      <option value="evenings">Evenings</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="volunteer-experience">Previous Volunteer Experience</Label>
                    <Textarea
                      id="volunteer-experience"
                      value={volunteerForm.experience}
                      onChange={(e) => setVolunteerForm({...volunteerForm, experience: e.target.value})}
                      placeholder="Describe any previous volunteer work"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="volunteer-motivation">Why do you want to volunteer?</Label>
                    <Textarea
                      id="volunteer-motivation"
                      value={volunteerForm.motivation}
                      onChange={(e) => setVolunteerForm({...volunteerForm, motivation: e.target.value})}
                      placeholder="Tell us about your motivation to help"
                      rows={3}
                    />
                  </div>

                  <Button className="btn-hero w-full" size="lg">
                    <Users className="mr-2 h-5 w-5" />
                    Submit Application
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold text-gold mb-6">
            QUESTIONS ABOUT GETTING INVOLVED?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is here to help you find the perfect way to contribute to our mission.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Mail className="h-8 w-8 text-gold mx-auto mb-2" />
              <h4 className="font-heading font-semibold mb-2">Email Us</h4>
              <p className="text-gray-300">volunteer@kaarekamal.org</p>
            </div>
            <div className="text-center">
              <Phone className="h-8 w-8 text-gold mx-auto mb-2" />
              <h4 className="font-heading font-semibold mb-2">Call Us</h4>
              <p className="text-gray-300">+92-XXX-XXXXXXX</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-gold mx-auto mb-2" />
              <h4 className="font-heading font-semibold mb-2">Visit Us</h4>
              <p className="text-gray-300">Office locations nationwide</p>
            </div>
          </div>

          <Button size="lg" className="bg-gold text-black hover:bg-gold-dark">
            Contact Our Team
            <Mail className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;