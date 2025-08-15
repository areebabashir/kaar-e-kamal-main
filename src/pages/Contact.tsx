import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Heart,
  Users,
  HelpCircle
} from 'lucide-react';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      details: ["info@kaarekamal.org", "volunteer@kaarekamal.org", "donate@kaarekamal.org"],
      description: "General inquiries and program information"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: ["+92-XXX-XXXXXXX (Main)", "+92-XXX-XXXXXXX (Emergency)", "+92-XXX-XXXXXXX (Volunteer)"],
      description: "Available Monday - Friday, 9 AM - 6 PM PKT"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Office Locations",
      details: ["Karachi - Main Office", "Lahore - Regional Office", "Islamabad - Policy Office"],
      description: "Multiple locations serving nationwide"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      details: ["Monday - Friday: 9 AM - 6 PM", "Saturday: 9 AM - 2 PM", "Sunday: Emergency only"],
      description: "24/7 emergency response available"
    }
  ];

  const socialLinks = [
    {
      platform: "Facebook",
      icon: <Facebook className="h-6 w-6" />,
      handle: "@KaarEKamalOfficial",
      followers: "50K+ Followers"
    },
    {
      platform: "Twitter",
      icon: <Twitter className="h-6 w-6" />,
      handle: "@KaarEKamal",
      followers: "25K+ Followers"
    },
    {
      platform: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      handle: "@kaarekamalwelfare",
      followers: "30K+ Followers"
    },
    {
      platform: "YouTube",
      icon: <Youtube className="h-6 w-6" />,
      handle: "Kaar-e-Kamal Foundation",
      followers: "15K+ Subscribers"
    }
  ];

  const regionalOffices = [
    {
      region: "Punjab Region",
      cities: ["Lahore", "Faisalabad", "Multan", "Rawalpindi"],
      coordinator: "Regional Coordinator Punjab",
      phone: "+92-XXX-XXXXXXX",
      email: "punjab@kaarekamal.org"
    },
    {
      region: "Sindh Region", 
      cities: ["Karachi", "Hyderabad", "Sukkur", "Larkana"],
      coordinator: "Regional Coordinator Sindh",
      phone: "+92-XXX-XXXXXXX",
      email: "sindh@kaarekamal.org"
    },
    {
      region: "KPK Region",
      cities: ["Peshawar", "Mardan", "Abbottabad", "Kohat"],
      coordinator: "Regional Coordinator KPK",
      phone: "+92-XXX-XXXXXXX", 
      email: "kpk@kaarekamal.org"
    },
    {
      region: "Balochistan Region",
      cities: ["Quetta", "Gwadar", "Turbat", "Khuzdar"],
      coordinator: "Regional Coordinator Balochistan",
      phone: "+92-XXX-XXXXXXX",
      email: "balochistan@kaarekamal.org"
    }
  ];

  const faqItems = [
    {
      question: "How can I donate to Kaar-e-Kamal?",
      answer: "You can donate through our website, bank transfer, or visit any of our offices. We accept one-time donations, monthly giving, and program-specific contributions."
    },
    {
      question: "How do I volunteer with your organization?",
      answer: "Fill out our volunteer application form on the 'Get Involved' page. We'll match you with opportunities based on your skills, location, and availability."
    },
    {
      question: "Can I specify which program my donation supports?",
      answer: "Yes! You can choose to support specific programs like Education, Healthcare, Emergency Relief, or Community Development when making your donation."
    },
    {
      question: "How do you ensure transparency in fund utilization?",
      answer: "We publish annual reports, provide donation receipts, and send regular updates to donors about program impact and fund utilization."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-heading font-bold text-white mb-6">
              CONTACT <span className="text-gold">US</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're here to answer your questions, discuss partnership opportunities, 
              or help you get involved in our mission to empower Pakistani communities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4 gold-underline">
              GET IN TOUCH
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-gold transition-all duration-300 scale-hover border-2 hover:border-gold/30">
                <CardHeader>
                  <div className="text-gold mb-4">
                    {info.icon}
                  </div>
                  <CardTitle className="font-heading text-lg">{info.title}</CardTitle>
                  <p className="text-xs text-muted-foreground">{info.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-sm text-muted-foreground">
                        {detail}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Quick Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="hover:shadow-gold transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-gold">
                  <Send className="h-6 w-6 mr-2" />
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground text-sm">
                  We typically respond within 24 hours
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name">Full Name</Label>
                    <Input
                      id="contact-name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email Address</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input
                      id="contact-phone"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      placeholder="+92 XXX XXXXXXX"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-category">Inquiry Type</Label>
                    <select 
                      id="contact-category"
                      className="w-full p-2 border border-input rounded-md"
                      value={contactForm.category}
                      onChange={(e) => setContactForm({...contactForm, category: e.target.value})}
                    >
                      <option value="">Select inquiry type</option>
                      <option value="donation">Donation Inquiry</option>
                      <option value="volunteer">Volunteer Application</option>
                      <option value="partnership">Partnership Proposal</option>
                      <option value="program">Program Information</option>
                      <option value="media">Media & Press</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="contact-subject">Subject</Label>
                  <Input
                    id="contact-subject"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                    placeholder="Brief subject line"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    placeholder="Please provide details about your inquiry..."
                    rows={5}
                  />
                </div>

                <Button className="btn-hero w-full" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-bold text-secondary mb-6 gold-underline">
                  QUICK ACTIONS
                </h3>
                
                <div className="space-y-4">
                  <Card className="cursor-pointer hover:shadow-gold transition-all duration-300 hover:border-gold/30">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <Heart className="h-8 w-8 text-gold" />
                        <div className="flex-1">
                          <h4 className="font-heading font-semibold text-secondary">Make a Donation</h4>
                          <p className="text-sm text-muted-foreground">Support our programs instantly online</p>
                        </div>
                        <Button size="sm" className="btn-hero">Donate</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-gold transition-all duration-300 hover:border-gold/30">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <Users className="h-8 w-8 text-gold" />
                        <div className="flex-1">
                          <h4 className="font-heading font-semibold text-secondary">Volunteer Application</h4>
                          <p className="text-sm text-muted-foreground">Join our team of dedicated volunteers</p>
                        </div>
                        <Button size="sm" variant="outline" className="btn-outline-hero">Apply</Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:shadow-gold transition-all duration-300 hover:border-gold/30">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <MessageCircle className="h-8 w-8 text-gold" />
                        <div className="flex-1">
                          <h4 className="font-heading font-semibold text-secondary">WhatsApp Support</h4>
                          <p className="text-sm text-muted-foreground">Chat with us instantly</p>
                        </div>
                        <Button size="sm" variant="outline" className="btn-outline-hero">Chat</Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h4 className="text-xl font-heading font-bold text-secondary mb-4">
                  FOLLOW US
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <Card key={index} className="cursor-pointer hover:shadow-gold transition-all duration-300 hover:border-gold/30">
                      <CardContent className="p-4 text-center">
                        <div className="text-gold mb-2">
                          {social.icon}
                        </div>
                        <h5 className="font-semibold text-secondary text-sm">{social.platform}</h5>
                        <p className="text-xs text-muted-foreground">{social.handle}</p>
                        <p className="text-xs text-gold">{social.followers}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4 gold-underline">
              REGIONAL OFFICES
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our presence across Pakistan ensures we can serve communities nationwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regionalOffices.map((office, index) => (
              <Card key={index} className="hover:shadow-gold transition-all duration-300 scale-hover border-2 hover:border-gold/30">
                <CardHeader>
                  <CardTitle className="font-heading text-lg text-gold flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    {office.region}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h6 className="font-semibold text-secondary text-sm mb-1">Cities Served:</h6>
                      <p className="text-xs text-muted-foreground">
                        {office.cities.join(', ')}
                      </p>
                    </div>
                    <div>
                      <h6 className="font-semibold text-secondary text-sm mb-1">Contact:</h6>
                      <p className="text-xs text-muted-foreground">{office.coordinator}</p>
                      <div className="flex items-center text-xs text-gold mt-1">
                        <Phone className="h-3 w-3 mr-1" />
                        {office.phone}
                      </div>
                      <div className="flex items-center text-xs text-gold mt-1">
                        <Mail className="h-3 w-3 mr-1" />
                        {office.email}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4 gold-underline">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about our programs and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqItems.map((faq, index) => (
              <Card key={index} className="hover:shadow-gold transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <HelpCircle className="h-6 w-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-secondary mb-2">
                        {faq.question}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold text-gold mb-6">
            EMERGENCY CONTACT
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            For urgent situations requiring immediate assistance, our emergency response team is available 24/7.
          </p>
          
          <div className="bg-gold/20 border border-gold/30 rounded-lg p-8 max-w-md mx-auto mb-8">
            <Phone className="h-12 w-12 text-gold mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold text-gold mb-2">Emergency Hotline</h3>
            <p className="text-3xl font-bold text-white mb-2">+92-XXX-EMERGENCY</p>
            <p className="text-gray-300 text-sm">Available 24/7 for disaster relief and urgent assistance</p>
          </div>

          <Button size="lg" className="bg-gold text-black hover:bg-gold-dark">
            <Phone className="mr-2 h-5 w-5" />
            Call Emergency Line
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;