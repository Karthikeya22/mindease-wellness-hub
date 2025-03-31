
import React from 'react';
import { Brain, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="mindease-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-mindease-primary" />
              <span className="text-xl font-bold mindease-gradient-text">MindEase</span>
            </div>
            <p className="text-gray-600 mb-4">
              Your AI mental wellness companion available 24/7 to support your journey to better mental health.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-mindease-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-mindease-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-mindease-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-mindease-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-mindease-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mindease-primary transition-colors">Team</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mindease-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mindease-primary transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-mindease-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mindease-primary transition-colors">Mental Health Tips</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mindease-primary transition-colors">Crisis Resources</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mindease-primary transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-mindease-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mindease-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mindease-primary transition-colors">Cookies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-mindease-primary transition-colors">Licenses</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} MindEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
