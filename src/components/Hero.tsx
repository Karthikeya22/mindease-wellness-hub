
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles, Brain } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      <div className="mindease-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your <span className="mindease-gradient-text">Mental Wellness</span> Companion
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              MindEase is an AI-powered mental health chatbot designed to provide support, 
              guidance, and therapeutic conversations whenever you need it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="mindease-button bg-mindease-primary hover:bg-mindease-secondary text-white flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Chat Now
              </Button>
              <Button variant="outline" className="mindease-button border-mindease-primary text-mindease-primary hover:bg-mindease-light flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="h-10 w-10 rounded-full bg-mindease-light flex items-center justify-center border-2 border-white">
                  <span className="text-sm text-mindease-primary">😊</span>
                </div>
                <div className="h-10 w-10 rounded-full bg-mindease-accent flex items-center justify-center border-2 border-white">
                  <span className="text-sm text-mindease-primary">😌</span>
                </div>
                <div className="h-10 w-10 rounded-full bg-mindease-light flex items-center justify-center border-2 border-white">
                  <span className="text-sm text-mindease-primary">🧠</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Join <span className="font-bold text-mindease-primary">10,000+</span> people improving their mental wellbeing
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-10 -right-8 h-64 w-64 bg-mindease-light rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-10 -left-8 h-64 w-64 bg-mindease-accent rounded-full blur-3xl opacity-50"></div>
              <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-100 z-10 animate-float">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-mindease-primary flex items-center justify-center mr-3">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">MindEase</h3>
                    <p className="text-xs text-gray-500">Your mental wellness companion</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-sm">Hello! I'm MindEase. How are you feeling today?</p>
                  </div>
                  <div className="bg-mindease-light rounded-lg p-3 max-w-[80%] ml-auto">
                    <p className="text-sm">I've been feeling anxious about my upcoming presentation.</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[90%]">
                    <p className="text-sm">I understand. Presentations can be stressful. Let's explore some calming techniques to help you prepare and feel more confident.</p>
                  </div>
                </div>
                <div className="mt-4 relative">
                  <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-mindease-primary"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-mindease-primary text-white rounded-full p-1.5">
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
