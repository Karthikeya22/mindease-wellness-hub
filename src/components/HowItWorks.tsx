
import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your free account in seconds to get started with MindEase."
  },
  {
    number: "02",
    title: "Share Your Feelings",
    description: "Tell MindEase how you're feeling or what's on your mind."
  },
  {
    number: "03",
    title: "Get Personalized Support",
    description: "Receive compassionate responses, coping strategies, and guidance tailored to your needs."
  },
  {
    number: "04",
    title: "Practice & Improve",
    description: "Use MindEase regularly to build mental resilience and track your progress."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="mindease-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It <span className="mindease-gradient-text">Works</span></h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Getting started with MindEase is easy. Here's how you can begin your mental wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mindease-card h-full flex flex-col">
                <span className="text-4xl font-bold mindease-gradient-text mb-4">{step.number}</span>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-mindease-primary" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-4 bg-mindease-light rounded-xl">
            <p className="text-mindease-primary font-medium">
              "MindEase is designed to complement professional mental health care, not replace it."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
