
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Brain } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden bg-gradient-to-b from-mindease-light/50 to-white">
      <div className="mindease-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -left-10 -top-10 h-20 w-20 bg-mindease-accent rounded-full opacity-30 animate-pulse-soft"></div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight relative z-10 animate-fade-in">
                Your <span className="mindease-gradient-text">Mental Wellness</span> Companion
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              MindEase is an AI-powered mental health chatbot designed to provide support, 
              guidance, and therapeutic conversations whenever you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button className="mindease-button bg-mindease-primary hover:bg-mindease-secondary text-white flex items-center gap-2 group">
                <MessageCircle className="h-5 w-5 group-hover:animate-pulse" />
                <span>Chat Now</span>
              </Button>
              <Button variant="outline" className="mindease-button border-mindease-primary text-mindease-primary hover:bg-mindease-light flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                <span>Learn More</span>
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="flex -space-x-2">
                {['😊', '😌', '🧠'].map((emoji, index) => (
                  <div 
                    key={index}
                    className="h-10 w-10 rounded-full flex items-center justify-center border-2 border-white"
                    style={{
                      backgroundColor: index % 2 === 0 ? '#E5DEFF' : '#D3E4FD',
                      transition: 'all 0.3s ease',
                      transform: `translateY(${Math.sin(index) * 3}px)`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <span className="text-sm">{emoji}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Join <span className="font-bold text-mindease-primary">10,000+</span> people improving their mental wellbeing
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-10 -right-8 h-64 w-64 bg-mindease-light rounded-full blur-3xl opacity-50 animate-pulse-soft"></div>
              <div className="absolute -bottom-10 -left-8 h-64 w-64 bg-mindease-accent rounded-full blur-3xl opacity-50 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-100 z-10 animate-float">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-mindease-primary to-mindease-secondary flex items-center justify-center mr-3">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">MindEase</h3>
                    <p className="text-xs text-gray-500">Your mental wellness companion</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%] transform transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
                    <p className="text-sm">Hello! I'm MindEase. How are you feeling today?</p>
                  </div>
                  <div className="bg-mindease-light rounded-lg p-3 max-w-[80%] ml-auto transform transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
                    <p className="text-sm">I've been feeling anxious about my upcoming presentation.</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[90%] transform transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
                    <p className="text-sm">I understand. Presentations can be stressful. Let's explore some calming techniques to help you prepare and feel more confident.</p>
                  </div>
                </div>
                <div className="mt-4 relative">
                  <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-mindease-primary transition-all duration-300"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-mindease-primary text-white rounded-full p-1.5 hover:bg-mindease-secondary transition-colors duration-300">
                    <MessageCircle className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
