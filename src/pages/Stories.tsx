import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Calendar, 
  User, 
  Heart, 
  GraduationCap, 
  Stethoscope,
  Home,
  Users,
  ArrowRight,
  Quote,
  Star
} from 'lucide-react';

const Stories = () => {
  const featuredStories = [
    {
      id: 1,
      title: "From Street Child to Medical Student",
      category: "Education",
      categoryIcon: <GraduationCap className="h-4 w-4" />,
      location: "Karachi, Sindh",
      date: "December 2024",
      author: "Fatima's Story",
      excerpt: "A inspiring journey of transformation through education support and community care",
      content: "Fatima was just 8 years old when her father passed away, leaving her family in dire financial straits. Her mother, struggling to make ends meet as a domestic worker, could no longer afford Fatima's school fees. That's when Kaar-e-Kamal stepped in. Through our education support program, Fatima received not just a scholarship, but mentorship, school supplies, and emotional support. Today, at 22, she's pursuing her medical degree at Aga Khan University, determined to give back to the community that supported her dreams.",
      image: "👩‍⚕️",
      impact: "1 life transformed, inspiring 50+ other students",
      tags: ["Education", "Success Story", "Healthcare"]
    },
    {
      id: 2,
      title: "Rebuilding Lives After the Floods",
      category: "Emergency Relief",
      categoryIcon: <Home className="h-4 w-4" />,
      location: "Sukkur, Sindh",
      date: "October 2024",
      author: "Ahmed Family Story",
      excerpt: "How emergency relief efforts helped a family rebuild their lives and livelihood",
      content: "When the devastating floods of 2022 struck Sindh, Ahmed's family lost everything - their home, their small grocery shop, and their hopes. Living in a makeshift tent with three young children, Ahmed didn't know where to turn. Our emergency response team reached his village within 48 hours, providing immediate relief supplies, clean water, and temporary shelter materials. But our support didn't stop there. Through our community development program, we helped Ahmed restart his business with a small loan and business training. Today, his shop is thriving, and he employs two other flood survivors.",
      image: "🏠",
      impact: "300+ families in the village received comprehensive support",
      tags: ["Emergency Relief", "Community Development", "Recovery"]
    },
    {
      id: 3,
      title: "Breaking Barriers: Women's Empowerment Success",
      category: "Community Development",
      categoryIcon: <Users className="h-4 w-4" />,
      location: "Faisalabad, Punjab",
      date: "November 2024",
      author: "Mariam's Journey",
      excerpt: "A widow's journey to economic independence through vocational training",
      content: "Mariam was widowed at 35 with four children to support. With no formal education or work experience, she felt hopeless about providing for her family. Our women's empowerment program offered her a lifeline - vocational training in tailoring and embroidery. Initially hesitant, Mariam gradually gained confidence as she mastered new skills. With micro-credit support, she started her own tailoring business from home. Within two years, her business grew so much that she now employs five other women from her community, creating a ripple effect of empowerment.",
      image: "✂️",
      impact: "6 women economically empowered, 20+ families benefited",
      tags: ["Women Empowerment", "Vocational Training", "Economic Independence"]
    }
  ];

  const additionalStories = [
    {
      title: "Mobile Medical Camp Saves Lives",
      category: "Healthcare",
      location: "Gilgit-Baltistan",
      excerpt: "How free medical camps brought essential healthcare to remote mountain villages",
      image: "🏥",
      impact: "500+ patients treated"
    },
    {
      title: "Solar Power for Rural Schools",
      category: "Education",
      location: "Balochistan",
      excerpt: "Bringing electricity and modern learning to off-grid rural schools",
      image: "⚡",
      impact: "12 schools electrified"
    },
    {
      title: "Clean Water Initiative",
      category: "Community Development",
      location: "KPK",
      excerpt: "Installing hand pumps and water filtration systems in water-scarce areas",
      image: "💧",
      impact: "2,000+ people with clean water access"
    },
    {
      title: "Scholarship Program Graduate",
      category: "Education", 
      location: "Lahore, Punjab",
      excerpt: "First-generation college graduate becomes a teacher in her village",
      image: "👩‍🎓",
      impact: "Now teaching 40+ students"
    },
    {
      title: "Emergency Food Distribution",
      category: "Emergency Relief",
      location: "Tharparkar, Sindh",
      excerpt: "Addressing drought and food insecurity in desert communities",
      image: "🍽️",
      impact: "800+ families received food aid"
    },
    {
      title: "Skill Development Success",
      category: "Community Development",
      location: "Multan, Punjab",
      excerpt: "Young man starts successful carpentry business after vocational training",
      image: "🔨",
      impact: "3 apprentices trained"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Fatima Khan",
      role: "Medical Student (Scholarship Recipient)",
      text: "Kaar-e-Kamal didn't just pay for my education - they believed in my dreams when no one else did. They gave me hope, mentorship, and the strength to overcome every obstacle.",
      rating: 5,
      location: "Karachi"
    },
    {
      name: "Ahmed Hussain",
      role: "Shop Owner (Flood Relief Beneficiary)",
      text: "When we lost everything in the floods, Kaar-e-Kamal was there within hours. They didn't just give us aid - they helped us rebuild our lives with dignity.",
      rating: 5,
      location: "Sukkur"
    },
    {
      name: "Mariam Bibi", 
      role: "Business Owner (Vocational Training Graduate)",
      text: "I never imagined I could run my own business. The training and support I received changed not just my life, but the lives of other women in my community.",
      rating: 5,
      location: "Faisalabad"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-heading font-bold text-white mb-6">
              SUCCESS <span className="text-gold">STORIES</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Real stories of hope, transformation, and resilience from communities across Pakistan. 
              These are the faces behind our mission - lives changed, dreams fulfilled, and futures brightened.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4 gold-underline">
              FEATURED STORIES
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In-depth stories showcasing the transformative impact of our programs
            </p>
          </div>

          <div className="space-y-16">
            {featuredStories.map((story, index) => (
              <div key={story.id} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-2 text-gold mb-4">
                    {story.categoryIcon}
                    <span className="text-sm font-semibold">{story.category}</span>
                  </div>
                  
                  <h3 className="text-3xl font-heading font-bold text-secondary mb-4">
                    {story.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {story.location}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {story.date}
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {story.author}
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {story.content}
                  </p>
                  
                  <div className="bg-gold/10 p-4 rounded-lg border border-gold/30 mb-6">
                    <div className="flex items-center text-gold font-semibold mb-2">
                      <Heart className="h-4 w-4 mr-2" />
                      Impact: {story.impact}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {story.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="bg-gold/20 text-gold px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="btn-outline-hero">
                    Read Full Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} text-center`}>
                  <div className="bg-gradient-gold p-12 rounded-lg inline-block">
                    <div className="text-8xl mb-4">{story.image}</div>
                    <div className="text-black font-heading font-bold text-xl">
                      {story.category} Success
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Stories Grid */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-secondary mb-4 gold-underline">
              MORE SUCCESS STORIES
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Brief glimpses into the many lives touched by our various programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalStories.map((story, index) => (
              <Card key={index} className="hover:shadow-gold transition-all duration-300 scale-hover group border-2 hover:border-gold/30">
                <CardHeader>
                  <div className="text-4xl text-center mb-4">{story.image}</div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span className="bg-gold/20 text-gold px-2 py-1 rounded">{story.category}</span>
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {story.location}
                    </div>
                  </div>
                  <CardTitle className="font-heading text-lg group-hover:text-gold transition-colors">
                    {story.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{story.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-gold font-semibold text-xs">{story.impact}</div>
                    <ArrowRight className="h-4 w-4 text-gold group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-gold mb-4">
              IN THEIR OWN WORDS
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Heartfelt messages from the individuals and families whose lives have been transformed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-gold/30 text-white hover:shadow-gold transition-all duration-300">
                <CardContent className="p-6">
                  <Quote className="text-gold h-8 w-8 mb-4" />
                  <p className="text-gray-300 mb-6 italic leading-relaxed">{testimonial.text}</p>
                  
                  <div className="border-t border-gold/20 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gold">{testimonial.name}</div>
                        <div className="text-xs text-gray-400">{testimonial.role}</div>
                        <div className="flex items-center text-xs text-gray-400 mt-1">
                          <MapPin className="h-3 w-3 mr-1" />
                          {testimonial.location}
                        </div>
                      </div>
                      <div className="flex space-x-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-gold fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Submission CTA */}
      <section className="py-20 bg-gold text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            SHARE YOUR STORY
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have you been touched by our programs? We'd love to hear from you and share your journey with others.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary text-white hover:bg-black">
              Submit Your Story
              <Heart className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white">
              Contact Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories;