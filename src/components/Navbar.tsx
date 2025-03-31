
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Brain } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="mindease-container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-mindease-primary" />
            <span className="text-xl font-bold mindease-gradient-text">MindEase</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-gray-700 hover:text-mindease-primary transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-mindease-primary transition-colors">How It Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-mindease-primary transition-colors">Testimonials</a>
            <a href="#faq" className="text-gray-700 hover:text-mindease-primary transition-colors">FAQ</a>
            <Button className="bg-mindease-primary hover:bg-mindease-secondary text-white mindease-button">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 space-y-4">
            <a 
              href="#features" 
              className="block text-gray-700 hover:text-mindease-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block text-gray-700 hover:text-mindease-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="block text-gray-700 hover:text-mindease-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="block text-gray-700 hover:text-mindease-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Button 
              className="w-full bg-mindease-primary hover:bg-mindease-secondary text-white mindease-button"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
