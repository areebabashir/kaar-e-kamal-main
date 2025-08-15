import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Foundation Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/b58881a0-2e5c-4cb4-ae71-824f5a59a734.png" 
                alt="Kaar-e-Kamal Logo" 
                className="h-10 w-auto"
              />
              <h3 className="text-gold font-heading font-bold text-xl">
                Kaar-e-Kamal
              </h3>
            </div>
            <p className="text-sm text-gray-300">
              Empowering communities with dignity across Pakistan through education, healthcare, emergency relief, and community development.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gold hover:text-gold-light cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gold hover:text-gold-light cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gold hover:text-gold-light cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-sm hover:text-gold transition-colors">Our Programs</Link></li>
              <li><Link to="/impact" className="text-sm hover:text-gold transition-colors">Our Impact</Link></li>
              <li><Link to="/stories" className="text-sm hover:text-gold transition-colors">Success Stories</Link></li>
              <li><Link to="/get-involved" className="text-sm hover:text-gold transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-gold font-heading font-semibold text-lg mb-4">Programs</h4>
            <ul className="space-y-2">
              <li className="text-sm">Education Support</li>
              <li className="text-sm">Healthcare Services</li>
              <li className="text-sm">Emergency Relief</li>
              <li className="text-sm">Community Development</li>
              <li className="text-sm">Women Empowerment</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <span className="text-sm">Pakistan - Serving 60+ Cities Nationwide</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-sm">+92-XXX-XXXXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-sm">info@kaarekamal.org</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300 mb-4 md:mb-0">
              © 2024 Kaar-e-Kamal Welfare Foundation. All rights reserved.
            </p>
            <div className="flex items-center text-sm text-gray-300">
              Made with <Heart className="w-4 h-4 text-gold mx-2" /> for communities in Pakistan
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;