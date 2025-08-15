import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, MapPin, Heart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f8db69' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 fade-in">
            EMPOWERING COMMUNITIES WITH{' '}
            <span className="text-gold">DIGNITY</span>{' '}
            ACROSS PAKISTAN
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 fade-in-delay-1">
            Serving <span className="text-gold font-semibold">60+ cities</span>, supporting{' '}
            <span className="text-gold font-semibold">3,000+ families</span>, with{' '}
            <span className="text-gold font-semibold">100+ dedicated volunteers</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 fade-in-delay-2">
            <Button size="lg" className="btn-hero group">
              Donate Now
              <Heart className="ml-2 h-5 w-5 group-hover:animate-pulse" />
            </Button>
            <Button size="lg" variant="outline" className="btn-outline-hero group">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-delay-2">
            <div className="bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-lg p-6 text-center">
              <MapPin className="h-8 w-8 text-gold mx-auto mb-2" />
              <div className="text-3xl font-heading font-bold text-gold counter">60+</div>
              <div className="text-white text-sm">Cities Covered</div>
            </div>
            <div className="bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-lg p-6 text-center">
              <Users className="h-8 w-8 text-gold mx-auto mb-2" />
              <div className="text-3xl font-heading font-bold text-gold counter">3,000+</div>
              <div className="text-white text-sm">Families Supported</div>
            </div>
            <div className="bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-lg p-6 text-center">
              <Heart className="h-8 w-8 text-gold mx-auto mb-2" />
              <div className="text-3xl font-heading font-bold text-gold counter">100+</div>
              <div className="text-white text-sm">Active Volunteers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;