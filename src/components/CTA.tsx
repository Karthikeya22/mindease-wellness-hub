
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-cta-pattern">
      <div className="mindease-container">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Mental Wellness Journey Today</h2>
          <p className="text-lg mb-8 text-white/90">
            Join thousands of users who have found support, guidance, and improved wellbeing with MindEase.
          </p>
          <Button className="mindease-button bg-white text-mindease-primary hover:bg-mindease-light hover:text-mindease-secondary flex items-center gap-2 mx-auto">
            <MessageCircle className="h-5 w-5" />
            Get Started for Free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
