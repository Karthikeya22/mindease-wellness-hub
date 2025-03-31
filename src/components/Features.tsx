
import React from 'react';
import { Brain, MessageCircle, Lock, Clock, Sparkles, BookOpen } from 'lucide-react';

const featureItems = [
  {
    icon: <MessageCircle className="h-8 w-8 text-mindease-primary" />,
    title: "24/7 Supportive Conversations",
    description: "Access compassionate and supportive conversations anytime, anywhere, when you need someone to talk to."
  },
  {
    icon: <Brain className="h-8 w-8 text-mindease-primary" />,
    title: "Personalized Insights",
    description: "Receive personalized mental wellness insights and coping strategies tailored to your unique needs."
  },
  {
    icon: <Lock className="h-8 w-8 text-mindease-primary" />,
    title: "Complete Privacy",
    description: "Your conversations are private and secure. We prioritize confidentiality and data protection."
  },
  {
    icon: <Clock className="h-8 w-8 text-mindease-primary" />,
    title: "Track Your Progress",
    description: "Monitor your mental wellness journey and track improvements over time with helpful insights."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-mindease-primary" />,
    title: "Mindfulness Exercises",
    description: "Access guided meditation, breathing exercises, and mindfulness techniques to reduce stress and anxiety."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-mindease-primary" />,
    title: "Educational Resources",
    description: "Explore a library of mental health resources, articles, and tips to enhance your wellbeing."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-mindease-light/30">
      <div className="mindease-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How MindEase <span className="mindease-gradient-text">Helps You</span></h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover the powerful features designed to support your mental wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureItems.map((feature, index) => (
            <div 
              key={index} 
              className="mindease-card hover:border-mindease-primary hover:border transition-all duration-300"
            >
              <div className="h-14 w-14 rounded-xl bg-mindease-light flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
