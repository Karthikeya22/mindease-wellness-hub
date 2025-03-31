
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-mindease-primary to-mindease-secondary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute h-64 w-64 rounded-full bg-white top-10 left-10 animate-pulse-soft"></div>
        <div className="absolute h-96 w-96 rounded-full bg-white bottom-10 right-10 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute h-32 w-32 rounded-full bg-white bottom-40 left-1/3 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="mindease-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white animate-fade-in">Start Your Mental Wellness Journey Today</h2>
          <p className="text-lg mb-8 text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Join thousands of users who have found support, guidance, and improved wellbeing with MindEase.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button className="mindease-button bg-white text-mindease-primary hover:bg-mindease-light hover:text-mindease-secondary flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Chat Now
            </Button>
            <Button variant="outline" className="mindease-button border-2 border-white text-white hover:bg-white/10 flex items-center gap-2">
              Learn More
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-10 pt-10 border-t border-white/20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-white/80 text-sm">
              "MindEase has changed how I handle my anxiety. It's like having a therapist in my pocket."
            </p>
            <p className="text-white font-medium mt-2">— Sarah K., MindEase User</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
